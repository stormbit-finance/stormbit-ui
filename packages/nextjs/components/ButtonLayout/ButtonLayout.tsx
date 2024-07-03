import React, { ReactNode } from "react";

interface ButtonLayoutProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean; // Añade la propiedad disabled
}

const ButtonLayout: React.FC<ButtonLayoutProps> = ({ active, onClick, children, disabled }) => {
  return (
    <button
      className={`w-[320px] py-[24px] flex items-center gap-[10px] justify-start px-[47px] text-lg ${
        active ? "bg-[#D0C8FF] text-black" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonLayout;
