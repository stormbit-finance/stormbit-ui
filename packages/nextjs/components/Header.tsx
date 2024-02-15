"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import Image from "next/image";

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
  return (
    <>
      <div className="sticky top-0 z-20 justify-between flex-shrink-0 min-h-0 p-6 shadow-md lg:static navbar bg-base-100 sm:px-2">
        <div className="flex gap-3">
          <Link href="/" passHref className="items-center hidden gap-2 ml-4 mr-6 lg:flex shrink-0">
            <div>
              <Image src="/logo.png" alt="logo" width={57} height={47}></Image>
            </div>
          </Link>
          <ul className="hidden gap-8 px-1 text-xl lg:flex lg:flex-nowrap">
            <HeaderMenuLinks />
          </ul>
        </div>
        <div className="flex-grow mr-4 navbar-end">
          <RainbowKitCustomConnectButton />
          <FaucetButton />
        </div>
      </div>
    </>
  );
};
