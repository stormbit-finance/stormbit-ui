"use client";

import { useState } from "react";

function DropdownButton() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(true);
  };
  return (
    <div>
      <ul className="main-menu">
        <li className="relative main-menu-item">
          <button onClick={toggleDropdown} className="flex items-center justify-center dropdown-trigger">
            DAI<span className="arrow-down">&#9662;</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="#"> ETH </a>
              </li>
              <li>
                <a href="#"> BTC </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default DropdownButton;
