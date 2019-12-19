import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTeamRecruiting } from '../../actions/actionsAPI';


const mapDispatchToProps = dispatch => {
    return {
        getTeamRecruiting: payload => dispatch(getTeamRecruiting(payload))
    }
}

const mapStateToProps = state => {
    return {
        recruits: state.recruitingReducer.recruits
    }
}

class Recruits extends Component {

    constructor(props) {
        super(props)

        this.state = {
            year: '',
            team: ''
        }

        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleYearChange(event) {
        this.setState({year: event.target.value});

      }

    handleTeamChange(event) {
        this.setState({team: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getTeamRecruiting(this.state);
    }

    render() {
        return (
            <div className="max-h-full overflow-scroll">
                <h1>This is Recruits!</h1>
                <form onSubmit={this.handleSubmit}>
                    <select className="text-black m-10 w-30" value={this.state.year} onChange={this.handleYearChange}>
                        <option selected>select</option>
                        <option>2018</option>
                    </select>

                    <select className="text-black m-10 w-30" value={this.state.team} onChange={this.handleTeamChange}>
                        <option selected>select</option>
                        <option>Florida</option>
                        <option>Alabama</option>

                    </select>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {this.props.recruits.length > 0 ?
                    
                    <div>
                        {this.props.recruits.map(recruit => {
                            return (
                                <div>{recruit.name}</div>
                            )
                        })}
                    </div>
                    
                    : 
                    
                    ''}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recruits);