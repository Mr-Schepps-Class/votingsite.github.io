import React from "react";
import SiteCard from "./SiteCard";
import DetectMobile from "./DetectMobile";
import GridColumn from "./GridColumn";

const CardGrid = () => {
  return (
    <div className="container text-center">
      <GridColumn totalSites={2} />
    </div>
  );
};

export default CardGrid;
