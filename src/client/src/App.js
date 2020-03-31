import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Team from "./components/Teams/Team";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Conferences from "./components/Conferences/Conferences";
import "./styles/App.css";
import Rankings from "./components/Rankings/Rankings";
import Recruits from "./components/Recruits/Recruits";
import Games from "./components/Games/Games";

function App() {
  return (
    <Router>
      <div className="overflow-auto">
        <Route exact path="/" exact component={Home} />
        <Sidebar className="w-3" />
        <div className="pl-40 flex bg-gray-900 text-gray-300">
          <Route exact path="/about" component={About} />
          <Route path="/conferences" component={Conferences} />
          <Route path="/team/:teamName" component={Team} />
          <Route path="/rankings" component={Rankings} />
          <Route path="/recruits" component={Recruits} />
          <Route path="/games" component={Games} />
        </div>
      </div>
    </Router>
  );
}

export default App;
