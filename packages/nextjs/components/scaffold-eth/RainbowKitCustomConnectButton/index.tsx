import { useRouter } from "next/navigation";
import { AddressInfoDropdown } from "./AddressInfoDropdown";
import { AddressQRCodeModal } from "./AddressQRCodeModal";
import { WrongNetworkDropdown } from "./WrongNetworkDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BiSolidUser } from "react-icons/bi";
import { Address } from "viem";
import useUsername from "~~/hooks/gql/useUsername";
import { useAutoConnect } from "~~/hooks/scaffold-eth";
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
  const router = useRouter();
  const { targetNetwork } = useTargetNetwork();

  const goRegister = () => {
    router.push("/register");
  };
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;
        const { username } = useUsername(account?.address);
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
                  <AddressInfoDropdown
                    address={account.address as Address}
                    displayName={account.displayName}
                    ensAvatar={account.ensAvatar}
                    chainName={chain.name}
                    blockExplorerAddressLink={blockExplorerAddressLink}
                  />
                  <div className="bg-gradient-to-r from-[#A864FF] text-xl to-[#E69FFF] flex items-center rounded-[5px] btn-sm px-6 py-2 gap-0 !h-auto">
                    {username ? (
                      <div className="flex flex-row gap-4 items-center">
                        <BiSolidUser />
                        <div className="">{username}</div>
                      </div>
                    ) : (
                      <div className="cursor-pointer" onClick={goRegister}>
                        Join Stormbit
                      </div>
                    )}
                  </div>
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
