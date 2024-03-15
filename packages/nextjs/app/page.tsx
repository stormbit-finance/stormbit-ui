"use client";

import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import CarruselTweets from "~~/components/CarruselTweets/CarruselTweets";
import { Footer } from "~~/components/Footer";

const Home: NextPage = () => {
  const data = [
    {
      name: "Morpho Blue",
      description: "Permissionless Lending Protocol",
      icon: "/image13.png",
    },
    {
      name: "Captain Hooks",
      description: "Custom UniswapV4 Pools",
      icon: "/image12.png",
    },
    {
      name: "Compound",
      description: "Algorithmic, Autonomous Interest Rate Protocol",
      icon: "/image14.png",
    },
  ];

  const technology = [
    {
      name: "Custom Agreements",
      description: "As a borrower you can choose your agreement from a set of available ones.",
      icon: "/custom.png",
    },
    {
      name: "Governance Allocations",
      description: "Loans approvals for borrowers requests enhance the trust between our users.",
      icon: "/bank.png",
    },
    {
      name: "SBIT Repayments",
      description: "Lock $SBIT earned after repayments.",
      icon: "/money-bag.png",
    },
  ];

  const metrics = [
    {
      name: "Market Size",
      description: "91M",
    },
    {
      name: "Total Value Locked",
      description: "52.1M",
    },
    {
      name: "Unique Active Addresses",
      description: "249.7K",
    },
  ];
  const [highlightOpacity, setHighlightOpacity] = useState(0);
  const [highlightX, setHighlightX] = useState(0);
  const [highlightY, setHighlightY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const gridX = Math.floor(x / 5);
    const gridY = Math.floor(y / 5);

    setHighlightOpacity(1);
    setHighlightX(gridX * 5);
    setHighlightY(gridY * 5);

    setTimeout(() => {
      setHighlightOpacity(0);
    }, 5000);
  };
  return (
    <>
      <div className="max-w-[1920px] w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative flex flex-col justify-between w-full p-8 bg-white bg-landing bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <div className="flex w-full items-center justify-center max-w-[1920px] pt-[50px]">
              <div className="" onMouseMove={handleMouseMove}>
                <span className="font-bold text-white text-8xl">STORM</span>
                <span className="font-bold text-8xl text-gradient">BIT.</span>
                <div className="max-w-[674px]">
                  <p className="text-4xl text-[#B5B5B5]">First p2p incentivized lending protocol.</p>
                  <div
                    className="highlight"
                    style={{ opacity: highlightOpacity, left: `${highlightX}px`, top: `${highlightY}px` }}
                  ></div>
                  <div className="background"></div>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <Image src="/scheme.png" alt="scheme" width={1000} height={604}></Image>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-20 w-full h-[520px] ">
              <h2 className="text-5xl text-white">Metrics based on Avalanche</h2>
              <div className="flex items-center justify-center w-full gap-32">
                {metrics.map(element => (
                  <>
                    <div className="flex flex-col items-center bg-transparent max-w-[423px] w-full gap-4 rounded-[69px] metrics">
                      <span className="mt-12 text-4xl font-medium text-white">{element.description}</span>
                      <span className="text-[#3B3B3B] text-2xl font-medium">{element.name}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-12 h-[520px] w-full pt-[50px]">
            <h2 className="text-5xl font-bold text-white">Extensions</h2>
            <div className="flex gap-8">
              {data.map(element => (
                <>
                  <div className="flex items-center w-[538px] gap-4 h-[257px] extensions px-4">
                    <div>
                      <Image src={element.icon} alt="icon" width={200} height={200}></Image>
                    </div>
                    <div className="flex flex-col gap-4 text-white">
                      <span className="mt-12 text-3xl font-medium text-white">{element.name}</span>
                      <span className="text-xl">{element.description}</span>
                      <button className="w-[180px] h-[55px] rounded-[9px] border border-solid border-white">
                        Launch App
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 mb-36 max-h-[520px] h-full">
            <h2 className="text-5xl font-bold text-white">Core Technology</h2>
            <div className="flex items-center justify-center w-full gap-24">
              {technology.map(element => (
                <>
                  <div className="flex flex-col items-center justify-center w-[474px] gap-16 h-[539px] border border-solid border-white rounded-[12px] px-12">
                    <div>
                      <Image src={element.icon} alt="icon" width={108} height={132}></Image>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 text-white">
                      <span className="text-2xl font-bold text-white">{element.name}</span>
                      <span className="text-xl font-medium text-center">{element.description}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 my-40 roadmap">
          <h2 className="text-5xl font-bold text-white">Roadmap</h2>
          <Image src="/map.png" alt="map" width={1467} height={115}></Image>
          <div className="flex flex-wrap w-[1500px] gap-8 justify-center">
            <div className="w-[469px] h-[91px] credit rounded-3xl flex items-center justify-center">
              <span className="text-xl font-medium text-white">Credit Score Aggregation</span>
            </div>
            <div className="w-[469px] h-[91px] credit rounded-3xl flex items-center justify-center">
              <span className="text-xl font-medium text-white">Cross-chain Governance For Lenders</span>
            </div>
            <div className="w-[469px] h-[91px] credit rounded-3xl flex items-center justify-center">
              <span className="text-xl font-medium text-white">Public Tesnet</span>
            </div>
            <div className="w-[469px] h-[91px] credit rounded-3xl flex items-center justify-center">
              <span className="text-xl font-medium text-white">SBIT Token Faucet on multiple chains</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 mt-48">
          <div className="flex gap-6">
            <h2 className="text-5xl font-bold text-white">Tweets</h2>
            <Image src="/tweets.png" alt="tweets" width={58} height={58}></Image>
          </div>
          <div className="flex gap-20">
            <CarruselTweets></CarruselTweets>
          </div>
          <div>
            <button className="w-[234px] h-[71px] text-white rounded-[9px] border border-solid border-white">
              Follow us
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 mt-52 bg-form pb-36">
          <div className="flex flex-col justify-center items-center gap-20 w-[1514px] h-[460px] container-subscribe">
            <h2 className="text-5xl font-bold text-white">Keep Updated</h2>
            <div className="flex gap-6">
              <input
                placeholder="Enter your email address"
                className=" w-[844px] h-[91px] bg-[#0B0B10] px-8 text-xl"
              ></input>
              <button className="w-[254px] h-[91px] bg-white text-2xl rounded-[15px]">Subscribe</button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
