"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { Footer } from "~~/components/Footer";
import GridBackground from "~~/components/GridBackground/GridBackground";
import { dataTechnology } from "~~/data/data";

const Home: NextPage = () => {
  const router = useRouter();
  const texts = ["Stormbit", "Lenders", "Borrowers", "Depositors"];
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentText(prevText => (prevText + 1) % texts.length);
        setFade(true);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <>
      <div className="bg-[#070817] pt-[100px] ">
        <div className="flex flex-col lg:gap-20 mb-[250px] bg-landing gap-10">
          <section className=" flex items-center justify-center  lg:py-[200px] relative py-[30px] ">
            <div className="lg:max-w-[1920px] flex items-center flex-col justify-center w-full ">
              <div className="lg:flex-row items-center lg:justify-around w-full px-4 justify-center flex flex-col">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <span className="font-bold text-white lg:text-8xl  text-4xl">Storm</span>
                    <span className="font-bold  text-gradient  lg:text-8xl text-4xl">bit.</span>
                  </div>
                  <div className="max-w-[600px] w-full my-2">
                    <p className="lg:text-start text-center text-xl lg:text-3xl text-[#B5B5B5]  m-0">
                      First p2p incentivized lending protocol.
                    </p>
                  </div>
                  <div className="z-20 flex flex-row gap-10 mt-8 text-xl">
                    <button
                      onClick={() => router.push("/dashboard/reclaim")}
                      className="z-99 cursor-pointer bg-[#D0C8FF] rounded-[2px] px-24 py-4 text-black"
                    >
                      Reclaim
                    </button>
                    <button
                      onClick={() => router.push("/lenders")}
                      className="cursor-pointer border border-[#D0C8FF] rounded-[2px] text-[#D0C8FF] px-24 py-4"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <GridBackground numRows={9} numCols={30} />
          </section>
          <section className="relative flex justify-center items-center lg:py-[150px] px-4 lg:px-0">
            <Image
              src="/reclaim-background.png"
              alt="icon"
              width={1500}
              height={1500}
              className=" absolute top-[50%] left-[50%] translate-x-[-50%]"
            />
            <div className="z-40 max-w-[1920px] w-full flex-col justify-center flex items-center gap-[25px]">
              <div className="lg:text-5xl text-white text-2xl w-full flex justify-center item-center ">
                <div className="w-[65%] lg:w-[33%] relative ">
                  Bringing Trust to{" "}
                  <div
                    className={` text-gradient left-[200px]  lg:left-[400px] top-0 absolute fade ${
                      fade ? "fade-in" : "fade-out"
                    } `}
                  >
                    {texts[currentText]}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 text-white">
                <Image alt="icon" width={20} height={20} className="" src={"/z-proof-purple.svg"}></Image>
                <div className="text-[#D0C8FF]  flex flex-row gap-2 items-center">Zk-proofs powered by Reclaim</div>
              </div>

              <div className="lg:pt-[80px] pt-[20px] grid grid-rows-2 gap-5 ">
                <div className="text-sm lg:text-xl text-white grid justify-center  grid-cols-2 gap-48">
                  <div className="flex gap-5">
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> Onboarding and Loyalty
                  </div>
                  <div className="flex gap-5">
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> KYC
                  </div>
                </div>
                <div className="text-sm lg:text-xl text-white grid justify-center grid-cols-2 gap-48">
                  <div className="flex gap-5">
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> Financial statements
                  </div>
                  <div className="flex gap-5">
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> Social Reputation
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center  py-[100px] lg:py-[300px] px-4 lg:px-0">
            <div className="max-w-[1920px] w-full flex-col flex items-center gap-[20px]">
              <h2 className="lg:text-5xl text-white text-2xl">Core Technology</h2>
              <div className="flex flex-wrap justify-center lg:gap-20  gap-10 max-w-[1400px] mx-auto lg:pt-[80px] pt-[20px]">
                {dataTechnology.map(element => (
                  <div
                    key={element.name}
                    className="flex flex-col items-center justify-center lg:max-w-[400px] max-w-[250px] lg:gap-16 gap-5 lg:min-h-[470px] w-full border border-solid border-white rounded-[12px] lg:py-12 px-[10px] py-6"
                  >
                    <div>
                      <Image src={element.icon} alt="icon" width={90} height={90} />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 text-white lg:max-w-[367px] max-w-[167px]">
                      <span className="lg:text-2xl font-bold text-center text-white text-lg">{element.name}</span>
                      <span className="lg:text-lg font-medium text-center text-sm">{element.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
