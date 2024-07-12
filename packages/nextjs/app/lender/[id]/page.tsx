"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import Button from "~~/components/Button/Button";
import ColumnGraph from "~~/components/ColumnGraph/ColumnGraph";
import { Token } from "~~/data/token";
import useTermData from "~~/hooks/gql/useTermData";
import { useScaffoldContractWrite, useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

function Page() {
  const params = useParams();
  const termId = BigInt(params.id.toString());
  const [selectedWithdrawToken, setSelectedWithdrawToken] = useState(Token[0].address);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedDepositToken, setSelectedDepositToken] = useState(Token[0].address);
  const [depositAmount, setDepositAmount] = useState("");
  const account = useAccount();

  const { aggregatedData: termData } = useTermData(params.id.toString() || "", account.address || "");
  const { writeAsync: withdraw } = useScaffoldContractWrite({
    contractName: "StormbitLendingManager",
    functionName: "withdrawFromTerm",
    args: [termId, selectedWithdrawToken, BigInt(withdrawAmount)],
    onBlockConfirmation: txReceipt => {
      console.log(txReceipt);
    },
    blockConfirmations: 0,
  });

  const { data: eventHistory } = useScaffoldEventHistory({
    contractName: "StormbitLendingManager",
    eventName: "LendingTermCreated",
    fromBlock: 0n,
    filters: { id: BigInt(params.id.toString()) },
  });

  const { writeAsync: deposit } = useScaffoldContractWrite({
    contractName: "StormbitLendingManager",
    functionName: "depositToTerm",
    args: [termId, selectedDepositToken, BigInt(depositAmount)],
    onBlockConfirmation: txReceipt => {
      console.log(txReceipt);
    },
    blockConfirmations: 0,
  });

  const lender = [
    { name: "Total Deposit", value: `$${formatEther(termData?.totalDeposit || 0n)}`, icon: "/icon-lender.svg" },
    { name: "Unique Depositors", value: termData?.uniqueDepositor || 0, icon: "/icon-depositor.svg" },
    { name: "Total Loaned", value: `$${formatEther(termData?.totalLoaned || 0n)}`, icon: "/icon-loaned.svg" },
  ];

  return (
    <div className="pt-[100px] px-16 flex pb-11">
      <div className="w-3/5 pt-7 flex flex-col gap-8 px-4">
        <span className="text-3xl text-[#AD7AF3] font-bold">10% APR</span>
        <div className="flex gap-4">
          {lender.map((element, index) => (
            <div
              key={index}
              className="bg-[#2F2F2F] border border-[#444] rounded-[11px] px-8 py-4 text-white flex gap-4 justify-center items-center"
            >
              <Image src={element.icon} alt="icon" width={40} height={40}></Image>
              <div className="flex flex-col gap-1">
                <span className="text-[#959595] text-sm">{element.name}</span>
                <span className="text-sm">{element.value}</span>
              </div>
            </div>
          ))}
        </div>
        <span className="text-xl text-white">APR</span>
        <ColumnGraph></ColumnGraph>
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] h-[400px] mt-10 text-white py-6">
          <span className="p-6 text-xl">Assets</span>
          <div className="flex justify-between p-6 bg-[#3E3E3E] mt-6">
            <span>Token</span>
            <span>Shares</span>
          </div>
          <div>
            {termData?.termAssets.map((item, index) => {
              const tokenInfo = Token.find(token => token.address === item.assetId);
              return (
                <div key={index} className="flex justify-between p-6 px-8">
                  <div className="flex gap-3">
                    <Image src={tokenInfo?.img || ""} alt="eth" width={25} height={25}></Image>
                    <span>{tokenInfo?.name} </span>
                  </div>
                  <span>{formatEther(item.shares)}</span>
                </div>
              );
            })}
          </div>
        </div>
        <span className="mt-6 text-white text-xl">Recent Activity</span>
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] text-white py-6 px-6 flex flex-col gap-6">
          {eventHistory &&
            eventHistory?.map((event, index) => (
              <div className=" flex w-full justify-between items-center" key={index}>
                <div className="flex items-center">
                  <Image width={40} height={40} className="" src="/icontransactions.svg" alt="transaction icon" />
                  <div className="ml-4">
                    <div className="text-sm">{event?.log?.eventName || "Unknown"}</div>
                    <div className="text-xs text-[#858BA2]">
                      {format(new Date(Number((event as any)?.block?.timestamp) * 1000), "dd/MM/yyyy HH:mm:ss") || ""}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  {/* <span className="text-[#AE9FFD] text-xl">${transaction?.amount || 0.0}</span> */}
                  {/* <span className="text-sm">USD</span> */}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col w-2/5">
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] mt-10 text-white w-full p-6 flex flex-col gap-7">
          <div className="flex justify-between">
            <span className="text-[#A5A5A5] text-xl">Lender</span>
            <span className="text-lg">{termData?.lenderName || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A5A5A5] text-xl">Lender Commission</span>
            <span className="text-[#AD7AF3] text-2xl">{Number(termData?.comission) || 0}%</span>
          </div>
        </div>
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] mt-6 text-white w-full h-[300px] flex flex-col gap-7">
          <span className="text-[#A5A5A5] px-6 pt-6 text-lg">My Position</span>
          <div className="bg-[#3E3E3E] flex justify-between p-6">
            <span>Token</span>
            <span>Share</span>
            <span>Value</span>
          </div>

          {termData?.userTermAssets.map((item, index) => {
            const tokenInfo = Token.find(token => token.address === item.token);

            return (
              <div key={index} className="flex justify-between px-6">
                <div className="flex gap-1">
                  <Image src={tokenInfo?.img || ""} alt="icon" width={23} height={20}></Image>
                  <span>{tokenInfo?.name}</span>
                </div>
                <span>{formatEther(item?.shares || 0)}</span>
                <span>$ {parseFloat(formatEther(item?.assetValue || 0))?.toFixed(2)}</span>
              </div>
            );
          })}
        </div>

        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] mt-6 text-white w-full flex flex-col gap-7 p-6">
          <span className="text-[#A5A5A5] text-xl">Withdraw</span>
          <div className="flex gap-2">
            <input
              type="text"
              value={withdrawAmount}
              onChange={e => setWithdrawAmount(e.target.value)}
              className="w-4/5 bg-transparent text-white px-4 py-2 border border-[#444] rounded-[2px]"
              placeholder="Enter amount"
            ></input>
            <select
              value={selectedWithdrawToken}
              onChange={e => setSelectedWithdrawToken(e.target.value)}
              className="bg-transparent text-white px-4 py-2 border border-[#444] rounded-[2px]"
            >
              {Token.map((item, index) => (
                <option key={index} className="bg-[#2F2F2F]" value={item.address}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <Button onClick={withdraw} backgroundColor="#D0C8FF">
            Withdraw
          </Button>
        </div>
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] mt-6 text-white w-full flex flex-col gap-7 p-6">
          <span className="text-[#A5A5A5] text-xl">Deposit</span>
          <div className="flex gap-2">
            <input
              value={depositAmount}
              onChange={e => setDepositAmount(e.target.value)}
              type="text"
              className="w-4/5 bg-transparent text-white px-4 py-2 border border-[#444] rounded-[2px]"
              placeholder="Enter amount"
            ></input>
            <select
              value={selectedDepositToken}
              onChange={e => setSelectedDepositToken(e.target.value)}
              className="bg-transparent text-white px-4 py-2 border border-[#444] rounded-[2px]"
            >
              {Token.map((item, index) => (
                <option key={index} className="bg-[#2F2F2F]" value={item.address}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <Button onClick={deposit} backgroundColor="#D0C8FF">
            Deposit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
