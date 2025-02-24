import React from "react";

interface RatingProps {
  rating: number;
  extraclass?: string;
}

const AverageRating = ({ rating, extraclass }: RatingProps) => {
  const hue = rating;
  const saturation = "72%";
  const lightness = "80%";

  const hslColor = `hsl(${hue} ${saturation} ${lightness})`;

  return (
    <div className={extraclass}>
      <div
        style={{ backgroundColor: hslColor }}
        className={`rating-inner-circle`}
      >
        <p className="rating-text nomarg">{rating / 10}</p>
      </div>
    </div>
  );
};

export default AverageRating;
