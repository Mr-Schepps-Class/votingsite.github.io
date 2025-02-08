import React from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <PageTitle>404 Page Not Found</PageTitle>
      <p>
        return <Link to="/"> home</Link>
      </p>
    </>
  );
};

export default NotFound;
