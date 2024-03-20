import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { Select, SelectItem } from "@nextui-org/react";

interface ModalProps {
  setIsModalOpen: () => void;
}

const ModalBorrow: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const [selectedView, setSelectedView] = useState("borrow");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const handleViewChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(event.target.value);
  };
  const handleClick = (value: string) => {
    if (selectedCheckbox !== value) {
      setSelectedCheckbox(value);
    }
  };
  return (
    <div className="container-modal">
      <div className="content-modal">
        <div className="flex gap-20 border-b-1 border-[#374B6D] pb-6">
          <div>
            <span>Borrow</span>
          </div>
          <div className="flex w-full gap-4">
            <Select
              radius="md"
              label=""
              placeholder=""
              defaultSelectedKeys={["borrow"]}
              className="max-w-[45%]"
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
              <div className="flex gap-7 border border-[#374B6D] rounded-[18px] p-4">
                <div className="flex flex-col justify-center gap-4">
                  <input type="text" className="bg-transparent border-none focus:outline-none" placeholder="0"></input>
                  <span>~ $0.00</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Image src="/DAI.png" alt="Dai" width={45} height={45}></Image>
                    <span>DAI</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-[#25253E] rounded-[8px] p-1">Half</button>
                    <button className="bg-[#25253E] rounded-[8px] p-1">Max</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-4 mt-5">
                <label htmlFor="campo3">Payment Schedule</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="campo1"
                    name="campo1"
                    className="w-full p-2 bg-transparent border-[#374B6D] focus:outline-none rounded-[14px]"
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
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <span>Agreement supported</span>
                <div className="flex gap-16">
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "Simple"}
                    isDisabled={selectedCheckbox == "Simple"}
                    onClick={() => handleClick("Simple")}
                  >
                    Simple Agreement
                  </CustomCheckbox>
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "ERC721"}
                    isDisabled={selectedCheckbox == "ERC721"}
                    onClick={() => handleClick("ERC721")}
                  >
                    ERC721 Agreement
                  </CustomCheckbox>
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "ERC20"}
                    isDisabled={selectedCheckbox == "ERC720"}
                    onClick={() => handleClick("ERC20")}
                  >
                    ERC20 Agreement
                  </CustomCheckbox>
                </div>
              </div>
            </div>
          )}
          {selectedView === "repay" && (
            <div className="mt-8">
              <div className="flex gap-7 border border-[#374B6D] rounded-[18px] p-4">
                <div className="flex flex-col justify-center gap-4">
                  <input type="text" className="bg-transparent border-none focus:outline-none" placeholder="0"></input>
                  <span>~ $0.00</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Image src="/DAI.png" alt="Dai" width={45} height={45}></Image>
                    <span>REPAY</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-[#25253E] rounded-[8px] p-1">Half</button>
                    <button className="bg-[#25253E] rounded-[8px] p-1">Max</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-4 mt-5">
                <label htmlFor="campo3">Payment Schedule</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="campo1"
                    name="campo1"
                    className="w-full p-2 bg-transparent border-[#374B6D] focus:outline-none rounded-[14px]"
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
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <span>Agreement supported</span>
                <div className="flex gap-16">
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "Simple"}
                    isDisabled={selectedCheckbox == "Simple"}
                    onClick={() => handleClick("Simple")}
                  >
                    Simple Agreement
                  </CustomCheckbox>
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "ERC721"}
                    isDisabled={selectedCheckbox == "ERC721"}
                    onClick={() => handleClick("ERC721")}
                  >
                    ERC721 Agreement
                  </CustomCheckbox>
                  <CustomCheckbox
                    isSelected={selectedCheckbox === "ERC20"}
                    isDisabled={selectedCheckbox == "ERC720"}
                    onClick={() => handleClick("ERC20")}
                  >
                    ERC20 Agreement
                  </CustomCheckbox>
                </div>
              </div>
            </div>
          )}
        </div>
        <Button onClick={() => setIsModalOpen()}>Borrow Dai</Button>
      </div>
    </div>
  );
};

export default ModalBorrow;
