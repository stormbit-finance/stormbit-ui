"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import ButtonLayout from "~~/components/ButtonLayout/ButtonLayout";
import useUserAssetBalance from "~~/hooks/gql/useUserAssetBalance";
import useUsername from "~~/hooks/gql/useUsername";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const account = useAccount();
  const { username } = useUsername(account.address);
  const { totalAssetAmount } = useUserAssetBalance(account.address);
  const handleButtonClick = (route: string) => {
    router.push(`/dashboard/${route}`);
  };

  return (
    <div className="h-full pt-[100px]  flex justify-center ">
      <div className="h-full max-w-[1920px] xl:max-w-full w-full flex ">
        <div className="min-h-screen max-h-full flex flex-col gap-[14px] text-white pt-[30px]  max-w-[320px] w-full  text-2xl bg-[#2D2D2D]">
          <div>
            {username && (
              <div className="px-10 flex flex-col gap-4 my-12">
                <div className="flex flex-row gap-6">
                  <Image width={15} height={15} className="" src="/profile.svg" alt="profile icon" />

                  <span className="text-xl">{username}</span>
                </div>
                <span className="text-[#AD7AF3] font-bold">
                  ${Number(formatEther(totalAssetAmount)).toFixed(2) || "0.00"}
                </span>
                <span className="text-[#C8C8C8] text-sm">Net Worth</span>
              </div>
            )}

            {!username && (
              <div className="flex py-20 w-full justify-center">
                <button
                  className="text-sm cursor-pointer border border-[#D0C8FF] rounded-[2px] text-[#D0C8FF] px-2 py-2"
                  onClick={() => router.push("/register")}
                >
                  Please register
                </button>
              </div>
            )}
          </div>
          <ButtonLayout active={pathname === "/dashboard"} onClick={() => handleButtonClick("/")}>
            Dashboard
          </ButtonLayout>
          <ButtonLayout active={pathname === "/dashboard/reclaim"} onClick={() => handleButtonClick("reclaim")}>
            Reclaim ®
          </ButtonLayout>
          <ButtonLayout active={pathname === "/dashboard/terms"} onClick={() => handleButtonClick("terms")}>
            Terms
          </ButtonLayout>
          <ButtonLayout active={pathname === "/dashboard/loans"} onClick={() => handleButtonClick("loans")}>
            Loans
          </ButtonLayout>
        </div>
        <div className="min-h-screen max-h-full flex flex-col gap-8 bg-[#252525] w-full text-white">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
