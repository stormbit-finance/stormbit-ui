"use client";

import { useState } from "react";
import Cheap from "~~/components/Cheap/Cheap";
import { data } from "~~/data/data";

function MyPools() {
  const [showCheap, setShowCheap] = useState(false);

  const handleDetailsClick = () => {
    setShowCheap(true);
  };

  if (showCheap) {
    return <Cheap />;
  }

  return (
    <>
      <h1 className="text-4xl text-[#4A5056] font-bold">My pools</h1>
      <div className="w-[1200px] flex flex-col">
        <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
          <span className="w-[160px] text-center">Pool</span>
          <span className="w-[160px] text-center">Available liquidity</span>
          <span className="w-[160px] text-center">Deposit Value</span>
          <span className="w-[160px] text-center">Voting Power</span>
          <span className="w-[160px] text-center"></span>
        </div>
        {data.map(element => (
          <div key={element.pool} className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
            <p className="w-[160px] text-center">{element.pool}</p>
            <div className="w-[160px] text-center flex gap-1 items-center justify-center">
              <span className="">10.01K</span>
            </div>
            <p className="w-[160px] text-center">0.00</p>
            <p className="w-[160px] text-center">10%</p>
            <p className="w-[160px] text-center"></p>
            <button
              onClick={handleDetailsClick}
              className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyPools;
