"use client";

import MyLoans from "./myloans/page";
import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-6 rounded-[5px] h-[45rem] bg-white container-market p-10">
        <MyLoans></MyLoans>
      </div>
    </>
  );
};

export default Portfolio;
