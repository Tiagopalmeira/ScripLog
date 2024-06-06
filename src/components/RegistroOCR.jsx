import React, { useState } from "react";
import axios from "axios";
import { TfiAlert } from "react-icons/tfi";
import '../../public/css/form.css'

export default function Ocorrencia() {
  const [formData, setFormData] = useState({
    localOcorrencia: "",
    ocorridoEmCliente: "",
    impedeEntrega: "",
    detalhesOcorrencia: "",
    fotoOcorrido: null,
  });

  const [enviado, setEnviado] = useState(false); // Estado para controlar se o formulário foi enviado com sucesso

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia os dados para o backend
      const response = await axios.post("URL_DO_BACKEND", formData);

      // Limpa o formulário após o envio bem-sucedido
      setFormData({
        localOcorrencia: "",
        ocorridoEmCliente: "",
        impedeEntrega: "",
        detalhesOcorrencia: "",
        fotoOcorrido: null,
      });

      // Exibe uma mensagem de sucesso ou redireciona o usuário, se necessário
      alert("Dados de ocorrência enviados com sucesso!");
      setEnviado(true);
    } catch (error) {
      // Trata erros de envio, como exibição de mensagens de erro ou registro de erros
      console.error("Erro ao enviar dados de ocorrência:", error.message);
      alert("Ocorreu um erro ao enviar os dados de ocorrência. Por favor, tente novamente mais tarde.");
    }
  };

  const handleReturnForm = () => {
    setEnviado(false); // Reseta o estado de enviado
  };

  return (
    <div className="principal">
      <div className="topo">
        <span>
          <TfiAlert size={25} /> Registros de ocorrências
        </span>
      </div>

      <form onSubmit={handleSubmit} style={{ display: enviado ? "none" : "block" }}>
        <span className="titulo">Situação:</span>
        <div className="box">
          <ul>
            <li>
              <span className="textointerno"> Local da Ocorrência </span>
              <input
                type="text"
                name="localOcorrencia"
                className="inputtext"
                placeholder="Digite aqui o local da ocorrência"
                value={formData.localOcorrencia}
                onChange={handleChange}
              />
              <br />
              <span className="textointerno"> Ocorrido em cliente?</span>
              <input
                type="radio"
                name="ocorridoEmCliente"
                id="ocorridoSim"
                value="Sim"
                onChange={handleChange}
              />{" "}
              Sim
              <input
                type="radio"
                name="ocorridoEmCliente"
                id="ocorridoNao"
                value="Não"
                onChange={handleChange}
              />{" "}
              Não
            </li>
          </ul>
        </div>

        <span className="titulo">Gravidade da ocorrência</span>
        <div className="box">
          <span className="textointerno"> Impede a entrega?</span> <br />
          <input
            type="radio"
            id="ocorridoGravidadeSim"
            name="impedeEntrega"
            value="Sim"
            onChange={handleChange}
          />{" "}
          Sim
          <input
            type="radio"
            id="ocorridoGravidadeNao"
            name="impedeEntrega"
            value="Não"
            onChange={handleChange}
          />{" "}
          Não
        </div>

        <span className="titulo"> Registros da ocorrência</span>

        <div className="box">
          <span className="textointerno"> Foto ocorrido: </span>
          <input
            type="file"
            accept="image/*"
            className="upload"
            name="fotoOcorrido"
            onChange={handleChange}
          />

          <span className="textointerno"> Detalhes: </span>
          <input
            type="text"
            className="inputtextG"
            placeholder="Descreva com detalhes a ocorrência."
            name="detalhesOcorrencia"
            value={formData.detalhesOcorrencia}
            onChange={handleChange}
          />{" "}
          <br />
        </div>

        <div className="button">
          <button className="ButtonE" type="submit"> Enviar </button>
        </div>
      </form>

      {/* Exibe o pop-up de envio bem-sucedido */}
      {enviado && (
        <div className="enviado-msg">
          Tudo Ok! Seu formulário foi enviado.
          <button onClick={handleReturnForm} className="return-home">OK</button>
        </div>
      )}
      <br />
      <br />
    </div>
  );
}
