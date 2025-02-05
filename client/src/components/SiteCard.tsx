import React from "react";
import { ReactNode } from "react";
import AverageRating from "./AverageRating";

interface SiteCardProps {
  siteGithub: string;
  websiteName: string;
  rating: number;
}

const SiteCard = ({ siteGithub, websiteName, rating }: SiteCardProps) => {
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
          <iframe src={siteGithub} className="card-img-top px-3 py-4"></iframe>
          <div>
            <h5 className="card-title ">{websiteName}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteCard;
