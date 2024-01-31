"use client";

import Image from "next/image";
import Strategy from "~~/components/Strategy/Strategy";

function Page() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="mx-12 my-10 ">
      <div className="flex gap-3 my-8" onClick={handleGoBack} style={{ cursor: "pointer" }}>
        <Image src="/arrow-left.png" alt="arrow" width={20} height={16}></Image>
        <span>Go back</span>
      </div>
      <h1 className="text-[#17344F] text-4xl font-bold">
        Pool Name - <span> Id</span>
      </h1>
      <div className="flex ">
        <div className="flex flex-col gap-6 my-9">
          <span className="text-[#17344F] text-base font-bold">Overview</span>
          <div className="flex flex-col text-[#17344F] gap-16 p-7 border border-solid border-[#F1F3F4] rounded-[5px]">
            <div className="flex gap-20">
              <div className="flex flex-col w-[250px]">
                <span>Maximum Loan To Value (LTV)</span>
                <span className="font-bold">20.03%</span>
              </div>
              <div className="flex flex-col w-[250px]">
                <span>Base penalty</span>
                <span className="font-bold">6%</span>
              </div>
              <div className="flex flex-col w-[250px]">
                <span>Base Interest Rate</span>
                <span className="font-bold">6%</span>
              </div>
            </div>
            <div className="flex gap-24">
              <div className="flex flex-col w-[250px]">
                <span>Total borrowed</span>
                <span className="font-bold">$23.08M</span>
              </div>
              <div className="flex flex-col w-[250px]">
                <span>Total Supplied</span>
                <span className="font-bold">$23.08M</span>
              </div>
            </div>
            <div className="flex gap-24">
              <div className="flex flex-col w-[250px]">
                <span>Supply Average</span>
                <span className="font-bold">0.29%</span>
              </div>
              <div className="flex flex-col w-[250px]">
                <span>Average APR</span>
                <span className="font-bold">0.29%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 my-12">
            <span className="text-[#17344F] font-bold ">Supported Agreement</span>
            <ul className="px-8 list-disc">
              <li>Base agreement</li>
              <li>NFT agreement</li>
              <li>FT agreement</li>
            </ul>
          </div>
        </div>
        <Strategy></Strategy>
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-[#17344F] font-bold">Supported Tokens</span>
        <div className="flex gap-7">
          <div className="flex flex-col">
            <Image src="/DAI.png" alt="dai" width={32} height={32} />
            <span className="text-[#17344F]">DAI</span>
          </div>
          <div className="flex flex-col">
            <Image src="/USDT.png" alt="usdt" width={32} height={32} />
            <span className="text-[#17344F]">USDT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
