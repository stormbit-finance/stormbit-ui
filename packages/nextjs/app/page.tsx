"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { Footer } from "~~/components/Footer";
import GridBackground from "~~/components/GridBackground/GridBackground";
import { dataTechnology } from "~~/data/data";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-[#070817] pt-[100px] ">
        <div className="flex flex-col lg:gap-20 mb-[250px] bg-landing gap-10">
          <section className="flex items-center justify-center lg:py-[150px] relative py-[30px] ">
            <GridBackground numRows={9} numCols={30} />
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
                </div>
              </div>
            </div>
          </section>
          <section className=" flex flex-col items-center justify-center lg:gap-20 w-full lg:h-[520px] lg:py-[150px] px-4 gap-5 lg:px-0 py-[100px]">
            <div className="max-w-[1500px]  flex items-center flex-col-reverse justify-between w-full lg:gap-20 lg:flex-row gap-10">
              <div className="flex flex-col gap-2">
                <span className="lg:text-start text-center px-8 text-lg text-white">About The</span>
                <span className="lg:text-start text-center px-8 font-bold text-3xl text-white">Stormbit</span>
                <span className="max-w-[770px] w-full text-white  text-sm lg:text-lg lg:text-start text-center px-8">
                  Stormbit is an advanced peer-to-peer lending platform that seamlessly integrates traditional financial
                  systems with innovative cryptocurrency markets.
                </span>
              </div>
              <Image src="/asset-landing.svg" alt="icon" width={200} height={50} className="bg-transparent w-[30%] " />
            </div>
          </section>
          <section className="flex flex-col items-center  py-[100px] lg:py-[150px] px-4 lg:px-0">
            <div className="max-w-[1920px] w-full flex-col flex items-center gap-[20px]">
              <h2 className="lg:text-5xl text-white text-2xl">Core Technology</h2>
              <div className="flex flex-wrap justify-center lg:gap-20  gap-10 max-w-[1400px] mx-auto lg:pt-[80px] pt-[20px]">
                {dataTechnology.map(element => (
                  <div
                    key={element.name}
                    className="flex flex-col items-center justify-center lg:max-w-[400px] max-w-[250px] lg:gap-16 gap-5 lg:min-h-[470px] w-full border border-solid border-white rounded-[12px] lg:py-12 px-[10px] py-6"
                  >
                    <div>
                      <Image src={element.icon} alt="icon" width={58} height={73} className="lg:w-[108px]" />
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

          <section className="relative flex justify-center items-center lg:py-[150px] px-4 lg:px-0">
            <Image
              src="/reclaim-background.png"
              alt="icon"
              width={1500}
              height={1500}
              className=" absolute top-[50%] left-[50%] translate-x-[-50%]"
            />
            <div className="z-40 max-w-[1920px] w-full flex-col justify-center flex items-center gap-[20px]">
              <h2 className="lg:text-5xl text-white text-2xl">Reclaim Protocol</h2>
              <div className="max-w-[1200px] text-white text-center text-sm lg:text-lg">
                Reclaim Protocol creates digital signatures, known as zero knowledge proof, of users&#39; identity and
                reputation on any website. These digital signatures are computed completely on the client side. Meaning,
                it is private and secure. When the user shares this proof with your app, you can be certain that its
                authenticity and integrity haven&#39;t been compromised.
              </div>
              <div className="lg:pt-[80px] pt-[20px] grid grid-rows-2 gap-5 ">
                <div className="text-sm lg:text-lg text-white grid justify-center  grid-cols-2 gap-10">
                  <div className="flex gap-5">
                    {" "}
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> Onboarding and Loyalty
                  </div>
                  <div className="flex gap-5">
                    {" "}
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> KYC
                  </div>
                </div>
                <div className="text-sm lg:text-lg text-white grid justify-center grid-cols-2 gap-10">
                  <div className="flex gap-5">
                    {" "}
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> Onchain Attestations
                  </div>
                  <div className="flex gap-5">
                    {" "}
                    <Image src="/checkmark.svg" alt="icon" width={20} height={20} className="" /> Proof of Personhood
                  </div>
                </div>
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
