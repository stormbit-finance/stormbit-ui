"use client";

import { useState } from "react";
import MyGraph from "./Graph";
import dataSet from "./data";
import DropdownSelector, { Category } from "./menugraph";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  container: {
    color: "#fff",
    padding: "2rem",
    transition: "0.3s ease-in-out",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
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
      <MyGraph data={data} />
    </div>
  );
}

export default Analytics;
