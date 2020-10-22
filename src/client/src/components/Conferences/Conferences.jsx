import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchConferenceData } from "../../actions/actionsAPI";
import { setTeam } from "../../actions/index";
import { conferenceTeams } from "./constants";
import Team from "../Teams/Team";

const mapDispatchToProps = (dispatch) => {
  return {
    setTeam: (team) => dispatch(setTeam(team)),
    fetchConferenceData: (conference) =>
      dispatch(fetchConferenceData(conference)),
  };
};

const mapStateToProps = (state) => {
  return {};
};

const RenderTeams = (props) => {
  const teamsList = props.props;
  if (teamsList.length > 0) {
    return (
      <div className="flex flex-row justify-center flex-wrap">
        {teamsList.map((team) => (
          <div onClick={() => props.setTeam(team)} key={team} className="m-8">
            <Link className="Link-style" to={`/team/${team}`}>
              {team}
            </Link>
          </div>
        ))}
        <Route
          path={`/team/:teamName`}
          render={(props) => <Team {...props} />}
        />
      </div>
    );
  } else {
    return null;
  }
};

class Conferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conferenceTeams: conferenceTeams,
      currentConference: [],
    };
    this.setConference = this.setConference.bind(this);
  }

  componentDidMount() {}

  setConference(conf) {
    this.setState({ currentConference: this.state.conferenceTeams[conf] });
  }

  render() {
    return (
      <div className="h-screen text-xl px-32 flex-grow text-center max-h-full overflow-y-scroll">
        <h1 className="mb-8 text-6xl">Conferences</h1>
        <div className="flex flex-row flex-wrap justify-center">
          {conferenceTeams.map((el, id) => {
            return (
              <div
                className="m-8 overflow-auto w-1/4 bg-gray-700 rounded p-4"
                key={el.conference}
              >
                <div
                  className="text-3xl"
                  onClick={() => this.setConference(el.conference)}
                >
                  {el.conference}
                </div>
                {el.teams.map((team) => {
                  return (
                    <div className="my-2 hover:text-indigo-400">
                      <Link className="Link-style" to={`team/${team}`}>
                        {team}
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <Route path={`${this.props.match.path}/:conferenceName`} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conferences);
