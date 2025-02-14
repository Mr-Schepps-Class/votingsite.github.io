import { useState } from "react";
import DetectMobile from "./DetectMobile";
import httpClient from "../httpClient";
import SiteCard from "./SiteCard";

interface GridColumnProps {
  totalSites: number;
}

const GridColumn = ({ totalSites }: GridColumnProps) => {
  const colNum = DetectMobile() ? 1 : 3;
  const rowNum = Math.ceil(totalSites / colNum);

  return (
    <>
      {Array.from({ length: rowNum }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: colNum }).map((_, colIndex) => {
            const siteIndex = rowIndex * colNum + colIndex;
            //console.log(siteIndex);
            if (siteIndex >= totalSites) return null; // Prevent extra items

            return (
              <div
                key={siteIndex}
                className={`col-${12 / colNum} d-flex justify-content-center`}
              >
                <SiteCard customId={siteIndex}/>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default GridColumn;
