"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formatEther, parseEther } from "viem";
import { PublicClient, useAccount } from "wagmi";
import { GetAccountResult } from "wagmi/dist/actions";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Markets",
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
            <Link href={href} passHref className={`${isActive ? "bg-letter" : "text-[#4A5056]"} `}>
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

  const { writeAsync: mintDAI } = useScaffoldContractWrite({
    contractName: "tDAI",
    functionName: "mint",
    args: [account.address, parseEther("1000")],
  });

  const { writeAsync: mintETH } = useScaffoldContractWrite({
    contractName: "tETH",
    functionName: "mint",
    args: [account.address, parseEther("1000")],
  });

  const { writeAsync: mintBTC } = useScaffoldContractWrite({
    contractName: "tBTC",
    functionName: "mint",
    args: [account.address, parseEther("1000")],
  });

  // const { data: balanceDAI } = useScaffoldContractRead({
  //   contractName: "tDAI",
  //   functionName: "balanceOf",
  //   args: [account.address],
  //   watch: true,
  // });

  // const { data: balanceETH } = useScaffoldContractRead({
  //   contractName: "tETH",
  //   functionName: "balanceOf",
  //   args: [account.address],
  //   watch: true,
  // });

  // const { data: balanceBTC } = useScaffoldContractRead({
  //   contractName: "tBTC",
  //   functionName: "balanceOf",
  //   args: [account.address],
  //   watch: true,
  // });

  // const balanceDai = balanceDAI !== undefined ? formatEther(balanceDAI) : "Cargando...";
  // const balanceBtc = balanceBTC !== undefined ? formatEther(balanceBTC) : "Cargando...";
  // const balanceEth = balanceETH !== undefined ? formatEther(balanceETH) : "Cargando...";

  const getFormattedBalance = (contractName: string, account: GetAccountResult<PublicClient>) => {
    const { data: balanceData } = useScaffoldContractRead({
      contractName,
      functionName: "balanceOf",
      args: [account.address],
      watch: true,
    });

    return balanceData !== undefined ? formatEther(balanceData) : "Cargando...";
  };

  const balanceDai = getFormattedBalance("tDAI", account);
  const balanceBtc = getFormattedBalance("tBTC", account);
  const balanceEth = getFormattedBalance("tETH", account);

  return (
    <>
      <div className="sticky top-0 z-20 justify-between flex-shrink-0 min-h-0 p-6 shadow-md lg:static navbar bg-base-100 sm:px-2">
        <div className="flex gap-3">
          <Link href="/" passHref className="items-center hidden gap-2 ml-4 mr-6 lg:flex shrink-0">
            <div>
              <Image src="/logo.png" alt="logo" width={57} height={47} className="w-auto h-auto" priority></Image>
            </div>
          </Link>
          <ul className="hidden gap-8 px-1 text-xl lg:flex lg:flex-nowrap">
            <HeaderMenuLinks />
          </ul>
        </div>
        <div className="">
          <button
            className="border border-red-300 border-solid"
            onClick={() => {
              mintDAI();
            }}
          >
            Mint DAI
          </button>
          <button
            className="border border-red-300 border-solid"
            onClick={() => {
              mintETH();
            }}
          >
            Mint ETH
          </button>
          <button
            className="border border-red-300 border-solid"
            onClick={() => {
              mintBTC();
            }}
          >
            Mint BTC
          </button>
          <span>Balance DAI: </span>
          <span>{balanceDai}</span>
          <span>Balance ETH: </span>
          <span>{balanceEth}</span>
          <span>Balance BTC: </span>
          <span>{balanceBtc}</span>
        </div>
        <div className="flex-grow mr-4 navbar-end">
          <RainbowKitCustomConnectButton />
          <FaucetButton />
        </div>
      </div>
    </>
  );
};
