import React from "react";
import Button from "../Button/Button";

const BorrowComponent = ({ setIsModalOpen }: any) => {
  return (
    <div className="flex flex-col justify-between gap-4 px-8 py-6  text-white container-total">
      <span className="text-2xl">Borrow</span>
      <div className="flex mt-4 justify-between border-y-1 border-[#374B6D] text-[#374B6D] py-7 px-4 mb-7">
        <span>Position status</span>
        <span>-</span>
      </div>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Request Loan
      </Button>
    </div>
  );
};

export default BorrowComponent;
