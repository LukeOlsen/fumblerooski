import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Team } from "../../components/Teams/Team";
import { MemoryRouter } from "react-router";
import BCRPieChart from "../../components/Charts/BCRPieChart";

jest.mock("../../components/Charts/BCRPieChart", () => () => "BCRPieChart");
jest.mock("../../components/Charts/PPALineChart", () => () => "PPALineChart");
jest.mock("../../components/Recruits/RecruitsTable", () => () =>
  "RecruitsTable"
);

describe("Teams", () => {
  it("snapshot renders after receiving props and loading is set to false", () => {
    const component = renderer.create(
      <Team
        loading={false}
        match={{ params: { team: "Team" }, isExact: true, path: "", url: "" }}
        teamInfo={[
          {
            mascot: "animal",
            teamRecord: [{ total_wins: 11, total_losses: 11 }],
          },
        ]}
        getTeamData={jest.fn()}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("snapshot renders loading state when loading props is true", () => {
    const component = renderer.create(
      <Team
        loading={true}
        match={{ params: { team: "Team" }, isExact: true, path: "", url: "" }}
        getTeamData={jest.fn()}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
