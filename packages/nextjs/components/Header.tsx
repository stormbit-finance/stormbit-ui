"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
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
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
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
      <div className="sticky top-0 z-20 justify-between flex-shrink-0 min-h-0 px-0 shadow-md lg:static navbar bg-base-100 shadow-secondary sm:px-2">
        <div className="flex gap-3">
          <Link href="/" passHref className="items-center hidden gap-2 ml-4 mr-6 lg:flex shrink-0">
            <div>
              <span className="text-[#4A5056] text-[20px] font-bold">StormBit</span>
            </div>
          </Link>
          <ul className="hidden gap-2 px-1 lg:flex lg:flex-nowrap menu menu-horizontal">
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
