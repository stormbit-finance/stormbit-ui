import React from "react";

interface SelectableButtonProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableButton: React.FC<SelectableButtonProps> = ({ text, selected, onClick }) => {
  return (
    <button
      className={`py-4 px-9 rounded-[11px] border border-[#374B6D] ${
        selected ? "bg-[#9135F5] text-white border-none" : ""
      }`}
      onClick={onClick}
      disabled={selected}
    >
      {text}
    </button>
  );
};

export default SelectableButton;
