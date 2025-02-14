import React from "react";
import { ReactNode } from "react";
import AverageRating from "./AverageRating";
import { useEffect, useState } from "react";
import httpClient from "../httpClient";

interface SiteCardProps {

  customId: number;
}

const SiteCard = ({customId }: SiteCardProps) => {

  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [url, setUrl] = useState("");


  const getData = async (id: number) => {
      try {
        const response = await httpClient.get("http://127.0.0.1:5000/query", {
          params: { id: id },
        });
  
        setName(response.data.name);
        setRating(response.data.rating);
        setUrl(response.data.url);
  
        
      } catch (error) {
        console.error("Error getting data: ", error);
    }
  };

  getData(customId);
  return (
    <>
      <div className="card mb-3 w-100 mx-3 my-4" id="my-card-color">
        <div className="card-body">
          <AverageRating rating={rating} />
          <a
            href="/website-preview"
            className="btn btn-primary w-75 py-3 fs-4 fw-bolder"
            id="my-card-button"
          >
            explore
          </a>

          <iframe src={url}></iframe>
          <h5 className="card-title ">{name}</h5>
        </div>
      </div>
    </>
  );
};

export default SiteCard;
