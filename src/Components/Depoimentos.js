import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tomiasi from "../Assets/tomiasi.png";
import Milhouse from "../Assets/milhouse.png";

const Depoimentos = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [feedbacksPerPage, setFeedbacksPerPage] = useState(isSmallScreen ? 1 : 2);
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);

  const workInfoData = [
    {
      image: Tomiasi,
      text: "O RubBank é incrível! Suas taxas competitivas e facilidade de uso tornam minhas transações financeiras mais ágeis e convenientes do que nunca.",
    },
    {
      image: Milhouse,
      text: "Eu amo como o RubBank simplificou minha vida financeira.",
    },
    {
      image: Tomiasi,
      text: "O RubBank é a solução perfeita para quem busca um banco digital confiável. ",
    },
    {
      image: Milhouse,
      text: "O RubBank revolucionou a maneira como eu administro minhas finanças.",
    },
    {
      image: Tomiasi,
      text: "Estou impressionado com a eficiência do RubBank.",
    },
    {
      image: Milhouse,
      text: "O RubBank superou todas as minhas expectativas.",
    },
  ];

  const totalPage = Math.ceil(workInfoData.length / feedbacksPerPage);
  
  const changePage = (i) => {
    setPrevPage(currentPage);
    setCurrentPage(i);
  };

  useEffect(() => {
    setFeedbacksPerPage(isSmallScreen ? 1 : 2);
  }, [isSmallScreen]);

  const currentFeedbacks = workInfoData.slice(currentPage * feedbacksPerPage, (currentPage + 1) * feedbacksPerPage);

  return (
    <div className="depoimentos-section-wrapper" style={{ paddingInline: '1rem'}}>
      <div className="depoimentos-section-bottom">
        {currentFeedbacks.map((data, index) => (
          <div className={`depoimentos-section-info ${prevPage < currentPage ? 'moveRight' : 'moveLeft'}`} key={data.image + data.text} >
            <div className="depoimentos-testimonial-section-bottom" style={{ maxWidth: '50rem', paddingBlock: '1rem', paddingInline: '3rem'}}>
              <p>{data.text}</p>
              <div className="depoimentos-image-text">
                <div className="testimonial-section-top">
                  <img src={data.image} alt="" className="depoimentos-img-height"/>
                  <div className="testimonials-stars-container">
                    <AiFillStar size={11} />
                    <AiFillStar size={11} />
                    <AiFillStar size={11} />
                    <AiFillStar size={11} />
                    <AiFillStar size={11} />
                    <h2>Guilherme</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="depoimentos-navigation">
        {[...Array(totalPage)].map((e, i) => (
          <button
            key={i}
            className={`depoimentos-pagination-dot${i === currentPage ? " active" : ""}`}
            onClick={() => changePage(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Depoimentos;
