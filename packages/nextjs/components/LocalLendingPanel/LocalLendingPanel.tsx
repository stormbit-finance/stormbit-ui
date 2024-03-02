"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { writeContract } from "@wagmi/core";
import toast from "react-hot-toast";
import { formatUnits } from "viem";
import { useContractRead } from "wagmi";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";

interface ModalProps {
  address: string;
  setShowCheap: () => void;
}

function LocalLendingPanel({ address, setShowCheap }: ModalProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Overview");
  const [loansDetails, setLoansDetails] = useState([]);

  const { data: LendingContract } = useScaffoldContract({
    contractName: "StormBitLending",
  });

  // const { writeAsync: approveLoan } = writecon({
  //   address: address,
  //   abi: LendingContract && LendingContract.abi,
  //   functionName: "castVote",
  //   args: [selectedLoanId, 1],
  // });

  const { data: poolData, isLoading: poolsLoading } = useContractRead({
    address: address,
    abi: LendingContract && LendingContract.abi,
    functionName: "getPoolData",
  });

  const { data: loans, isLoading: loansLoading } = useContractRead({
    address: address,
    abi: LendingContract && LendingContract.abi,
    functionName: "getLoansDatas",
  });

  useEffect(() => {
    if (loans && loans.length > 0) {
      const loanDetails = loans[0].map((loan, index) => {
        return {
          borrower: loan.borrower,
          loanId: loan.loanId,
          poolName: formatUnits(loan.amount, 18),
          status: loans[1][index] == 1 ? "Pending" : loans[1][index] == 3 ? "Rejected" : "Approved",
        };
      });
      setLoansDetails(loanDetails);
    }
  }, [loans]);

  const approveLoan = async (loanId: bigint) => {
    try {
      const result = await writeContract({
        abi: LendingContract!.abi,
        address: address as string,
        functionName: "castVote",
        args: [loanId, 1],
      });
      toast.success("successfully casted a vote");
    } catch (e) {
      console.log(e);
      toast.error("Already voted or Out Of voting period");
    }
  };

  const rejectLoan = async (loanId: bigint) => {
    try {
      const result = await writeContract({
        abi: LendingContract!.abi,
        address: address as string,
        functionName: "castVote",
        args: [loanId, 0],
      });
      toast.success("successfully casted a vote");
    } catch (e) {
      console.log(e);
      toast.error("Already voted or Out Of voting period");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-xl text-[#ffffff]">Summary</h4>
              <div className="flex gap-4 text-[#ffffff]">
                <div className="border border-solid border-[#EAEBEF] flex flex-col p-4 w-[260px]">
                  <span>Available liquidity</span>
                  <span className="font-bold">
                    {poolData && formatUnits(poolData.totalSupplied - poolData.totalBorrowed, 18)}
                  </span>
                </div>
                <div className="border border-solid border-[#EAEBEF] flex flex-col p-4 w-[260px]">
                  <span>Total Supply</span>
                  <span className="font-bold">{poolData && formatUnits(poolData.totalSupplied, 18)}</span>
                </div>
                <div className="border border-solid border-[#EAEBEF] flex flex-col p-4 w-[260px]">
                  <span>Total borrowed</span>
                  <span className="font-bold">{poolData && formatUnits(poolData.totalBorrowed, 18)}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between m-8">
              <h4 className="text-xl font-bold text-[#ffffff]">Top Voter</h4>
              <button className="border border-solid border-[#4A5056] w-[173px] rounded-[7px]">Delegate</button>
            </div>
            <div className="flex justify-between border border-solid border-[#EAEBEF] py-4 px-12">
              <div className="flex items-center gap-4">
                <span>1</span>
                <Image src="/icon.png" alt="icon" width={42} height={42} className="rounded-full"></Image>
                <span>012314af129bc01293810238172</span>
              </div>
              <button className="bg-transparent rounded-[7px] px-4 border">Vote</button>
            </div>
            <div className="flex justify-between border border-solid border-[#EAEBEF] py-4 px-12">
              <div className="flex items-center gap-4">
                <span>1</span>
                <Image src="/icon1.png" alt="icon" width={42} height={42} className="rounded-full"></Image>
                <span>012314af129bc01293810238172</span>
              </div>
              <button className="bg-transparent border rounded-[7px] px-4">Vote</button>
            </div>
          </div>
        );
      case "Exit Pool":
        return (
          <div className="flex gap-16 mb-12">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 w-[760px]">
                <div className="flex items-center justify-between">
                  <span>Pool Amount</span>
                  <span className="text-[#865AEF] text-xs">Max</span>
                </div>
                <div className="flex justify-between border border-solid border-[#EAEBEF] p-4 rounded-[5px]">
                  <input
                    type="text"
                    className="border-none w-[650px] focus:outline-none focus:border-none bg-transparent"
                    placeholder="0.01"
                  ></input>
                  <div className="flex gap-2">
                    <Image src="/ZBUtoken.png" alt="ether" width={17} height={17}></Image>
                    <span>ZBU</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[760px]">
                <div className="flex items-center justify-between">
                  <span>Estimated Output</span>
                </div>
                <div className="flex justify-between border border-solid border-[#EAEBEF] p-4 rounded-[5px]">
                  <input
                    type="text"
                    className="border-none w-[650px] focus:outline-none focus:border-none bg-transparent"
                    placeholder="0.01"
                  ></input>
                  <div className="flex gap-2">
                    <Image src="/ZBUtoken.png" alt="ether" width={17} height={17}></Image>
                    <span>ZBU</span>
                  </div>
                </div>
              </div>
              <Button size="large">Exit Pool</Button>
            </div>
            <div className="bg-transparent rounded-[5px] p-6 w-[600px] h-[160px] flex flex-col gap-5 border">
              <span className="font-bold text-[#ffffff]">Transaction information</span>
              <div className="flex justify-between">
                <span>Exchange Rate</span>
                <span>1 ETH = 0.05 ZBU</span>
              </div>
              <div className="flex justify-between">
                <span>Accumulate Interest</span>
                <span>0.03 %</span>
              </div>
            </div>
          </div>
        );
      case "Loan Applicant List":
        return (
          <div className="w-[1350px] flex flex-col">
            <div className="flex gap-20 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
              <span className="w-[160px] text-center">Address</span>
              <span className="w-[160px] text-center">Loan Amount</span>
              <span className="w-[160px] text-center">Status</span>
              <span className="w-[160px] text-center">Remarks</span>
              <span className="w-[160px] text-center"></span>
            </div>
            {loansDetails.map((loan, index) => {
              return (
                <div className="flex gap-20 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]" key={index}>
                  <p className="w-[160px] text-center">{loan.borrower}</p>
                  <p className="w-[160px] text-center">{loan.amount}</p>
                  <p className="w-[160px] text-center text-[#FFA876]">{loan.status}</p>
                  <p className="w-[160px] text-center">
                    {loan.status == "Pending" ? "Voting in progress" : "No Remarks"}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10"
                      onClick={() => {
                        rejectLoan(loan.loanId);
                      }}
                    >
                      Reject
                    </button>
                    <button
                      className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10"
                      onClick={() => {
                        approveLoan(loan.loanId);
                      }}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  };

  // const handleGoBack = () => {
  //   router.back();
  // };

  return (
    <>
      <div>
        <div
          className="flex gap-3 mb-8 text-white"
          onClick={() => {
            setShowCheap();
          }}
          style={{ cursor: "pointer" }}
        >
          <Image src="/arrow-left.png" alt="arrow" width={20} height={16}></Image>
          <span>Go back</span>
        </div>
        <h1 className="text-[#ffffff] text-4xl font-bold">Cheap Local Lending</h1>
        <div className="text-xl flex gap-4 border-b-2 border-[#F1F3F4] w-[1420px] my-8">
          <span
            className={`p-2 cursor-pointer ${activeTab === "Overview" ? "border-b-2 border-[#7c41b3]" : ""}`}
            onClick={() => setActiveTab("Overview")}
          >
            Overview
          </span>
          <span
            className={`p-2 cursor-pointer ${activeTab === "Exit Pool" ? "border-b-2 border-[#7c41b3]" : ""}`}
            onClick={() => setActiveTab("Exit Pool")}
          >
            Exit Pool
          </span>
          <span
            className={`p-2 cursor-pointer ${activeTab === "Loan Applicant List" ? "border-b-2 border-[#7c41b3]" : ""}`}
            onClick={() => setActiveTab("Loan Applicant List")}
          >
            Loan Applicant List
          </span>
        </div>
        <div>{renderContent()}</div>
      </div>
    </>
  );
}

export default LocalLendingPanel;
