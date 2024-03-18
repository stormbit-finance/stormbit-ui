import { useEffect, useState } from "react";
import "./background.css";

interface GridProps {
  numRows: number;
  cellWidth: number;
}

const Grid: React.FC<GridProps> = ({ numRows, cellWidth }) => {
  const [numCols, setNumCols] = useState<number>(0);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const newNumCols = Math.floor(screenWidth / cellWidth);
    setNumCols(newNumCols);
  }, [cellWidth]);

  const grid = Array(numRows)
    .fill(false)
    .map(() => Array(numCols).fill(false));

  return (
    <div className="absolute flex flex-col items-start justify-start overflow-hidden grid-container w-full">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row items-start justify-start w-full h-full">
          {row.map((col, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell block h-[72px] w-[${cellWidth}px] border border-solid border-[#ffffff04]`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
