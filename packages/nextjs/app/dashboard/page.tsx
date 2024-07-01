"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { useAccount } from "wagmi";
import Button from "~~/components/Button/Button";
import { userData } from "~~/data/data";
import useUsername from "~~/hooks/gql/useUsername";

function Page() {
  // TEST GRAPH QL QUERY
  const account = useAccount();
  const { username } = useUsername(account.address);

  console.log(username);
  return (
    <div className="flex flex-col gap-10 py-10 px-14">
      <div className="flex gap-12">
        <div className="w-[410px] h-[198px] bg-[#2F2F2F] border border-[#444C6A] rounded-[11px] flex flex-col gap-8 p-8">
          <span className="text-sm">Total Shares</span>
          <span className="text-[#AE9FFD] text-2xl">{userData.totalShares}</span>
          <div>
            <Button backgroundColor="#AE9FFD">
              Deposit <AiOutlineDownload />
            </Button>
          </div>
        </div>
        <div className="w-[410px] h-[198px] bg-[#2F2F2F] border border-[#444C6A] rounded-[11px] p-8">
          <div className="flex flex-col gap-7">
            <span className="text-sm">Total Deposited</span>
            <span className="text-[#AE9FFD] text-2xl">{userData.totalDeposited}</span>
          </div>
          <div className="mt-4">
            <span className="text-[10px] text-[#A4A4A4]">Total Earning</span>
            <div className="flex gap-3">
              <span className="text-[#FAFF00] text-[10px]">{userData.totalEarnings}</span>
              <span className="text-[#2CFF74] text-[10px]">{userData.earningsPercentage}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-xl">Transactions</span>
        <div className="w-full min-h-screen bg-[#2F2F2F] border border-[#444C6A] rounded-[11px]">
          {userData.transactions.map((transaction, index) => (
            <div className="p-10 flex w-full justify-between items-center" key={index}>
              <div className="flex items-center">
                <Image width={30} height={30} className="" src="/icontransactions.svg" alt="transaction icon" />
                <div className="ml-4">
                  <div className="text-sm">{transaction.type}</div>
                  <div className="text-xs text-[#858BA2]">06/14/2024 15:24 pm</div>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <span className="text-[#AE9FFD] text-xl">{transaction.amount}</span>
                <span className="text-sm">USD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
