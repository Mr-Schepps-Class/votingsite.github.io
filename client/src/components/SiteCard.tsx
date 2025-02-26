import React from "react";
import { ReactNode } from "react";
import AverageRating from "./AverageRating";
import { useEffect, useState } from "react";
import httpClient from "../httpClient";

interface SiteCardProps {
  customId: number;
}

const SiteCard = ({ customId }: SiteCardProps) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [url, setUrl] = useState("");
  const [userId, setUserId] = useState(0);

  const getData = async (id: number) => {
    try {
      const response = await httpClient.get("http://127.0.0.1:5000/query", {
        params: { id: id },
      });

      setName(response.data.name);
      setRating(response.data.rating);
      setUrl(response.data.url);
      setUserId(response.data.userId);
    } catch (error) {
      console.error("Error getting data: ", error);
    }
  };

  getData(customId);
  console.log(`http://127.0.0.1:5000/static/${userId}.png`);
  return (
    <>
      <div className="card mb-3 w-100 mx-3 my-4" id="my-card-color">
        <div className="card-body">
          <AverageRating rating={rating} extraclass={"extramoves"} />
          <a
            href="/website-preview"
            className="btn btn-primary w-75 py-3 fs-4 fw-bolder"
            id="my-card-button"
          >
            explore
          </a>
          
          
          <img src={`http://127.0.0.1:5000/static/${userId}.png`} ></img>
          <h5 className="card-title ">{name}</h5>
        </div>
      </div>
    </>
  );
};

export default SiteCard;
