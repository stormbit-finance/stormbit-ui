"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import BorrowComponent from "~~/components/BorrowComponent/BorrowComponent";
import BorrowRepayContentModal from "~~/components/BorrowRepayContentModal/BorrowRepayContentModal";
import CardDescription from "~~/components/CardDescription/CardDescription";
import DepositContentModal from "~~/components/DepositContentModal/DepositContentModal";
import Analytics from "~~/components/Graph/Analytics";
import TableAction from "~~/components/TableActions/TableAction";
import TransactionButton from "~~/components/TransactionButton/TransactionButton";
import WithdrawContentModal from "~~/components/WithdrawContentModal/WithdrawContentModal";
import { lenders } from "~~/data/data";

function Page() {
  const [activeButton, setActiveButton] = useState("deposit");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeposit, setIsModalDeposit] = useState(false);
  const [isModalWithdraw, setIsModalWithdraw] = useState(false);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className="bg-[#070817] p-10 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10 p-10 max-w-[1920px] w-full">
        <div className="flex gap-8">
          <Image src="/profile.png" alt="profile" width={166} height={166}></Image>
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white">EduFunds Pool</h1>
            <div className="text-[#374B6D] flex items-center">
              <CiCalendar />
              <span> Created November 2023</span>
            </div>
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="flex flex-col gap-10">
            <div className="max-w-[1130px] w-full max-h-[800px] h-full gap-[10px] flex flex-col items-center ">
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
          <div className="flex flex-col gap-10 max-w-[600px] w-full">
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
            <div className="py-6 pl-8  text-white container-total h-fit pr-28">
              <span className="text-2xl">Lenders</span>
              {lenders.map(element => (
                <>
                  <div className="flex gap-6 my-4">
                    <Image src={element.avatar} alt="avatar" width={42} height={42} className="rounded-full"></Image>
                    <span>{element.address}</span>
                  </div>
                </>
              ))}
            </div>
            <div className="px-8 py-6 text-white container-total h-fit">
              <div className="flex justify-between">
                <span className="text-2xl">Group Messages</span>
                <span className="text-[#9135F5] text-xl">See all chat</span>
              </div>
              <div className="flex gap-24 my-6">
                <div className="flex gap-4">
                  <Image src="/avatar1.png" alt="avatar" width={63} height={63} className="rounded-full"></Image>
                  <div className="flex flex-col gap-1">
                    <span>RequestLoanID</span>
                    <span>0x70997...c79C8 : Hi hihihi...</span>
                  </div>
                </div>
                <div>
                  <span>Today, 9.52pm</span>
                  <div className="rounded-full bg-[#F24E1E] w-[20px] h-[20px] flex items-center justify-center">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <BorrowRepayContentModal setIsModalOpen={() => setIsModalOpen(false)}></BorrowRepayContentModal>}
    </div>
  );
}

export default Page;
