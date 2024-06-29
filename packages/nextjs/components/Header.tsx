import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiDesktopMouse1} from "react-icons/ci";
import { TfiBook } from "react-icons/tfi";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { TbWorld } from "react-icons/tb";

// import { parseEther } from "viem";
// import { useAccount } from "wagmi";
// import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
// import useFormattedBalance from "~~/hooks/scaffold-eth/useFormattedBalance";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "explorer",
    href: "/explorer",
    icon: <TbWorld />,
  },
  {
    label: "dashboard",
    href: "/dashboard",
    icon: <CiDesktopMouse1 />,
  },
  {
    label: "ecosystem",
    href: "https://stormbit.gitbook.io/stormbit",
    icon: <TfiBook />,
    external: true,
  },
  
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon, external }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            {external ? (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-[5px] ${isActive ? "text-[#A24DFF]" : "text-[#ffffff]"}`}
              >
                {icon} {label}
              </Link>
            ) : (
              <Link
                href={href}
                className={`flex items-center gap-[5px] ${isActive ? "text-[#A24DFF]" : "text-[#ffffff]"}`}
              >
                {icon} {label}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  // const account = useAccount();

  // const { writeAsync: mintDAI } = useScaffoldContractWrite({
  //   contractName: "tDAI",
  //   functionName: "mint",
  //   args: [account.address, parseEther("1000")],
  // });

  // const { writeAsync: mintETH } = useScaffoldContractWrite({
  //   contractName: "tETH",
  //   functionName: "mint",
  //   args: [account.address, parseEther("1000")],
  // });

  // const { writeAsync: mintBTC } = useScaffoldContractWrite({
  //   contractName: "tBTC",
  //   functionName: "mint",
  //   args: [account.address, parseEther("1000")],
  // });

  // const balanceDai = useFormattedBalance("tDAI", account);
  // const balanceBtc = useFormattedBalance("tBTC", account);
  // const balanceEth = useFormattedBalance("tETH", account);

  // console.log(balanceDai,balanceBtc,balanceEth)

  return (
    <>
      <div className="z-10 w-full shadow-md bg-header">
        <div className="flex items-center justify-center">
          <div className="flex justify-between items-center min-h-0 lg:p-6 text-white lg:static navbar sm:px-2 max-w-[1920px] w-full p-2">
            <div className="flex gap-3 items-center">
              <Link href="/" passHref className="flex ml-4 mr-6">
                <div>
                  <Image src="/logo.png" alt="logo" width={50} height={50} priority className="lg:w-[80px]" />
                </div>
                <div className="flex justify-center items-center">
                 <span  className="text-xs bg-[#FFEB80] px-4 py-1 rounded-[7px] text-black">
                 Beta
                  </span>
                </div>
              </Link>
              <ul className="hidden lg:flex gap-8 px-1 text-xl">
                <HeaderMenuLinks />
              </ul>
            </div>
            <div className="flex-grow gap-8 mr-4 navbar-end">
              <RainbowKitCustomConnectButton />
              <FaucetButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
