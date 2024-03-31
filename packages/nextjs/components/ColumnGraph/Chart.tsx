import React from "react";
import { Data } from "./data";
import { createUseStyles } from "react-jss";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  data: Data[];
}

const useStyles = createUseStyles(() => ({
  container: {
    color: "#fff",
    backgroundColor: "transparent",
    padding: "1rem",
    transition: "0.3s ease-in-out",
    width: "100%",
    height: "400px",
  },
}));

const GradientColors = () => {
  return (
    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="100%" stopColor="#9135F5" />
    </linearGradient>
  );
};

const Chart: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <defs>
            <GradientColors></GradientColors>
          </defs>
          {/* <Tooltip
            itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }}
            contentStyle={{ backgroundColor: "#0A1322" }}
          /> */}
          <CartesianGrid strokeDasharray="4 4" stroke="#9135F5" opacity={0.4} />
          <XAxis dataKey="name" tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <YAxis tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <Bar dataKey="view" fill="url(#colorView)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
