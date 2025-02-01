import React from "react";
import SiteCard from "../components/SiteCard";
import CardGrid from "../components/CardGrid";
import MobileCardGrid from "../components/MobileCardGrid";
import DetectMobile from "../components/DetectMobile";

const Gallery = () => {
  return (
    <>
      <title>Web Portal - Gallery</title>
      <h1 className="heavy-text">Project Gallery</h1>
      {DetectMobile() ? <MobileCardGrid /> : <CardGrid />}
    </>
  );
};

export default Gallery;
