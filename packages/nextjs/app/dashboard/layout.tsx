"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import ButtonLayout from "~~/components/ButtonLayout/ButtonLayout";
import useUsername from "~~/hooks/gql/useUsername";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const account = useAccount();
  const { username } = useUsername(account.address);
  console.log(username);

  const handleButtonClick = (route: string) => {
    router.push(`/dashboard/${route}`);
  };

  return (
    <div className="h-full pt-[100px]  flex justify-center ">
      <div className="h-full max-w-[1920px] xl:max-w-full w-full flex ">
        <div className="min-h-screen max-h-full flex flex-col gap-[14px] text-white pt-[30px]  max-w-[320px] w-full  text-2xl bg-[#2D2D2D]">
          <div>
            {username && (
              <div className="px-10  py-10   flex flex-row gap-6">
                <Image width={15} height={15} className="" src="/profile.svg" alt="profile icon" />
                <span className="text-xl">{username}</span>
              </div>
            )}

            {(!username || username == "noname") && (
              <div className="px-10 text-[#D0C8FF] flex py-10 w-full flex-row  gap-2 text-xl cursor-pointer ">
                <div className="" onClick={() => router.push("/register")}>
                  Please register
                </div>
                <ArrowLeftOnRectangleIcon className="w-6 h-6 ml-2 sm:ml-0" />
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
