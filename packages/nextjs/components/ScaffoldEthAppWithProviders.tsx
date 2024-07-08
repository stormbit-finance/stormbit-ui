"use client";

import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { Space_Grotesk } from "@next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { getGraphClient } from "~~/utils/gql";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <>
     <Toaster />
      <div className="h-min-screen flex flex-col w-full">
        <Header />
        <main className={` h-full flex-1 ${spaceGrotesk.className}`}>{children}</main>
      </div>
     
    </>
  );
};

const queryClient = new QueryClient();
export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const client = getGraphClient(appChains.chains[0].id);
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <WagmiConfig config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <ProgressBar />
            <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
              <ScaffoldEthApp>{children}</ScaffoldEthApp>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiConfig>
      </ApolloProvider>
    </NextUIProvider>
  );
};
