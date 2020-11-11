import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Projects from "./components/views/Projects";
import Contact from "./components/views/Contact";
import Credits from "./components/views/Credits";
import Resume from "./components/views/Resume";

import './App.css';

function App() {
  return (
    <Router basename="/React_Portfolio">
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          <Route path="/credits" component={Credits}/>
          <Route path="/resume" component={Resume}/>
          <Route path="*" component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
