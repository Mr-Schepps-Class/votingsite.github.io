import React from "react";

const RatingScale = () => {
  return (
    <>
      <label htmlFor="votingRange" className="form-label"></label>
      <input
        type="range"
        className="form-range m-3"
        min="0"
        max="10"
        step="0.1"
        id="votingRange"
      />
    </>
  );
};

export default RatingScale;
