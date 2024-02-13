import React from "react";
import Ratecalculator from "../Assets/a.jpg";
import ShippingCalculator from "../Assets/b.jpg";
import MovingShippingCalculator from "../Assets/c.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Ratecalculator,
      title: "Ocean Container Freight Rate Calculator ",
      text: "Global Container Shipping Rates are posted in The International Freight Calculator for Ocean Cargo Full Container.",
    },
    {
      image: ShippingCalculator,
      title: "Ocean LCL Shipping Calculator",
      text: "Automatic LCL Shipping Calculator",
    },
    {
      image: MovingShippingCalculator,
      title: "International Moving Shipping Calculator",
      text: "International Moving Freight Calculator",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
