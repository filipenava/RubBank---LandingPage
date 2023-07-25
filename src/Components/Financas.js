import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import Extrato from "../Assets/Mockup-rubbank-1-800x1020.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import playstore from "../Assets/google-play-badge.png";
import appstore from "../Assets/app-store-badge.png";

const Financas = () => {

  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="financas-section-container">
      <div className="financas-section-image-container">
        <img src={Extrato} alt="" />
      </div>
      <div className="financas-section-text-container">
        <p className="primary-sub-heading">TUDO EM UM SÓ LUGAR</p>
        <h1 className="primary-heading">
        Controle Suas Finanças de Forma Fácil e Segura 
        </h1>
        <p className="primary-text">
        Nosso banco digital é sua chave para um mundo financeiro sem estresse. Sem linhas ou papelada, apenas simplicidade e conveniência ao seu alcance. Oferecemos uma variedade de recursos projetados para tornar a gestão do seu dinheiro tão fácil quanto um clique.
        </p>
        <p className="financas-primary-text">
          <span><CheckCircleIcon className="financas-play-icon"/> Transferências em Tempo Real</span>
          <span><CheckCircleIcon className="financas-play-icon"/> Extrato Financeiro Completo</span>
          <span><CheckCircleIcon className="financas-play-icon"/> Segurança e Qualidade</span>
        </p>
        <div className="financas-buttons-container">
          <img src={playstore} alt="" className="financas-app-store"/>
          <img src={appstore} alt="" className="financas-app-store"/>
        </div>
      </div>
    </div>
  );
};

export default Financas;
