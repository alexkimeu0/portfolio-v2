import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Quotes from "./components/Quotes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <div className="main-content">
            <Route path="/" exact component={Home} content={this.state} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/quotes" exact component={Quotes} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
