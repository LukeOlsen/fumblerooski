import React from 'react';
import Home from './components/Home';
import Navbar from './components/Sidebar';
import Team from './components/Teams/Team';
import About from './components/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Conferences from './components/Conferences/Conferences';
import './styles/App.css';





function App() {
  return (
    <Router>
      <div className="App flex">
        <Navbar className="w-3" />
        <header className="App-header flex-grow">
          <div className="w-2/3 text-center m-auto mt-8">
            <Route exact path="/" exact component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/conferences" component={Conferences} />
            <Route path="/team/:teamName" component={Team} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
