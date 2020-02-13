import React, { Component } from "react";
import { connect } from "react-redux";
import { getTeamRecruiting } from "../../actions/Recruits/recruitsAPI";
import RecruitProfile from "./RecruitProfile";

const mapDispatchToProps = dispatch => {
  return {
    getTeamRecruiting: payload => dispatch(getTeamRecruiting(payload))
  };
};

const mapStateToProps = state => {
  return {
    recruits: state.recruitingReducer.recruits,
    teamsList: state.teamReducer.teamsList
  };
};

// to organize a table should the organization be in the recruit render function?

// for example, props and an organizational state are passed to the function and based on what the organizational state is
// it can calculate based on what is returned.

// this would be much easier in sql

const RecruitRender = props => {
  if (props.recruits.length > 0) {
    return (
      <div className="flex flex-col content-center justify-end text-left">
        {props.recruits.map((recruit, index) => {
          return (
            <RecruitProfile
              key={recruit.name}
              index={index}
              recruit={recruit}
            />
          );
        })}
      </div>
    );
  }
  return <div></div>;
};

class Recruits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "",
      team: ""
    };

    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleYearChange(event) {
    this.setState({ year: event.target.value });
  }

  handleTeamChange(event) {
    this.setState({ team: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getTeamRecruiting(this.state);
  }

  render() {
    return (
      <div className="h-screen">
        <h1>This is Recruits!</h1>
        <form onSubmit={this.handleSubmit}>
          <select
            className="text-black m-10 w-30"
            value={this.state.year}
            onChange={this.handleYearChange}
          >
            <option selected>select</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
          </select>

          <select
            className="text-black m-10 w-30"
            value={this.state.team}
            onChange={this.handleTeamChange}
          >
            <option selected>select</option>
            {this.props.teamsList.map(team => {
              return <option key={team.school}>{team.school}</option>;
            })}
          </select>
          <input type="submit" value="Submit" />
        </form>
        <div className="max-h-full">
          <RecruitRender recruits={this.props.recruits} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recruits);
