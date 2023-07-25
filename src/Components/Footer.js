import React from "react";
import Logo from "../Assets/logo-branco.png";
import playstore from "../Assets/google-play-badge.png";
import appstore from "../Assets/app-store-badge.png";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import BannerBackground from "../Assets/home-banner-background.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <img src={playstore} alt="" className="app-store"/>
          <img src={appstore} alt="" className="app-store"/>
          {/* <SiLinkedin />
          <BsYoutube />
          <FaFacebookF /> */}
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h3>Links Rápidos</h3>
          <span><PlayArrowIcon className="play-icon"/> Nossos Serviços</span>
          <span><PlayArrowIcon className="play-icon"/> Nossos Recursos</span>
          <span><PlayArrowIcon className="play-icon"/> Taxas do App</span>
          <span><PlayArrowIcon className="play-icon"/> Solicitações</span>
        </div>
        <div className="footer-section-columns">
          <h3>Informações</h3>
          <span><PlayArrowIcon className="play-icon"/> (18) 3222-6805</span>
          <span><PlayArrowIcon className="play-icon"/> ola@rubbank.com</span>
          <span><PlayArrowIcon className="play-icon"/> imprensa@rubbank.com</span>
          <span><PlayArrowIcon className="play-icon"/> contato@rubbank.com</span>
        </div>
        <div className="footer-section-columns">
          <h3>Fique Ligado</h3>
          <span><FacebookIcon className="play-icon"/> Facebook</span>
          <span><TwitterIcon className="play-icon"/> Twitter</span>
          <span><LinkedInIcon className="play-icon"/> Linkedin</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
