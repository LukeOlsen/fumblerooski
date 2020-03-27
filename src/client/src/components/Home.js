import React, { Component } from "react";
import heroImg from "../Images/heroImg2.svg";
import { urlencoded } from "body-parser";

// const bgImage = {
//   backgroundImage: `url(${mainBanner3})`,
//   width: "100%",
//   height: "100vh",
//   backgrounSize: "contain",
//   backgroundPosition: "center center",
//   backgroundRepeat: "no-repeat",
//   margin: "auto",
//   padding: "0",
//   opacity: "0.8"
// };

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="text-center max-h-full justify-center content-center h-screen bg-fixed bg-gray-100">
        <div className="flex justify-end pr-8">
          <div className="m-4 cursor-pointer">ABOUT</div>
          <div className="m-4 cursor-pointer">TEAMS</div>
          <div className="m-4 cursor-pointer">DEV</div>
        </div>
        <div className="pt-20 flex">
          <div className="flex-1 mx-10 mt-20">
            <h1 className="tracking-tight text-6xl">
              ALLOW ME TO INTRODUCE{" "}
              <span className="text-purple-600">FMBL</span>
            </h1>
            <h4 className="text-2xl">A college football app for every team</h4>
            <div className="w-full flex justify-center mt-4">
              <div className="bg-purple-600 hover:bg-purple-400 cursor-pointer rounded h-12 w-32 self-center text-white flex justify-center align-center">
                <p className="m-auto">Take me to it!</p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-8 mx-10">
            <img className="h-1/3" src={heroImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
