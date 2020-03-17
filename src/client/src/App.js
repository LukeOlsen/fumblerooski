import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Sidebar";
import Team from "./components/Teams/Team";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Conferences from "./components/Conferences/Conferences";
import "./styles/App.css";
import Rankings from "./components/Rankings/Rankings";
import Recruits from "./components/Recruits/Recruits";

function App() {
  return (
    <Router>
      <Navbar className="w-3" />
      <div className="pl-32 flex bg-gray-900 text-gray-300">
        <Route exact path="/" exact component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/conferences" component={Conferences} />
        <Route path="/team/:teamName" component={Team} />
        <Route path="/rankings" component={Rankings} />
        <Route path="/recruits" component={Recruits} />
      </div>
    </Router>
  );
}

export default App;
