import React, { Component } from 'react';


class RecruitProfile extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div className="md:flex w-1/3 border-gray-100">
                <div className="mx-5">{this.props.recruit.name}</div>
                <div className="mx-5">{this.props.recruit.position}</div>
                <div className="mx-5">{this.props.recruit.height}</div>
            </div>
        )
    }
}

export default RecruitProfile;