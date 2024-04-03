import React from "react";

interface Button {
  label: string;
  active: boolean;
  onClick: () => void;
}

interface Props {
  buttons: Button[];
}

const TransactionButton: React.FC<Props> = ({ buttons }) => {
  return (
    <div className="flex justify-center text-white container-total">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`py-10 flex-1 rounded-2xl text-2xl ${button.active ? "bg-[#9135F5]" : ""}`}
          onClick={button.onClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default TransactionButton;
