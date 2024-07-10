"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

const Page = () => {
  const [terms, setTerms] = useState<string[]>([]);
  const router = useRouter();

  const goCreateTerm = () => {
    router.push("/createTerms");
  };

  return (
    <>
      {terms.length === 0 && (
        <div className="h-screen flex flex-col justify-center items-center">
          <p className="text-xl">No Terms Here</p>
          <button onClick={goCreateTerm} className="bg-[#D0C8FF] text-black px-12 py-2">
            Create Terms
          </button>
        </div>
      )}

      {terms.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-6 gap-4 mt-4 w-full bg-[#2D2D2D] rounded-[5px]">
            <div className="col-span-1 flex items-center px-7">
              <p>10% APR</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">Total Amount</p>
              <p> $1000</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">Total Loans</p>
              <p>$1000</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">Total Lending</p>
              <p>$1000</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">APR</p>
              <p>10%</p>
            </div>
            <div className="col-span-1 text-right flex items-center">
              <p className="text-[#AE9FFD] text-sm">More details</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
