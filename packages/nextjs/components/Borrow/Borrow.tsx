import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";

function Borrow() {
  const [selectedAgreement, setSelectedAgreement] = useState<string>("baseChain");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleAgreementClick = (agreement: string) => {
    setSelectedAgreement(agreement);
  };

  useEffect(() => {
    renderDefaultContent();
  }, []);

  const renderDefaultContent = () => {
    setSelectedAgreement("baseChain");
  };

  return (
    <div className="flex flex-col text-[#4A5056]">
      <div className="flex flex-col">
        <span className="text-[#4A5056] font-bold my-2">Amount to Borrow</span>
        <div className="flex border border-solid border-[#EAEBEF] rounded-[5px] justify-between">
          <input type="text" className="p-1 focus:outline-none"></input>
          <div className="flex items-center justify-center px-1">
            <ul className="main-menu">
              <li className="relative main-menu-item">
                <button onClick={toggleDropdown} className="flex items-center justify-center gap-1 dropdown-trigger">
                  <Image src="/USDT.png" alt="ether" width={17} height={17}></Image>
                  USDT<span className="arrow-down">&#9662;</span>
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#"> USDT</a>
                    </li>
                    <li>
                      <a href="#"> USDT</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <span className="text-xs">Balance 0.001 ETH</span>
      </div>
      <div className="flex flex-col gap-4 my-6">
        <span className="text-[#4A5056] font-bold">Supported Agreement</span>
        <div className="flex gap-8">
          <div className="flex gap-4">
            <input type="checkbox" className="bg-red-700 rounded-full" />
            <span>Base Agreement</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <span>NFT Agreement</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <span>FT Agreement</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <span className="text-[#4A5056] font-bold">Aggreement Settings</span>
        <div className="flex gap-4">
          <button
            onClick={() => handleAgreementClick("baseChain")}
            className={`bg-${
              selectedAgreement === "baseChain" ? " bg-[#17344F] text-white text-sm" : "white"
            } py-2 px-4 rounded-[8px]`}
          >
            Base Chain Agreement
          </button>
          <button
            onClick={() => handleAgreementClick("nft")}
            className={`bg-${
              selectedAgreement === "nft" ? " bg-[#17344F] text-white text-sm" : "white"
            } py-2 px-4 rounded-[8px]`}
          >
            NFT Agreement
          </button>
          <button
            onClick={() => handleAgreementClick("ft")}
            className={`bg-${
              selectedAgreement === "ft" ? " bg-[#17344F] text-white text-sm" : "white"
            } py-2 px-4 rounded-[8px]`}
          >
            FT Agreement
          </button>
        </div>
        <div>
          {selectedAgreement === "baseChain" && (
            <div className="flex flex-col">
              <span>Payment Schedule</span>
              <div className="flex border border-solid border-[#EAEBEF] rounded-[5px] justify-between">
                <input type="text" className="p-1 focus:outline-none"></input>
                <div className="flex items-center justify-center px-1">
                  <ul className="main-menu">
                    <li className="relative main-menu-item">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-center gap-1 dropdown-trigger"
                      >
                        month<span className="arrow-down">&#9662;</span>
                      </button>
                      {isDropdownOpen && (
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#"> quater</a>
                          </li>
                          <li>
                            <a href="#"> year</a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <span>Penalty</span>
              <input type="text" />
            </div>
          )}
          {selectedAgreement === "nft" && (
            <div className="flex flex-col">
              <span>NFT Address</span>
              <input type="text" />
              <span>Token</span>
              <div className="flex border border-solid border-[#EAEBEF] rounded-[5px] justify-between">
                <input type="text" className="p-1 focus:outline-none"></input>
                <div className="flex items-center justify-center px-1">
                  <ul className="main-menu">
                    <li className="relative main-menu-item">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-center gap-1 dropdown-trigger"
                      >
                        <Image src="/DAI.png" alt="ether" width={17} height={17}></Image>
                        DAI<span className="arrow-down">&#9662;</span>
                      </button>
                      {isDropdownOpen && (
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#"> USDT</a>
                          </li>
                          <li>
                            <a href="#"> USDT</a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {selectedAgreement === "ft" && (
            <div className="flex flex-col">
              <span>Token</span>
              <div className="flex border border-solid border-[#EAEBEF] rounded-[5px] justify-between">
                <input type="text" className="p-1 focus:outline-none"></input>
                <div className="flex items-center justify-center px-1">
                  <ul className="main-menu">
                    <li className="relative main-menu-item">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-center gap-1 dropdown-trigger"
                      >
                        <Image src="/DAI.png" alt="ether" width={17} height={17}></Image>
                        DAI<span className="arrow-down">&#9662;</span>
                      </button>
                      {isDropdownOpen && (
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">DAI</a>
                          </li>
                          <li>
                            <a href="#">DAI</a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" bg-[#F3F7F9] p-5 text-[#17344F;]">
        <span className="font-bold">Order information</span>
        <div className="flex justify-between">
          <span>Supply Interest</span>
          <span>0.03 %</span>
        </div>
        <div className="flex justify-between">
          <span>Total Supply Amount</span>
          <span>0.001 ETH</span>
        </div>
      </div>
      <Button>Deposit</Button>
    </div>
  );
}

export default Borrow;
