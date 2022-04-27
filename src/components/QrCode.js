import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [input, setinput] = useState("");
  const [Qrvalue, setQrvalue] = useState("");
  return (
    <>
      <div className="main">
        <h1>QR CODE GENERATOR </h1>
        <br />
        <div className="qr">
          <QRCode value={Qrvalue ? Qrvalue : "NOTHING!"} size={200}></QRCode>
        </div>
        <div>
          <br />
          <br />
          <input
            placeholder="Enter Your Text Here!"
            className="input"
            type="text"
            onChange={(e) => {
              setinput(e.target.value);
              console.log(setinput);
            }}
          />
        </div>
        <br />
        <button
          className="Gen"
          onClick={() => {
            setQrvalue(input);
          }}
        >
          GENERATE QR CODE
        </button>
      </div>
    </>
  );
};

export default QrCode;
