"use client";

import { useState } from "react";
import MyGraph from "./Graph";
import dataSet from "./data";
import DropdownSelector, { Category } from "./menugraph";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  container: {
    color: "#fff",
    padding: "2rem 0",
    transition: "0.3s ease-in-out",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

function Analytics() {
  const classes = useStyles();
  const [data, setData] = useState(dataSet.Today);

  const fetchCustomData = (category: Category) => {
    // @ts-ignore
    setData(dataSet[category.value]);
  };

  return (
    <div className={classes.container}>
      <DropdownSelector fetchCustomData={fetchCustomData} />
      <div className="flex items-center justify-center">
        <span className=" text-[#6C757D] transform-text font-bold w-[200px]">pool usage (%)</span>
        <MyGraph data={data} />
      </div>
    </div>
  );
}

export default Analytics;
