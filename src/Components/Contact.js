import React, { useState } from "react";
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false); // Estado para acompanhar se há um erro de email
  const [showModal, setShowModal] = useState(false); // Estado para mostrar o modal


  const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value.length >= 5 && !validateEmail(value)); // Se o email tem pelo menos 5 caracteres e não é válido, definir o erro de email como verdadeiro
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3344/newsletter', { email });
      console.log(response.data);
      setShowModal(true); // Mostrar o modal após a inscrição ser concluída
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Função para fechar o modal
    setEmail('');
  };

  return (
    <div className="contact-page-wrapper">
      <span className="primary-sub-heading">ASSINE NOSSA NEWSLETTER</span>
      <h1 className="primary-heading">Obtenha as Atualização Mais Recentes</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="contato@email.com" value={email} onChange={handleInputChange} />
        {emailError && <div style={{ color: '#880B9C' }}>Por favor, insira um email válido.</div>}
        <button className="secondary-button" type="submit">Inscreva-se</button>
      </form>

      {showModal && ( // Renderizar o modal se showModal for verdadeiro
        <div className="modal">
          <div className="modal-content">
            <div className="modal-icon">
              {/* Adicione sua animação CSS aqui */}
            </div>
            <h2 style={{marginBlock: '2rem'}}>Cadastrado com sucesso!</h2>
            <button className="secondary-button" onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Contact;
