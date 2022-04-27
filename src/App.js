import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import QrCode from "./components/QrCode";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Qrcode" element={<QrCode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
