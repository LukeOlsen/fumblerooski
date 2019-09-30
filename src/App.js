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
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Route exact path="/" exact component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/conferences" component={Conferences} />
          <Route path="/team/:teamName" component={Team} />
        </header>
      </div>
    </Router>
  );
}

export default App;
