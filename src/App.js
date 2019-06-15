import React from "react";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Box from "./components/Box/Box";
import Home from "./containers/Home/Home";

import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/box" component={Box} />
      <Route path="/section" component={Section} />
    </HashRouter>
  );
}

export default App;
