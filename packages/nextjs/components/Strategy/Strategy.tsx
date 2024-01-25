import React, { useState } from "react";

function Strategy() {
  const [selectedView, setSelectedView] = useState<string | null>(null);

  const handleButtonClick = (view: string) => {
    setSelectedView(view);
  };

  const renderContent = () => {
    switch (selectedView) {
      case "supply":
        return (
          <div>
            <span>Amount to Supply</span>
            <input type="text"></input>
            <span>Balance</span>
            <span>0.001 ETH</span>
            <div>
              <span>Order information</span>
              <div>
                <div>
                  <span>Supply Interest</span>
                  <span>0.03 %</span>
                </div>
                <div>
                  <span>Total Supply Amount</span>
                  <span>0.001 ETH</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "borrow":
        return (
          <div>
            <span>Amount to Borrow</span>
            <input type="text"></input>
            <span>Balance</span>
            <span>0.001 ETH</span>
            <div>
              <span>Supported Agreement</span>
              <div>
                <button>Base Chain Agreement</button>
                <button>NFT Agreement</button>
                <button>FT Agreement</button>
              </div>
              <div>
                <div>
                  <span>Payment Schedule</span>
                  <input type="text"></input>
                </div>
                <div>
                  <span>Penalty</span>
                  <input type="text"></input>
                </div>
              </div>
            </div>
            <div>
              <span>Order information</span>
              <div>
                <div>
                  <span>Supply Interest</span>
                  <span>0.03 %</span>
                </div>
                <div>
                  <span>Total Supply Amount</span>
                  <span>0.001 ETH</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[300px] bg-white">
      <h3>Set up strategy</h3>
      <div>
        <button onClick={() => handleButtonClick("supply")}>Supply</button>
        <button onClick={() => handleButtonClick("borrow")}>Borrow</button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Strategy;
