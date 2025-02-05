import React from "react";
import { ReactNode } from "react";
import AverageRating from "./AverageRating";
import { useEffect, useState } from "react";
import html2canvas from 'html2canvas';



interface SiteCardProps {
  siteGithub: string;
  websiteName: string;
  rating: number;
}

const SiteCard = ({ siteGithub, websiteName, rating }: SiteCardProps) => {
 
  const screenShot = async () => {
    const iframe = document.getElementsByTagName('iframe');
    const screen = iframe[0]?.contentDocument?.body;
  
    html2canvas(screen)
      .then((canvas) => {
        const base64image = canvas.toDataURL('image/png');
  
       // Do something with the image
    });
  }

  return (
    <>
      <div className="card mb-3 w-100 mx-3 my-4" id="my-card-color">
        <div className="card-body">
          <AverageRating rating={rating} />
          <a
            href="#"
            className="btn btn-primary w-75 py-3 fs-4 fw-bolder"
            id="my-card-button"
          >
            explore
          </a>

          <iframe src={siteGithub}></iframe>
            <h5 className="card-title ">{websiteName}</h5>
          </div>
      </div>
    </>
  );
};

export default SiteCard;
