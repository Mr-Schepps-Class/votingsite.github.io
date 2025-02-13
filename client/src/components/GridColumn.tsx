import React from "react";
import SiteCard from "./SiteCard";
import DetectMobile from "../components/DetectMobile";
import { useState } from "react";
import httpClient from "../httpClient";

import React, { useEffect, useState } from "react";
import httpClient from "./httpClient"; // Adjust import based on your project structure

const GridColumn = () => {
  const [totalSites, setTotalSites] = useState<number>(0);
  const colNum = DetectMobile() ? 1 : 3;

  const getSize = async () => {
    try {
      const response = await httpClient.get("http://127.0.0.1:5000/getSize");
      return response.data.size;
    } catch (error) {
      console.error("Error getting data: ", error);
      return 0; // Fallback to 0 if there's an error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const size = await getSize();
      setTotalSites(size);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when component mounts

  const rowNum = Math.ceil(totalSites / colNum); // Now totalSites will be resolved

  export default GridColumn;

  const getData = async (id: number) => {
    try {
      const response = await httpClient.get("http://127.0.0.1:5000/query", {
        params: { id: id },
      });
    } catch (error) {
      console.error("Error getting data: ", error);
    }
  };

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
