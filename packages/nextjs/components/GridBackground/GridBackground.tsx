import React, { useEffect, useState } from "react";
import "./gridBackground.css";

interface GridProps {
  numRows: number;
  numCols: number;
}

const GridBackground: React.FC<GridProps> = ({ numRows, numCols }) => {
  const [grid, setGrid] = useState<boolean[][]>([]);

  useEffect(() => {
    const initializeGrid = () => {
      const newGrid = Array(numRows)
        .fill(false)
        .map(() => Array(numCols).fill(false));
      setGrid(newGrid);
    };

    initializeGrid();
  }, [numRows, numCols]);

  return (
    <div className="absolute flex flex-col items-start justify-start w-full overflow-hidden grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row items-start justify-start w-full h-full">
          {row.map((col, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell block lg:h-[72px] lg:w-[72px]  w-[30px]  h-[30px] border border-solid border-[#ffffff04] ${
                rowIndex === grid.length - 1 ? "last-row" : ""
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridBackground;
