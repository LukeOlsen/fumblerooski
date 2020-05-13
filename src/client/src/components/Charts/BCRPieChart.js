import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const colors = ["#66a1ff", "#82ca9d"];

const BCRPie = (props) => {
  console.log(props.data);
  if (props.data.length > 1) {
    return (
      <ResponsiveContainer>
        <PieChart>
          <Pie data={props.data} fill="#8884d8" label>
            {props.data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={colors[index]} />;
            })}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  } else {
    return null;
  }
};

export default BCRPie;
