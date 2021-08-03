import React from "react";
import Common from "./Common";
import web from "./images/image2.svg"
import "./index.css"

const Home = () => {
  return (
    <>
    <Common
      name="Grow your business with "
      imgsrc={web}
      visit ="/"
      btname="Get Started"
    />
    </>
  );
};

export default Home;
