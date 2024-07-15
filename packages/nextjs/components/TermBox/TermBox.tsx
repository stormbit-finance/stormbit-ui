import React from "react";
import { useRouter } from "next/navigation";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import useTermData from "~~/hooks/gql/useTermData";

interface TermBoxProps {
  termId: number | string;
}

const TermBox: React.FC<TermBoxProps> = ({ termId }) => {
  const account = useAccount();
  const router = useRouter();

  const { aggregatedData: termData } = useTermData(termId.toString() || "", account.address || "");

  return (
    <div className="grid grid-cols-6 gap-4 mt-4 w-full bg-[#2D2D2D] rounded-[5px]">
      <div className="col-span-1 flex items-center px-7">
        <p>10% APR</p>
      </div>
      <div className="col-span-1">
        <p className="text-[#A4A4A4] text-sm">Total Amount</p>
        <p>${Number(formatEther(termData?.totalDeposit || 0n) + Number(formatEther(termData?.totalLoaned || 0n)))}</p>
      </div>
      <div className="col-span-1">
        <p className="text-[#A4A4A4] text-sm">Total Loans</p>
        <p>${formatEther(termData?.totalDeposit || 0n)}</p>
      </div>
      <div className="col-span-1">
        <p className="text-[#A4A4A4] text-sm">Total Lending</p>
        <p>${formatEther(termData?.totalLoaned || 0n)}</p>
      </div>
      <div className="col-span-1">
        <p className="text-[#A4A4A4] text-sm">APR</p>
        <p>10%</p>
      </div>
      <div className="col-span-1 text-right flex items-center">
        <p
          onClick={() => {
            router.push(`/lender/${termId || 0}`);
          }}
          className="text-[#AE9FFD] text-sm cursor-pointer"
        >
          More details
        </p>
      </div>
    </div>
  );
};

export default TermBox;
