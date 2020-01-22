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

        console.log(props.team)
    }   


    render() {
        if (this.props.team) {
            const styles = {
                background: this.props.team.alt_color
            }
        }
        return (
            <div className="">
                <div className="flex-row">
                    <h2 className="text-6xl mt-8">{this.props.match.params.teamName}</h2>
                    {this.props.team ? <img class="h-40" src={this.props.team.logos[0]} alt=""/> : <div></div>}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Team);