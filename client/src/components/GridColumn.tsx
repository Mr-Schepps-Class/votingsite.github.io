import React from "react";
import SiteCard from "./SiteCard";
import { useState, useEffect } from "react";
import DetectMobile from "../components/DetectMobile";

const GridColumn = () => {
  const colNum = DetectMobile() ? 1 : 3;

  const [numElements, setNumElements] = useState(colNum);

  useEffect(() => {
    setNumElements(colNum);
  }, [colNum]);

  const elements = Array.from(
    { length: numElements },
    (_, i) => `Item ${i + 1}`
  );

  return elements.map((_, index) => (
    <div
      key={index}
      className={`col-${12 / colNum} d-flex justify-content-center`}
    >
      <SiteCard
        websiteName="WOW AMAZING WEBSITE"
        rating={84}
        siteGithub=" https://pages.github.com/"
      />
    </div>
  ));
};

export default GridColumn;
