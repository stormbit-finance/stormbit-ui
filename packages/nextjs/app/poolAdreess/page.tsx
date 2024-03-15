"use client";

import { useState } from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import Button from "~~/components/Button/Button";
import Analytics from "~~/components/Graph/Analytics";
import TableAction from "~~/components/TableActions/TableAction";

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
            <div className="flex gap-11">
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
          <div>
            <div className="flex text-white">
              <button
                className={`py-10 text-2xl container-total  ${activeButton === "deposit" ? "bg-indigo-900" : ""}`}
                onClick={() => handleButtonClick("deposit")}
              >
                Deposit
              </button>
              <button
                className={`py-10 text-2xl container-total  ${activeButton === "withdraw" ? "bg-indigo-900" : ""}`}
                onClick={() => handleButtonClick("withdraw")}
              >
                Withdraw
              </button>
            </div>
            <div className="w-fit h-[447px] flex flex-col justify-between container-total my-16 text-white px-8 py-6">
              <span className="text-2xl">Borrow</span>
              <Button>Request Loan</Button>
            </div>
            <div className="container-total w-fit h-[447px] pl-8 pr-14 py-6 my-16 text-white">
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
            <div className="container-total w-fit h-[254px] px-8 py-6 my-16 text-white">
              <span className="text-2xl">Group Messages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
