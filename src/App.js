import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Box from "./components/Box/Box";
import Home from "./containers/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/box" component={Box} />
      <Route path="/section" component={Section} />
    </Router>
  );
}

export default App;
