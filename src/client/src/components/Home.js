import React, { Component } from "react";
import heroImg from "../Images/heroImg2.svg";
import { urlencoded } from "body-parser";
import { Link } from "react-router-dom";

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
      <div className="bg-gray-100 text-center w-screen">
        <div className="flex justify-end pr-8">
          <div className="m-4 hover:text-purple-400 cursor-pointer">ABOUT</div>
          <div className="m-4 hover:text-purple-400 cursor-pointer">TEAMS</div>
          <div className="m-4 hover:text-purple-400 cursor-pointer">DEV</div>
        </div>
        <div className="justify-center content-center py-20 md:h-screen">
          <div className="lg:pt-16 flex">
            <div className="md:w-1/3 lg:flex-1 px-6 md:mt-10 lg:mx-10 lg:mt-20 m-auto">
              <h1 className="text-3xl md:w-full tracking-tight lg:text-6xl">
                ALLOW ME TO INTRODUCE{" "}
                <span className="text-purple-600">FMBL</span>
              </h1>
              <h4 className="text-xl mt-6 lg:text-2xl">
                A college football app for every team
              </h4>
              <div className="w-full flex justify-center mt-4">
                <Link to="/team/Florida">
                  <div className="bg-purple-600 hover:bg-purple-400 cursor-pointer rounded h-12 w-32 self-center text-white flex justify-center align-center">
                    <p className="m-auto">Take me to it!</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 lg:flex-1 h-8 mx-10">
              <img className="md:h-1/2 lg:h-1/3" src={heroImg} />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <div className="md:flex w-full m-8 align-middle justify-center">
            <div className="w-10/12 h-20 my-4 lg:mx-10 md:w-1/4 bg-gray-700"></div>
            <div className="w-10/12 h-20 my-4 lg:mx-10 md:w-1/4 bg-gray-700"></div>
          </div>
          <div className="md:flex w-full m-8 align-middle justify-center">
            <div className="w-10/12 h-20 my-4 lg:mx-10 md:w-1/4 bg-gray-700"></div>
            <div className="w-10/12 h-20 my-4 lg:mx-10 md:w-1/4 bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
