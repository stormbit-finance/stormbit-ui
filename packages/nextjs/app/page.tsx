"use client";

import Image from "next/image";
import type { NextPage } from "next";
import CarruselTweets from "~~/components/CarruselTweets/CarruselTweets";
import { Footer } from "~~/components/Footer";
import GridBackground from "~~/components/GridBackground/GridBackground";
import { dataExtension, dataMetrics, dataTechnology } from "~~/data/data";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="bg-landing ">
          <section className="flex items-center justify-center pb-[36px] pt-[150px] relative ">
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
          <section className="flex flex-col items-center justify-center gap-20 w-full h-[520px] py-[80px] ">
            <h2 className="text-3xl text-white">Metrics based on Avalanche</h2>
            <div className="flex items-center justify-center w-full gap-32">
              {dataMetrics.map(element => (
                <div key={element.name} className="max-w-[423px] w-full rounded-[60px] border-l border-r border-t ">
                  <div className=" py-[20px] flex flex-col items-center gap-[5px]">
                    <span className="text-4xl font-medium text-white">{element.description}</span>
                    <span className="text-[#3B3B3B] text-2xl font-medium">{element.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col items-center py-[200px] ">
            <div className="max-w-[1920px] w-full flex items-center flex-col gap-[20px]">
              <h2 className="text-4xl font-bold text-white">Extensions</h2>
              <div className="flex gap-8">
                {dataExtension.map(element => (
                  <div
                    key={element.name}
                    className="flex items-center max-w-[470px] w-full gap-4  extensions px-4 py-3"
                  >
                    <div>
                      <Image src={element.icon} alt="icon" width={200} height={200} />
                    </div>
                    <div className="flex flex-col gap-5 text-white">
                      <div className="flex flex-col">
                        <span className="text-2xl font-medium text-white">{element.name}</span>
                        <span className="text-lg">{element.description}</span>
                      </div>
                      <button className="py-[10px] max-w-[159px] rounded-[9px] border border-solid border-white">
                        Launch App
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="flex flex-col items-center py-[80px]">
            <div className="max-w-[1920px] w-full flex-col flex items-center gap-[20px]">
              <h2 className="text-4xl font-bold text-white">Core Technology</h2>
              <div className="flex items-center justify-center w-full gap-[40px]">
                {dataTechnology.map(element => (
                  <div
                    key={element.name}
                    className="flex flex-col items-center justify-center max-w-[414px] gap-16 min-h-[470px]  w-full border border-solid border-white rounded-[12px] p-12"
                  >
                    <div>
                      <Image src={element.icon} alt="icon" width={108} height={132} />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 text-white">
                      <span className="text-2xl font-bold text-white">{element.name}</span>
                      <span className="text-lg font-medium text-center">{element.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center py-[150px]">
            <div className="max-w-[1920px] flex flex-col items-center w-full">
              <div className="flex gap-6">
                <h2 className="text-4xl font-bold text-white">Tweets</h2>
                <Image src="/tweets.png" alt="tweets" width={58} height={58} />
              </div>
              <div className="flex gap-20 max-w-[1920px]">
                <CarruselTweets />
              </div>
              <div>
                <button className="w-[234px] h-[71px] text-white rounded-[9px] border border-solid border-white">
                  Follow us
                </button>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center pt-[60px] pb-[200px]">
            <div className="max-w-[1920px] w-full flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center gap-20 max-w-[1400px] w-full h-[440px] container-subscribe">
                <h2 className="text-4xl font-bold text-white">Keep Updated</h2>
                <div className="flex gap-6 w-full justify-center">
                  <input
                    placeholder="Enter your email address"
                    className="max-w-[700px] w-full bg-[#0B0B10] py-[30px] text-xl px-[15px]"
                  />
                  <button className=" bg-white text-2xl rounded-[15px] py-[10px] px-[50px]">Subscribe</button>
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
