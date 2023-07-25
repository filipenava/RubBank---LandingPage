import React, { useRef } from "react";
import Carousel from 'react-elastic-carousel';
import './About.css';

import logo0 from "../Assets/logo0.png";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo6 from "../Assets/logo6.png";
import logo7 from "../Assets/logo7.png";
import logo8 from "../Assets/logo8.png";
import logo9 from "../Assets/logo0.png";
import logo10 from "../Assets/logo1.png";
import logo11 from "../Assets/logo2.png";
import logo12 from "../Assets/logo3.png";
import logo13 from "../Assets/logo4.png";
import logo14 from "../Assets/logo6.png";
import logo15 from "../Assets/logo7.png"; 
import logo16 from "../Assets/logo8.png";

import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const logoUrls = [logo0, logo1, logo2, logo3, logo4, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16 ];

const About = () => {
  const carouselRef = useRef(null);

  return (
    <div className="about-section-container">
          <div className="outer2">
            <div className="inner2">
              <div className="section2-container">
                <p className="texto-centro">Empresas Parceiras</p>
                <Carousel 
                  ref={carouselRef}
                  itemsToShow={5} 
                  showArrows={false} 
                  enableAutoPlay 
                  autoPlaySpeed={3000} 
                  pagination={false}
                  onNextEnd={({ index }) => {
                    if (index + 1 === Math.ceil(logoUrls.length / 5)) {
                      carouselRef.current.goTo(0);
                    }
                  }}
                >
                  {logoUrls.map((logoUrl, index) => (
                    <div key={index}>
                      <img src={logoUrl} alt={`Logo ${index}`} className="carousel-image" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div> 
    </div>
  );
};


export default About;
