import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import "./supply.css";

function Supply() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="font-bold">Amount to Supply</span>

        <div className="flex border border-solid border-[#EAEBEF] rounded-[5px] justify-between">
          <input type="text" className="p-1 focus:outline-none"></input>
          <div className="flex items-center justify-center">
            <ul className="main-menu">
              <li className="relative main-menu-item">
                <button onClick={toggleDropdown} className="flex items-center justify-center dropdown-trigger">
                  <Image src="/ether.png" alt="ether" width={17} height={17}></Image>
                  ETH<span className="arrow-down">&#9662;</span>
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#"> ETH 1</a>
                    </li>
                    <li>
                      <a href="#"> ETH 2</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <span>Balance 0.001 ETH</span>
      </div>
      <div className="my-8 bg-[#F3F7F9] p-5 text-[#17344F;]">
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

export default Supply;
