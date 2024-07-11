"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { decodeEventLog } from "viem";
import Button from "~~/components/Button/Button";
import ModalContainer from "~~/components/ModalContainer/ModalContainer";
import TermForm from "~~/components/TermForm/TermForm";
import contractData from "~~/contracts/deployedContracts";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const Page = () => {
  const router = useRouter();
  const [term, setTerm] = useState({ commission: 0n, id: 0, lender: "0x0" });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedHook, setSelectedHook] = useState("");
  const [commission, setCommission] = useState("");
  const deployedContracts = contractData as GenericContractsDeclaration | null;
  const chainMetaData = deployedContracts?.[421614];

  const { writeAsync: createTerm, isLoading: createTermLoading } = useScaffoldContractWrite({
    contractName: "StormbitLendingManager",
    functionName: "createLendingTerm",
    args: [BigInt(commission), selectedHook],
    value: BigInt(0),
    onBlockConfirmation: txReceipt => {
      const event = decodeEventLog({
        abi: chainMetaData?.StormbitLendingManager.abi || [],
        data: txReceipt.logs[0].data,
        topics: txReceipt.logs[0].topics,
      });
      setTerm(event?.args as { commission: bigint; id: number; lender: string });
      setShowSuccessModal(true);
    },
    blockConfirmations: 0,
  });

  const handleConfirmAddTerm = () => {
    setShowConfirmModal(false);
    createTerm();
  };
  const handleAddTerm = (hookAddress: string, commision: string) => {
    setSelectedHook(hookAddress);
    setCommission(commision);
    setShowConfirmModal(true);
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/lender/${term?.id}`);
  };

  const closeModalConfirmation = () => {
    setShowConfirmModal(false);
  };

  const closeModalSucess = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setShowSuccessModal(false);
    }
  };

  return (
    <div className="h-full w-full pt-[100px]  max-w-[1920px] ">
      <TermForm createTermLoading={createTermLoading} onSubmit={handleAddTerm} onCancel={router.back} />

      {showConfirmModal && (
        <ModalContainer onClick={closeModalConfirmation}>
          <div className="w-[510px]">
            <p className="text-center pb-8">Transaction Confirmation</p>
            <span className="text-[#6C757D]">Hooks</span>
            <p>{selectedHook}</p>
            <span className="text-[#6C757D]">Commission</span>
            <p>{commission} %</p>
            <div className="flex justify-center gap-4 my-8">
              <Button onClick={handleConfirmAddTerm} size="large">
                Make Transaction
              </Button>
            </div>
          </div>
        </ModalContainer>
      )}
      {showSuccessModal && (
        <ModalContainer onClick={closeModalSucess}>
          <div className="p-4 rounded-lg flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            <h2 className="text-lg">Terms Created Successfully</h2>
            <p className="text-[#858BA2] m-0 text-sm">Click the link below to view term</p>
            <div className="flex items-center m-4">
              <div className="cursor-pointer text-black border border-[#6C757D] py-3 px-6 underline rounded-l-lg">
                <Link
                  className="text-white"
                  href={`lender/${term?.id}`}
                >{`http://localhost:3000/lender/${term?.id}`}</Link>
              </div>

              <button
                onClick={handleCopyLink}
                className="bg-[#D0C8FF] text-black text-xs px-6 py-4 rounded-r-lg border border-[#D0C8FF]"
              >
                Copy
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#858BA2] text-sm">Share to</span>
            <div className="bg-[#616161] rounded-full w-[20px] h-[20px] flex items-center justify-center">
              <FaXTwitter href="https://x.com/StormbitX" className="w-[10px] h-[10px] cursor-pointer" target="_blank" />
            </div>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default Page;
