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
        <Route exact path="/" Component={Home} />
        <Route exact path="/projects" Component={Projects} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
