"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "~~/components/Button/Button";
import TransactionButton from "~~/components/TransactionButton/TransactionButton";

function Page() {
  const [activeButton, setActiveButton] = useState("deposit");
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className="max-w-[1200px] w-full px-12 flex flex-col gap-9">
      <TransactionButton
        buttons={[
          {
            label: "Deposit",
            active: activeButton === "deposit",
            onClick: () => {
              handleButtonClick("deposit");
            },
          },
          {
            label: "Withdraw",
            active: activeButton === "withdraw",
            onClick: () => {
              handleButtonClick("withdraw");
            },
          },
          {
            label: "Borrow",
            active: activeButton === "borrow",
            onClick: () => {
              handleButtonClick("borrow");
            },
          },
        ]}
      />
      <div className="flex flex-col p-16 container-total">
        <div className="flex justify-between items-center border-b-1 border-[#374B6D] pb-[20px]">
          <span className="text-2xl">Deposit</span>
        </div>
        <div className="flex justify-between border border-[#374B6D] rounded-[18px] p-4 my-6 text-[#4A5056] ">
          <div className="flex flex-col justify-center gap-4">
            <input
              type="text"
              className="text-4xl bg-transparent border-none focus:outline-none"
              placeholder="0"
            ></input>
            <span className="text-xl">Balance : 0.67 (Max)</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-2xl text-white">
              <Image src="/DAI.png" alt="Dai" width={45} height={45}></Image>
              <span>DAI</span>
            </div>
          </div>
        </div>
        <Button>Deposit</Button>
      </div>
    </div>
  );
}

export default Page;
