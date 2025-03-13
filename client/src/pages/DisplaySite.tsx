import React from "react";
import RatingScale from "../components/RatingScale";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

const DisplaySite = () => {
  const location = useLocation();
  return (
    <>
      {location.state.link != null ? (
        <RatingScale
          siteURL={location.state.link}
          siteAuthor={location.state.author}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DisplaySite;
