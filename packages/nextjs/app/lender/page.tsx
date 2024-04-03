"use client";

import { useState } from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { TbDiscount } from "react-icons/tb";
import BorrowComponent from "~~/components/BorrowComponent/BorrowComponent";
import BorrowContentModal from "~~/components/BorrowContentModal/BorrowContentModal";
import ChartModal from "~~/components/ChartModal/ChartModal";
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
  const [isModalChart, setIsModalChart] = useState(false);

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
            {isModalDeposit && (
              <DepositContentModal setIsModalDeposit={() => setIsModalDeposit(false)}></DepositContentModal>
            )}
            {isModalWithdraw && (
              <WithdrawContentModal setIsModalWithdraw={() => setIsModalWithdraw(false)}></WithdrawContentModal>
            )}
            <BorrowComponent setIsModalOpen={() => setIsModalOpen(true)}></BorrowComponent>
            <div className="flex flex-col gap-4 px-6 py-6 pb-24 mb-16 text-white container-total">
              <span className="mt-4 mb-8 text-xl text-white">Approved Loan Request</span>
              <div className="flex justify-between text-lg text-white">
                <span className="text-sm">Loan Request XXX</span>
                <span className="text-sm">3 days 0 hrs</span>
              </div>
              <div className="flex justify-between text-lg text-white">
                <span className="text-sm">Loan Request XXX</span>
                <span className="text-sm">3 days 0 hrs</span>
              </div>
            </div>
            <div className="py-6 pl-8 text-white container-total h-fit ">
              <div className="flex items-center justify-between mb-5 mr-5">
                <span className="text-2xl">Lenders</span>
                <div
                  className="flex px-3 py-3 border border-white rounded-[8px] gap-3 items-center cursor-pointer"
                  onClick={() => setIsModalChart(true)}
                >
                  <span>Partcipation</span>
                  <TbDiscount></TbDiscount>
                </div>
              </div>
              {lenders.map(element => (
                <>
                  <div className="flex gap-6 my-4 pr-28">
                    <Image src={element.avatar} alt="avatar" width={42} height={42} className="rounded-full"></Image>
                    <span>{element.address}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <BorrowContentModal setIsModalOpen={() => setIsModalOpen(false)}></BorrowContentModal>}
      {isModalChart && <ChartModal setIsModalChart={() => setIsModalChart(false)}></ChartModal>}
    </section>
  );
}

export default Page;
