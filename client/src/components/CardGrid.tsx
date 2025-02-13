import React from "react";
import SiteCard from "./SiteCard";
import DetectMobile from "./DetectMobile";
import GridColumn from "./GridColumn";
import { useState } from "react";
import httpClient from "../httpClient";

const CardGrid = () => {

  const [size, setSize] = useState(0);

  const getSize = async () => {
    try {
      const response = await httpClient.get("http://127.0.0.1:5000/getSize");

      setSize(response.data.size);
    } catch (error) {
      console.error("Error getting data: ", error);
    }
  };

  getSize();

  console.log(size);


  return (
    <div className="container text-center">
      <GridColumn totalSites={size} />
    </div>
  );
};

export default CardGrid;
