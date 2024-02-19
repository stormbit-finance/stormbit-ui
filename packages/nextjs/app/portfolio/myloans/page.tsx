"use client";

import React, { useEffect, useState } from "react";
import ModalPay from "../modalPay/modalPay";
import { getPublicClient, writeContract } from "@wagmi/core";
import toast from "react-hot-toast";
import { keccak256, parseAbiItem, toBytes } from "viem";
import { useAccount, useChainId, useContractReads } from "wagmi";
import { data } from "~~/data/data";
import { useScaffoldContract, useScaffoldContractRead } from "~~/hooks/scaffold-eth";

function MyLoans() {
  const [modalPay, setModalPay] = useState(false);
  const [loanList, setLoanList] = useState([] as any[]);
  const account = useAccount();
  const chainId = useChainId();
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
    watch: true,
  });

  useEffect(() => {
    if (loans && pools && account.address && loans.length > 0) {
      const uniqueLoans = [];
      loans.forEach((loansOfPool, index) => {
        if (loansOfPool.result && loansOfPool.result[0].length > 0) {
          loansOfPool.result[0].forEach((loan, i) => {
            uniqueLoans.push({
              borrower: loan.borrower,
              poolName: pools[index].result.name,
              pool: poolAddresses![index],
              agreements: ["Base"],
              nextDate: 0,
              nextAmount: 0,
              penalty: 0,
              interest: 0,
              status: loansOfPool.result[1][i],
              id: loan.loanId,
            });
          });
        }
      });
      const loansOfBorrower = uniqueLoans.filter(loan => loan.borrower.toLowerCase() === account.address.toLowerCase());
      setLoanList(loansOfBorrower);
    }
  }, [loans]);

  const executeLoanAndWithdraw = async (loanId: string, pool: string) => {
    if (chainId) {
      const publicClient = getPublicClient({ chainId });
      const blockNow = await publicClient.getBlockNumber();
      const events = await publicClient.getLogs({
        address: pool,
        event: parseAbiItem(
          "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)",
        ),
        fromBlock: blockNow - BigInt(2000),
        toBlock: "latest",
      });

      // filter the one with id loanId
      const proposal = events.filter(event => event.args.proposalId == loanId);
      if (proposal.length == 0) {
        toast.error("No proposal found for this loan");
        return;
      } else {
        try {
          const result = await writeContract({
            abi: LendingContract!.abi,
            address: pool,
            functionName: "execute",
            args: [
              proposal[0].args.targets,
              proposal[0].args.values,
              proposal[0].args.calldatas,
              keccak256(proposal[0].args.description),
            ],
          });
          toast.success(`successfully executed with tx hash : ${result.hash} `);
        } catch (e) {
          console.log(e);
          toast.error("Failed to execute");
        }
      }
    } else {
      toast.error("Please connect to a network");
    }
  };

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
                {loan.status == 1
                  ? "Pending"
                  : loan.status == 3
                  ? "Rejected"
                  : loan.status == 7
                  ? "Active"
                  : "To Execute"}
              </p>
              <button
                className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10"
                onClick={() => {
                  if (loan.status != 7) {
                    executeLoanAndWithdraw(loan.id, loan.pool);
                  } else {
                    setModalPay(true);
                  }
                }}
              >
                {loan.status == 4 ? "Execute & Withdraw" : "Pay"}
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
