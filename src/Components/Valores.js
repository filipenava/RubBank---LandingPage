import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import Extrato from "../Assets/Mockup-rubbank-1-800x1020.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import playstore from "../Assets/google-play-badge.png";
import appstore from "../Assets/app-store-badge.png";
import GppGoodIcon from '@mui/icons-material/GppGood';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LanguageIcon from '@mui/icons-material/Language';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Valores = () => {

  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="valores-section-container">
      <div className="valores-section-text-container">
          <p className="primary-sub-heading">PORQUE ESCOLHER A RUBBANK</p>
          <h1 className="primary-heading">
          Nossos Valores & Benefícios Financeiros
          </h1>
          <p className="primary-text">
          A RubBank é mais do que apenas um banco digital. Acreditamos em construir uma relação de confiança com nossos clientes, oferecendo serviços financeiros de alta qualidade que são personalizados para suas necessidades individuais. 
          </p>
          <div className="footer-icons">
            <button className="secondary-button">Vamos Comecar!</button>
          </div>
      </div>
      <div className="valores-section-text-container-down">
        <div className="valores-box-itens">
          <GppGoodIcon className="valores-box-icon"/>
          <h4 className="">Dados de Informações Digitais Seguras</h4>
        </div>
        <div className="valores-box-itens-purple">
          <WorkspacePremiumIcon className="valores-box-icon"/>
          <h4 className="">Prêmios de Melhor Banco Digital da Unesp</h4>
        </div>
        <div className="valores-box-itens">
          <LanguageIcon className="valores-box-icon"/>
          <h4 className="">Transferência Simples e Agendada</h4>
        </div>
        <div className="valores-box-itens">
          <QueryStatsIcon className="valores-box-icon"/>
          <h4 className="">Extrato e Fatura Detalhados</h4>
        </div>
      </div>
    </div>
  );
};

export default Valores;
