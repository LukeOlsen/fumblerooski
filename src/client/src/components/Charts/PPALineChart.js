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
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#efefef" />
          <XAxis stroke="#efefef" dataKey="id" tick={{ fontSize: 5 }} />
          <YAxis stroke="#efefef" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="d"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="o" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
    return null;
  }
};

export default PPALine;
