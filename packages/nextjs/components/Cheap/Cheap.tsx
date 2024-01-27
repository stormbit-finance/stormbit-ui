import { useState } from "react";
import Image from "next/image";

function Cheap() {
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
        return <div>do</div>;
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

  return (
    <>
      <div>
        <div className="flex gap-3 my-8">
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
