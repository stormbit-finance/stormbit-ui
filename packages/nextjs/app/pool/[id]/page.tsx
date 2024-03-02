"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { formatUnits } from "viem";
import { useContractReads } from "wagmi";
import Strategy from "~~/components/Strategy/Strategy";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";

function Page() {
  const params = useParams();

  const poolAddress: string = params.id;
  const handleGoBack = () => {
    window.history.back();
  };
  const { data: LendingContract } = useScaffoldContract({
    contractName: "StormBitLending",
  });
  const { data: poolData, isLoading: poolsLoading } = useContractReads({
    contracts: LendingContract
      ? [
          {
            address: poolAddress,
            abi: LendingContract.abi,
            functionName: "getPoolData",
          },
        ]
      : [],
  });

  return (
    <div className="mx-12 mb-8 text-white">
      <div className="flex items-center gap-3 my-8" onClick={handleGoBack} style={{ cursor: "pointer" }}>
        <Image src="/arrow-left.png" alt="arrow" width={20} height={16} className="w-[20px] h-[16px]"></Image>
        <span>Go back</span>
      </div>
      <span className="text-[#ffffff] text-4xl font-bold flex">
        {poolData ? poolData[0]?.result?.name : " Pool Name"} -
        <div className=" text-ellipsis overflow-hidden w-[30%]"> {poolAddress}</div>
      </span>
      {poolsLoading ? (
        <>
          <div className="flex flex-col items-center justify-center gap-16 my-20">
            <Image src="/loading.png" alt="loading" width={150} height={150}></Image>
            <span className="text-3xl text-[#ffffff] font-semibold"> Loading </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <div className="flex flex-col gap-6 my-9">
              <span className="text-[#ffffff] text-base font-bold">Overview</span>
              <div className="flex flex-col text-[#ffffff] gap-16 p-7 border border-solid border-transparent rounded-[5px]">
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
                    <span className="font-bold">
                      {poolData ? formatUnits(poolData?.[0]?.result?.totalBorrowed || 0n, 18) : "$0"}
                    </span>
                  </div>
                  <div className="flex flex-col w-[250px]">
                    <span>Total Supplied</span>
                    <span className="font-bold">
                      {poolData ? formatUnits(poolData?.[0]?.result?.totalSupplied || 0n, 18) : "$0"}
                    </span>
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
                <span className="text-[#ffffff] font-bold ">Supported Agreement</span>
                <ul className="px-8 list-disc">
                  <li>Base agreement</li>
                  <li>NFT agreement</li>
                  <li>FT agreement</li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-[#ffffff] font-bold">Supported Tokens</span>
                <div className="flex gap-7">
                  {/*<div className="flex flex-col">*/}
                  {/*  <Image src="/DAI.png" alt="dai" width={32} height={32} />*/}
                  {/*  <span className="text-[#17344F]">DAI</span>*/}
                  {/*</div>*/}
                  <div className="flex flex-col">
                    <Image src="/ZBUtoken.png" alt="zbu" width={32} height={32} />
                    <span className="text-[#FFFFF]">ZBU</span>
                  </div>
                </div>
              </div>
            </div>
            <Strategy poolAddress={poolAddress}></Strategy>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
