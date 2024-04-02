import React from "react";

interface PoolSummaryProps {
  title: string;
  date: string;
  debtTotal: string;
  repaidTotal: string;
  toPayTotal: string;
}

const PoolSummary: React.FC<PoolSummaryProps> = ({ title, date, debtTotal, repaidTotal, toPayTotal }) => {
  return (
    <div className="max-w-[1150px] w-full container-total p-[30px] justify-center flex flex-col items-center">
      <div className="flex justify-between w-full px-[30px]">
        <span className="text-3xl">{title}</span>
        <span className="text-[#A8B1C8]">{date}</span>
      </div>
      <div className="flex gap-[20px] justify-between max-w-[900px] w-full py-[20px]">
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <span className="text-[#A8B1C8] text-xl">Debt total</span>
          <span>{debtTotal}</span>
        </div>
        <div className="border-x border-x-[#374B6D] px-[50px] max-w-[400px] w-full flex flex-col justify-center items-center gap-[5px]">
          <span className="text-[#A8B1C8] text-xl">Repaid</span>
          <span>{repaidTotal}</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <span className="text-[#A8B1C8] text-xl">To pay</span>
          <span>{toPayTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default PoolSummary;
