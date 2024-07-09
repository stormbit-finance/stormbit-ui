// @ts-nocheck
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { decodeFunctionData } from "viem";
import { useWaitForTransaction } from "wagmi";
import Button from "~~/components/Button/Button";
import ModalContainer from "~~/components/ModalContainer/ModalContainer";
import TermForm from "~~/components/TermForm/TermForm";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

// @ts-nocheck

const Page = () => {
  const router = useRouter();
  const [terms, setTerms] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedHook, setSelectedHook] = useState("");
  const [commission, setCommission] = useState("");

  const { writeAsync: createTerm, data: txReceipt } = useScaffoldContractWrite({
    contractName: "StormbitLendingManager",
    functionName: "createLendingTerm",
    args: [BigInt(commission), selectedHook],
    value: BigInt(0),
    onBlockConfirmation: txReceipt => {
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
    navigator.clipboard.writeText(`http://terms/detail?id=${termId}`);
    alert("Link copied to clipboard!");
  };

  const closeModal = () => {
    setShowConfirmModal(false);
  };

  const closeModalS = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="h-full w-full pt-[100px]  max-w-[1920px] ">
      <TermForm onSubmit={handleAddTerm} onCancel={router.back} />

      {showConfirmModal && (
        <ModalContainer onClick={closeModal}>
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
        <ModalContainer onClick={closeModalS}>
          <div className="p-4 rounded-lg flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            <h2 className="text-lg">Terms Created Successfully</h2>
            <p className="text-[#858BA2] m-0 text-sm">Click the link below to view term</p>
            <div className="flex items-center m-4">
              <a
                href={`http://terms/detail?id=${1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black border border-[#6C757D] py-3 px-6 underline rounded-l-lg"
              >
                http://terms/detail?id={1}
              </a>
              <button
                onClick={handleCopyLink}
                className="bg-[#D0C8FF] text-white text-xs px-3 py-4 rounded-r-lg border border-[#D0C8FF]"
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
