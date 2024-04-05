"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { TbDiscount } from "react-icons/tb";
import BorrowComponent from "~~/components/BorrowComponent/BorrowComponent";
import BorrowRepayContentModal from "~~/components/BorrowRepayContentModal/BorrowRepayContentModal";
import CardDescription from "~~/components/CardDescription/CardDescription";
import ChartModal from "~~/components/ChartModal/ChartModal";
import DepositContentModal from "~~/components/DepositContentModal/DepositContentModal";
import Analytics from "~~/components/Graph/Analytics";
import TableAction from "~~/components/TableActions/TableAction";
import TransactionButton from "~~/components/TransactionButton/TransactionButton";
import WithdrawContentModal from "~~/components/WithdrawContentModal/WithdrawContentModal";
import { lenders, loans } from "~~/data/data";

function Page() {
  const [activeButton, setActiveButton] = useState("deposit");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeposit, setIsModalDeposit] = useState(false);
  const [isModalWithdraw, setIsModalWithdraw] = useState(false);
  const [isModalChart, setIsModalChart] = useState(false);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className="bg-[#070817] p-10 flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-8 p-10 w-full max-w-[1920px]">
        <div className="flex gap-8 ">
          <Image src="/profile.png" alt="profile" width={166} height={166}></Image>
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white">EduFunds Pool</h1>
            <div className="text-[#374B6D] flex items-center">
              <CiCalendar />
              <span> Created November 2023</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-10 max-w-[1130px] w-full">
            <div className="max-w-[1135px] w-full max-h-[800px] h-full gap-[10px] flex flex-col items-center ">
              <div className="w-full flex items-center justify-center container-total">
                <Analytics />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <CardDescription title={"TVL"} value={"$32.3706"} />
                <CardDescription title={"APY"} value={"$32.3706"} />
                <CardDescription title={"Pool Usage"} value={"15%"} />
              </div>
              <div className="flex justify-between">
                <CardDescription title={"Timelock"} value={"3 days"} />
                <CardDescription title={"Manager fee"} value={"75%"} />
                <div className="flex flex-col gap-2 py-8 text-white container-total max-w-[347px] w-full px-9">
                  <span className="text-xl">Token vault</span>
                  <div className="flex gap-[10px]">
                    <Image src={"/USDT.png"} alt={"USDT icon"} width={30} height={30} />
                    <span className="text-lg ">USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-white">Description</h3>
              <p className="text-white">
                EduFunds Pool is a pool for students who wants to travel to web3 events and borrow money. They can then
                repay the amounts borrowed after participating to hackathons or any other events.
              </p>
            </div>

            <h3 className="text-3xl text-white">Actions</h3>
            <div>
              <TableAction />
            </div>
          </div>
          <div className=" flex flex-col gap-10 w-full max-w-[600px]">
            <TransactionButton
              buttons={[
                {
                  label: "Deposit",
                  active: activeButton === "deposit",
                  onClick: () => {
                    handleButtonClick("deposit");
                    setIsModalDeposit(true);
                  },
                },
                {
                  label: "Withdraw",
                  active: activeButton === "withdraw",
                  onClick: () => {
                    handleButtonClick("withdraw");
                    setIsModalWithdraw(true);
                  },
                },
              ]}
            />
            {isModalDeposit && <DepositContentModal setIsModalDeposit={() => setIsModalDeposit(false)} />}
            {isModalWithdraw && <WithdrawContentModal setIsModalWithdraw={() => setIsModalWithdraw(false)} />}
            <BorrowComponent setIsModalOpen={() => setIsModalOpen(true)} />
            <div className="flex flex-col gap-4 px-6 py-6 pb-24 mb-16 text-white container-total">
              <span className="mt-4 mb-8 text-xl text-white">Approved Loan Request</span>
              {loans.map(element => (
                <>
                  <div className="flex justify-between text-lg text-white">
                    <span className="text-sm">{element.name}</span>
                    <span className="text-sm">{element.time}</span>
                  </div>
                </>
              ))}
            </div>
            <div className="py-6 pl-8 text-white container-total h-fit ">
              <div className="flex items-center justify-between mb-10 mr-5">
                <span className="text-2xl">Lenders</span>
                <div
                  className="flex px-3 py-3 border border-white rounded-[8px] gap-2 items-center cursor-pointer"
                  onClick={() => setIsModalChart(true)}
                >
                  <span>Participation</span>
                  <TbDiscount className="w-[30px] h-[30px]"></TbDiscount>
                </div>
              </div>
              {lenders.map(element => (
                <>
                  <div className="flex items-center gap-6 my-4 pr-28">
                    <Image src={element.avatar} alt="avatar" width={42} height={42} className="rounded-full"></Image>
                    <span>{element.address}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <BorrowRepayContentModal setIsModalOpen={() => setIsModalOpen(false)}></BorrowRepayContentModal>}
      {isModalChart && <ChartModal setIsModalChart={() => setIsModalChart(false)}></ChartModal>}
    </div>
  );
}

export default Page;
