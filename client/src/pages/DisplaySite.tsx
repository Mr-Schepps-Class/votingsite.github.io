import React from "react";
import RatingScale from "../components/RatingScale";
import { useLocation } from "react-router-dom";

const DisplaySite = () => {
  const location = useLocation();
  return (
    <>
      <RatingScale
        siteURL={location.state.link}
        siteAuthor={location.state.author}
      />
    </>
  );
};

export default DisplaySite;
