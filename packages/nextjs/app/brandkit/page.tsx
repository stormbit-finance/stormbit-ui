"use client";

import React from "react";
import Image from "next/image";
import { saveAs } from "file-saver";

function Page() {
  const download = (url: string, name?: string) => {
    saveAs(url, name ? name : url); // Put your image URL here.
  };
  return (
    <div className="pt-[100px] bg-[#070817]  flex flex-col items-center justify-center  text-white">
      <div className="h-[800px] min-w-full brandkit-landing flex flex-col gap-8 items-center justify-center">
        <div>
          <span className="font-bold text-6xl">Storm</span>
          <span className="font-bold text-gradient text-6xl">bit.</span>
        </div>
        <div className="font-semibold text-6xl">Media Toolkit</div>
      </div>

      <div className="flex flex-row justify-between gap-10 w-full  max-w-[90%] py-20 ">
        <div className="text-2xl text-gradient font-bold">Branding guideline</div>
        <div className="text-lg max-w-[60%] self-center">
          In short, the Stormbit logos represent only Stormbit and should not be used to represent you or your projects,
          products, or company. If you have any questions reach out to us at{" "}
          <span className="text-gradient underline font-bold">contact@quantum3labs.com</span>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[90%] py-20 ">
        <div className="text-2xl text-gradient font-bold">Logo</div>

        <div className="grid grid-cols-3 justify-between content-between gap-4 w-full">
          <div className=" flex flex-col items-center justify-center border border-[#363636]">
            <Image className="my-20 h-[90%]" alt="logomark" src={"/logotype.svg"} width={200} height={80}></Image>
            <div
              onClick={() => download("/logotype.svg")}
              className="cursor-pointer px-10 py-8 border-t border-[#363636] "
            >
              Download Stormbit Logotype
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center border border-[#363636]">
            <Image className="my-20 h-[90%]" alt="logomark" src={"/logomark.svg"} width={40} height={80}></Image>
            <div
              onClick={() => download("/logomark.svg")}
              className="cursor-pointer px-10 py-8 border-t border-[#363636] "
            >
              Download Stormbit Logomark
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center border border-[#363636]">
            <Image className="my-20 h-[90%]" alt="logomark" src={"/wordmark.svg"} width={170} height={80}></Image>
            <div
              onClick={() => download("/wordmark.svg")}
              className="cursor-pointer px-10 py-8 border-t border-[#363636] "
            >
              Download Stormbit Wordmark
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[90%] py-20 ">
        <div className="flex flex-row w-full justify-between">
          <div className="">
            <div className="text-2xl text-gradient font-bold">Typography</div>
            <div className="text-[#ACACAC]">Designed by Florian Karsten</div>
          </div>
          <button
            onClick={() =>
              download(
                "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj42VksjNsFjTDJK.ttf",
                "SpaceGrotesk.ttf",
              )
            }
            className="cursor-pointer border border-[#D0C8FF] rounded-[2px] text-[#D0C8FF] px-8 py-4"
          >
            Download Font
          </button>
        </div>

        <div className="p-4 bg-[#0d0f1e] text-center flex justify-center items-center py-10 flex-col">
          <div className="text-[#ACACAC] py-4">Text Demo</div>
          <div className="max-w-[60%]">
            Stormbit is a cutting-edge decentralized finance (DeFi) platform designed to transform lending and borrowing
            with transparency, inclusivity, and privacy at its core. 012345@
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[90%] py-20 mx-auto ">
        <div className="text-2xl text-gradient font-bold">Color</div>

        <div className="grid grid-cols-8 justify-between content-between w-full text-black ">
          <div className="text-center bg-[#FFFFFF] py-20">#FFFFFF</div>
          <div className="text-center bg-[#ACACAC] py-20">#ACACAC</div>
          <div className="text-center bg-[#D0C8FF] py-20">#D0C8FF</div>
          <div className="text-center bg-[#AD92F5] py-20">#AD92F5</div>
          <div className="text-center bg-[#C398FF] py-20">#C398FF</div>
          <div className="text-center bg-[#9135F5] py-20">#9135F5</div>
          <div className="text-center bg-[#8700FF] py-20">#8700FF</div>
          <div className="text-center bg-[#61BEFF] py-20">#61BEFF</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
