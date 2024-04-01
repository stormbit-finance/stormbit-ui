import React from "react";
import ColumnGraph from "~~/components/ColumnGraph/ColumnGraph";

const Analytics: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-[30px]">
      <div className="max-w-[1380px] w-full pt-[30px] min-h-[800px] gap-[10px] flex flex-col items-center px-[20px]">
        <div className="w-full">
          <span className="text-2xl ">Repayment</span>
        </div>

        <div className="w-full flex items-center justify-center container-total">
          <ColumnGraph />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
