import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRankings } from '../../actions/actionsAPI';

const mapDispatchToProps = dispatch => {
    return {
        getRankings: team => dispatch(getRankings(team))
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        apRank: state.rankingsReducer.rankings.apRank,
        cfpRank: state.rankingsReducer.rankings.cfpRank
    }
}

class Rankings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            week: '',
            year: ''
        }

        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleWeekChange = this.handleWeekChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.rankings)
    }

    handleYearChange(event) {
        // console.log(event.target.value)
        this.setState({year: event.target.value});
        console.log(this.state.year)
      }

    handleWeekChange(event) {
        this.setState({week: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.getRankings(this.state)
    }

    render() {
        return(
            <div className="h-screen w-full overflow-auto">
                <div>Rankings</div>
                <form className="text-black" onSubmit={this.handleSubmit}>
                    <label>
                    Year:
                    <select value={this.state.year} onChange={this.handleYearChange}>
                        <option selected>select</option>
                        <option selected value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                    </select>
                    </label>

                    <label>
                        Week:
                        <select value={this.state.week} onChange={this.handleWeekChange}>
                            <option selected>select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="flex flex-row flex-justify-center flex-align-middle">
                    <div className="flex-1">
                        {this.props.apRank.ranks ? this.props.apRank.ranks.map(rank => {
                            return (
                                <div>{rank.school}</div>
                            )
                        }) : '' }
                    </div>
                    {this.props.cfpRank.ranks ? <div className="flex-1">
                    {this.props.cfpRank.ranks ? this.props.cfpRank.ranks.map(rank => {
                            return (
                                <div>{rank.school}</div>
                            )
                        }) : '' }
                    </div> : ''}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rankings)