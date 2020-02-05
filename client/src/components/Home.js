import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="flex justify-center content-center h-screen">
        <div className="text-6xl">
          <h1>Fumblerooski</h1>
        </div>
      </div>
    );
  }
}

export default Home;
