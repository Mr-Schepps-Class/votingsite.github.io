import React from "react";
import SiteCard from "./SiteCard";
import DetectMobile from "../components/DetectMobile";
import { useState } from "react";
import httpClient from "../httpClient";

const GridColumn = () => {
  const colNum = DetectMobile() ? 1 : 3;

  const [size, setSize] = useState(0);

  const getSize = async () => {
    try {
      const response = await httpClient.get("http://127.0.0.1:5000/getSize");

      setSize(response.data.size);
    } catch (error) {
      console.error("Error getting data: ", error);
    }
  };

  const getData = async (id: number) => {
    try {
      const response = await httpClient.get("http://127.0.0.1:5000/query", {
        params: { id: id },
      });
    } catch (error) {
      console.error("Error getting data: ", error);
    }
  };

  getSize();
  const totalSites = size;
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
