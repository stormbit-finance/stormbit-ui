import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract, parseEther } from "ethers";

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
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const VOTING_POWER_COOLDOWN = 86400;

  await deploy("MockToken", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // this is for testing purposes
  const devTeamAddress = [
    "0xDe3089d40F3491De794fBb1ECA109fAc36F889d0",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    deployer,
  ];

  const MockToken = await hre.ethers.getContract<Contract>("MockToken", deployer);

  let tx;
  for (let i = 0; i < devTeamAddress.length; i++) {
    tx = await MockToken.mint(devTeamAddress[i], parseEther("1000000"));
    await tx.wait();
  }

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

  // // deploy StormBit Core
  await deploy("StormBitCore", {
    from: deployer,
    args: [deployer, StormBitLendingImplementation.target, StormBitLendingVotesImplementation.target],
    log: true,
    autoMine: true,
  });

  const StormBitCore = await hre.ethers.getContract<Contract>("StormBitCore", deployer);
  await MockToken.approve(StormBitCore.target, parseEther("1000000"));

  await StormBitCore.createPool({
    name: "First Pool",
    creditScore: 0,
    maxAmountOfStakers: 10,
    votingQuorum: 50,
    maxPoolUsage: 100,
    votingPowerCoolDown: VOTING_POWER_COOLDOWN,
    initAmount: parseEther("5000"),
    initToken: MockToken.target,
    supportedAssets: [MockToken.target],
    supportedAgreements: [dSimpleAgreement.address],
  });
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["AllContracts"];
