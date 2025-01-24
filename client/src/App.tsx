import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import RegisterPage from "./components/Register";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload-project" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path = "/signup" element = {<Signup/>} />
          <Route path = "/login" element = {<Login />} />

        </Routes>
      </main>
    </>
  );
}

export default App;
