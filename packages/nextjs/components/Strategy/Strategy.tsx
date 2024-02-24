"use client";

import React, { useEffect, useState } from "react";
import Borrow from "../Borrow/Borrow";
import Supply from "../Supply/Supply";

interface StrategyProps {
  poolAddress: string;
}
function Strategy({ poolAddress }: StrategyProps) {
  const [selectedView, setSelectedView] = useState<string>("supply");

  const handleButtonClick = (view: string) => {
    setSelectedView(view);
  };

  const renderContent = () => {
    switch (selectedView) {
      case "supply":
        return <Supply poolAddress={poolAddress} />;
      case "borrow":
        return <Borrow poolAddress={poolAddress} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    renderContent();
  }, []);

  return (
    <div className="w-[577px] h-[678px] bg-white p-11 height-market">
      <p className="text-[#17344F] text-xl">Set up strategy</p>
      <div className="my-4">
        <button
          onClick={() => handleButtonClick("supply")}
          className={`w-[235px] p-3 focus:outline-none ${
            selectedView === "supply" ? "border-b-2 border-[#4A5056] bg-white" : "border-none"
          }`}
        >
          Supply
        </button>
        <button
          onClick={() => handleButtonClick("borrow")}
          className={`w-[235px] p-3 focus:outline-none ${
            selectedView === "borrow" ? "border-b-2 border-[#4A5056] bg-white" : "border-none"
          }`}
        >
          Borrow
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Strategy;
