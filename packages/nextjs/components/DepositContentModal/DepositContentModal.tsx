import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import ModalContainer from "~~/components/ModalContainer/ModalContainer";

interface ModalProps {
  setIsModalDeposit: () => void;
}

const DepositContentModal: React.FC<ModalProps> = ({ setIsModalDeposit }) => {
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalDeposit();
    }
  };
  return (
    <ModalContainer onClick={handleCloseModal}>
      <div className="flex justify-between items-center border-b-1 border-[#374B6D] pb-[20px]">
        <span className="text-2xl">Deposit</span>
        <AiOutlineClose onClick={() => setIsModalDeposit()} className="cursor-pointer" />
      </div>
      <div className="flex justify-between border border-[#374B6D] rounded-[18px] p-4 my-6 text-[#4A5056] ">
        <div className="flex flex-col justify-center gap-4">
          <input type="text" className="text-4xl bg-transparent border-none focus:outline-none" placeholder="0"></input>
          <span className="text-xl">Balance : 0.67 (Max)</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-white text-2xl">
            <Image src="/DAI.png" alt="Dai" width={45} height={45}></Image>
            <span>DAI</span>
          </div>
        </div>
      </div>
      <Button onClick={() => setIsModalDeposit()}>Deposit</Button>
    </ModalContainer>
  );
};

export default DepositContentModal;
