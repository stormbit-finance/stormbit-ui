import React from "react";

interface SummaryCardProps {
  label: string;
  points: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ points, label }) => {
  return (
    <div className="container-total max-w-[347px] w-full flex flex-col justify-center py-[20px] px-[30px] gap-[10px]">
      <span>{label}</span>
      <span>{points}</span>
    </div>
  );
};

export default SummaryCard;
