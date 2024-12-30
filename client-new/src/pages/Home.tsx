import React from "react";
import FileUpload from "../components/FileUpload";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <title>Web Portal - Home Page</title>
      <h1 className="basic-text">Welcome to the Web Portal</h1>
      <h1 className="basic-text">Showcase Your Unique Web Project!</h1>

      <FileUpload />
      <br />
    </div>
  );
};

export default Home;
