import React from "react";
import SiteCard from "./SiteCard";
import DetectMobile from "./DetectMobile";
import GridColumn from "./GridColumn";

const CardGrid = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <GridColumn />
      </div>
      <div className="row">
        <GridColumn />
      </div>
      <div className="row">
        <GridColumn />
      </div>
      <div className="row">
        <GridColumn />
      </div>
      <div className="row">
        <GridColumn />
      </div>
      <div className="row">
        <GridColumn />
      </div>
      <div className="row">
        <GridColumn />
      </div>
    </div>
  );
};

export default CardGrid;
