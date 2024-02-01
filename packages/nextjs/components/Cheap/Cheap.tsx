"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";

function Cheap() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-xl text-[#4A5056]">Summary</h4>
              <div className="flex gap-4 text-[#17344F]">
                <div className="border border-solid border-[#EAEBEF] flex flex-col p-4 w-[260px]">
                  <span>Available liquidity</span>
                  <span className="font-bold">$23.08M</span>
                </div>
                <div className="border border-solid border-[#EAEBEF] flex flex-col p-4 w-[260px]">
                  <span>Total Supply</span>
                  <span className="font-bold">$23.08M</span>
                </div>
                <div className="border border-solid border-[#EAEBEF] flex flex-col p-4 w-[260px]">
                  <span>Total borrowed</span>
                  <span className="font-bold">$23.08M</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between m-8">
              <h4 className="text-xl font-bold text-[#4A5056]">Top Voter</h4>
              <button className="border border-solid border-[#4A5056] w-[173px] rounded-[7px]">Delegate</button>
            </div>
            <div className="flex justify-between border border-solid border-[#EAEBEF] py-4 px-12">
              <div className="flex items-center gap-4">
                <span>1</span>
                <Image src="/icon.png" alt="icon" width={42} height={42} className="rounded-full"></Image>
                <span>012314af129bc01293810238172</span>
              </div>
              <button className="bg-[#F1F3F4] rounded-[7px] px-4">Vote</button>
            </div>
            <div className="flex justify-between border border-solid border-[#EAEBEF] py-4 px-12">
              <div className="flex items-center gap-4">
                <span>1</span>
                <Image src="/icon1.png" alt="icon" width={42} height={42} className="rounded-full"></Image>
                <span>012314af129bc01293810238172</span>
              </div>
              <button className="bg-[#F1F3F4] rounded-[7px] px-4">Vote</button>
            </div>
          </div>
        );
      case "Exit Pool":
        return (
          <div className="flex gap-16">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 w-[760px]">
                <div className="flex items-center justify-between">
                  <span>Pool Amount</span>
                  <span className="text-[#865AEF] text-xs">Max</span>
                </div>
                <div className="flex justify-between border border-solid border-[#EAEBEF] p-4 rounded-[5px]">
                  <input
                    type="text"
                    className="border-none w-[650px] focus:outline-none focus:border-none"
                    placeholder="0.01"
                  ></input>
                  <div className="flex gap-2">
                    <Image src="/ether.png" alt="ether" width={17} height={17}></Image>
                    <span>ETH</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[760px]">
                <div className="flex items-center justify-between">
                  <span>Estimated Output</span>
                </div>
                <div className="flex justify-between border border-solid border-[#EAEBEF] p-4 rounded-[5px]">
                  <input
                    type="text"
                    className="border-none w-[650px] focus:outline-none focus:border-none"
                    placeholder="0.01"
                  ></input>
                  <div className="flex gap-2">
                    <Image src="/ether.png" alt="ether" width={17} height={17}></Image>
                    <span>ETH</span>
                  </div>
                </div>
              </div>
              <Button size="large">Exit Pool</Button>
            </div>
            <div className="bg-[#F3F7F9] rounded-[5px] p-6 w-[600px] h-[160px] flex flex-col gap-5">
              <span className="font-bold text-[#17344F]">Transaction information</span>
              <div className="flex justify-between">
                <span>Exchange Rate</span>
                <span>1 ETH = 0.05 BTC</span>
              </div>
              <div className="flex justify-between">
                <span>Accumulate Interest</span>
                <span>0.03 %</span>
              </div>
            </div>
          </div>
        );
      case "Loan Applicant List":
        return (
          <div className="w-[1350px] flex flex-col">
            <div className="flex gap-20 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
              <span className="w-[160px] text-center">Address</span>
              <span className="w-[160px] text-center">Loan Amount</span>
              <span className="w-[160px] text-center">Status</span>
              <span className="w-[160px] text-center">Remarks</span>
              <span className="w-[160px] text-center"></span>
            </div>
            <div className="flex gap-20 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
              <p className="w-[160px] text-center">0x123...23123</p>
              <p className="w-[160px] text-center">10.01 ETH</p>
              <p className="w-[160px] text-center text-[#FFA876]">Pending</p>
              <p className="w-[160px] text-center">Remaining 3/10 voters</p>
              <div className="flex gap-4">
                <button className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10">Reject</button>
                <button className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10">Approve</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div>
        <div className="flex gap-3 my-8 " onClick={handleGoBack} style={{ cursor: "pointer" }}>
          <Image src="/arrow-left.png" alt="arrow" width={20} height={16}></Image>
          <span>Go back</span>
        </div>
        <h1 className="text-[#17344F] text-4xl font-bold">Cheap Local Lending</h1>
        <div className="text-xl flex gap-4 border-b-2 border-[#F1F3F4] w-[1420px] my-8">
          <span
            className={`p-2 cursor-pointer ${activeTab === "Overview" ? "border-b-2 border-[#4A5056]" : ""}`}
            onClick={() => setActiveTab("Overview")}
          >
            Overview
          </span>
          <span
            className={`p-2 cursor-pointer ${activeTab === "Exit Pool" ? "border-b-2 border-[#4A5056]" : ""}`}
            onClick={() => setActiveTab("Exit Pool")}
          >
            Exit Pool
          </span>
          <span
            className={`p-2 cursor-pointer ${activeTab === "Loan Applicant List" ? "border-b-2 border-[#4A5056]" : ""}`}
            onClick={() => setActiveTab("Loan Applicant List")}
          >
            Loan Applicant List
          </span>
        </div>
        <div>{renderContent()}</div>
      </div>
    </>
  );
}

export default Cheap;
