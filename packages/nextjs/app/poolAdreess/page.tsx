"use client";

import { useState } from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import BorrowRepayContentModal from "~~/components/BorrowRepayContentModal/BorrowRepayContentModal";
import Button from "~~/components/Button/Button";
import DepositContentModal from "~~/components/DepositContentModal/DepositContentModal";
import Analytics from "~~/components/Graph/Analytics";
import TableAction from "~~/components/TableActions/TableAction";
import WithdrawContentModal from "~~/components/WithdrawContentModal/WithdrawContentModal";

interface Staker {
  avatar: string;
  address: string;
}

const stakers: Staker[] = [
  {
    avatar: "/avatar1.png",
    address: "0x70997...c79C8",
  },
  {
    avatar: "/avatar2.png",
    address: "0x70997...c79C8",
  },
  {
    avatar: "/avatar1.png",
    address: "0x70997...c79C8",
  },
  {
    avatar: "/avatar2.png",
    address: "0x70997...c79C8",
  },
];

function Page() {
  const [activeButton, setActiveButton] = useState("deposit");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeposit, setIsModalDeposit] = useState(false);
  const [isModalWithdraw, setIsModalWithdraw] = useState(false);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <section className="bg-[#070817] w-screen p-10 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10 p-10">
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
        <div className="flex gap-20">
          <div className="flex flex-col gap-10">
            <div className="w-fit container-total">
              <Analytics></Analytics>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 py-8 text-white container-total w-fit px-9">
                <span className="text-xl">TVL</span>
                <span className="text-2xl font-bold">$32.3706</span>
              </div>
              <div className="flex flex-col gap-2 py-8 text-white container-total w-fit px-9">
                <span className="text-xl">APY</span>
                <span className="text-2xl font-bold">$32.3706</span>
              </div>
              <div className="flex flex-col gap-2 py-8 text-white container-total w-fit px-9">
                <span className="text-xl">Pool Usage</span>
                <span className="text-2xl font-bold">15%</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-white">Description</h3>
              <p className="text-white w-[800px]">
                EduFunds Pool is a pool for students who wants to travel to web3 events and borrow money. They can then
                repay the amounts borrowed after participating to hackathons or any other events.
              </p>
            </div>

            <h3 className="text-3xl text-white">Actions</h3>
            <div>
              <TableAction></TableAction>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center text-white container-total">
              <button
                className={`py-10 flex-1 rounded-l-2xl text-2xl ${activeButton === "deposit" ? "bg-[#9135F5]" : ""}`}
                onClick={() => {
                  handleButtonClick("deposit");
                  setIsModalDeposit(true);
                }}
              >
                Deposit
              </button>
              <button
                className={`py-10 flex-1 rounded-r-2xl text-2xl ${activeButton === "withdraw" ? "bg-[#9135F5]" : ""}`}
                onClick={() => {
                  handleButtonClick("withdraw");
                  setIsModalWithdraw(true);
                }}
              >
                Withdraw
              </button>
            </div>
            {isModalDeposit && (
              <DepositContentModal setIsModalDeposit={() => setIsModalDeposit(false)}></DepositContentModal>
            )}
            {isModalWithdraw && (
              <WithdrawContentModal setIsModalWithdraw={() => setIsModalWithdraw(false)}></WithdrawContentModal>
            )}
            <div className="flex flex-col justify-between gap-4 px-8 py-6 my-16 text-white container-total">
              <span className="text-2xl">Borrow</span>
              <div className="flex mt-4 justify-between border-y-1 border-[#374B6D] text-[#374B6D] py-7 px-4">
                <span>Position status</span>
                <span>-</span>
              </div>
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Request Loan
              </Button>
            </div>
            <div className="py-6 pl-8 my-16 text-white container-total h-fit pr-28">
              <span className="text-2xl">Stakers</span>
              {stakers.map(element => (
                <>
                  <div className="flex gap-6 my-4">
                    <Image src={element.avatar} alt="avatar" width={42} height={42} className="rounded-full"></Image>
                    <span>{element.address}</span>
                  </div>
                </>
              ))}
            </div>
            <div className="px-8 py-6 my-16 text-white container-total h-fit">
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
    </section>
  );
}

export default Page;
