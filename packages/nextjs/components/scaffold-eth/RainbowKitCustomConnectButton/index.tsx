import { Balance } from "../Balance";
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { AddressQRCodeModal } from "./AddressQRCodeModal";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address } from "viem";
import { useAutoConnect, useNetworkColor } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

interface RainbowKitCustomConnectButtonProps {
  onConnectSuccess?: () => void;
}

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton: React.FC<RainbowKitCustomConnectButtonProps> = ({ onConnectSuccess }) => {
  useAutoConnect();
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="text-[#ffffff] lg:py-3 lg:px-6 border border-solid border-[#ffffff] rounded-[37px] lg:text-xl py-1 px-2 text-sm"
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

              if (onConnectSuccess) {
                onConnectSuccess();
              }

              return (
                <>
                  <div className="flex flex-col items-center mr-1">
                    <Balance address={account.address as Address} className="h-auto min-h-0 text-xl" />
                    <span className="text-xl" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div>
                  <AddressInfoDropdown
                    address={account.address as Address}
                    displayName={account.displayName}
                    ensAvatar={account.ensAvatar}
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
