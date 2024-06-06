import React from 'react';
import '../../public/css/form.css'

const ContatoWhatsApp = () => {
  const handleWhatsAppRedirect = () => {
    // Altere o número abaixo para o número de telefone desejado
    const phoneNumber = '5571986924559';
    const message = 'Suporte';
    // Construa o link para a API do WhatsApp
    const whatsappLink = `https://wa.me/+${phoneNumber}`;
    // Redirecione para o link do WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className='caixinha'>
      <br />
      <br />
      <div><h2>Acesse o botão abaixo para entrar em contato com o nosso suporte:</h2></div>
      <div className='leitura12'>
        <button onClick={handleWhatsAppRedirect}>Falar com suporte via WhatsApp</button>
      </div>
    </div>
  );
};

export default ContContatoWhatsApp;
