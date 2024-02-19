import Image from "next/image";
import type { NextPage } from "next";
import Button from "~~/components/Button/Button";

const Home: NextPage = () => {
  const data = [
    {
      name: "Cheap Local Lending",
      amount: "11.8 %",
    },
    {
      name: "Cheap Local Lending",
      amount: "11.8 %",
    },
    {
      name: "Cheap Local Lending",
      amount: "11.8 %",
    },
    {
      name: "Cheap Local Lending",
      amount: "11.8 %",
    },
    {
      name: "Cheap Local Lending",
      amount: "11.8 %",
    },
    {
      name: "Cheap Local Lending",
      amount: "11.8 %",
    },
  ];

  const lending = [
    {
      name: "Micro-lending Application Process",
      description:
        "Borrowers undergo KYC verification to apply for micro-loans. They submit loan applications, choosing an amount and a repayment strategy from available options. Applications are visible to lenders for review.",
      icon: "/business-julius.png",
    },
    {
      name: "Stake-to-Lend Mechanism",
      description:
        "Lenders stake tokens into a lending pool to provide liquidity. Their stake grants them voting power to approve or reject loan applications based on the trust and data exchanged with borrowers.",
      icon: "/increase-apple.png",
    },
    {
      name: "Voting and Approval",
      description:
        "Pool managers and lenders with voting power review loan applications. Decisions are made collectively, based on the borrower's data and the terms of the loan agreement, including interest and repayment schedule.",
      icon: "/toolkit-bazooka.png",
    },
    {
      name: "Disbursement and Repayment",
      description:
        "Approved loans are disbursed daily at 00:00 UTC. Borrowers can manage their loans through the dashboard, making repayments according to the agreed schedule and conditions of the off-chain or on-chain agreements.",
      icon: "/convert-bazooka.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-stretch justify-center pt-10">
        <div className="flex justify-between gap-28">
          <div className="w-[640px] my-24">
            <span className="font-bold text-8xl text-gradient">STORMBIT</span>
            <p className="text-4xl font-bold text-[#4A5056]">A marketplace that connects lenders to borrowers</p>
          </div>
          <Image src="/icon2.png" alt="icon2" width={400} height={800}></Image>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-bold text-[#17344F] text-4xl">Lending pool</h1>
          <div className="flex flex-wrap justify-center gap-8 w-[1650px]">
            {data.map(element => (
              <>
                <div className="rounded-[15px] shadow-lending bg-white w-[500px] text-[#4A5056] p-8 flex-col gap-6 flex">
                  <div className="flex items-center gap-4">
                    <Image src="/icon3.png" alt="icon" width={100} height={50}></Image>
                    <span className="text-[26px] font-medium">{element.name}</span>
                  </div>
                  <div className="flex text-2xl gap-28">
                    <div className="flex flex-col gap-2">
                      <span>Supply APY</span>
                      <span>{element.amount}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span>Borrow APY</span>
                      <span>{element.amount}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <Button size="large">Explore</Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 my-40">
          <h2 className="text-4xl font-bold">How micro-lending works ?</h2>
          <div className="flex gap-6">
            {lending.map(element => (
              <>
                <div className="shadow-lending flex flex-col bg-white w-[383px] text-[#4A5056] p-8 gap-4 rounded-[15px] h-[490px]">
                  <Image src={element.icon} alt="icon" width={72} height={72}></Image>
                  <span className="mt-12 text-2xl">{element.name}</span>
                  <span>{element.description}</span>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 my-52">
          <h2 className="text-[#17344F] text-4xl font-bold">Market Stats</h2>
          <div className="flex gap-24 px-20 py-24 container-stats rounded-[5px]">
            <Image src="/stats.png" alt="stats" width={703} height={551}></Image>
            <div className="flex flex-col justify-center w-[530px] px-7 gap-20">
              <div className="flex gap-36">
                <div className="flex flex-col items-center gap-6">
                  <span className="text-4xl text-gradient">$ 12M</span>
                  <span className="text-2xl">Total Borrow</span>
                </div>
                <div className="flex flex-col items-center gap-6">
                  <span className="text-4xl text-gradient">$ 12M</span>
                  <span className="text-2xl">Total Supply</span>
                </div>
              </div>
              <div className="flex gap-20">
                <div className="flex flex-col items-center gap-6">
                  <span className="text-4xl text-gradient">0.29%</span>
                  <span className="text-2xl">Average Supply APY</span>
                </div>
                <div className="flex flex-col items-center gap-6">
                  <span className="text-4xl text-gradient">0.29%</span>
                  <span className="text-2xl">Average Borrow APR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
