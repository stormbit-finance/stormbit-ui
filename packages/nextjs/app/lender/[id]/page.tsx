"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Button from "~~/components/Button/Button";
import ColumnGraph from "~~/components/ColumnGraph/ColumnGraph";
import { userData } from "~~/data/data";
import useUsername from "~~/hooks/gql/useUsername";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

function Page() {
  const params = useParams();
  const termId = BigInt(params.id.toString());
  const [selectedWithdrawToken, setSelectedWithdrawToken] = useState("0xdAC17F958D2ee523a2206206994597C13D831ec7");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedDepositToken, setSelectedDepositToken] = useState("0xdAC17F958D2ee523a2206206994597C13D831ec7");
  const [depositAmount, setDepositAmount] = useState("");

  const { data: term } = useScaffoldContractRead({
    contractName: "StormbitLendingManager",
    functionName: "getLendingTerm",
    args: [termId],
  });

  const { writeAsync: withdraw } = useScaffoldContractWrite({
    contractName: "StormbitLendingManager",
    functionName: "withdrawFromTerm",
    args: [termId, selectedWithdrawToken, BigInt(withdrawAmount)],
    onBlockConfirmation: txReceipt => {
      console.log(txReceipt);
    },
    blockConfirmations: 0,
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

  const { username: lenderName } = useUsername(term?.owner || "");

  const lender = [
    { name: "Total Deposit", value: "10,800.67", icon: "/icon-lender.svg" },
    { name: "Unique Depositors", value: "1237", icon: "/icon-depositor.svg" },
    { name: "Total Supplied", value: "10,800.67", icon: "/icon-supplied.svg" },
    { name: "Total Loaned", value: "10,800.67", icon: "/icon-loaned.svg" },
  ];

  return (
    <div className="pt-[100px] px-16 flex pb-11">
      <div className="w-3/5 pt-7 flex flex-col gap-8 px-4">
        <span className="text-3xl text-[#AD7AF3] font-bold">10% APR</span>
        <div className="flex justify-between">
          {lender.map((element, index) => (
            <div
              key={index}
              className="bg-[#2F2F2F] border border-[#444] rounded-[11px] p-4 text-white flex gap-4 justify-center items-center"
            >
              <Image src={element.icon} alt="icon" width={40} height={40}></Image>
              <div className="flex flex-col gap-1">
                <span className="text-[#959595] text-xs">{element.name}</span>
                <span className="text-xs">$ {element.value}</span>
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
            <span>Value</span>
          </div>
          <div>
            <div className="flex justify-between p-6 px-8">
              <div className="flex gap-3">
                <Image src="/eth1.png" alt="eth" width={15} height={15}></Image>
                <span>ETH</span>
              </div>
              <span>$226.55</span>
            </div>
            <div className="flex justify-between p-6">
              <div className="flex gap-3">
                <Image src="/starknet.png" alt="eth" width={40} height={40}></Image>
                <span>STRK</span>
              </div>
              <span>$226.55</span>
            </div>
          </div>
        </div>
        <span className="mt-6 text-white text-xl">Recent Activity</span>
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] text-white py-6 px-6 flex flex-col gap-6">
          {userData.transactions.map((transaction, index) => (
            <div className=" flex w-full justify-between items-center" key={index}>
              <div className="flex items-center">
                <Image width={40} height={40} className="" src="/icontransactions.svg" alt="transaction icon" />
                <div className="ml-4">
                  <div className="text-sm">{transaction?.type || ""}</div>
                  <div className="text-xs text-[#858BA2]">06/14/2024 15:24 pm</div>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <span className="text-[#AE9FFD] text-xl">${transaction?.amount || 0.0}</span>
                <span className="text-sm">USD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-2/5">
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] mt-10 text-white w-full p-6 flex flex-col gap-7">
          <div className="flex justify-between">
            <span className="text-[#A5A5A5] text-xl">Lender</span>
            <span className="text-lg">{lenderName || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A5A5A5] text-xl">Lender Commission</span>
            <span className="text-[#AD7AF3] text-2xl">{Number(term?.comission) || 0}%</span>
          </div>
        </div>
        <div className="bg-[#2F2F2F] border border-[#444] rounded-[11px] mt-6 text-white w-full h-[300px] flex flex-col gap-7">
          <span className="text-[#A5A5A5] px-6 pt-6 text-lg">My Position</span>
          <div className="bg-[#3E3E3E] flex justify-between p-6">
            <span>Token</span>
            <span>Amount</span>
            <span>Value</span>
          </div>
          <div className="flex justify-between px-6">
            <div className="flex gap-1">
              <Image src="/USDT.png" alt="icon" width={23} height={20}></Image>
              <span>USDT</span>
            </div>
            <span>100.00</span>
            <span>$ 100.00</span>
          </div>
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
              <option className="bg-[#2F2F2F]" value="0xdAC17F958D2ee523a2206206994597C13D831ec7">
                USDT
              </option>
              <option className="bg-[#2F2F2F]" value="0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72">
                ETH
              </option>
              <option className="bg-[#2F2F2F]" value="0xCa14007Eff0dB1f8135f4C25B34De49AB0d42766">
                STRK
              </option>
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
              <option className="bg-[#2F2F2F]" value="0xdAC17F958D2ee523a2206206994597C13D831ec7">
                USDT
              </option>
              <option className="bg-[#2F2F2F]" value="0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72">
                ETH
              </option>
              <option className="bg-[#2F2F2F]" value="0xCa14007Eff0dB1f8135f4C25B34De49AB0d42766">
                STRK
              </option>
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
