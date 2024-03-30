"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { IoCopy } from "react-icons/io5";
import ColumnGraph from "~~/components/ColumnGraph/ColumnGraph";

function Page() {
  const [activeButton, setActiveButton] = useState("deposit");

  const data = [
    {
      name: "Proposal Name",
      amount: "$2.03K",
      date: "15 March 2024 20:18PM",
      state: "Cancelled",
      icon: <AiOutlineCloseCircle className="w-[68px] h-[68px] text-[#FF5656]" />,
    },
    {
      name: "Proposal Name",
      amount: "$2.03K",
      date: "15 March 2024 20:18PM",
      state: "Submitted",
      icon: <BsClockHistory className="w-[65px] h-[65px] text-[#BBB]" />,
    },
    {
      name: "Proposal Name",
      amount: "$2.03K",
      date: "15 March 2024 20:18PM",
      state: "Completed",
      icon: <AiOutlineCheckCircle className="w-[68px] h-[68px] text-[#A9E295]" />,
    },
  ];

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const getStateText = (state: string) => {
    switch (state) {
      case "Cancelled":
        return "Refused";
      case "Submitted":
        return "Queued";
      case "Completed":
        return "Accepted";
      default:
        return state;
    }
  };

  return (
    <section className="bg-[#070817] w-screen p-10 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-20 p-10">
        <div className="flex justify-between gap-40 text-white">
          <span className="text-4xl">Borrowers repayment</span>
          <div>
            <div className="flex rounded-[5px] border border-solid border-[#A8B1C8] px-4 justify-center items-center text-white">
              <FiSearch></FiSearch>
              <input
                placeholder="Search borrower..."
                className="px-4 py-2 bg-transparent border-none focus:outline-none  w-[401px]"
              ></input>
              <span className="pr-2 text-white ">⌘K</span>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-12">
            <div className="w-fit container-total">
              <ColumnGraph />
            </div>
            <div className="flex flex-col gap-20">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">Borrowers open positions</span>
                <div className="flex justify-center text-white container-total">
                  <button
                    className={`py-4 px-6 rounded-l-2xl text-lg ${activeButton === "deposit" ? "bg-[#23233D]" : ""}`}
                    onClick={() => {
                      handleButtonClick("deposit");
                    }}
                  >
                    Total Deposit
                  </button>
                  <button
                    className={`py-4 px-6 rounded-r-2xl text-lg ${activeButton === "borrowed" ? "bg-[#23233D]" : ""}`}
                    onClick={() => {
                      handleButtonClick("borrowed");
                    }}
                  >
                    Total Borrowed
                  </button>
                </div>
              </div>
              {data.map((element, index) => (
                <>
                  <div key={index} className="flex justify-between text-white container-total">
                    <div className="flex flex-col pl-16">
                      <span className="mt-10 text-3xl">{element.name}</span>
                      <span className="my-8 text-xl ">Amount {element.amount}</span>
                      <span className="text-[#6C757D] mb-10">
                        {element.state} at {element.date}
                      </span>
                    </div>
                    <div className="border-l-1 border-[#223049] px-28 flex flex-col justify-center gap-5 items-center">
                      {element.icon}
                      <span>{getStateText(element.state)}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <div className="container-total">
              <div className="flex flex-col gap-10 p-10 text-white">
                <div className="flex gap-6">
                  <Image src="/avatar1.png" alt="avatar" width={90} height={90} className="rounded-full"></Image>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl">Borrower Name</span>
                    <span className="text-3xl">Debt $2k</span>
                  </div>
                </div>
                <div className="flex gap-32">
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-2xl text-white">$2.03K</span>
                    <span className="text-[#A8B1C8] text-2xl">Total borrowed</span>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-2xl text-white">$2.03K</span>
                    <span className="text-[#A8B1C8] text-2xl">Total paid</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-xl text-white">Address</span>
                  <span className="rounded-[40px] bg-[#1A1A31] py-4 px-16">0xb9df...9811F</span>
                  <div className="bg-[#1A1A31] rounded-full p-4">
                    <IoCopy />
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-xl text-white">Links</span>
                  <div className="bg-[#1A1A31] rounded-full p-4 text-white ml-8">
                    <FiLinkedin />
                  </div>
                  <div className="bg-[#1A1A31] rounded-full p-4 text-white">
                    <FaXTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
