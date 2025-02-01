import React from "react";
import SiteCard from "./SiteCard";

const CardGrid = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4 d-flex justify-content-center">
          {" "}
          <SiteCard websiteName="WOW AMAZING WEBSITE" rating={8.8}>
            <br />
          </SiteCard>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <SiteCard websiteName="Cool WEbsite 2!" rating={9.8}>
            <br />
          </SiteCard>
        </div>
        <div className="col-4 d-flex justify-content-center">
          {" "}
          <SiteCard websiteName="GOOD WEBSITE" rating={8.8}>
            <br />
          </SiteCard>
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-flex justify-content-center">
          {" "}
          <SiteCard websiteName="WOW AMAZING WEBSITE" rating={8.8}>
            <br />
          </SiteCard>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <SiteCard websiteName="Cool WEbsite 2!" rating={9.8}>
            <br />
          </SiteCard>
        </div>
        <div className="col-4 d-flex justify-content-center">
          {" "}
          <SiteCard websiteName="GOOD WEBSITE" rating={8.8}>
            <br />
          </SiteCard>
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-flex justify-content-center">
          {" "}
          <SiteCard websiteName="WOW AMAZING WEBSITE" rating={8.8}>
            <br />
          </SiteCard>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <SiteCard websiteName="Cool WEbsite 2!" rating={9.8}>
            <br />
          </SiteCard>
        </div>
        <div className="col-4 d-flex justify-content-center">
          {" "}
          <SiteCard websiteName="GOOD WEBSITE" rating={8.8}>
            <br />
          </SiteCard>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
