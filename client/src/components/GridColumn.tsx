import React from "react";
import SiteCard from "./SiteCard";
import DetectMobile from "../components/DetectMobile";

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
            if (siteIndex >= totalSites) return null; // Prevent extra items

            return (
              <div
                key={siteIndex}
                className={`col-${12 / colNum} d-flex justify-content-center`}
              >
                <SiteCard
                  websiteName={`WOW AMAZING WEBSITE ${siteIndex + 1}`}
                  rating={84} // Example rating
                  siteGithub="https://pages.github.com/"
                />
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default GridColumn;
