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
    }

    handleYearChange(event) {
        this.setState({year: event.target.value});
      }

    handleTeamChange(event) {
        this.setState({team: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>This is Recruits!</h1>
                <form>
                    <select className="text-black m-10 w-30" value={this.state.year} onChange={this.handleYearChange}>
                        <option>2018</option>
                    </select>

                    <select className="text-black m-10 w-30" value={this.state.team} onChange={this.handleTeamChange}>
                        <option>Florida</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recruits);