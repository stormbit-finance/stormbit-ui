"use client";

import Image from "next/image";
import type { NextPage } from "next";
import Analytics from "~~/components/Graph/Analytics";
import { lenders, loans } from "~~/data/data";

const Manager: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="max-w-[1200px] w-full px-[30px] ">
          <div className="flex flex-col gap-12">
            <div className="container-total">
              <Analytics></Analytics>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 py-8 text-white container-total w-[250px] px-9">
                <span className="text-xl">TVL</span>
                <span className="text-2xl font-bold">$32.3706</span>
              </div>
              <div className="flex flex-col gap-2 py-8 text-white container-total w-[250px] px-9">
                <span className="text-xl">APY</span>
                <span className="text-2xl font-bold">$32.3706</span>
              </div>
              <div className="flex flex-col gap-2 py-8 text-white container-total w-[250px] px-9">
                <span className="text-xl">Pool Usage</span>
                <span className="text-2xl font-bold">15%</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-white">Description</h3>
              <p className="w-full text-white">
                EduFunds Pool is a pool for students who wants to travel to web3 events and borrow money. They can then
                repay the amounts borrowed after participating to hackathons or any other events.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-3xl text-white">Lenders</h3>
              <div className="py-6 pl-8 text-white container-total h-fit ">
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
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl text-white">Approved Loan Request</h3>
              <div className="flex flex-col gap-4 px-10 py-10 pb-24 mb-16 text-white container-total">
                {loans.map((element, index) => (
                  <>
                    <div className="flex gap-2 text-lg text-white">
                      <span className="text-sm">{index + 1}</span>
                      <div className="flex justify-between w-full">
                        <span className="text-sm">{element.name}</span>
                        <span className="text-sm">{element.time}</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
