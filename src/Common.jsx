import React from "react";
import { NavLink } from "react-router-dom";
// import web from "./images/image2.svg"
import "./index.css"

const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center justify-content-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
            <div 
            className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>
            {props.name} 
            <strong className="font-weight-bold text-primary">Vishal Waykar</strong>
            </h1>
            <h4 className="my-3">
              We are the team of talented developer making websites.
            </h4>
            <div className="mt-3">
              <NavLink to="/" className="btn-get-started">
                {props.btname} 
              </NavLink>
            </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
            <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
            </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Common;
