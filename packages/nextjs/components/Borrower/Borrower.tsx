import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStripeS } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { IoCopy } from "react-icons/io5";
import { SiBinance } from "react-icons/si";
import { SiWise } from "react-icons/si";
import { SlUser } from "react-icons/sl";

const provider = [
  {
    icon: <SiBinance />,
    name: "Binance",
  },
  {
    icon: <SiBinance />,
    name: "OKX",
  },
  {
    icon: <FaGithub />,
    name: "Github",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn Analytics",
  },
  {
    icon: <FaXTwitter />,
    name: "X",
  },
  {
    icon: <FaStripeS />,
    name: "Stripe",
  },
  {
    icon: <SiWise />,
    name: "Wise",
  },
  {
    icon: <SlUser />,
    name: "Custom",
  },
];

function Borrower() {
  return (
    <div className="w-[800px] my-7">
      <div className="flex  justify-between">
        <div className="flex gap-6">
          <span className="text-2xl text-white">Rower wee</span>
          <span className="flex py-1 px-5 justify-center items-center gap-4 border border-solid border-[#C398FF] rounded-[40px] text-white text-[14px]">
            0x2332..2324
            <IoCopy></IoCopy>
          </span>
        </div>
        <span className="text-white">
          Zk-proofs powered by <span>Reclaim</span>
        </span>
      </div>
      <div className="mt-10 flex gap-6 flex-col">
        <span className="text-[#C398FF] text-bold">Assets Overview</span>
        <div className="flex justify-between">
          <div className="py-2 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A] w-[220px] h-[90px]">
            <FiArrowDownLeft className="w-[30px] h-[30px text-white"></FiArrowDownLeft>
            <div className="text-white flex flex-col">
              <span className="text-sm text-white">Total Loans</span>
              <span className="text-[#AE9FFD] text-sm">$ 9,099.00</span>
            </div>
          </div>
          <div className="py-2 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A] w-[220px] h-[90px]">
            <FiArrowUpRight className="w-[30px] h-[30px text-white" />
            <div className="text-white flex flex-col">
              <span className="text-sm text-white">Total Deposited</span>
              <span className="text-[#AE9FFD] text-sm">$ 9,099.00</span>
            </div>
          </div>
          <div className="py-2 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A] w-[220px] h-[90px]">
            <FiFileText className="w-[30px] h-[30px text-white" />
            <div className="text-white flex flex-col">
              <span className="text-sm text-white">Total Terms</span>
              <span className="text-[#AE9FFD] text-sm">10</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-12">
        <span className="text-[#C398FF] text-bold">Verified Tracking</span>
        <div className="py-8 px-4 flex gap-8 justify-center items-center bg-[#2F2F2F] rounded-[11px] border border-[#444C6A]">
          <div className="flex flex-col gap-2">
            <span className="text-[#9E9E9E] text-sm">Total verified</span>
            <span className="text-white">20</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#9E9E9E] text-sm">Last zk-proof generated </span>
            <span className="text-white">2 days ago</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#9E9E9E] text-sm">Trust score</span>
            <div className="flex gap-6">
              <input type="range" className="w-[300px]"></input>
              <span className="text-white">72%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-12">
        <span className="text-[#C398FF] text-bold">Verified Provider</span>
        <div className="w-full flex flex-wrap gap-4">
          {provider.map((element, index) => (
            <div
              className="text-white flex gap-2 bg-[#2F2F2F] border border-[#444C6A] items-center py-3 px-6 rounded-[11px]"
              key={index}
            >
              {element.icon}
              <span>{element.name}</span>
              <span>10</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Borrower;
