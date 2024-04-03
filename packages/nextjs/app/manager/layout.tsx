"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi";
import { TbInbox } from "react-icons/tb";
import ButtonLayout from "~~/components/ButtonLayout/ButtonLayout";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = (route: string) => {
    router.push(`/manager/${route}`);
  };

  return (
    <div className="flex justify-center ">
      <div className="max-w-[1920px] w-full flex-col ">
        <div className="flex gap-8 my-16">
          <Image src="/profile.png" alt="profile" width={166} height={166}></Image>
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white">EduFunds Pool</h1>
            <div className="text-[#374B6D] flex items-center gap-4">
              <CiCalendar />
              <span> Created November 2023</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-[14px] text-white py-[30px] h-fit px-[20px] max-w-[420px] w-full items-center text-2xl bg-[#0e0f1e]">
            <ButtonLayout active={pathname === "/manager"} onClick={() => handleButtonClick("/")}>
              <HiOutlineHome /> Home
            </ButtonLayout>
            <ButtonLayout
              active={pathname === "/manager/transactions"}
              onClick={() => handleButtonClick("transactions")}
            >
              <Image src="/holding.svg" alt="icon" width={24} height={24}></Image> Borrow & Deposit
            </ButtonLayout>
            <ButtonLayout active={pathname === "/manager/loan"} onClick={() => handleButtonClick("loan")}>
              <TbInbox /> Loan Request
            </ButtonLayout>
          </div>
          <div className="flex flex-col gap-8 bg-[#070817] w-full text-white">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
