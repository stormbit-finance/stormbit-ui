import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import "./CreationModal.css";

interface Modalprops {
  setIsModalOpen: () => void;
  handleSubmit: () => void;
}

function CreationModal(props: Modalprops) {
  const [showInfo, setShowInfo] = useState(false);
  const { setIsModalOpen, handleSubmit } = props;
  return (
    <div className="container-modal">
      <div className="gap-4 content-modal">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <span className="text-2xl font-bold text-[#4A5056]">Create Pool</span>
            <button
              onClick={() => {
                setIsModalOpen();
              }}
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base text-[#4A5056]">Name</span>
            <input type="text" className="border border-solid border-[#4A5056]"></input>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Agreement</span>
          <div className="flex gap-4">
            <input type="checkbox"></input>
            <div className="flex items-center gap-2">
              <span>Off chain strategy</span>
              <div
                className="info-icon-container"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                <Image src="/information.png" alt="information" width={18} height={18}></Image>
                {showInfo && (
                  <div className="text-xs info-tooltip text-[#484848]">
                    <span className="text-xs font-bold">Strategy Name</span>
                    <br></br>
                    <span>Some description info here...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <input type="checkbox"></input>
            <div className="flex items-center gap-2">
              <span>Providing collateral</span>
              <div
                className="info-icon-container"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                <Image src="/information.png" alt="information" width={18} height={18}></Image>
                {showInfo && (
                  <div className="text-xs info-tooltip text-[#484848]">
                    <span className="text-xs font-bold">Strategy Name</span>
                    <br></br>
                    <span>Some description info here...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <input type="checkbox"></input>
            <div className="flex items-center gap-2">
              <span>Custom strategy</span>
              <div
                className="info-icon-container"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                <Image src="/information.png" alt="information" width={18} height={18}></Image>
                {showInfo && (
                  <div className="text-xs info-tooltip text-[#484848]">
                    <span className="text-xs font-bold">Strategy Name</span>
                    <br></br>
                    <span>Some description info here...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button onClick={handleSubmit}> Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default CreationModal;
