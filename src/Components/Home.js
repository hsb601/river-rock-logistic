import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/logo.svg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            
          </h1>
          <p className="primary-text">
          veraging our global network and long-standing carrier relationships, River Rock Logistics offers flexible, reliable ocean freight forwarding solutions built around operational excellence.
We take the time to understand your business and then work with you to develop customized transportation solutions, from finding the best schedule for shipments to securing competitive rates. Whether you need warehousing or transload, we cover all modes of transport – such as air freight forwarding, multimodal transport, cross-border services, or customs house brokerage services – We always go above and beyond to help you find the solutions you need.
Our ocean freight forwarding experts worldwide have the industry-specific expertise, skills, and diversity of experience to ensure the safe, reliable movement of your freight around the globe.
          </p>
          <button className="secondary-button">
            Request a quote <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
