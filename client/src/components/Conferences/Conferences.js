import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import ConferenceOne from "./Conference";
import { fetchConferenceData } from "../../actions/actionsAPI";
import { setTeam } from "../../actions/index";
import Team from "../Teams/Team";

const mapDispatchToProps = dispatch => {
  return {
    setTeam: team => dispatch(setTeam(team)),
    fetchConferenceData: conference => dispatch(fetchConferenceData(conference))
  };
};

const mapStateToProps = state => {
  return {};
};

const RenderTeams = props => {
  const teamsList = props.props;
  console.log(props.props.length > 0);
  if (teamsList.length > 0) {
    return (
      <div className="flex flex-row justify-center flex-wrap">
        {teamsList.map(team => (
          <div onClick={() => props.setTeam(team)} key={team} className="m-8">
            <Link className="Link-style" to={`/team/${team}`}>
              {team}
            </Link>
          </div>
        ))}
        <Route path={`/team/:teamName`} render={props => <Team {...props} />} />
      </div>
    );
  } else {
    return <span></span>;
  }
};

class Conferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conferencesApi: [
        ["SEC", "SEC"],
        ["ACC", "ACC"],
        ["Pac-12", "PAC"],
        ["Big-10", "B1G"],
        ["Big-12", "B12"]
      ],
      conferenceTeams: {
        SEC: [
          "Alabama",
          "Auburn",
          "Arkansas",
          "Florida",
          "Georgia",
          "Kentucky",
          "LSU",
          "Missouri",
          "Ole Miss",
          "Vanderbilt",
          "Texas A&M",
          "Mississippi State",
          "South Carolina",
          "Tennessee"
        ],
        ACC: [
          "Florida State",
          "Georgia Tech",
          "Louisville",
          "Boston College",
          "NC State",
          "Duke",
          "North Carolina",
          "Wake Forest",
          "Syracuse",
          "Pittsburgh",
          "Clemson",
          "Virginia",
          "Virginia Tech",
          "Miami"
        ],
        Pac12: [
          "Arizona State",
          "Arizona",
          "Stanford",
          "California",
          "UCLA",
          "USC",
          "Colorado",
          "Oregon State",
          "Utah",
          "Washington",
          "Washington State",
          "Oregon"
        ],
        Big10: [
          "Northwestern",
          "Indiana",
          "Maryland",
          "Michigan State",
          "Michigan",
          "Minnesota",
          "Nebraska",
          "Rutgers",
          "Ohio State",
          "Penn State",
          "Wisconsin",
          "Illinois",
          "Iowa",
          "Purdue"
        ],
        Big12: [
          "Iowa State",
          "Oklahoma State",
          "Oklahoma",
          "Baylor",
          "Texas",
          "West Virginia",
          "Kansas",
          "Kansas State",
          "TCU",
          "Texas Tech"
        ]
      },
      currentConference: []
    };
    this.setConference = this.setConference.bind(this);
  }

  componentDidMount() {}

  setConference(conf) {
    this.setState({ currentConference: this.state.conferenceTeams[conf] });
  }

  render() {
    return (
      <div className="App-body flex-grow text-center m-auto max-h-full overflow-y-scroll">
        <h1 className="mb-8 text-6xl">Conferences</h1>
        <div className="flex flex-row justify-center">
          {this.state.conferencesApi.map((conference, id) => {
            return (
              <div
                onClick={() => this.setConference(conference[0])}
                className="m-8"
                key={id + conference[0]}
              >
                <Link
                  className="Link-style"
                  to={`${this.props.match.url}/${conference[0]}`}
                >
                  {conference[0]}
                </Link>
              </div>
            );
          })}
        </div>
        <RenderTeams
          setTeam={this.props.setTeam}
          props={this.state.currentConference}
        />

        <Route
          path={`${this.props.match.path}/:conferenceName`}
          component={ConferenceOne}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conferences);
