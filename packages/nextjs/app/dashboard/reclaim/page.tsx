"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { CiFilter } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import Button from "~~/components/Button/Button";
import FilterProviderModal from "~~/components/FilterProviderModal/FIlterProviderModal";

const Reclaim: React.FC = () => {
  const providerData = useMemo(
    () => [
      {
        name: "Binance",
        provider: "Binance",
        desc: "KYC",
        img: "/binance.svg",
      },
      {
        name: "OKX",
        provider: "OKX",
        desc: "KYC",
        img: "/okx.svg",
      },
      {
        name: "Github",
        provider: "Github",
        desc: "Developer stats",
        img: "/github.svg",
      },
      {
        name: "LinkedIn Analytics",
        provider: "LinkedIn Analytics",
        desc: "Dashboard Analytics",
        img: "/linkedin.svg",
      },
      {
        name: "X Analytics",
        provider: "X Analytics",
        desc: "Dashboard Analytics",
        img: "/x.svg",
      },
      {
        name: "Custom",
        provider: "Custom",
        desc: "KYC",
        img: "/custom.svg",
      },
    ],
    [],
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [provider, setProvider] = useState("Filter");
  const [providerList, setProviderList] = useState(providerData);

  useEffect(() => {
    if (provider === "All" || provider === "Filter") {
      setProviderList(providerData);
      return;
    } else {
      setProviderList(providerData.filter(item => item.provider === provider));
    }
  }, [provider, providerData]);

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
        {providerList.map((item, index) => (
          <div className="py-4 flex w-full justify-between items-center" key={index}>
            <div className="flex items-center">
              <Image width={50} height={50} className="" src={`${item.img}`} alt="" />
              <div className="ml-4">
                <div className="text-xl">{item.name}</div>
                <div className="text-[#858BA2]">{item.desc}</div>
              </div>
            </div>
            <button className="flex gap-2 items-center px-8 py-3 bg-transparent text-white border border-[#374B6D] text-base  rounded-full transition">
              Go Verify
              <span>
                <GoArrowUpRight />
              </span>
            </button>
          </div>
        ))}
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
