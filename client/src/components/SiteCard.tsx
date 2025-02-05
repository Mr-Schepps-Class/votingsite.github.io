import React from "react";
import { ReactNode } from "react";
import AverageRating from "./AverageRating";
import { useEffect, useState } from "react";

interface SiteCardProps {
  siteGithub: string;
  websiteName: string;
  rating: number;
}

const SiteCard = ({ siteGithub, websiteName, rating }: SiteCardProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = `https://api.screenshotone.com/take?url=${encodeURIComponent(
    siteGithub
  )}&access_key=ggE1pJToAA54MA`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Failure to fetch screenshot! TRY AGAIN!");
        }

        const blob = await response.blob();
        const imageUrl = window.URL.createObjectURL(blob);
        setImage(imageUrl);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [siteGithub]);

  return (
    <>
      <div className="card mb-3 w-100 mx-3 my-4" id="my-card-color">
        <div className="card-body">
          <AverageRating rating={rating} />
          <a
            href="#"
            className="btn btn-primary w-75 py-3 fs-4 fw-bolder"
            id="my-card-button"
          >
            explore
          </a>

          {error && <p style={{ color: "red" }}>{error}</p>}

          {image != null && (
            <img
              src={image}
              className="card-img-top px-3 py-4"
              alt={`Screenshot of ${websiteName}!`}
            />
          )}
          <div>
            <h5 className="card-title ">{websiteName}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteCard;
