import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
import LoginSignup from "./pages/LoginSignup";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload-project" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
