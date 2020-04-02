import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const GameModule = props => {
  console.log(props);
  return (
    <div className="w-full h-10 border-gray-300 border rounded my-2 flex items-center">
      <div className="mx-2">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="mx-2">Season: {props.season}</div>
      <div className="mx-2">Week: {props.week}</div>
      <div className="mx-2">{props.home_team}</div>
      <div className="mx-2">{props.home_points}</div>
      <div className="mx-2"> - </div>
      <div className="mx-2">{props.away_points}</div>
      <div className="mx-2">{props.away_team}</div>
    </div>
  );
};

export default GameModule;
