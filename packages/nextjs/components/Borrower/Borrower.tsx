import React, { useEffect, useState } from "react";
import Image from "next/image";
import { formatDistance, max, parseISO } from "date-fns";
import { FaGithub, FaLinkedin, FaStripeS } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowDownLeft, FiArrowUpRight, FiFileText } from "react-icons/fi";
import { IoCopy } from "react-icons/io5";
import { SiBinance, SiWise } from "react-icons/si";
import { SlUser } from "react-icons/sl";
import { TbBrandCoinbase } from "react-icons/tb";
import { truncateDisplayAddress } from "~~/utils/scaffold-eth";

interface Verification {
  updatedAt: string;
  count: number;
  provider: {
    name: string;
  };
}

interface BorrowerProps {
  aggregatedLoans: string;
  aggregatedDeposits: string;
  address: string;
  termCount: number;
  username: string;
  verifications?: {
    reclaimVerifications: Verification[];
  };
}

const Borrower: React.FC<BorrowerProps> = ({
  verifications,
  username,
  address,
  aggregatedLoans,
  aggregatedDeposits,
  termCount,
}) => {
  const lastUpdated = verifications
    ? formatDistance(
        new Date(max(verifications.reclaimVerifications.map((item: Verification) => parseISO(item.updatedAt)))),
        new Date(),
        { addSuffix: true },
      )
    : "-";

  const verificationTotal = verifications
    ? verifications.reclaimVerifications.reduce((sum: number, item: Verification) => sum + item.count, 0)
    : 0;

  const [provider, setProvider] = useState([
    { icon: <SiBinance />, name: "Binance", count: 0 },
    { icon: <SiBinance />, name: "OKX", count: 0 },
    { icon: <FaGithub />, name: "Github", count: 0 },
    { icon: <FaLinkedin />, name: "LinkedIn Analytics", count: 0 },
    { icon: <FaXTwitter />, name: "X", count: 0 },
    { icon: <FaStripeS />, name: "Stripe", count: 0 },
    { icon: <SiWise />, name: "Wise", count: 0 },
    { icon: <TbBrandCoinbase />, name: "Coinbase", count: 0 },
    { icon: <SlUser />, name: "Custom", count: 0 },
  ]);

  useEffect(() => {
    const updatedProviders = provider.map(p => ({ ...p, count: 0 }));
    verifications?.reclaimVerifications.forEach((item: Verification) => {
      const providerName = item.provider.name.toLowerCase();
      updatedProviders.forEach((keyword, index) => {
        if (providerName.includes(keyword.name.toLowerCase())) {
          updatedProviders[index].count += item.count;
        }
      });
    });

    setProvider(updatedProviders);
  }, [verifications]);

  return (
    <div className="w-[800px] my-7">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <div className="flex gap-2">
            <span className="text-2xl text-white">{username || "User"}</span>
            {verificationTotal > 0 ? (
              <Image width={15} height={15} src="/verified.svg" alt="" />
            ) : (
              <Image width={15} height={15} src="/unverified.svg" alt="" />
            )}
          </div>

          <span className="flex py-1 px-5 justify-center items-center gap-4 border border-solid border-[#C398FF] rounded-[40px] text-white text-[14px]">
            {truncateDisplayAddress(address)}
            <IoCopy className="cursor-pointer" onClick={() => navigator.clipboard.writeText(address)} />
          </span>
        </div>
        <span className="text-white text-sm">
          Zk-proofs powered by <span>Reclaim</span>
        </span>
      </div>
      <div className="mt-10 flex gap-6 flex-col">
        <span className="text-[#C398FF] text-bold">Assets Overview</span>
        <div className="flex justify-between">
          <div className="py-2 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A] w-[220px] h-[90px]">
            <FiArrowDownLeft className="w-[30px] h-[30px] text-white" />
            <div className="text-white flex flex-col">
              <span className="text-sm text-white">Total Loans</span>
              <span className="text-[#AE9FFD] text-sm">
                $ {aggregatedLoans ? parseFloat(aggregatedLoans).toFixed(2) : 0.0}
              </span>
            </div>
          </div>
          <div className="py-2 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A] w-[220px] h-[90px]">
            <FiArrowUpRight className="w-[30px] h-[30px] text-white" />
            <div className="text-white flex flex-col">
              <span className="text-sm text-white">Total Deposited</span>
              <span className="text-[#AE9FFD] text-sm">
                $ {aggregatedDeposits ? parseFloat(aggregatedDeposits).toFixed(2) : 0.0}
              </span>
            </div>
          </div>
          <div className="py-2 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A] w-[220px] h-[90px]">
            <FiFileText className="w-[30px] h-[30px] text-white" />
            <div className="text-white flex flex-col">
              <span className="text-sm text-white">Total Terms</span>
              <span className="text-[#AE9FFD] text-sm">{termCount ? termCount : 0}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-12">
        <span className="text-[#C398FF] text-bold">Verified Tracking</span>
        <div className="py-8 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A]">
          <div className="flex flex-col gap-2">
            <span className="text-[#9E9E9E] text-sm">Total verified</span>
            <span className="text-white">{verificationTotal}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#9E9E9E] text-sm">Last zk-proof generated </span>
            <span className="text-white">{lastUpdated}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#9E9E9E] text-sm">Trust score</span>
            <div className="flex gap-6">
              <input type="range" className="w-[300px]" />
              <span className="text-white">72%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-12">
        <span className="text-[#C398FF] text-bold">Verified Provider</span>
        <div className="w-full flex flex-wrap gap-4">
          {provider
            .filter(item => item.count > 0)
            .map((element, index) => (
              <div
                className="text-white flex gap-2 bg-[#2F2F2F] border border-[#444C6A] items-center py-3 px-6 rounded-[11px]"
                key={index}
              >
                {element.icon}
                <span>{element.name}</span>
                <span>{element.count}</span>
              </div>
            ))}
          {provider.filter(item => item.count > 0).length == 0 && (
            <div className="text-[#9E9E9E] text-sm text-center py-8 bg-[#2F2F2F] rounded-[11px] border border-[#444C6A] w-full">
              No data
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Borrower;
