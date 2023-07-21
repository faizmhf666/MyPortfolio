import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/MyPortfolio/" Component={Home} />
        <Route exact path="/MyPortfolio/projects" Component={Projects} />
        <Route exact path="/MyPortfolio/contact" Component={Contact} />
        <Route exact path="/MyPortfolio/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
