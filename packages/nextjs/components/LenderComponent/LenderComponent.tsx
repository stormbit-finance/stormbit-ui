import { useState } from "react";
import Link from "next/link";
import { formatEther } from "viem";

interface LenderComponentProps {
  term: any;
}
const LenderComponent: React.FC<LenderComponentProps> = ({ term }) => {
  const [APR] = useState(() => Math.floor(Math.random() * (20 - 8 + 1)) + 8);
  const [APY] = useState(() => Math.floor(Math.random() * (20 - 8 + 1)) + 8);
  return (
    <>
      <Link
        href={`/lender/${term?.id || 0}`}
        className="bg-[#2F2F2F] border border-[#444444] flex flex-col p-5 rounded-[11px] text-white w-[400px]"
      >
        <div className=" border-b-1 border-[#444444] flex justify-between pb-4">
          <div className="flex flex-col">
            <span className="text-xl">{APR}% APR</span>
            <span className="text-sm">managed by {term?.owner}</span>
          </div>
          <div>
            <button className="button-gradient py-1 px-6 rounded-[36px] text-[9px]">No hooks</button>
          </div>
        </div>
        <div className="flex flex-col my-4 gap-4">
          <div className="flex justify-between">
            <span>30 days Average Supply APY</span>
            <span>{APY}%</span>
          </div>
          <div className="flex justify-between">
            <span>Total Deposited</span>
            <span>${parseFloat(formatEther(term?.total_deposit)).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Borrowed</span>
            <span>${parseFloat(formatEther(term?.total_loaned)).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Lender Comission</span>
            <span>{term?.comission}%</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LenderComponent;
