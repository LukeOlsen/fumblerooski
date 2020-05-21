import React from "react";
import renderer from "react-test-renderer";
import RecruitsTable from "../../components/Recruits/RecruitsTable";

const testRecruit = [
  {
    city: "Test",
    committedTo: "School",
    country: null,
    createdAt: null,
    height: 73,
    id: 3699,
    name: "Test",
    position: "CB",
    ranking: 1,
    rating: 1,
    recruitType: "HighSchool",
    school: "Test",
    stars: 5,
    stateProvince: "FL",
    team_id: 0,
    updatedAt: null,
    weight: 182,
    year: 2019,
  },
];

describe("Recruiting Table", () => {
  it("Renders a table of recruits based on data from db", () => {
    const component = renderer.create(
      <RecruitsTable recruits={[testRecruit]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
