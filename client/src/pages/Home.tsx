import React from "react";
import FeaturedSite from "../components/FeaturedSite";
import AverageRating from "../components/AverageRating";
import websitephoto from "../assets/websitephoto.png";
import httpClient from "../httpClient";
import ScreenshotComponent from "../components/Screenshot";

const Home = () => {
  let timeDifference: any = [];
  function getResetTime() {
    const today = new Date();
    const todayArray = [
      today.getUTCMonth(),
      today.getUTCDate(),
      today.getUTCHours(),
    ];
    const reset = new Date(`2, 10, 2025 20:59:59 UTC`);
    const resetArray = [
      reset.getUTCMonth(),
      reset.getUTCDate(),
      reset.getUTCHours(),
    ];

    for (let i = 0; i < resetArray.length; i++) {
      timeDifference.push(resetArray[i] - todayArray[i]);
    }
    if (timeDifference[0] < 0) {
      timeDifference[0] = 12 - Math.abs(timeDifference[0]);
    }
    if (timeDifference[2] < 0) {
      timeDifference[2] = 24 - Math.abs(timeDifference[2]);
      timeDifference[1] -= 1;
    }
  }
  getResetTime();

  let timeDiffConditionalHours =
    timeDifference[0] == 0
      ? `${timeDifference[1]} Days, ${timeDifference[2]} Hours`
      : `${timeDifference[0]} Months, ${timeDifference[1]} Days, ${timeDifference[2]} Hours`;

  let timeDiffConditional =
    timeDifference[0] == 0
      ? `${timeDifference[1]} Days`
      : `${timeDifference[0]} Months, ${timeDifference[1]} Days`;


  return (
    <>

 
      <title>Web Portal - Home Page</title>

      <h1 className="heavy-text">Welcome to the Web Portal</h1>
      <h3 className="heavy-text">Showcase Your Unique Web Project!</h3>

      <img className="basic-image" src={websitephoto}></img>

      <FeaturedSite
        websiteName="Amazing Site"
        websiteCreator="Bob Bob"
        rating={89}
        link="https://pages.github.com/"
        timeRemaining={
          timeDifference[2] == 0
            ? timeDiffConditional
            : timeDiffConditionalHours
        }
      ></FeaturedSite>
    </>
  );
};

export default Home;
/*
import React from "react";
import FeaturedSite from "../components/FeaturedSite";
import AverageRating from "../components/AverageRating";
import websitephoto from "../assets/websitephoto.png";

const Home = () => {
  let timeDifference: any = [];
  function getResetTime() {
    const today = new Date();
    const todayArray = [today.getUTCDate(), today.getUTCHours()];
    const reset = new Date(`1, 10, 2025 20:59:59 UTC`);
    const resetArray = [reset.getUTCDate(), reset.getUTCHours()];

    for (let i = 0; i < resetArray.length; i++) {
      timeDifference.push(resetArray[i] - todayArray[i]);
    }
    if (timeDifference[0] < 0) {
      timeDifference[0] = 12 - Math.abs(timeDifference[0]);
    }
    if (timeDifference[1] < 0) {
      timeDifference[1] = 24 + Math.abs(timeDifference[1]);
    }
  }
  getResetTime();

  return (
    <>
      <title>Web Portal - Home Page</title>
      <h1 className="heavy-text">Welcome to the Web Portal</h1>
      <h3 className="heavy-text">Showcase Your Unique Web Project!</h3>

      <img className="basic-image" src={websitephoto}></img>

      <FeaturedSite
        websiteName="Amazing Site"
        websiteCreator="Bob Bob"
        rating={89}
        timeRemaining={`${timeDifference[0]} Days, ${timeDifference[1]} Hours`}
      >
        <h1 className="heavy-text nomarg">WEBSITE HERE</h1>
      </FeaturedSite>
    </>
  );
};

export default Home;
*/
