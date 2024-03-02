"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Pools",
    href: "/markets",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link href={href} passHref className={`text-xl ${isActive ? "bg-letter" : "text-white text-xl"} `}>
              <span>{label}</span>
            </Link>
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
  const account = useAccount();

  const { writeAsync: mint } = useScaffoldContractWrite({
    contractName: "MockToken",
    functionName: "mint",
    args: [account.address, parseEther("1000")],
  });

  const { data: balance } = useScaffoldContractRead({
    contractName: "MockToken",
    functionName: "balanceOf",
    args: [account.address],
    watch: true,
  });

  const balanceDai = balance !== undefined ? formatEther(balance) : "0";

  return (
    <>
      <div className="sticky top-0 z-20 justify-between flex-shrink-0 min-h-0 p-6 bg-transparent shadow-md lg:static background-svg navbar sm:px-2 ">
        <div className="flex gap-3">
          <Link href="/" passHref className="items-center hidden gap-2 ml-4 mr-6 lg:flex shrink-0">
            <div>
              <Image src="/logo.png" alt="logo" width={142} height={65} priority></Image>
            </div>
          </Link>
          <ul className="hidden gap-8 px-1 text-xl lg:flex lg:flex-nowrap">
            <HeaderMenuLinks />
          </ul>
        </div>
        <div className="flex-grow mr-4 navbar-end gap-7">
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#ffffff]">$ZBU:</span>
              <span className="text-white"> {parseFloat(balanceDai).toFixed(3)}</span>
            </div>
            <button
              className="border border-white border-solid min-w-[70px] w-full rounded-[13px] py-1 px-4 text-white"
              onClick={() => {
                mint();
              }}
            >
              Mint
            </button>
          </div>
          <RainbowKitCustomConnectButton />
          <FaucetButton />
        </div>
      </div>
    </>
  );
};
