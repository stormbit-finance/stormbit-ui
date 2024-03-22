import React, { useEffect, useRef, useState } from "react";

function SelectDestination() {
  const options = ["Avalanche", "Arbitrum", "Ethereum", "Optimism", "Starknet"];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption : "Select an option"}
        <svg
          className={`fill-current h-4 w-4 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M10 12l-6-6 1.5-1.5L10 9.086l4.5-4.5L16 6l-6 6z"></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute top-0 left-0 w-full pt-1 text-2xl text-gray-700 bg-white border border-gray-300 rounded-tl rounded-tr shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectDestination;
