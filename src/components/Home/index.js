import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./HomeContent.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-main">
        <div className="bg-mask">
          <img
            className="home-image"
            src="https://res.cloudinary.com/dvu0weqay/image/upload/v1689584689/pexels-kevin-ku-577585_yharnd.jpg"
            alt="WorkDesk"
          />
        </div>
        <div className="content">
          <p>Hi, I am </p>
          <h1>MH Faiz</h1>
          <p> I am a React Developer</p>
          <div>
            <Link
              to="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Faiz_2023-07-11-121214.pdf"
              target="_blank"
            >
              <button type="button" className="btn btn-1">
                Get Resume
              </button>
            </Link>
            <Link to="/MyPortfolio/Contact">
              <button type="button" className="btn btn-2">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
