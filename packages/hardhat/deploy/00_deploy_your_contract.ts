import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { StormbitAssetManager, StormbitLendingManager, StormbitLoanManager } from "../typechain-types";

const deployStormbitContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying contracts with the account:", deployer);

  // Deploy StormbitRegistry
  const stormbitRegistryDeployment = await deploy("StormbitRegistry", {
    from: deployer,
    args: [deployer],
    log: true,
  });
  const registryAddress = stormbitRegistryDeployment.address;
  console.log("StormbitRegistry deployed to:", registryAddress);

  // Deploy MockTokens
  const mockUsdtDeployment = await deploy("MockToken", {
    from: deployer,
    args: ["USD Tether", "USDT"],
    log: true,
  });
  const mockUsdtAddress = mockUsdtDeployment.address;
  console.log("MockUsdt deployed to:", mockUsdtAddress);

  const mockDaiDeployment = await deploy("MockToken", {
    from: deployer,
    args: ["Dai Stablecoin", "DAI"],
    log: true,
  });
  const mockDaiAddress = mockDaiDeployment.address;
  console.log("MockDai deployed to:", mockDaiAddress);

  const mockUsdcDeployment = await deploy("MockToken", {
    from: deployer,
    args: ["USD Coin", "USDC"],
    log: true,
  });
  const mockUsdcAddress = mockUsdcDeployment.address;
  console.log("MockUsdc deployed to:", mockUsdcAddress);

  // Deploy Stormbit Managers
  const assetManagerDeployment = await deploy("StormbitAssetManager", {
    from: deployer,
    args: [deployer],
    log: true,
  });
  const assetManagerAddress = assetManagerDeployment.address;
  console.log("StormbitAssetManager deployed to:", assetManagerAddress);

  const lendingManagerDeployment = await deploy("StormbitLendingManager", {
    from: deployer,
    args: [deployer],
    log: true,
  });
  const lendingManagerAddress = lendingManagerDeployment.address;
  console.log("StormbitLendingManager deployed to:", lendingManagerAddress);

  const loanManagerDeployment = await deploy("StormbitLoanManager", {
    from: deployer,
    args: [deployer],
    log: true,
  });
  const loanManagerAddress = loanManagerDeployment.address;
  console.log("StormbitLoanManager deployed to:", loanManagerAddress);

  // Initialize Managers
  const assetManager = (await ethers.getContractAt(
    "StormbitAssetManager",
    assetManagerAddress,
  )) as unknown as StormbitAssetManager;
  const lendingManager = (await ethers.getContractAt(
    "StormbitLendingManager",
    lendingManagerAddress,
  )) as unknown as StormbitLendingManager;
  const loanManager = (await ethers.getContractAt(
    "StormbitLoanManager",
    loanManagerAddress,
  )) as unknown as StormbitLoanManager;

  await assetManager.initialize(loanManagerAddress, lendingManagerAddress);
  await lendingManager.initialize(assetManagerAddress, loanManagerAddress);
  await loanManager.initialize(assetManagerAddress, lendingManagerAddress);

  // Add supported tokens to AssetManager
  await assetManager.addToken(mockUsdtAddress);
  await assetManager.addToken(mockDaiAddress);
  await assetManager.addToken(mockUsdcAddress);

  console.log("Deployment and initialization complete.");
};

export default deployStormbitContracts;

deployStormbitContracts.tags = ["Stormbit"];
