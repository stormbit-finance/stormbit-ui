import React from "react";

interface CardDescriptionProps {
  title: string;
  value: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col gap-2 py-8 text-white container-total max-w-[347px] w-full px-9">
      <span className="text-xl">{title}</span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  );
};

export default CardDescription;
