import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Projects from "./components/views/Projects";
import Contact from "./components/views/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
      </div>
    </Router>
  )
}

export default App;
