"use client";

import { usePathname, useRouter } from "next/navigation";
import { GrAnalytics } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { TbInbox } from "react-icons/tb";
import ButtonLayout from "~~/components/ButtonLayout/ButtonLayout";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = (route: string) => {
    router.push(`/portfolio/${route}`);
  };

  return (
    <div className="flex justify-center ">
      <div className="max-w-[1920px] w-full flex ">
        <div className="flex flex-col gap-[14px] text-white pt-[30px] h-screen max-h-143px px-[20px] max-w-[420px] w-full items-center text-2xl bg-[#0e0f1e]">
          <ButtonLayout active={pathname === "/portfolio"} onClick={() => handleButtonClick("/")}>
            <HiOutlineHome /> Home
          </ButtonLayout>
          <ButtonLayout active={pathname === "/portfolio/inbox"} onClick={() => handleButtonClick("inbox")}>
            <TbInbox /> Inbox
          </ButtonLayout>
          <ButtonLayout active={pathname === "/portfolio/analytics"} onClick={() => handleButtonClick("analytics")}>
            <GrAnalytics /> Analytics
          </ButtonLayout>
        </div>
        <div className="flex flex-col gap-8 bg-[#070817] w-full text-white">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
