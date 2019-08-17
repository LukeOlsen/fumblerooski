import React from 'react';
import Recruit from './components/Recruits/Recruits'
import Navbar from './components/Sidebar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/App.css';

function Index() {
  return <Recruit />
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </header>
      </div>
    </Router>
  );
}

export default App;
