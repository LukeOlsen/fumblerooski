import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const BCRPie = (props) => {
  console.log(props.data);
  if (props.data.length > 1) {
    return (
      <ResponsiveContainer>
        <PieChart>
          <Pie data={props.data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    );
  } else {
    return null;
  }
};

export default BCRPie;
