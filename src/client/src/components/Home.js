import React, { Component } from "react";

const bgImage = {
  backgroundImage:
    "url(https://i.insider.com/5229f4fdeab8ea6144ad5a8c?width=1300&format=jpeg&auto=webp)",
  backgroundRepeat: "no-repeat"
};

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={bgImage}
        className="flex-grow text-center m-auto max-h-full overflow-y-scroll flex justify-center content-center h-screen"
      >
        <div className="text-6xl">
          <h1>Fumblerooski</h1>
        </div>
      </div>
    );
  }
}

export default Home;
