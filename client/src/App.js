import React from 'react';
import Home from './components/Home';
import Navbar from './components/Sidebar';
import Team from './components/Teams/Team';
import About from './components/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Conferences from './components/Conferences/Conferences';
import './styles/App.css';
import Rankings from './components/Rankings/Rankings';
import Recruits from './components/Recruits/Recruits';





function App() {

  return (
    <Router>
      <div className="App flex">
        <Navbar className="w-3" />
        <div className="App-header flex-grow">
          <div className="text-center m-auto mt-8 max-h-full overflow-y-scroll">
            <Route exact path="/" exact component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/conferences" component={Conferences} />
            <Route path="/team/:teamName" component={Team} />
            <Route path="/rankings" component={Rankings} />
            <Route path="/recruits" component={Recruits} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
