import React from "react";
import SiteCard from "../components/SiteCard";

const Gallery = () => {
  return (
    <>
      <title>Web Portal - Gallery</title>

      <h1 className="heavy-text">Project Gallery</h1>

      <div>
        <SiteCard websiteName="WOW AMAZING WEBSITE" rating={8.8}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </SiteCard>
      </div>
    </>
  );
};

export default Gallery;
