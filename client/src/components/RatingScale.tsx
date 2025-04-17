import React from "react";
import { useState } from "react";
import AverageRating from "./AverageRating";
import DetectMobile from "./DetectMobile";
let currentVal = 0;

interface RatingScaleProps {
  siteURL: string;
  siteAuthor: string;
}

const RatingScale = ({ siteURL, siteAuthor }: RatingScaleProps) => {
  const [sliderValue, setSliderValue] = useState(0.1);
  const isMobile = DetectMobile();
  const sliderOrientation = isMobile ? "slidewrapm" : "slidewrap";
  const rangeOrientation = isMobile ? "votingRangem" : "votingRange";
  const margEnd = isMobile ? "me-5" : "";
  const margT = isMobile ? "mx-3" : "mt-3";

  const getVal = (event: any) => {
    document.documentElement.style.setProperty(
      "--slider-background",
      `hsl(${event.target.value * 10} 72% 70%)`
    );
    document.documentElement.style.setProperty(
      "--border-background",
      `hsl(${event.target.value * 10} 15% 40%)`
    );
    setSliderValue(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-10">
        <iframe src={siteURL}></iframe>
        <p>{siteAuthor}</p>
      </div>
      <div className={`${margEnd} col-2`} id={sliderOrientation}>
        {isMobile ? (
          <></>
        ) : (
          <h4 className="voteText">
            Average <br></br>Rating
          </h4>
        )}
        {isMobile ? (
          <></>
        ) : (
          <AverageRating rating={97} extraclass={`rating-outer-circle my-3`} />
        )}

        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          id={rangeOrientation}
          className={isMobile ? "ms-3" : ""}
          value={sliderValue}
          onInput={getVal}
        />

        <h1 className={`voteText ${margT}`}>
          {Number(sliderValue) != 10
            ? Number(sliderValue).toFixed(1)
            : Number(sliderValue)}
        </h1>
      </div>
    </div>
  );
};

export default RatingScale;
