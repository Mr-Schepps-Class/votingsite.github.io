import React from "react";
import { Link } from "react-router-dom";
import httpClient from "../httpClient";

const NavBar = () => {
  const [user, setUser] = React.useState("");
    React.useEffect(() => {

    
    
    (async () => {
      try {
        const resp = await httpClient.get("http://127.0.0.1:5000/@me");
        setUser(resp.data);
      } 
      catch (error) {
        console.log("Not authenticated");
        setUser("none");
      }
      })();
  }, []);

  const logoutUser = async () => {
    
    await httpClient.post("http://127.0.0.1:5000/logout");
    window.location.href = "/";
  };




  return (
    <header className="header-default">
      <nav
        className="navbar navbar-expand-lg header-list py-3 ps-2 mb-4"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WEB PORTAL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>

             
              <li className="nav-item">
              {user != "none" ? (
                <button onClick={logoutUser}>Logout</button>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              </li>
              <li className="nav-item">
                {user != "none" ? (
                  <div></div>
                ):(
                  <Link className="nav-link" to="/signup">
                   Signup
                  </Link>
                )}
              </li>
              
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/upload-project">
                  <button className="btn btn-outline-light me-2" type="button">
                    Upload Project
                  </button>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search For a Site"
                aria-label="Search For a Site"
              ></input>
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
