"use client";

import React, { useEffect, useState } from "react";
import ModalPay from "../modalPay/modalPay";
import { useAccount, useContractReads } from "wagmi";
import { data } from "~~/data/data";
import { useScaffoldContract, useScaffoldContractRead } from "~~/hooks/scaffold-eth";

function MyLoans() {
  const [modalPay, setModalPay] = useState(false);
  const [loanList, setLoanList] = useState([] as any[]);

  const account = useAccount();
  const { data: poolAddresses, isLoading: poolAddressesLoading } = useScaffoldContractRead({
    contractName: "StormBitCore",
    functionName: "getPools",
    watch: true,
  });

  const { data: LendingContract } = useScaffoldContract({
    contractName: "StormBitLending",
  });
  const { data: pools, isLoading: poolsLoading } = useContractReads({
    contracts:
      LendingContract && poolAddresses
        ? poolAddresses.map(pool => {
            return {
              address: pool,
              abi: LendingContract.abi,
              functionName: "getPoolData",
            };
          })
        : [],
  });

  const { data: loans, isLoading: loansLoading } = useContractReads({
    contracts:
      LendingContract && poolAddresses && account
        ? poolAddresses.map(pool => {
            return {
              address: pool,
              abi: LendingContract.abi,
              functionName: "getLoansDatas",
            };
          })
        : [],
  });

  useEffect(() => {
    if (loans && pools && account.address && loans.length > 0) {
      const filteredLoans = loans
        .filter(loan => loan && loan.result[0].length > 0)
        .map((loan, index) => {
          return {
            borrower: loan.result[0][0].borrower,
            poolName: pools[index].result.name,
            agreements: ["Base"],
            nextDate: 0,
            nextAmount: 0,
            penalty: 0,
            interest: 0,
            status: loan.result[1][0],
            id: loan.result[0][0].loanId,
          };
        });
      const poolsOfBorrower = filteredLoans.filter(
        loan => loan.borrower.toLowerCase() === account.address.toLowerCase(),
      );
      setLoanList(poolsOfBorrower);
    }
  }, [loans, pools, account]);

  const getStatusColorClass = (status: any) => {
    switch (status) {
      case 1: // active in contract, means pending
        return "text-[#FFA876]";
      case 4: // succeeded
        return "text-[#66A6A4]";
      default: // rejected
        return "text-[#CD4545]";
    }
  };
  return (
    <>
      <h1 className="text-4xl text-[#4A5056] font-bold mb-4">My loans</h1>
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
        {loanList.map((loan, index) => (
          <>
            <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]" key={index}>
              <p className="w-[160px] text-center">{loan.poolName}</p>
              <div className="w-[160px] text-center flex gap-1 items-center justify-center">
                {loan.agreements.map((agreement, agreementIndex) => (
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
              <p className="w-[160px] text-center">{loan.nextDate}</p>
              <p className="w-[160px] text-center">{loan.nextAmount}</p>
              <p className="w-[160px] text-center">{loan.penalty} %</p>
              <p className="w-[160px] text-center"> -{loan.interest} %</p>
              <p className={`w-[160px] text-center ${getStatusColorClass(loan.status)} font-bold`}>
                {loan.status == 1 ? "Pending" : loan.status == 3 ? "Rejected" : "Active"}
              </p>
              <button
                className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10"
                onClick={() => setModalPay(true)}
              >
                Pay
              </button>
              {modalPay && <ModalPay setModalPay={() => setModalPay(false)}></ModalPay>}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default MyLoans;
