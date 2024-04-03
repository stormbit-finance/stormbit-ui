import React, { ReactNode } from "react";

interface ButtonLayoutProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const ButtonLayout: React.FC<ButtonLayoutProps> = ({ active, onClick, children }) => {
  return (
    <button
      className={`w-[376px] py-[24px] text-white flex items-center gap-[10px] justify-start px-[47px] ${
        active ? "bg-[#23233d] rounded-md" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonLayout;
