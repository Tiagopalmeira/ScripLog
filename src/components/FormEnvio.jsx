import React, { useState } from "react";
import QRScanner from "./LeituraCodigo";
import { FcInspection } from "react-icons/fc";
import { AiOutlineBarcode } from "react-icons/ai";
import "../../public/css/form.css";

export default function FormEnvio() {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [entregue, setEntregue] = useState(false);
  const [naoRealizada, setNaoRealizada] = useState(false);

  const handleShowQRScanner = () => {
    setShowQRScanner(true);
  };

  const handleEntregueChange = () => {
    setEntregue(!entregue); // Alternar o estado de entregue
    if (naoRealizada) {
      setNaoRealizada(false); // Se não realizada estava selecionada, desmarcar
    }
  };

  const handleNaoRealizadaChange = () => {
    setNaoRealizada(!naoRealizada); // Alternar o estado de não realizada
    if (entregue) {
      setEntregue(false); // Se entregue estava selecionada, desmarcar
    }
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
            <AiOutlineBarcode size={35} /> Adcionar dados da NFE
          </span>
        </button>
      </div>

      {showQRScanner && <QRScanner />}

      <span className="titulo">Situação:</span>
      <div className="box">
        <ul>
          <li>
            <span className="textointerno"> Razão social:</span>
            <input
              type="text"
              className="inputtext"
              placeholder="Digite a razão social da empresa."
            />
            <br />
            <span className="textointerno"> CNPJ:</span>
            <input
              type="text"
              className="inputtext"
              placeholder="Digite o CNPJ da empresa."
            />
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
            <input
              type="radio"
              name="situacao"
              id="entregue"
              checked={entregue}
              onChange={handleEntregueChange}
            />{" "}
            Entregue
            <input
              type="radio"
              name="situacao"
              id="naoRealizada"
              checked={naoRealizada}
              onChange={handleNaoRealizadaChange}
            />{" "}
            Não realizada <br />
          </li>
        </ul>
      </div>

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
        <button className="buttonE"> Enviar </button>
      </div>
    </div>
  );
}
