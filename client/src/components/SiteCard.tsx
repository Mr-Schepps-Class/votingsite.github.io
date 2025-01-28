import React from "react";
import { ReactNode } from "react";

interface SiteCardProps {
  children: ReactNode;
  websiteName: string;
  rating: number;
}

const SiteCard = ({ children, websiteName, rating }: SiteCardProps) => {
  return (
    <div>
      <div
        className="card border-info mb-3 text-bg-dark"
        id="my-card-color"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Explore
          </a>
          <div className="card-img-top">{children}</div>
          <h5 className="card-title ">{websiteName}</h5>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
