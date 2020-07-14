import React from "react";

const SimpleMatchup = ({ props }) => {
  return (
    <div className="w-full overflow-auto h-full">
      {props.map((el) => {
        return (
          <div className="flex text-center justify-center">
            <div className="w-40 m-2 text-left">
              <div>{el.home_team}</div>
            </div>
            <div className="w-8 m-2">
              <div>{el.home_points}</div>
            </div>
            <div className="w-5 m-2">
              <div>-</div>
            </div>
            <div className="w-8 m-2">
              <div>{el.away_points}</div>
            </div>
            <div className="w-40 m-2 text-right">
              <div>{el.away_team}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleMatchup;
