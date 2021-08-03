import React from "react";
import Card from "./Card";
import { Cdata } from "./Cdata";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className=" col-sm-12 col-lg-10  mx-auto">
            <div className="row gy-5">
              {Cdata.map((currValue,index)=>{
               return <Card key={index} imgsrc={currValue.imgsrc} title={currValue.title}/>
              }) }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
