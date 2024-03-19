import { useEffect, useState } from "react";
import "./background.css";

interface GridProps {
  numRows: number;
  numCols: number;
}

const Grid: React.FC<GridProps> = ({ numRows, numCols }) => {
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
    <div className="absolute flex flex-col items-start justify-start overflow-hidden grid-container w-full">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row items-start justify-start w-full h-full">
          {row.map(colIndex => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell block h-[72px] w-[72px] border border-solid border-[#ffffff04]`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
