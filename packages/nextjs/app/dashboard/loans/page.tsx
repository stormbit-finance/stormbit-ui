"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import useUserLoans from "~~/hooks/gql/useUserLoans";

function Page() {
  const account = useAccount();
  const [filter, setFilter] = useState("All");
  const [first] = useState(10);
  const [skip] = useState(0);
  const { loans } = useUserLoans(first, skip, account?.address || "");
  const [APR] = useState(() => Math.floor(Math.random() * (20 - 8 + 1)) + 8);
  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };
  return (
    <>
      {!loans ||
        (loans.length == 0 && <div className="flex flex-col items-center text-white h-screen mt-[10%]">No Data</div>)}

      {loans && loans.length > 0 && (
        <div className="flex flex-col items-center mx-6">
          <div className="w-full flex justify-end my-4">
            <select
              className="bg-transparent text-white px-4 py-2 border rounded-[8px]"
              onChange={handleFilterChange}
              value={filter}
            >
              <option className="bg-[#2F2F2F]" value="All">
                All
              </option>
              <option className="bg-[#2F2F2F]" value="Pending">
                Pending
              </option>
              <option className="bg-[#2F2F2F]" value="Executed">
                Executed
              </option>
              <option className="bg-[#2F2F2F]" value="Repaying">
                Repaying
              </option>
            </select>
          </div>
          {loans.map(loan => (
            <div key={loan.id} className="grid grid-cols-4 gap-4 mt-4 w-full bg-[#2D2D2D] rounded-[5px]">
              <div className="col-span-1 flex items-center px-7">
                <p>{APR}% APR</p>
              </div>
              <div className="col-span-1">
                <p className="text-[#A4A4A4] text-sm">Repay Amount</p>
                <p> ${formatEther(BigInt(loan.repayAssets))}</p>
              </div>

              <div className="col-span-1">
                <p className="text-[#A4A4A4] text-sm">Filled Amount</p>
                <p>${formatEther(BigInt(loan.assets))}</p>
              </div>
              <div className="col-span-1">
                <p className="text-[#A4A4A4] text-sm">Repay Deadline</p>
                {format(new Date(Number(loan.deadlineAllocate) * 1000), "dd/MM/yyyy HH:mm:ss a") || ""}
              </div>
              {/* <div
                className={`col-span-1 text-center text-[#AE9FFD] flex items-center justify-center ${
                  loan.status === "Pending" ? "text-yellow-400" : loan.status === "Executed" ? "text-green-400" : ""
                }`}
              >
                <p className="text-sm">{loan.status}</p>
              </div> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Page;
