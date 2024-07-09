import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { AddressQRCodeModal } from "./AddressQRCodeModal";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BiSolidUser } from "react-icons/bi";
import { Address } from "viem";
import { useAutoConnect } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

interface RainbowKitCustomConnectButtonProps {}

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton: React.FC<RainbowKitCustomConnectButtonProps> = ({}) => {
  useAutoConnect();
  const router = useRouter();
  const { targetNetwork } = useTargetNetwork();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;
        useEffect(() => {
          if (connected) {
            router.push("/explorer");
          }
        }, [connected]);
        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="text-[#C398FF] lg:py-3 lg:px-6 border border-solid border-[#C398FF] rounded-[5px] lg:text-xl py-1 px-2 text-sm"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Launch App
                  </button>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return <WrongNetworkDropdown />;
              }
              return (
                <>
                  <div className="px-4 py-2 rounded-[3px]  flex items-center gap-4 bg-[#333333]  text-xl ">
                    <span>{chain.name}</span>
                    <span>{account.displayBalance}</span>
                  </div>
                  <AddressInfoDropdown
                    address={account.address as Address}
                    displayName={account.displayName}
                    ensAvatar={account.ensAvatar}
                    chainName={chain.name}
                    blockExplorerAddressLink={blockExplorerAddressLink}
                  />

                  <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
