"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineGlobal } from "react-icons/ai";
import ButtonLayout from "~~/components/ButtonLayout/ButtonLayout";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = (route: string) => {
    router.push(`/dashboard/${route}`);
  };

  return (
    <div className="flex justify-center ">
      <div className="h-full  max-w-[1920px]  w-full flex ">
        <div className="flex flex-col gap-[14px] text-white pt-[30px] max-h-full px-[20px] max-w-[420px] w-full items-center text-2xl bg-[#0e0f1e]">
          <ButtonLayout active={pathname === "/dashboard"} onClick={() => handleButtonClick("/")}>
            <AiOutlineGlobal /> Explorer
          </ButtonLayout>
          <ButtonLayout active={pathname === "/dashboard/reclaim"} onClick={() => handleButtonClick("reclaim")}>
            <Image width={20} height={20} className="cursor-pointer" src="/reclaim-icon.svg" alt="" />
            Reclaim
          </ButtonLayout>
        </div>
        <div className="flex flex-col gap-8 bg-[#070817] w-full text-white">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
