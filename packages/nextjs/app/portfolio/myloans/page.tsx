import React from "react";
import { data } from "~~/data/data";

function MyLoans() {
  const getStatusColorClass = (status: any) => {
    switch (status) {
      case "Pending":
        return "text-[#FFA876]";
      case "Active":
        return "text-[#66A6A4]";
      default:
        return "text-[#CD4545]";
    }
  };
  return (
    <>
      <h1 className="text-4xl text-[#4A5056] font-bold">My loans</h1>
      <div className="w-[1450px] flex flex-col">
        <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
          <span className="w-[160px] text-center">Pool</span>
          <span className="w-[160px] text-center">Agreement</span>
          <span className="w-[160px] text-center">Next Due Date</span>
          <span className="w-[160px] text-center">Next Due Amount</span>
          <span className="w-[160px] text-center">Penalty</span>
          <span className="w-[160px] text-center">Cumulative Interest</span>
          <span className="w-[160px] text-center">Status</span>
        </div>
        {data.map((element, index) => (
          <>
            <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]" key={index}>
              <p className="w-[160px] text-center">{element.pool}</p>
              <div className="w-[160px] text-center flex gap-1 items-center justify-center">
                {element.agreement.map((agreement, agreementIndex) => (
                  <span
                    key={agreementIndex}
                    className={`rounded-[8px] p-2 ${
                      agreement === "Base"
                        ? "bg-[#F1F3F4]"
                        : agreement === "NFT"
                        ? "bg-[#F1F8FF]"
                        : agreement === "FT"
                        ? "bg-[#E8F5F4]"
                        : ""
                    }`}
                  >
                    {agreement}
                  </span>
                ))}
              </div>
              <p className="w-[160px] text-center">{element.date}</p>
              <p className="w-[160px] text-center">{element.amount}</p>
              <p className="w-[160px] text-center">{element.penalty} %</p>
              <p className="w-[160px] text-center">+ {element.interest} %</p>
              <p className={`w-[160px] text-center ${getStatusColorClass(element.status)} font-bold`}>
                {element.status}
              </p>
              <button className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10">Details</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default MyLoans;
