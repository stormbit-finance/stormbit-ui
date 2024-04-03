"use client";

import React from "react";
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
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-[1500px] w-full">
        <div className="flex flex-col gap-20 pt-10 pb-[50px]">
          <div className="flex justify-between gap-40 text-white">
            <div className="flex rounded-2xl border border-solid border-[#6C757D] py-[10px] px-[30px] items-center text-[#6C757D] w-full">
              <FiSearch />
              <input
                placeholder="Search borrower..."
                className="px-4 py-2 bg-transparent border-none focus:outline-none w-full"
              />
              <span>⌘K</span>
            </div>
          </div>

          <div className="flex gap-10 text-white justify-between">
            <div className="flex gap-[30px]">
              <div className="max-w-[140px]">
                <Image src="/icondash.svg" alt="avatar" width={140} height={140} className="rounded-full" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                  <span className="text-xl">Borrower Name</span>
                  <span className="text-3xl">Debt $2k</span>
                </div>
                <div className="flex gap-[13px]">
                  <div className="bg-[#1A1A31] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <FiLinkedin />
                  </div>
                  <div className="bg-[#1A1A31] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <FaXTwitter />
                  </div>
                  <span className="rounded-[40px] bg-[#1A1A31] py-4 px-16">0xb9df...9811F</span>
                  <div className="bg-[#1A1A31] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <IoCopy />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex container-total max-w-[596px] w-full justify-center gap-[140px] text-2xl items-center px-[10px] ">
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <span className=" text-white">$2.03K</span>
                <span className="text-[#A8B1C8]">Total borrowed</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[20px]">
                <span className="text-white">$2.03K</span>
                <span className="text-[#A8B1C8] ">Total paid</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-[20px]">
            <div className="max-w-[1500px] w-full py-[30px] gap-[10px] flex flex-col items-center ">
              <div className="w-full flex container-total flex-col pt-[40px]">
                <span className="text-2xl text-white pl-[100px]">Borrowers repayment</span>
                <ColumnGraph />
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <span className="text-3xl font-bold text-white py-[60px]">Borrowers open positions</span>

              {data.map((element, index) => (
                <>
                  <div key={index} className="flex justify-between text-white container-total">
                    <div className="flex justify-between w-full items-center p-[40px]">
                      <div className="flex flex-col gap-[10px]">
                        <span className="text-3xl">{element.name}</span>
                        <span className="text-xl ">Amount {element.amount}</span>
                      </div>
                      <span className="text-[#6C757D] mb-10">
                        {element.state} at {element.date}
                      </span>
                    </div>
                    <div className="border-l-1 border-[#223049] px-28 flex flex-col justify-center gap-5 items-center max-w-[260px] w-full">
                      {element.icon}
                      <span>{getStateText(element.state)}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
