import React, { useState } from 'react';
import QRScanner from './LeituraCodigo';
import { FcInspection } from 'react-icons/fc';
import { AiOutlineBarcode } from 'react-icons/ai';
import Accordion1 from './accordion'; // Importe o componente Accordion
import Ocorrencia from './RegistroOCR'; // Importe o componente de ocorrência
import '../../public/css/form.css';

export default function FormEnvio() {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [entregue, setEntregue] = useState(false);
  const [naoRealizada, setNaoRealizada] = useState(false);
  const [enviado, setEnviado] = useState(false); // Estado para controlar se o formulário foi enviado com sucesso

  const handleShowQRScanner = () => {
    setShowQRScanner(true);
  };

  const handleEntregueChange = () => {
    setEntregue(!entregue);
    if (naoRealizada) {
      setNaoRealizada(false);
    }
  };

  const handleNaoRealizadaChange = () => {
    setNaoRealizada(!naoRealizada);
    if (entregue) {
      setEntregue(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário enviado!');
    setEnviado(true);
    window.alert('Tudo Ok! Seu formulário foi enviado.');
    event.target.reset(); // Limpa o formulário após o envio bem-sucedido
  };

  const handleReturnHome = () => {
    setShowQRScanner(false); // Fecha o formulário
    setEnviado(false); // Reseta o estado de enviado
    setEntregue(false); // Reseta o estado de entregue
    setNaoRealizada(false); // Reseta o estado de naoRealizada
  };

  return (
    <div className="principal">
      <div className="topo">
        <span>
          <FcInspection /> Comprovação de entregas
        </span>
      </div>

      <div className="leitura">
        <button onClick={handleShowQRScanner} className="centralizado">
          <span>
            <AiOutlineBarcode size={35} /> Adicionar dados da NFE
          </span>
        </button>
      </div>

      {showQRScanner && <QRScanner />}

      <form onSubmit={handleSubmit}>
        <span className="titulo">Situação:</span>
        <div className="box">
          <ul>
            <li>
              <span className="textointerno"> Razão social:</span>
              <input type="text" className="inputtext" placeholder="Digite a razão social da empresa." />
              <br />
              <span className="textointerno"> CNPJ:</span>
              <input type="text" className="inputtext" placeholder="Digite o CNPJ da empresa." />
              <br />
            </li>
          </ul>
        </div>

        <span className="titulo">Dados da entrega</span>
        <div className="box">
          <ul>
            <li>
              <span className="textointerno"> Data da entrega:</span>
              <input type="date" className="data" /> <br />
              <span className="textointerno"> Status final:</span>
              <input type="radio" name="situacao" id="entregue" checked={entregue} onChange={handleEntregueChange} /> Entregue
              <input type="radio" name="situacao" id="naoRealizada" checked={naoRealizada} onChange={handleNaoRealizadaChange} /> Não
              realizada <br />
            </li>
          </ul>
        </div>

        {naoRealizada && <Accordion1 items={[{ title: 'Clique aqui e declare a ocorrência da entrega.', content: <Ocorrencia /> }]} />}

        <span className="titulo"> Registros da entrega:</span>
        <div className="box">
          <span className="textointerno"> Foto canhoto: </span>
          <input type="file" accept="image/*" className="upload" />
          <br />
          <span className="textointerno"> Comprovação: </span>
          <input type="file" accept="image/*" className="upload" />
          <br />
        </div>

        <div className="button">
          <button type="submit" className="buttonE">
            {' '}
            Enviar{' '}
          </button>
        </div>
      </form>
    </div>
  );
}
