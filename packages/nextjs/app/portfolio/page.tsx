"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import Cheap from "~~/components/Cheap/Cheap";
import MyIons from "~~/components/MyLoans/MyIons";
import MyPools from "~~/components/MyPools/MyPools";
import Profile from "~~/components/Profile/Profile";

const Portfolio: NextPage = () => {
  const [activeButton, setActiveButton] = useState<string>("My loans");
  const [showMyPools, setShowMyPools] = useState(true);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
    setShowMyPools(buttonText !== "My pools");
  };

  const renderContent = () => {
    switch (activeButton) {
      case "My loans":
        return (
          <div className="flex flex-col gap-8">
            <MyIons></MyIons>
          </div>
        );
      case "My pools":
        return <div className="flex flex-col gap-8">{showMyPools ? <MyPools /> : <Cheap />}</div>;
      case "Profile":
        return (
          <div className="flex flex-col gap-8">
            <Profile></Profile>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 rounded-[5px] h-[45rem] bg-white container-market p-10">
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
              onClick={() => handleButtonClick("My loans")}
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "My loans" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
            >
              My loans
            </button>
            <button
              onClick={() => handleButtonClick("My pools")}
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "My pools" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
            >
              My pools
            </button>
            <button
              onClick={() => handleButtonClick("Profile")}
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "Profile" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
            >
              Profile
            </button>
          </div>
          <div className="flex flex-col gap-8">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
