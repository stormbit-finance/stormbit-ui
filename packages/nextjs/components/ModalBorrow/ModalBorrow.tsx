import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { Select, SelectItem } from "@nextui-org/react";
import AgreementCheckbox from "~~/components/AgreementCheckbox/AgreementCheckbox";
import BorrowInput from "~~/components/BorrowInput/BorrowInput";
import PaymentSchedule from "~~/components/PaymentSchedule/PaymentSchedule";

interface ModalProps {
  setIsModalOpen: () => void;
}

const ModalBorrow: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const [selectedView, setSelectedView] = useState("borrow");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const [reason, setReason] = useState("");

  const handleViewChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(event.target.value);
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
          <div className="flex gap-4 max-w-[180px] w-full">
            <Select
              radius="md"
              label=""
              placeholder=""
              style={{ backgroundColor: "#f5f5f5", border: "1px solid #ccc" }}
              defaultSelectedKeys={["borrow"]}
              className=""
              onChange={handleViewChange}
            >
              <SelectItem key="borrow" value="borrow">
                Borrow
              </SelectItem>
              <SelectItem key="repay" value="repay">
                Repay
              </SelectItem>
            </Select>
          </div>
        </div>
        <div className="content">
          {selectedView === "borrow" && (
            <div className="mt-8">
              <BorrowInput />
              <PaymentSchedule label="Payment Schedule" />
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
                  <AgreementCheckbox
                    label="Simple Agreement"
                    value="Simple"
                    isSelected={selectedCheckbox === "Simple"}
                    isDisabled={selectedCheckbox === "Simple"}
                    onClick={() => handleCheckboxChange("Simple")}
                  />
                  <AgreementCheckbox
                    label="ERC721 Agreement"
                    value="ERC721"
                    isSelected={selectedCheckbox === "ERC721"}
                    isDisabled={selectedCheckbox === "ERC721"}
                    onClick={() => handleCheckboxChange("ERC721")}
                  />
                  <AgreementCheckbox
                    label="ERC20 Agreement"
                    value="ERC20"
                    isSelected={selectedCheckbox === "ERC20"}
                    isDisabled={selectedCheckbox === "ERC20"}
                    onClick={() => handleCheckboxChange("ERC20")}
                  />
                </div>
              </div>
              {selectedCheckbox === "Simple" && (
                <>
                  <div className="flex flex-col flex-1 gap-4 mt-5">
                    <label htmlFor="TypeBorrow">Type</label>
                    <div className="flex items-center w-full">
                      <Select
                        defaultSelectedKeys={["Select type"]}
                        style={{ marginLeft: "8px", maxWidth: "100px" }}
                        className="focus:outline-none  border-none w-full "
                        color={"primary"}
                      >
                        <SelectItem key="01" value="01">
                          Bussines
                        </SelectItem>
                        <SelectItem key="02" value="02">
                          Personal
                        </SelectItem>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-4 mt-5">
                    <label htmlFor="Reason">Reason</label>
                    <div className="flex items-center bg-transparent border-[#374B6D] focus:outline-none">
                      <textarea
                        className="w-full p-2 bg-transparent border-[#374B6D] rounded-[14px]"
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
