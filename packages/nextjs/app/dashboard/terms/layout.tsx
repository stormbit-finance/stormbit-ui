"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    // Set the active button based on the current path
    if (pathname === "/dashboard/terms") {
      setActiveButton("Deposited");
    } else if (pathname === "/dashboard/terms/managed") {
      setActiveButton("Managed");
    }
  }, [pathname]);

  const handleButtonClick = (route: string, button: string) => {
    setActiveButton(button);
    router.push(route);
  };

  return (
    <div className="h-full max-w-[1920px] xl:max-w-full w-full flex flex-col px-9">
      <div className="flex text-white pt-[30px] max-h-full max-w-[320px] w-full items-center text-lg">
        <button
          onClick={() => handleButtonClick("/dashboard/terms", "Deposited")}
          className={`px-8 py-4 rounded-l-lg ${
            activeButton === "Deposited" ? "button-gradient" : "bg-[#2F2F2F] border border-[#444C6A]"
          }`}
        >
          Deposited
        </button>
        <button
          onClick={() => handleButtonClick("/dashboard/terms/managed", "Managed")}
          className={`px-8 py-4 rounded-r-lg ${
            activeButton === "Managed" ? "button-gradient" : "bg-[#2F2F2F] border border-[#444C6A]"
          }`}
        >
          Managed
        </button>
      </div>
      <div className="flex flex-col gap-8 h-full text-white">{children}</div>
    </div>
  );
}

export default Layout;
