import React, { useState } from 'react';
import { FcCollaboration, FcInspection, FcClock, FcHome } from 'react-icons/fc';
import FormEnvio from './FormEnvio';
import Historico from './Hist';
import ContatoWhatsApp from './ContatoWhatsapp';
import '../../public/css/home.css';

export default function Home({ logout }) {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'FormEnvio':
        return <FormEnvio />;
      case 'Historico':
        return <Historico />;
      case 'ContatoWhatsApp':
        return <ContatoWhatsApp />;
      default:
        return null;
    }
  };

  return (
    <div>
      {currentPage == '' && (
        <nav className="navbar">
          <h2>Seja bem vindo, motorista Tiago</h2>
          <button onClick={logout}>Sair</button>
        </nav>
      )}

      <main className="main">
        <h6 className="desejo">O que deseja hoje?</h6>
        <div className="grid-container">
          <button className="square-button" onClick={() => handlePageChange('')}>
            <FcHome size={64} />
            <span>Inicio</span>
          </button>
          <button className="square-button" onClick={() => handlePageChange('FormEnvio')}>
            <FcInspection size={64} />
            <span>Enviar NFE</span>
          </button>
          <button className="square-button" onClick={() => handlePageChange('Historico')}>
            <FcClock size={64} />
            <span>Histórico</span>
          </button>
          <button className="square-button" onClick={() => handlePageChange('ContatoWhatsApp')}>
            <FcCollaboration size={64} />
            <span>Falar com suporte</span>
          </button>
        </div>
        {renderCurrentPage()}
      </main>
    </div>
  );
}
