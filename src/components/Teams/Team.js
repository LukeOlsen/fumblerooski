import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        team: state.teamReducer.team,
        data: state.teamReducer.data
    }
}


class Team extends Component {
    constructor(props) {
        super(props)

        console.log(this.props)
    }


    render() {
        return (
            <div>
                <div>
                    <h1 className="mt-8 text-6xl">Welcome to your team</h1>
                    <h2 className="text-6xl mt-8">{this.props.team}</h2>
                    {/* <p>{this.props.data}</p> */}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Team);