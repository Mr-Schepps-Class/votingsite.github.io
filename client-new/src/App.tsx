import React from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";

function App() {
  return <Home />;
}
function Home() {
  return (
    <>
      <div className="App">
        <title>Web Portal - Home Page</title>
        <NavBar />
        <Header1 text="Welcome to the Web Portal"></Header1>
        <Header1 text="Showcase Your Unique Web Project!"></Header1>
        <FileUpload />
        <br />
        <RandomComponent text="wow cool using props amazing splendid spectacular stuff here man" />
      </div>
    </>
  );
}

function Header1(props) {
  return <h1 className="basic-text">{props.text}</h1>;
}

function BasicButton(props) {
  return (
    <button className="button-basic">
      <p className="basic-text">{props.text}</p>
    </button>
  );
}

function NavBar() {
  return (
    <header className="header-default">
      <nav>
        <ul className="header-list">
          <li className="header-item" id="header-logo">
            <a className="header-link" id="link-logo" href="/">
              WEB PORTAL
            </a>
          </li>
          <li className="header-item" id="upload-item">
            <a id="upload-link" className="header-link" href="/">
              Upload Project
            </a>
          </li>
          <li className="header-item">
            <a className="header-link" href="/">
              Login/Signup
            </a>
          </li>
          <li className="header-item">
            <a className="header-link" href="/">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function RandomComponent(props) {
  return (
    <div>
      <BasicButton text="EXPLORE GALLERY" />
      <p className="basic-text"> {props.text}</p>
    </div>
  );
}

export default App;
