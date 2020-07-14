import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PPALine = (data) => {
  console.log(data.PPA[0].data);
  if (data.PPA[0].data.length > 1) {
    return (
      <ResponsiveContainer>
        <LineChart
          data={data.PPA[0].data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#efefef" />
          <XAxis
            interval={0}
            stroke="#efefef"
            dataKey="id"
            tick={{ fontSize: 10 }}
          />
          <YAxis ticks={[-1, -0.5, 0, 0.5, 1]} stroke="#efefef" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Defense" stroke="#8884d8" />
          <Line type="monotone" dataKey="Offense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
    return null;
  }
};

export default PPALine;
