import React from "react";
import { useState } from "react";
import AverageRating from "./AverageRating";
import DetectMobile from "./DetectMobile";
let currentVal = 0;

const RatingScale = () => {
  const [sliderValue, setSliderValue] = useState(0.1);
  const sliderOrientation = DetectMobile() ? "slidewrapm" : "slidewrap";
  const rangeOrientation = DetectMobile() ? "votingRangem" : "votingRange";
  const margEnd = DetectMobile() ? "me-5" : "";
  const margT = DetectMobile() ? "mx-3" : "mt-3";

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
    <div className={`${margEnd} col-4`} id={sliderOrientation}>
      {DetectMobile() ? <></> : <h4 className="voteText">Average Rating</h4>}
      {DetectMobile() ? (
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
        className={DetectMobile() ? "ms-3" : ""}
        value={sliderValue}
        onInput={getVal}
      />

      <h1 className={`voteText ${margT}`}>
        {Number(sliderValue) != 10
          ? Number(sliderValue).toFixed(1)
          : Number(sliderValue)}
      </h1>
    </div>
  );
};

export default RatingScale;
