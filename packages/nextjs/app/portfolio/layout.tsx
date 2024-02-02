"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("My loans");

  const handleButtonClick = (buttonText: string, route: string) => {
    setActiveButton(buttonText);
    router.push(`/portfolio/${route}`);
  };

  return (
    <div>
      <div className="flex flex-col gap-6 rounded-[5px] w-[1800px] h-[700px] bg-white p-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image src="/home.png" alt="home" width={24} height={24}></Image>
            </div>
            <span className="text-2xl text-[#4A5056] font-bold">/Portfolio</span>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <button
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "My loans" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
              onClick={() => handleButtonClick("My loans", "myloans")}
            >
              My loans
            </button>
            <button
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "My pools" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
              onClick={() => handleButtonClick("My pools", "mypools")}
            >
              My pools
            </button>
            <button
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "Profile" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
              onClick={() => handleButtonClick("Profile", "profile")}
            >
              Profile
            </button>
          </div>
          <div className="flex flex-col gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
