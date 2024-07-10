import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiDesktopMouse1 } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { TfiBook } from "react-icons/tfi";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

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
    label: "lenders",
    href: "/lenders",
    icon: <LuUsers2 />,
  },
  {
    label: "dashboard",
    href: "/dashboard",
    icon: <CiDesktopMouse1 />,
  },
  {
    label: "docs",
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
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  return (
    <>
      {pathname === "/" ? (
        <div className="flex h-[100px] justify-center absolute top-0 z-40  w-full backdrop-blur-lg transition-colors duration-500 bg-[#f8fafc0f]/5">
          <div className="flex justify-between items-center min-h-0 lg:py-2 lg:px-6 text-white lg:static navbar sm:px-2 max-w-[1920px] w-full p-2">
            <div className="flex gap-3 items-center">
              <Link href="/" passHref className="flex ml-4 mr-6">
                <div>
                  <Image src="/logo.png" alt="logo" width={50} height={50} priority className="lg:w-[80px]" />
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-xs bg-[#FFEB80] px-4 py-1 rounded-[7px] text-black">Beta</span>
                </div>
              </Link>
            </div>
            <div className="flex-grow gap-8 mr-4 navbar-end">
              <button
                className="text-[#C398FF] lg:py-3 lg:px-6 border border-solid border-[#C398FF] rounded-[5px] lg:text-xl py-1 px-2 text-sm"
                onClick={() => router.push("/lenders")}
                type="button"
              >
                Launch app
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[100px] justify-center absolute top-0 z-40  w-full backdrop-blur-lg transition-colors duration-500 bg-[#f8fafc0f]/5">
          <div className="flex justify-between items-center min-h-0 lg:py-2 lg:px-6 text-white lg:static navbar sm:px-2 max-w-[1920px] w-full p-2">
            <div className="flex gap-3 items-center">
              <Link href="/" passHref className="flex ml-4 mr-6">
                <div>
                  <Image src="/logo.png" alt="logo" width={50} height={50} priority className="lg:w-[80px]" />
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-xs bg-[#FFEB80] px-4 py-1 rounded-[7px] text-black">Beta</span>
                </div>
              </Link>
              <ul className={`hidden lg:flex gap-8 px-1 text-xl`}>
                <HeaderMenuLinks />
              </ul>
            </div>
            <div className="flex-grow gap-8 mr-4 navbar-end">
              <RainbowKitCustomConnectButton />
              <FaucetButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
