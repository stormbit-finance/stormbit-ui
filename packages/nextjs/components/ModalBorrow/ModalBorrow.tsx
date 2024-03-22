import React, { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import "./ModalBorrow.css";
import BorrowInput from "~~/components/BorrowInput/BorrowInput";
import CustomCheckbox from "~~/components/CustomCheckbox/CustomCheckbox";
import CustomSelect from "~~/components/CustomSelect/CustomSelect";
import { options, optionsMonth, optionsType } from "~~/data/data";

interface ModalProps {
  setIsModalOpen: () => void;
}

const ModalBorrow: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const [selectedView, setSelectedView] = useState("borrow");
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
                  <input
                    type="text"
                    id="campo1"
                    name="campo1"
                    className="w-full p-2 bg-transparent border-none focus:outline-none"
                  />
                  <CustomSelect options={optionsMonth} placeholder="Month" onChange={() => {}} showBorder={false} />
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
                    <div className="flex items-center w-full border border-[#374B6D] rounded-[14px] bg-transparent">
                      <CustomSelect
                        options={optionsType}
                        placeholder="Select Type"
                        onChange={() => {}}
                        showBorder={false}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-4 mt-5">
                    <label htmlFor="Reason">Reason</label>
                    <div className="flex items-center ">
                      <textarea
                        className="w-full p-2 bg-transparent border border-[#374B6D] rounded-[14px] focus:outline-none"
                        placeholder="Write Reason"
                        value={reason}
                        onChange={handleReasonChange}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <Button onClick={() => setIsModalOpen()}>Borrow Dai</Button>
      </div>
    </div>
  );
};

export default ModalBorrow;
