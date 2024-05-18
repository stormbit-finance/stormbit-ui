"use client";

import React from "react";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoCopy } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import Button from "~~/components/Button/Button";

function Page() {
  const providerData = [
    {
      provider: "Binance",
      logo: "/binance.svg",
      proofs: 10,
    },
    {
      provider: "OKX",
      logo: "/okx.svg",
      proofs: 10,
    },
    {
      provider: "Github",
      logo: "/github.svg",
      proofs: 10,
    },
    {
      provider: "LinkedIn Analytics",
      logo: "/linkedin.svg",
      proofs: 10,
    },
    {
      provider: "X Analytics",
      logo: "/x.svg",
      proofs: 10,
    },
    {
      provider: "Custom",
      logo: "/custom.svg",
      proofs: 10,
    },
  ];

  return (
    <div className="flex justify-center items-center py-[30px]">
      <div className="max-w-[1380px] w-full  flex flex-col  items-center gap-[20px] pt-[30px] min-h-[800px]">
        <div className=" w-full  flex justify-between gap-2 text-white">
          <div className="flex rounded-2xl border border-solid border-[#6C757D] py-[10px] px-[30px] items-center text-[#6C757D] w-[80%]">
            <FiSearch />
            <input
              placeholder="Search by address ..."
              className="px-4 py-2 bg-transparent border-none focus:outline-none w-full"
            />
            <span>⌘K</span>
          </div>
          <Button>Find Trust Score</Button>
        </div>

        <div className=" w-full flex justify-between items-center  p-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-semibold">Ryan Modesto</div>
            <div className="px-7 py-2 bg-[#1A1A31] rounded-full">0xb9df...9811F</div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A31]">
              <IoCopy />
            </div>
          </div>

          <div className="flex gap-2 items-center mt-2 space-x-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A31]">
              <SlSocialLinkedin />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A31]">
              <BsTwitterX />
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-6">
            <div className="text-lg ">
              <div className=" text-[#A8B1C8] pb-2">Total borrowed</div>
              <div className="text-[#A8B1C8]">Total repaid</div>
            </div>
            <div className="text-lg ">
              <div className="text-white pb-2">$2.03K</div>
              <div className="text-white">$2.03K</div>
            </div>
          </div> */}
        </div>
        <div className="my-10 flex gap-4 w-full">
          <div className=" w-[600px] border border-[#1A1A31] rounded-lg flex flex-col gap-6 px-8 py-14 justify-center ">
            <div className="text-lg font-bold">Overview</div>
            <div className="flex justify-between ">
              <div className="">Your trust score</div>
              <div className="">72%</div>
            </div>
            <div className="flex justify-between  ">
              <div className="">
                <div className="pb-2">Last zk-proof generated</div>

                <div className="flex gap-4">
                  <Image width={20} height={20} className="cursor-pointer" src="/reclaim.svg" alt="" />
                  <div className="text-sm text-[#A8B1C8]">
                    Zk-proofs powered by <b>Reclaim</b>
                  </div>
                </div>
              </div>
              <div className="self-center">15/02/2024</div>
            </div>
          </div>
          <div className=" w-[600px] border border-[#1A1A31] rounded-lg flex flex-col gap-6 px-8 py-14 justify-center ">
            <div className="text-lg font-bold">Providers</div>
            <div className="flex justify-between ">
              <div className="">Total providers</div>
              <div className="">3</div>
            </div>
            <div className="flex justify-between   ">
              <div className="">Total verified providers</div>
              <div className="">1</div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 justify-stretch gap-4 py-2 text-lg text-[#A8B1C8] ">
          <span className="">Provider</span>
          <span className=" text-center">Total zk proof generated</span>
          <span className=" text-center">Actions</span>
        </div>

        {providerData.map((item, index) => (
          <>
            <div key={index} className="w-full grid grid-cols-3 justify-stretch gap-4 py-2 ">
              <div className="flex gap-4 items-center text-xl">
                <Image width={50} height={50} className="cursor-pointer" src={`${item.logo}`} alt="" />
                {item.provider}
              </div>
              <div className="w-[80%] mx-auto text-center py-4 bg-[#0F0F1C]">
                <div className="text-xl pb-6">{item.proofs}</div>
                <div className="text-gray-500 text-sm">Last zk-proof generated 15/02/2024</div>
              </div>
              <div className="flex items-center mx-auto">
                <button className="flex items-center gap-2 px-8 py-3 bg-transparent text-white border border-[#374B6D] text-base  rounded-full transition">
                  Go Verify
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Page;
