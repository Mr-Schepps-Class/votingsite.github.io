import React from "react";

interface RatingProps {
  rating: number;
}

const AverageRating = ({ rating }: RatingProps) => {
  const hue = rating;
  const saturation = "72%";
  const lightness = "80%";

  const hslColor = `hsl(${hue} ${saturation} ${lightness})`;
  console.log(hslColor);
  return (
    <div>
      <div className="rating-outer-circle">
        <div
          style={{ backgroundColor: hslColor }}
          className="rating-inner-circle"
        >
          <p className="rating-text nomarg">{rating / 10}</p>
        </div>
      </div>
    </div>
  );
};

export default AverageRating;
