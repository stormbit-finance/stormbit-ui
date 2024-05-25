"use client";

import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import Button from "~~/components/Button/Button";
import FilterProviderModal from "~~/components/FilterProviderModal/FIlterProviderModal";

const Reclaim: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [provider, setProvider] = useState("Filter");
  return (
    <div className="flex justify-center items-center py-[30px]">
      <div className="max-w-[1380px] w-full  flex flex-col  items-center gap-[20px] pt-[30px] min-h-[800px]">
        <div className="flex justify-between w-full ">
          <span className="text-2xl">Reclaim</span>
          <div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {provider} Provider
              <CiFilter />
            </Button>
          </div>
        </div>

        <div className="w-full border-y-1 border-[#374B6D] text-white py-7 px-4 mb-7">
          <div className="flex items-center">
            <div className="flex-1">Provider</div>
            <div className="px-10">Actions</div>
          </div>
        </div>

        <div className="w-full space-y-8">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <div className="w-16 h-16 p-2 flex items-center justify-center rounded-full bg-[#23233D]">
                <span>OKX</span>
              </div>
              <div className="ml-4">
                <div className="text-xl">OKX Provider 1</div>
                <div className="text-[#858BA2]">Description</div>
              </div>
            </div>
            <button className="flex gap-2 items-center px-8 py-3 bg-transparent text-white border border-[#374B6D] text-base  rounded-full transition">
              Go Verify
              <span>
                <GoArrowUpRight />
              </span>
            </button>
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <div className="w-16 h-16 p-2 flex items-center justify-center rounded-full bg-[#23233D]">
                <span>Bi</span>
              </div>
              <div className="ml-4">
                <div className="text-xl">Binance Provider 2</div>
                <div className="text-[#858BA2]">Description</div>
              </div>
            </div>
            <button className="flex gap-2 items-center px-8 py-3 bg-transparent text-white border border-[#374B6D] text-base  rounded-full transition">
              Go Verify
              <span>
                <GoArrowUpRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <FilterProviderModal
          provider={provider}
          setProvider={(provider: string) => setProvider(provider)}
          setIsModalOpen={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Reclaim;
