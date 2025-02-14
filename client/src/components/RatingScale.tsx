import React from "react";
import { useState } from "react";

let currentVal = 0;

const RatingScale = () => {
  const [sliderValue, setSliderValue] = useState(0.1);

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
    <div className="me-5" id="slidewrap">
      <label htmlFor="votingRange" className="form-label"></label>

      <input
        type="range"
        min="0.1"
        max="10"
        step="0.1"
        id="votingRange"
        value={sliderValue}
        onInput={getVal}
      />
      <h1 id="voteText" className="mt-3">
        {sliderValue}
      </h1>
    </div>
  );
};

export default RatingScale;
