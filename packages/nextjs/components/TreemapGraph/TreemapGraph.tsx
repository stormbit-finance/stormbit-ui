import React from "react";
import { Treemap } from "recharts";
import { dataCharts } from "~~/data/data";

function TreemapChart() {
  return (
    <div>
      <Treemap
        width={500}
        height={450}
        data={dataCharts}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#363653"
      />
    </div>
  );
}

export default TreemapChart;
