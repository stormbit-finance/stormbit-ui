"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { Footer } from "~~/components/Footer";
import GridBackground from "~~/components/GridBackground/GridBackground";
import { dataTechnology } from "~~/data/data";

const Home: NextPage = () => {
  const dataSocial = [
    {
      name: "Twitter",
      icon: <FaXTwitter className="w-[20px] h-[20px]" />,
      link: "https://twitter.com/StormbitX",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="w-[20px] h-[20px]" />,
      link: "https://twitter.com/StormbitX",
    },
    {
      name: "Telegram",
      icon: <PiTelegramLogo className="w-[20px] h-[20px]" />,
      link: "https://twitter.com/StormbitX",
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col gap-20 bg-landing">
          <section className="flex items-center justify-center py-[150px] relative ">
            <GridBackground numRows={9} numCols={30} />
            <div className="max-w-[1920px] flex items-center flex-col justify-center w-full ">
              <div className="flex items-center justify-around w-full ">
                <div>
                  <span className="font-bold text-white text-8xl">STORM</span>
                  <span className="font-bold text-8xl text-gradient">BIT.</span>
                  <div className="max-w-[600px] w-full">
                    <p className="text-3xl text-[#B5B5B5]">First p2p incentivized lending protocol.</p>
                  </div>
                </div>
                <div>
                  <Image src="/scheme.png" alt="scheme" width={800} height={604} />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-20 w-full h-[520px] py-[150px]  ">
            <h2 className="text-5xl text-white">Evolutionary Trust Evaluation Mechanism</h2>
            <div className="flex items-center justify-center w-full gap-36">
              <span className="max-w-[770px] w-full text-[28px] text-white">
                Empower financial inclusivity with a dynamic, blockchain-enhanced trust score that evolves with your
                financial interactions
              </span>
              <Image src="/blocks.png" alt="blocks" width={267} height={221} />
            </div>
          </section>
          <section className="flex flex-col items-center py-[150px] ">
            <div className="max-w-[1920px] w-full flex-col flex items-center gap-[20px]">
              <h2 className="text-5xl font-bold text-white">Core Technology</h2>
              <div className="flex flex-wrap justify-center gap-20 max-w-[1400px] mx-auto pt-[80px]">
                {dataTechnology.map(element => (
                  <div
                    key={element.name}
                    className="flex flex-col items-center justify-center max-w-[400px] gap-16 min-h-[470px] w-full border border-solid border-white rounded-[12px] py-12 px-[10px]"
                  >
                    <div>
                      <Image src={element.icon} alt="icon" width={108} height={132} />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 text-white max-w-[367px]">
                      <span className="text-2xl font-bold text-center text-white">{element.name}</span>
                      <span className="text-lg font-medium text-center">{element.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center pb-[150px]">
            <div className="max-w-[1920px] w-full flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center max-w-[1400px] w-full container-explorer py-4">
                <span className="text-xl text-[#969696] mb-3 mt-28">Stormbit doc</span>
                <span className="text-4xl font-bold text-white">Explore documentation</span>
                <button className="px-12 py-5 rounded-[34px] button-gradient text-white my-24">Learn More</button>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center mb-40">
            <div className=" max-w-[1400px]  w-full flex flex-col items-center justify-center">
              <span className="text-4xl text-white mb-28">Join Our Community</span>
              <div className="flex max-w-[1400px] w-full justify-between">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center gap-5">
                    <Image src="/clock.png" alt="clock" width={55} height={55}></Image>
                    <span className="text-3xl text-white">Keep Updated</span>
                  </div>
                  <span className="text-xl text-white w-[500px]">
                    “ Join our community to get updates on new products and features! ”
                  </span>
                  <div className="flex gap-6">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-[9px] border-[#3C3D5B] border py-5 px-4 focus:outline-none bg-transparent w-[366px]"
                    ></input>
                    <button className="bg-[#1D1E2F] rounded-[9px] text-white text-xl py-5 px-10">Subscribe</button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-5 mb-14">
                    <Image src="/chat1.png" alt="clock" width={38} height={38}></Image>
                    <span className="text-3xl text-white">Social</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {dataSocial.map(element => (
                      <>
                        <Link
                          href={element.link}
                          passHref
                          target="_blank"
                          className="py-5 bg-[#1D1E2FD1] text-xl text-white flex gap-6 pl-5 rounded-[9px] items-center w-[478px]"
                        >
                          {element.icon}
                          <span>{element.name}</span>
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
