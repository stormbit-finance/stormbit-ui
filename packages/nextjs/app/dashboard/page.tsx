"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { AiOutlineDownload } from "react-icons/ai";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import Button from "~~/components/Button/Button";
import { userData } from "~~/data/data";
import useUserTermDepositAggregateAssets from "~~/hooks/gql/useUserTermDepositAggregateAssets";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

function Page() {
  // TEST GRAPH QL QUERY
  const account = useAccount();
  const [eventHistory, setEventHistory] = useState<any>([]);
  const { aggregatedDepositAsset, totalShares } = useUserTermDepositAggregateAssets(account.address);

  const { data: termCreatedHistory } = useScaffoldEventHistory({
    contractName: "StormbitLendingManager",
    eventName: "LendingTermCreated",
    fromBlock: 0n,
  });
  const { data: termDepositedHistory } = useScaffoldEventHistory({
    contractName: "StormbitLendingManager",
    eventName: "DepositToTerm",
    fromBlock: 0n,
  });

  useEffect(() => {
    const filterTermCreated = termCreatedHistory?.filter(item => item.args.lender === account.address) || [];
    const filterTermDeposited = termDepositedHistory?.filter(item => item.args.user === account.address) || [];
    const aggregatedEvent: any[] = [...filterTermCreated, ...filterTermDeposited];
    setEventHistory(aggregatedEvent);
  }, [termCreatedHistory]);

  return (
    <div className="h-full flex flex-col gap-10 py-10 px-14">
      <div className="flex gap-12">
        <div className="w-[410px] h-[198px] bg-[#2F2F2F] border border-[#444C6A] rounded-[11px] p-8">
          <div className=" flex flex-col gap-8 ">
            <span className="text-sm">Total Shares</span>
            <span className="text-[#AE9FFD] text-2xl">{Number(formatEther(totalShares)) || 0}</span>
          </div>

          <div className="pt-4">
            <Button disabled={!account || !account.address}>
              Deposit <AiOutlineDownload />
            </Button>
          </div>
        </div>
        <div className="w-[410px] h-[198px] bg-[#2F2F2F] border border-[#444C6A] rounded-[11px] p-8">
          <div className="flex flex-col gap-7">
            <span className="text-sm">Total Deposited</span>
            <span className="text-[#AE9FFD] text-2xl">
              $
              {aggregatedDepositAsset
                ? parseFloat(
                    formatEther(aggregatedDepositAsset.reduce((total, asset) => total + asset.assets, 0n)),
                  ).toFixed(2)
                : 0.0}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-[14px] text-[#A4A4A4]">Total Earning</span>
            <div className="flex gap-3">
              <span className="text-[#FAFF00] text-[14px]">{userData?.totalEarnings || 0.0}%</span>
              <span className="text-[#2CFF74] text-[14px]">{userData?.earningsPercentage || 0.0}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col gap-6">
        <span className="text-xl">Transactions</span>
        <div className="h-full w-full p-10 gap-6 flex flex-col bg-[#2F2F2F] border border-[#444C6A] rounded-[11px]">
          {eventHistory &&
            eventHistory?.map((event: any, index: number) => (
              <div className=" flex w-full justify-between items-center" key={index}>
                <div className="flex items-center">
                  <Image width={40} height={40} className="" src="/icontransactions.svg" alt="transaction icon" />
                  <div className="ml-4">
                    <div className="text-sm">{event?.log?.eventName || "Unknown event"}</div>
                    <div className="text-xs text-[#858BA2]">
                      {" "}
                      {format(new Date(Number((event as any)?.block?.timestamp) * 1000), "dd/MM/yyyy HH:mm:ss") || ""}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  {/* <span className="text-[#AE9FFD] text-xl">${transaction?.amount || 0.0}</span>
                  <span className="text-sm">USD</span> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
