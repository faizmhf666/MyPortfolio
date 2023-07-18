import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="left">
          <h1>Hello!</h1>
          <p>
            Hello, I'm M.H. Faiz, an automobile engineer Graduate and an
            aspiring web-developer. My growing fascination with the creative
            aspects of web development led me to embark on a journey of
            self-learning and exploration. I am passionate about crafting
            visually appealing and user-friendly websites that leave a lasting
            impact.
          </p>
          <Link to="/contact">
            <button className="btn btn-1" type="button">
              Contact Me
            </button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img
                src="https://www.pearsystem.com/assets/images/Reactjs-Website-Development.jpg"
                className="img"
                alt="top"
              />
            </div>
            <div className="image-stack bottom">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="img"
                alt="bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
