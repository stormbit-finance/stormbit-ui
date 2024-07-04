// @ts-nocheck
"use client";

import React, { useState } from "react";

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

function Page() {
  const [filter, setFilter] = useState("All");

  const loansData = [
    {
      id: 1,
      status: "Pending",
      details: {
        apr: "10",
        repayAmount: "1000",
        filledAmount: "1000",
        repayDeadline: "06/19/2024",
      },
    },
    {
      id: 2,
      status: "Executed",
      details: {
        apr: "10",
        repayAmount: "1000",
        filledAmount: "1000",
        repayDeadline: "06/19/2024",
      },
    },
    {
      id: 3,
      status: "Repaying",
      details: {
        apr: "10",
        repayAmount: "1000",
        filledAmount: "1000",
        repayDeadline: "06/19/2024",
      },
    },
  ];

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredLoans = filter === "All" ? loansData : loansData.filter(loan => loan.status === filter);

  return (
    <div className="flex flex-col items-center mx-6">
      <div className="w-full flex justify-end my-4">
        <select
          className="bg-transparent text-white px-4 py-2 border rounded-[8px]"
          onChange={handleFilterChange}
          value={filter}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Executed">Executed</option>
          <option value="Repaying">Repaying</option>
        </select>
      </div>
      {filteredLoans.map(loan => (
        <div key={loan.id} className="grid grid-cols-6 gap-4 mt-4 w-full bg-[#2D2D2D] rounded-[5px]">
          <div className="col-span-1 flex items-center px-7">
            <p>{loan.details.apr}% APR</p>
          </div>
          <div className="col-span-1">
            <p className="text-[#A4A4A4] text-sm">Repay Amount</p>
            <p> ${loan.details.repayAmount}</p>
          </div>
          <div className="col-span-1">
            <p className="text-[#A4A4A4] text-sm">APR</p>
            <p>{loan.details.apr}%</p>
          </div>
          <div className="col-span-1">
            <p className="text-[#A4A4A4] text-sm">Filled Amount</p>
            <p>${loan.details.filledAmount}</p>
          </div>
          <div className="col-span-1">
            <p className="text-[#A4A4A4] text-sm">Repay Deadline</p>
            <p>{loan.details.repayDeadline} (10 days)</p>
          </div>
          <div
            className={`col-span-1 text-center text-[#AE9FFD] flex items-center justify-center ${
              loan.status === "Pending" ? "text-yellow-400" : loan.status === "Executed" ? "text-green-400" : ""
            }`}
          >
            <p className="text-sm">{loan.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
