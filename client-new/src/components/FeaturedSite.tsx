import React, { ReactNode } from "react";
import AverageRating from "./AverageRating";

interface FeaturedSiteProps {
  children: ReactNode;
  websiteName: string;
  websiteCreator: string;
  rating: number;
  timeRemaining: string;
}

const FeaturedSite = ({
  children,
  websiteName,
  websiteCreator,
  rating,
  timeRemaining,
}: FeaturedSiteProps) => {
  return (
    <>
      <h2 className="heavy-text nomarg">Featured Site of The Week: </h2>
      <p className="basic-text">{`Resets in ${timeRemaining}`}</p>
      <div className="featured-site">
        <div className="featured-container">
          <div className="featured-website">{children}</div>
          <AverageRating rating={rating} />
        </div>

        <div className="featured-caption">
          <h3 className="basic-text nomarg">
            <strong className="heavy-text">{websiteName + ": "}</strong>
            {websiteCreator}
          </h3>
        </div>
      </div>
    </>
  );
};

export default FeaturedSite;
