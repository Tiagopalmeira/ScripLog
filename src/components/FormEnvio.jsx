import React, { useState } from 'react';
import QRScanner from './LeituraCodigo';
import { FcInspection } from 'react-icons/fc';
import { AiOutlineBarcode } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../public/css/form.css';

export default function FormEnvio() {
  const [showQRScanner, setShowQRScanner] = useState(false);

  const [formData, setFormData] = useState({
    conferente: '',
    cpf: '',
    dataEntrega: '',
    statusFinal: '',
    numero_nfe: '',
    ocorrencia: {
      local: '',
      ocorridoCliente: '',
      impedeEntrega: '',
      detalhamento: '',
      fotoOcorrido: null,
    },
    fotoCanhoto: null,
    comprovacao: null,
    comprovanteOcorrencia: null,
  });

  const handleQRCodeChange = (value) => {
    setFormData({
      ...formData,
      numero_nfe: value,
    });
  };

  const handleShowQRScanner = () => {
    setShowQRScanner(true);
  };

  const handleFileChange = (event, field) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      [field]: file,
    });
  };

  const handleOcorrenciaChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      ocorrencia: {
        ...formData.ocorrencia,
        [name]: newValue,
      },
    });
  };

  const handleComprovanteOcorrenciaChange = (file) => {
    setFormData({
      ...formData,
      comprovanteOcorrencia: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = import.meta.env.VITE_API_URL;

    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    const statusEntrega = formData.statusFinal === 'entregue' ? true : false;

    const dataToSend = {
      nota_fiscal: {
        data_entrega: formData.dataEntrega,
        status_final: statusEntrega,
        numero_nfe: formData.numero_nfe,
      },
      cliente: {
        conferente: formData.conferente,
        cpf: formData.cpf,
      },
      ocorrencia: {
        local: formData.ocorrencia.local,
        ocorrido_cliente: formData.ocorrencia.ocorridoCliente === 'Sim' ? true : false,
        impede_entrega: formData.ocorrencia.impedeEntrega === 'Sim' ? true : false,
        detalhamento: formData.ocorrencia.detalhamento,
      },
    };

    const formDataToSend = new FormData();
    formDataToSend.append('nota_fiscal[data_entrega]', dataToSend.nota_fiscal.data_entrega);
    formDataToSend.append('nota_fiscal[status_final]', dataToSend.nota_fiscal.status_final);
    formDataToSend.append('nota_fiscal[numero_nfe]', dataToSend.nota_fiscal.numero_nfe);
    formDataToSend.append('cliente[conferente]', dataToSend.cliente.conferente);
    formDataToSend.append('cliente[cpf]', dataToSend.cliente.cpf);
    formDataToSend.append('foto_canhoto', formData.fotoCanhoto);
    formDataToSend.append('comprovacao', formData.comprovacao);

    if (formData.ocorrencia.ocorridoCliente) {
      formDataToSend.append('ocorrencia[local]', dataToSend.ocorrencia.local);
      formDataToSend.append('ocorrencia[ocorrido_cliente]', dataToSend.ocorrencia.ocorrido_cliente);
      formDataToSend.append('ocorrencia[impede_entrega]', dataToSend.ocorrencia.impede_entrega);
      formDataToSend.append('ocorrencia[detalhamento]', dataToSend.ocorrencia.detalhamento);
      formDataToSend.append('comprovante_ocorrencia', formData.comprovanteOcorrencia);
    }

    try {
      const response = await axios.post(`${apiUrl}/deliveries/create`, formDataToSend, config);
      console.log('Resposta da API:', response.data);
      toast.success('Formulário enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast.error('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
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
            <AiOutlineBarcode size={35} /> Adicionar dados da NFE
          </span>
        </button>
      </div>

      {showQRScanner && <QRScanner onInputChange={handleQRCodeChange} />}

      <form onSubmit={handleSubmit}>
        <span className="titulo">Dados da entrega:</span>
        <div className="box">
          <ul>
            <li>
              <span className="textointerno"> Conferente:</span>
              <input
                required
                type="text"
                className="inputtext"
                value={formData.conferente}
                placeholder="Digite o nome completo do conferente"
                onChange={(e) => setFormData({ ...formData, conferente: e.target.value })}
              />
              <span className="textointerno"> CPF: </span>
              <input
                required
                type="text"
                className="inputtext"
                value={formData.cpf}
                placeholder="Digite o CPF do conferente."
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              />
            </li>
          </ul>
        </div>

        <span className="titulo">Dados da entrega</span>
        <div className="box">
          <ul>
            <li>
              <span className="textointerno"> Data da entrega:</span>
              <input
                required
                type="date"
                className="data"
                value={formData.dataEntrega}
                onChange={(e) => setFormData({ ...formData, dataEntrega: e.target.value })}
              />
              <span className="textointerno"> Status final:</span>
              <div className="radios_status">
                <input
                  required
                  type="radio"
                  name="situacao"
                  id="entregue"
                  checked={formData.statusFinal === 'entregue'}
                  onChange={() => setFormData({ ...formData, statusFinal: 'entregue' })}
                />
                <label htmlFor="entregue">Entregue</label>
                <input
                  required
                  type="radio"
                  name="situacao"
                  id="naoRealizada"
                  checked={formData.statusFinal === 'naoRealizada'}
                  onChange={() => setFormData({ ...formData, statusFinal: 'naoRealizada' })}
                />
                <label htmlFor="naoRealizada">Não realizada</label>
              </div>
            </li>
          </ul>
        </div>

        {formData.statusFinal === 'naoRealizada' && (
          <>
            <span className="titulo">Ocorrência da entrega:</span>
            <div className="box">
              <span className="textointerno"> Local da ocorrência: </span>
              <input
                required
                type="text"
                className="inputtext"
                placeholder="Informe o local da ocorrência"
                name="local"
                value={formData.ocorrencia.local}
                onChange={handleOcorrenciaChange}
              />
              <span className="textointerno"> Ocorrido em cliente? </span>
              <div className="radios_status">
                <input
                  required
                  type="radio"
                  id="ocorridoSim"
                  name="ocorridoCliente"
                  value="Sim"
                  checked={formData.ocorrencia.ocorridoCliente === 'Sim'}
                  onChange={handleOcorrenciaChange}
                />
                <label htmlFor="ocorridoSim">Sim</label>
                <input
                  required
                  type="radio"
                  id="ocorridoNao"
                  name="ocorridoCliente"
                  value="Não"
                  checked={formData.ocorrencia.ocorridoCliente === 'Não'}
                  onChange={handleOcorrenciaChange}
                />
                <label htmlFor="ocorridoNao">Não</label>
              </div>
            </div>

            <div className="box">
              <span className="textointerno"> Impede a entrega? </span>
              <div className="radios_status">
                <input
                  required
                  type="radio"
                  id="impedeEntregaSim"
                  name="impedeEntrega"
                  value="Sim"
                  checked={formData.ocorrencia.impedeEntrega === 'Sim'}
                  onChange={handleOcorrenciaChange}
                />
                <label htmlFor="impedeEntregaSim">Sim</label>
                <input
                  required
                  type="radio"
                  id="impedeEntregaNao"
                  name="impedeEntrega"
                  value="Não"
                  checked={formData.ocorrencia.impedeEntrega === 'Não'}
                  onChange={handleOcorrenciaChange}
                />
                <label htmlFor="impedeEntregaNao">Não</label>
              </div>
            </div>

            <span className="titulo"> Registros da ocorrência:</span>
            <div className="box">
              <div className="box_upload">
                <span className="textointerno"> Foto ocorrido: </span>
                <input
                  required
                  type="file"
                  accept="image/*"
                  className="upload"
                  onChange={(e) => handleComprovanteOcorrenciaChange(e.target.files[0])}
                />
              </div>
              <div className="box_upload">
                <span className="textointerno"> Detalhes: </span>
                <input
                  required
                  type="text"
                  className="inputtextG"
                  placeholder="Descreva com detalhes a ocorrência."
                  name="detalhamento"
                  value={formData.ocorrencia.detalhamento}
                  onChange={handleOcorrenciaChange}
                />
              </div>
            </div>
          </>
        )}

        <span className="titulo"> Registros da entrega:</span>
        <div className="box">
          <div className="box_upload">
            <span className="textointerno"> Foto canhoto: </span>
            <input required type="file" accept="image/*" className="upload" onChange={(e) => handleFileChange(e, 'fotoCanhoto')} />
          </div>
          <div className="box_upload">
            <span className="textointerno"> Comprovação: </span>
            <input required type="file" accept="image/*" className="upload" onChange={(e) => handleFileChange(e, 'comprovacao')} />
          </div>
        </div>

        <div className="button">
          <button type="submit" className="buttonE">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
