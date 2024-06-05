import React from "react";
import { useState } from "react";
import { TfiAlert } from "react-icons/tfi";
import '../../public/css/form.css'
export default function Ocorrencia() {
  return (
    <div className="principal">
      <div className="topo">
        <span>
          <TfiAlert size={25} /> Registros de ocorrências
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <span className="titulo">Situação:</span>
      <div className="box">
        <ul>
          <li>
            <span className="textointerno"> Local da Ocorrência </span>
            <input
              type="text"
              className="inputtext"
              placeholder="Digite aqui o local da ocorrência"
            />{" "}
            <br />
            <span className="textointerno"> Ocorrido em cliente?</span>
            <input
              type="radio"
              name="ocorridoEmCliente"
              id="ocorridoSim"
            />{" "}
            Sim.
            <input
              type="radio"
              name="ocorridoEmCliente"
              id="ocorridoNao"
            />{" "}
            Não.
          </li>
        </ul>
      </div>

      <span className="titulo">Gravidade da ocorrência</span>
      <div className="box">
        <span className="textointerno"> Impede a entrega?</span> <br />
        <input
          type="radio"
          id="ocorridoGravidadeSim"
          name="ocorridoGravidade"
        />{" "}
        Sim.
        <input
          type="radio"
          id="ocorridoGravidadeNao"
          name="ocorridoGravidade"
        />{" "}
        Não.
        <span className="textointerno"> Houve gastos extras além do estipulado?</span> <br />
        <input type="radio" id="impedeEntregaSim" name="impedeEntrega" /> Sim.
        <input type="radio" id="impedeEntregaNao" name="impedeEntrega" /> Não.
      </div>

      <span className="titulo"> Registros da ocorrência</span>

      <div className="box">

        <span className="textointerno"> Foto ocorrido: </span>
        <input type="file" accept="image/*" className="upload" />

        <span className="textointerno"> Detalhes: </span>
        <input
          type="text"
          className="inputtextG"
          placeholder="Descreva com detalhes a ocorrência."
        />{" "}
        <br />
      </div>

      <div className="button">
        <button className="ButtonE"> Enviar </button>
      </div>
      <br />
      <br />

    </div>

  );
}
