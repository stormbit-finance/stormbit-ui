import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import "./supply.css";
import { waitForTransaction, writeContract } from "@wagmi/core";
import toast from "react-hot-toast";
import { formatUnits, parseEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldContract, useScaffoldContractRead } from "~~/hooks/scaffold-eth";

interface SupplyProps {
  poolAddress: string;
}
function Supply({ poolAddress }: SupplyProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [amount, setAmount] = useState<string>("");
  const account = useAccount();

  const { data: mockToken } = useScaffoldContract({
    contractName: "MockToken",
  });
  const { data: LendingContract } = useScaffoldContract({
    contractName: "StormBitLending",
  });

  const { data: balance, isLoading: balanceLoading } = useScaffoldContractRead({
    contractName: "MockToken",
    functionName: "balanceOf",
    args: [account && account.address],
    watch: true,
  });

  const handleDeposit = async () => {
    try {
      const parsedAmount = parseEther(amount);
      let result = await writeContract({
        abi: mockToken!.abi,
        address: mockToken?.address as string,
        functionName: "approve",
        args: [poolAddress, parsedAmount],
      });
      toast.success("successfully approved tokens");
      await waitForTransaction({
        hash: result.hash,
      });
      result = await writeContract({
        abi: LendingContract!.abi,
        address: poolAddress as string,
        functionName: "stake",
        args: [mockToken!.address, parsedAmount],
      });
      toast.success(`successfully deposited tokens at tx ${result.hash}`);
    } catch (e) {
      console.log(e);
      toast.error("Failed deposit");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="font-bold">Amount to Supply</span>

        <div className="flex border border-solid border-[#EAEBEF] rounded-[5px] justify-between px-4">
          <input
            type="number"
            className="p-1 w-[500px] focus:outline-none border-none bg-transparent"
            onChange={e => {
              setAmount(e.target.value);
            }}
          ></input>
          <div className="flex items-center justify-center">
            <ul className="main-menu">
              <li className="relative main-menu-item">
                <button onClick={toggleDropdown} className="flex items-center justify-center dropdown-trigger">
                  <Image src="/ZBUtoken.png" alt="ether" width={17} height={17} className="mx-2 w-17 h-17"></Image>
                  ZBU<span className="arrow-down">&#9662;</span>
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#"> ZBU 1</a>
                    </li>
                    <li>
                      <a href="#"> ZBU 2</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <span>
          {balanceLoading
            ? "Loading balance..."
            : `Balance ${(balance && parseFloat(formatUnits(balance, 18)).toFixed(5)) || 0} ZBU`}
        </span>
      </div>
      <div className="my-8 bg-[#313066] p-5 text-[#ffffff]">
        <span className="font-bold">Order information</span>
        <div className="flex justify-between">
          <span>Supply Interest</span>
          <span>1.23 %</span>
        </div>
        <div className="flex justify-between">
          <span>Total Supply Amount</span>
          <span>0.001 ZBU</span>
        </div>
      </div>
      <Button onClick={handleDeposit}>Deposit</Button>
    </div>
  );
}

export default Supply;
