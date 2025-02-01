import React from "react";
import { ReactNode } from "react";

interface SiteCardProps {
  children: ReactNode;
  websiteName: string;
  rating: number;
}

const SiteCard = ({ children, websiteName, rating }: SiteCardProps) => {
  return (
    <div className="card mb-3 w-100 mx-3" id="my-card-color">
      <div className="card-body">
        <a href="#" className="btn btn-primary" id="my-card-button">
          Explore
        </a>
        <div className="card-img-top">{children}</div>
        <h5 className="card-title ">{websiteName}</h5>
      </div>
    </div>
  );
};

export default SiteCard;
