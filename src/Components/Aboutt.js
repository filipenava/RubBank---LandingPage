import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const logoUrls = ["/logo0.png", "/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png", "/logo6.png", "/logo7.png", "/logo8.png"];


const Aboutt = () => {

  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="aboutt-section-container">
      {/* <div className="aboutt-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div className="aboutt-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="aboutt-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="aboutt-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutt;
