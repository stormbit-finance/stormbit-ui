import React, { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import "./ModalBorrow.css";
import BorrowInput from "~~/components/BorrowInput/BorrowInput";
import CustomCheckbox from "~~/components/CustomCheckbox/CustomCheckbox";
import CustomSelect from "~~/components/CustomSelect/CustomSelect";
import { options, optionsPayment, optionsType } from "~~/data/data";

interface ModalProps {
  setIsModalOpen: () => void;
}

const ModalBorrow: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const [selectedView, setSelectedView] = useState("borrow");
  const [selectedPayment, setSelectedPayment] = useState("month");
  const [selectedType, setSelectedType] = useState("Select type");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const [reason, setReason] = useState("");

  const handleViewChange = (value: string) => {
    setSelectedView(value);
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedCheckbox(value);
  };

  const handleReasonChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReason(event.target.value);
  };
  const handlePayment = (value: string) => {
    setSelectedPayment(value);
  };
  const handleType = (value: string) => {
    setSelectedType(value);
  };

  return (
    <div className="container-modal">
      <div className="content-modal">
        <div className="flex gap-20 border-b-1 border-[#374B6D] pb-6 justify-between">
          <div>
            <span>Borrow</span>
          </div>
          <div className="flex gap-4 max-w-[180px] w-full text-white">
            <CustomSelect options={options} defaultValue="borrow" onChange={handleViewChange} />
          </div>
        </div>
        <div className="content">
          {selectedView === "borrow" && (
            <div className="mt-8">
              <BorrowInput />
              <div className="flex flex-col flex-1 gap-4 mt-5 ">
                <label htmlFor="campo3">Payment Schedule</label>
                <div className="flex items-center justify-between border w-full p-2 border-[#374B6D] rounded-[14px] bg-transparent">
                  <div className="flex justify-center items-center">
                    <input
                      type="text"
                      id="campo1"
                      name="campo1"
                      className="bg-transparent border-none p-2 focus:outline-none w-full"
                      autoComplete="off"
                      maxLength={10}
                    />
                  </div>
                  <CustomSelect
                    options={optionsPayment}
                    placeholder={selectedPayment}
                    onChange={handlePayment}
                    showBorder={false}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-4 mt-5">
                <label htmlFor="campo3">Penalty</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="campo1"
                    name="campo1"
                    className="w-full p-2 bg-transparent border-[#374B6D] focus:outline-none rounded-[14px]"
                    autoComplete="off"
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <span>Agreement supported</span>
                <div className="flex gap-16">
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "Simple"}
                    isDisabled={selectedCheckbox == "Simple"}
                    onClick={() => handleCheckboxChange("Simple")}
                  >
                    Simple Agreement
                  </CustomCheckbox>
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "ERC721"}
                    isDisabled={selectedCheckbox == "ERC721"}
                    onClick={() => handleCheckboxChange("ERC721")}
                  >
                    ERC721 Agreement
                  </CustomCheckbox>
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "ERC20"}
                    isDisabled={selectedCheckbox == "ERC720"}
                    onClick={() => handleCheckboxChange("ERC20")}
                  >
                    ERC20 Agreement
                  </CustomCheckbox>
                </div>
              </div>
              {selectedCheckbox === "Simple" && (
                <>
                  <div className="flex flex-col flex-1 gap-4 mt-5">
                    <label htmlFor="TypeBorrow">Type</label>
                    <div className="flex items-center justify-between w-full border border-[#374B6D] rounded-[14px] bg-transparent p-2">
                      <span className="text-[#4A5056]">{selectedType}</span>
                      <CustomSelect options={optionsType} onChange={handleType} showBorder={false} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-4 mt-5">
                    <label htmlFor="Reason">Reason</label>
                    <div className="flex items-center ">
                      <textarea
                        className="w-full p-2 bg-transparent border border-[#374B6D] rounded-[14px] focus:outline-none placeholder-[#4A5056] "
                        placeholder="Write Reason"
                        value={reason}
                        onChange={handleReasonChange}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <Button onClick={() => setIsModalOpen()}>Borrow</Button>
      </div>
    </div>
  );
};

export default ModalBorrow;
