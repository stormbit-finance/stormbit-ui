import React from "react";
import { Checkbox } from "@nextui-org/react";

interface CustomCheckboxProps {
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function CustomCheckbox({ isSelected = false, isDisabled = false, onClick, children, ...rest }: CustomCheckboxProps) {
  return (
    <div className="flex gap-4">
      <Checkbox
        isSelected={isSelected}
        isDisabled={isDisabled}
        onClick={onClick}
        classNames={{
          wrapper: "bg-transparent",
          icon: "bg-[#9135F5] w-full h-full p-1",
        }}
        {...rest}
      ></Checkbox>
      <div className="flex items-center gap-2">
        <span>{children}</span>
      </div>
    </div>
  );
}

export default CustomCheckbox;
