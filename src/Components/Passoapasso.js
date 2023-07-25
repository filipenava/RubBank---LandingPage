import React, { useState, useEffect, useRef } from "react";
import Passo1 from "../Assets/passo1.png";
import Passo2 from "../Assets/passo2.png";
import Passo3 from "../Assets/passo3.png";

const Passoapasso = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkVisible = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", checkVisible);
    checkVisible();

    return () => window.removeEventListener("scroll", checkVisible);
  }, []);

  const workInfoData = [
    {
      image: Passo1,
      title: "Registre sua Conta",
      text: "Registre-se facilmente fornecendo algumas informações básicas.",
    },
    {
      image: Passo2,
      title: "Ative Seu Cadastro",
      text: "Ative sua conta por e-mail e desbloqueie todos os recursos.",
    },
    {
      image: Passo3,
      title: "Realize Transferências",
      text: "Descubra recursos poderosos para transferências simplificadas.",
    },
  ];
  
  return (
    <div className="work-section-wrapper">
      <div className="passoapasso-section-top">
        <p className="primary-sub-heading">VAMOS COMEÇAR</p>
        <h1 className="primary-heading">Passo a Passo do Registro</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div ref={ref} className={`passoapasso-section-info`} key={data.title}>
            <div className={`passoapasso-info-boxes-number ${index === 1 ? 'select' : ''}`}>
              {(index + 1).toString().padStart(2, '0')}
            </div>
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

export default Passoapasso;
