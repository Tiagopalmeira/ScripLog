import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../public/css/hist.css';

const Historico = () => {
  const [historicoData, setHistoricoData] = useState([]);
  console.log(historicoData);

  const apiUrl = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  useEffect(() => {
    async function fetchHistoricoData() {
      try {
        const response = await axios.get(`${apiUrl}/deliveries`, config);
        setHistoricoData(response.data);
      } catch (error) {
        console.error('Erro ao buscar histórico:', error);
      }
    }

    fetchHistoricoData();
  }, []);

  return (
    <div className="container-hist">
      <div className="topo">
        <h1>Histórico</h1>
      </div>
      <h3 className="table-title">Históricos recentes:</h3>
      <table className="historico-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Data de Entrega</th>
            <th>Número NFE</th>
          </tr>
        </thead>
        <tbody>
          {historicoData.map((entrega, index) => (
            <tr key={index}>
              <td>{entrega.notaFiscal.statusFinal ? 'Entregue' : 'Não entregue'}</td>
              <td>{entrega.notaFiscal.dataEntrega}</td>
              <td>{entrega.notaFiscal.numeroNFE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historico;
