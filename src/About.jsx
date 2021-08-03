import React from "react";
import Common from "./Common";
import hero from "./images/hero.svg"

const About = () => {
  return (
    <>
    <Common 
      name="Welcome to about page "
      imgsrc={hero}
      visit ="/contact"
      btname="Contact Now"
    />
    </>
  );
};

export default About;
