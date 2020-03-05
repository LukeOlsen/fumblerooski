import React, { Component } from 'react';


class RecruitProfile extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="flex justify-between border border-gray-100 text-lg m-1">
                <div className="">{this.props.recruit.stars}</div>
                <div className="">{this.props.recruit.name}</div>
                <div className="">{this.props.recruit.position}</div>
                <div className="">{this.props.recruit.stateProvince}</div>
                <div className="">{this.props.recruit.height}, {this.props.recruit.weight}</div>
            </div>
        )
    }
}

export default RecruitProfile;