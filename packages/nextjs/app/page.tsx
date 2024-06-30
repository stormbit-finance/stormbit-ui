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
        <div className="flex flex-col lg:gap-20 bg-landing gap-10">
          <section className="flex items-center justify-center lg:py-[150px] relative py-[30px] ">
            <GridBackground numRows={9} numCols={30} />
            <div className="lg:max-w-[1920px] flex items-center flex-col justify-center w-full ">
              <div className="lg:flex-row items-center lg:justify-around w-full px-4 justify-center flex flex-col">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <span className="font-bold text-white lg:text-8xl text-3xl">Storm</span>
                    <span className="font-bold lg:text-8xl text-gradient text-3xl">bit.</span>
                  </div>
                  <div className="max-w-[600px] w-full my-2">
                    <p className="lg:text-3xl text-[#B5B5B5] text-lg m-0">First p2p incentivized lending protocol.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center lg:gap-20 w-full lg:h-[520px] lg:py-[150px] px-4 gap-5 lg:px-0 py-[60px]">
            <div className="flex items-center flex-col-reverse justify-center w-full lg:gap-36 lg:flex-row gap-5">
              <div className="flex flex-col gap-2">
                <span className="px-8 text-lg text-white">About The</span>
                <span className="px-8 font-bold text-4xl text-white">Stormbit</span>
                <span className="max-w-[770px] w-full text-white text-lg lg:text-start text-center px-8">
                  Stormbit is an advanced peer-to-peer lending platform that seamlessly integrates traditional financial
                  systems with innovative cryptocurrency markets.
                </span>
              </div>
              <Image src="/asset-landing.png" alt="icon" width={250} height={100} className="lg:w-[510px]" />
            </div>
          </section>
          <section className="flex flex-col items-center lg:py-[150px] px-4 lg:px-0">
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

          <section className="flex flex-col items-center lg:mb-40 mb-10">
            <div className="max-w-[1400px] w-full flex flex-col items-center justify-center gap-10">
              <span className="lg:text-5xl text-white text-2xl lg:mb-28">Join Our Community</span>
              <div className="flex max-w-[1400px] w-full justify-between flex-col-reverse lg:flex-row px-4">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center gap-5 lg:justify-start justify-center">
                    <Image src="/clock.png" alt="clock" width={55} height={55} />
                    <span className="lg:text-5xl text-white text-2xl">Keep Updated</span>
                  </div>
                  <span className="lg:text-3xl text-white text-xl lg:max-w-[500px] text-center lg:text-start py-4">
                    “ Join our community to get updates on new products and features! ”
                  </span>
                  <div className="flex lg:gap-6 lg:flex-row flex-col items-center gap-3">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-[9px] border-[#3C3D5B] border py-5 px-4 focus:outline-none bg-transparent lg:max-w-[366px] max-w-[300px]"
                    />
                    <button className="bg-[#1D1E2F] rounded-[9px] text-white text-xl lg:py-5 lg:px-10 py-2 px-5 ">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start pb-10 lg:pb-0">
                  <div className="flex items-center gap-5 lg:mb-14 pb-4 ">
                    <Image src="/chat1.png" alt="clock" width={38} height={38} />
                    <span className="lg:text-5xl text-white text-2xl ">Social</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {dataSocial.map(element => (
                      <>
                        <Link
                          href={element.link}
                          passHref
                          target="_blank"
                          className="py-5 bg-[#1D1E2FD1] lg:text-xl text-lg text-white flex gap-6 pl-5 rounded-[9px] items-center lg:w-[478px] w-[200px]"
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
        <Footer />
      </div>
    </>
  );
};

export default Home;
