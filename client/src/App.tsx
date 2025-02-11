import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import RegisterPage from "./components/Register";
import NotFound from "./pages/NotFound";
import DisplaySite from "./pages/DisplaySite";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload-project" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/website-preview" element={<DisplaySite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
