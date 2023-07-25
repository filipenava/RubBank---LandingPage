import React, { useState } from "react";
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3344/newsletter', { email });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <span className="primary-sub-heading">ASSINE NOSSA NEWSLETTER</span>
      <h1 className="primary-heading">Obtenha as Atualização Mais Recentes</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="contato@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="secondary-button" type="submit">Inscreva-se</button>
      </form>
    </div>
  );
};

export default Contact;

