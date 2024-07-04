// @ts-nocheck
"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "~~/components/Button/Button";
import ModalContainer from "~~/components/ModalContainer/ModalContainer";
import TermForm from "~~/components/TermForm/TermForm";

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

const Page = () => {
  const [terms, setTerms] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [newTerm, setNewTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [termId, setTermId] = useState(0);
  const [commission, setCommission] = useState("");

  const handleAddTerm = (option: string, term: string, commision: string) => {
    setSelectedOption(option);
    setNewTerm(term);
    setCommission(commision);
    setShowModal(true);
  };

  const handleConfirmAddTerm = () => {
    const newTermId = terms.length + 1;
    setTerms([...terms, `${selectedOption}: ${newTerm}`]);
    setTermId(newTermId);
    setShowModal(false);
    setShowForm(false);
    setShowSuccessModal(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`http://terms/detail?id=${termId}`);
    alert("Link copied to clipboard!");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalS = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      {!showForm && terms.length === 0 && (
        <div className="h-full flex flex-col justify-center items-center">
          <p className="text-xl">No Terms Here</p>
          <button onClick={() => setShowForm(true)} className="bg-[#D0C8FF] text-black px-12 py-2">
            Create Terms
          </button>
        </div>
      )}

      {!showForm && terms.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-6 gap-4 mt-4 w-full bg-[#2D2D2D] rounded-[5px]">
            <div className="col-span-1 flex items-center px-7">
              <p>10% APR</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">Total Amount</p>
              <p> $1000</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">Total Loans</p>
              <p>$1000</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">Total Lending</p>
              <p>$1000</p>
            </div>
            <div className="col-span-1">
              <p className="text-[#A4A4A4] text-sm">APR</p>
              <p>10%</p>
            </div>
            <div className="col-span-1 text-right flex items-center">
              <p className="text-[#AE9FFD] text-sm">More details</p>
            </div>
          </div>
        </div>
      )}

      {showForm && <TermForm onSubmit={handleAddTerm} onCancel={() => setShowForm(false)} />}

      {showModal && (
        <ModalContainer onClick={closeModal}>
          <div className="w-[510px]">
            <p>Transaction Confirmation</p>
            <span className="text-[#6C757D]">Hooks</span>
            <p>{selectedOption}</p>
            <span className="text-[#6C757D]">Commission</span>
            <p>{newTerm} %</p>
            <div className="flex justify-center gap-4 my-8">
              <Button onClick={handleConfirmAddTerm} backgroundColor="#D0C8FF" size="large">
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
                href={`http://terms/detail?id=${termId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black border border-[#6C757D] py-3 px-6 underline rounded-l-lg"
              >
                http://terms/detail?id={termId}
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
    </>
  );
};

export default Page;
