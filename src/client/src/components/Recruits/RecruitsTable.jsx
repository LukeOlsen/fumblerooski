import React from "react";

const RecruitsTable = (props) => {
  if (props.recruits[0].length > 0) {
    return (
      <div className="text-center pb-2">
        <table className="m-auto mb-2 w-11/12">
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Name</th>
              <th>Position</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Stars</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {props.recruits[0] ? (
              props.recruits[0].map((recruit, id) => {
                return (
                  <tr key={id}>
                    <td className="border">{recruit.ranking}</td>
                    <td className="border">{recruit.name}</td>
                    <td className="border">{recruit.position}</td>
                    <td className="border">{recruit.height}</td>
                    <td className="border">{recruit.weight}</td>
                    <td className="border">{recruit.stars}</td>
                    <td className="border">{recruit.stateProvince}</td>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default RecruitsTable;
