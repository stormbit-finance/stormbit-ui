"use client";

import type { NextPage } from "next";
import PoolSummary from "~~/components/PoolSummary/PoolSummary";
import SummaryCard from "~~/components/SummaryCard/SummaryCard";
import { poolDataSummary } from "~~/data/data";

const Portfolio: NextPage = () => {
  return (
    <>
      <div className=" flex flex-col items-center ">
        <div className="max-w-[1200px] w-full p-[30px] ">
          <div className=" flex-col flex gap-[30px] py-[20px]">
            <span className="text-2xl font-bold">My points summary</span>
            <div className="flex gap-[20px]">
              <SummaryCard label={"Supply points"} points={0} />
              <SummaryCard label={"Borrow points"} points={0} />
              <SummaryCard label={"Early Repayment Bonus"} points={0} />
            </div>
          </div>
          <div className="flex flex-col gap-[30px] pt-[30px] pb-[50px]">
            <span className="text-2xl font-bold">My open positions</span>
            <div className="flex flex-col gap-[30px]">
              {poolDataSummary.map((poolData, index) => (
                <PoolSummary
                  key={index}
                  title={poolData.title}
                  date={poolData.date}
                  debtTotal={poolData.debtTotal}
                  repaidTotal={poolData.repaidTotal}
                  toPayTotal={poolData.toPayTotal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
