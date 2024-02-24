import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Address, DeployFunction } from "hardhat-deploy/types";
import { AbiCoder, Contract, parseEther } from "ethers";
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { network } from "hardhat";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer, lender, borrower } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const VOTING_POWER_COOLDOWN = 1;

  await deploy("tDAI", {
    from: deployer,
    contract: "MockToken",
    args: [],
    log: true,
    autoMine: true,
  });

  await deploy("tBTC", {
    from: deployer,
    contract: "MockToken",
    args: [],
    log: true,
    autoMine: true,
  });

  await deploy("tETH", {
    from: deployer,
    contract: "MockToken",
    args: [],
    log: true,
    autoMine: true,
  });

  // this is for testing purposes
  const devTeamAddress = [deployer, lender, borrower];
  let MockToken = await hre.ethers.getContract<Contract>("tDAI", deployer);

  console.log("minting tokens to devTeam adddresses : ", devTeamAddress);
  let tx;
  for (let i = 0; i < devTeamAddress.length; i++) {
    tx = await MockToken.mint(devTeamAddress[i], parseEther("1000000"));
    await tx.wait();
  }

  console.log("tokens minted");

  const dSimpleAgreement = await deploy("SimpleAgreement", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // deploy StormBit lending implementation
  await deploy("StormBitLending", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
  const StormBitLendingImplementation = await hre.ethers.getContract<Contract>("StormBitLending", deployer);

  await deploy("StormBitLendingVotes", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
  const StormBitLendingVotesImplementation = await hre.ethers.getContract<Contract>("StormBitLendingVotes", deployer);

  // deploy StormBit Core
  await deploy("StormBitCore", {
    from: deployer,
    args: [deployer, StormBitLendingImplementation.target, StormBitLendingVotesImplementation.target],
    log: true,
    autoMine: true,
  });

  await deploy("StormBitCore", {
    from: deployer,
    args: [deployer, StormBitLendingImplementation.target, StormBitLendingVotesImplementation.target],
    log: true,
    autoMine: true,
  });

  const StormBitCore = await hre.ethers.getContract<Contract>("StormBitCore", deployer);
  await MockToken.approve(StormBitCore.target, parseEther("5000"));
  tx = await StormBitCore.createPool({
    name: "Cheap Lending Q3 Labs Pool",
    creditScore: 0,
    maxAmountOfStakers: 10,
    votingQuorum: 75,
    maxPoolUsage: 100,
    votingPowerCoolDown: VOTING_POWER_COOLDOWN,
    initAmount: parseEther("5000"),
    initToken: MockToken.target,
    supportedAssets: [MockToken.target],
    supportedAgreements: [dSimpleAgreement.address],
  });
  const receipt = await tx.wait();
  const logs = receipt.logs;
  const poolAddr = `0x${logs[logs.length - 1].topics[1].slice(26)}`;
  console.log("created pool at : ", poolAddr);

  console.log("Created pool");

  // wait for one block to be mined
  console.log("waiting for new block");
  let block = await hre.ethers.provider.getBlock("latest");
  let newBlock = block;
  while (block?.number == newBlock?.number) {
    await sleep(1000);
    newBlock = await hre.ethers.provider.getBlock("latest");
  }
  console.log("new block mined");
  // a user supplies account
  let lendingPool = await hre.ethers.getContractAtWithSignerAddress<Contract>(
    "StormBitLending",
    poolAddr as Address,
    lender,
  );

  MockToken = await hre.ethers.getContract<Contract>("tDAI", lender);
  await MockToken.approve(lendingPool.target, parseEther("1000"));
  await lendingPool.stake(MockToken.target, parseEther("1000"));
  console.log("Lender staked on pool");

  lendingPool = await hre.ethers.getContractAtWithSignerAddress<Contract>(
    "StormBitLending",
    poolAddr as Address,
    borrower,
  );

  const abiCoder = AbiCoder.defaultAbiCoder();

  // // get block timestamp
  block = await hre.ethers.provider.getBlock("latest");
  const thirtydaysInSeconds = 30 * 24 * 60 * 60;
  const sixtydaysInSeconds = 60 * 24 * 60 * 60;

  const amounts = [parseEther("550"), parseEther("550")];
  const times = [block!.timestamp + thirtydaysInSeconds, block!.timestamp + sixtydaysInSeconds];

  await lendingPool.requestLoan({
    amount: parseEther("1000"),
    token: MockToken.target,
    agreement: dSimpleAgreement.address,
    agreementCalldata: abiCoder.encode(
      ["uint256", "address", "address", "uint256[]", "uint256[]"],
      [parseEther("1000"), borrower, MockToken.target, amounts, times],
    ),
  });

  console.log("Loan requested");

  console.log("waiting for new block");
  block = await hre.ethers.provider.getBlock("latest");
  newBlock = block;
  while (block?.number == newBlock?.number) {
    await sleep(2000);
    newBlock = await hre.ethers.provider.getBlock("latest");
  }
  console.log("new block mined");

  if (network.name === "localhost") {
    await time.increase(VOTING_POWER_COOLDOWN + 2);

    const votingPowerDeployer = lendingPool.getVotingPower(deployer);
    const votingPowerLender = lendingPool.getVotingPower(lender);

    console.log("Voting power deployer", (await votingPowerDeployer).toString());
    console.log("Voting power lender", (await votingPowerLender).toString());
  } else {
    const votingPowerDeployer = lendingPool.getVotingPower(deployer);
    const votingPowerLender = lendingPool.getVotingPower(lender);

    console.log("Voting power deployer", (await votingPowerDeployer).toString());
    console.log("Voting power lender", (await votingPowerLender).toString());
  }
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["AllContracts"];
