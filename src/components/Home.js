import React from "react";
import { Link } from "react-router-dom";
import QrImage from "../assests/QrCode.png";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_image_container">
          <img id="home_image" src={QrImage} alt="Home Image" />
        </div>
        <div className="start">
          <Link to="/QrCode">
            <button id="start_button">START</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
