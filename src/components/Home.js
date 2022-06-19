import React from "react";
import { Link } from "react-router-dom";
import QrImage from "https://s3.amazonaws.com/cdnl.iconscout.com/lottie/free/preview/3664074.gif?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4VMJAKC54WWWCYMY%2F20220619%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220619T073253Z&X-Amz-SignedHeaders=host&X-Amz-Expires=232027&X-Amz-Signature=54b9b5739b9311c6ccd5cd654899a40a1c0b3ebca57ab791917b0bde2366464b";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_image_container">
          <img id="home_image" src={QrImage} alt="Home" />
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
