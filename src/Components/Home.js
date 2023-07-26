import React, { useState, useEffect } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Cards.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
// import Menu from "./Menu"
// import "./Menu.css";

const Home = () => {
  // Define o estado inicial para controle da visibilidade de cada div
  const [isTextVisible, setTextVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);

  // Use o hook useEffect para mudar o estado depois que o componente for montado
  useEffect(() => {
    const timer1 = setTimeout(() => setTextVisible(true), 200);
    const timer2 = setTimeout(() => setImageVisible(true), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="home-container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginInline: '2.2rem' }}>
      {/* <Menu /> */}
      <div className="home-banner-container" >
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className={`home-text-section ${isTextVisible ? 'appear' : ''}`}>
          <h3 className="primary-sub-heading">Seu banco digital personalizado</h3>
          <h1 className="primary-heading">
          Faça <span style={{ color: '#00E88F' }}>Transferencias de forma simples</span> & Controle Suas Finanças
          </h1>
          <p className="primary-text">
          A RubBank oferece uma experiência personalizada para lhe atender. Com ele, você pode realizar transferências de forma simples e eficiente, e ter controle sobre suas finanças.
          </p>
          
          <div className="button-container">
            <button className="secondary-button scaleup-button">
              Baixe Agora! <FiArrowRight />{" "}
            </button>
            <button className="secondary-button-outline scaleup-button">
              Saiba Mais  !  <FiArrowRight />{" "}
            </button>
          </div>
        </div>
        <div className={`home-image-section ${isImageVisible ? 'appear' : ''}`}>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

