import React from "react";

export const Footer = () => {
  return (
    <div className="lg:py-6 lg:px-14 lg:mb-0 bg-black text-[#F1F3F4] py-4 px-4">
      <div className="mx-auto max-w-[1920px] flex justify-items-start lg:gap-[40px] flex-col-reverse lg:flex-row gap-[20px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <span className="lg:text-2xl font-bold text-lg">StormBit</span>
          <div className="lg:text-[13px] flex gap-[5px] text-xs">
            <span>2024</span>
            <span> @StormBit</span>
          </div>
        </div>
        <div>
          <p className="lg:text-[13px] max-w-[1067px] text-xs lg:text-start text-center m-0 lg:m-auto">
            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable
            for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to,
            damages for loss of profits, loss of data or other information), even if the Company or any supplier has
            been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
          </p>
        </div>
      </div>
    </div>
  );
};
