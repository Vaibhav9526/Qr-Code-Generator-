import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_image_container">
          <img id="home_image" src="https://img.freepik.com/free-vector/tiny-people-using-qr-code-online-payment-isolated-flat-illustration_74855-11136.jpg" alt="Home" />
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
