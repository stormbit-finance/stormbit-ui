import React from "react";
import Image from "next/image";
import ModalContainer from "../ModalContainer/ModalContainer";
import TreemapChart from "../TreemapGraph/TreemapGraph";
import { AiOutlineClose } from "react-icons/ai";
import { dataCharts } from "~~/data/data";

interface ModalProps {
  setIsModalChart: () => void;
}

function ChartModal({ setIsModalChart }: ModalProps) {
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalChart();
    }
  };
  return (
    <>
      <ModalContainer onClick={handleCloseModal}>
        <div className="flex justify-between">
          <span className="text-2xl">Participation Chart</span>
          <AiOutlineClose onClick={() => setIsModalChart()} className="cursor-pointer w-[35px] h-[35px]" />
        </div>
        <div className="flex items-center gap-7 mt-11">
          <TreemapChart />
          <div className="flex flex-col gap-4 pr-20">
            {dataCharts.map(element => (
              <>
                <div className="flex items-center gap-4">
                  <Image src={element.avatar} alt="avatar" width={30} height={30} className="rounded-full"></Image>
                  <span>{element.name}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </ModalContainer>
    </>
  );
}

export default ChartModal;
