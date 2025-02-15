import React, { ReactNode } from "react";
import AverageRating from "./AverageRating";

interface FeaturedSiteProps {
  link: string;
  websiteName: string;
  websiteCreator: string;
  rating: number;
  timeRemaining: string;
}

const FeaturedSite = ({
  link,
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
          <div className="featured-website">
            {<iframe id="myIframe" width="100%" src={link}></iframe>}
          </div>

          <AverageRating rating={rating} extraclass={"extramoves"} />
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
