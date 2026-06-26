import React from "react";
import Stats from "./Stats";
import Banner from "./Banner";
import CircularRotatingListDemo from "./CircularListItems";
import GetInTouch from "./GetInTouch";

function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <Stats />
      <CircularRotatingListDemo />
      <GetInTouch />
    </div>
  );
}

export default Home;
