import { ParticleNetwork } from "@particle-network/auth";
import { particleWallet } from "@particle-network/rainbowkit-ext";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet, // rainbowWallet,
  // safeWallet,
  // walletConnectWallet,
  // braveWallet,
  // coinbaseWallet,
  // ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import * as chains from "viem/chains";
import { configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import scaffoldConfig from "~~/scaffold.config";
// import { burnerWalletConfig } from "~~/services/web3/wagmi-burner/burnerWalletConfig";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const targetNetworks = getTargetNetworks();
// const { onlyLocalBurnerWallet } = scaffoldConfig;

// We always want to have mainnet enabled (ENS resolution, ETH price, etc). But only once.
const enabledChains = targetNetworks.find(network => network.id === 1)
  ? targetNetworks
  : [...targetNetworks, chains.mainnet];

/**
 * Chains for the app
 */
export const appChains = configureChains(
  enabledChains,
  [
    alchemyProvider({
      apiKey: scaffoldConfig.alchemyApiKey,
    }),
    publicProvider(),
  ],
  {
    // We might not need this checkout https://github.com/scaffold-eth/scaffold-eth-2/pull/45#discussion_r1024496359, will test and remove this before merging
    stallTimeout: 3_000,
    // Sets pollingInterval if using chains other than local hardhat chain
    ...(targetNetworks.find(network => network.id !== chains.hardhat.id)
      ? {
          pollingInterval: scaffoldConfig.pollingInterval,
        }
      : {}),
  },
);
// replace config 'xxx'
new ParticleNetwork({
  appId: "147f57c2-a737-4328-a9fc-25033ff658c8",
  clientKey: "c7RkqHEleufxJf4kjFrNQHAgkQcQYX709SV8VWUI",
  projectId: "0c94fbb2-0c2e-45cb-af22-af2fe814b3c1",
  wallet: {
    displayWalletEntry: true,
  },
});
const particleWalletCustom = particleWallet({ chains: appChains.chains });
const particleGoogle = particleWallet({ chains: appChains.chains, authType: "google" });
const particleFacebook = particleWallet({ chains: appChains.chains, authType: "facebook" });
const particleApple = particleWallet({ chains: appChains.chains, authType: "apple" });

const walletsOptions = { chains: appChains.chains, projectId: scaffoldConfig.walletConnectProjectId };

const wallets = [
  metaMaskWallet({ ...walletsOptions, shimDisconnect: true }),
  particleWalletCustom,
  particleGoogle,
  particleFacebook,
  particleApple,
  // walletConnectWallet(walletsOptions),
  // ledgerWallet(walletsOptions),
  // braveWallet(walletsOptions),
  // coinbaseWallet({ ...walletsOptions, appName: "scaffold-eth-2" }),
  // rainbowWallet(walletsOptions),
  // ...(!targetNetworks.some(network => network.id !== chains.hardhat.id) || !onlyLocalBurnerWallet
  //   ? [
  //       burnerWalletConfig({
  //         chains: appChains.chains.filter(chain => targetNetworks.map(({ id }) => id).includes(chain.id)),
  //       }),
  //     ]
  //   : []),
  // safeWallet({ ...walletsOptions }),
];

/**
 * wagmi connectors for the wagmi context
 */
export const wagmiConnectors = connectorsForWallets([
  {
    groupName: "Supported Wallets",
    wallets,
  },
]);
