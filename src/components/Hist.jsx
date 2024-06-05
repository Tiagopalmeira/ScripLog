import React from 'react';
import '../../public/css/hist.css'
const Historico = () => {
  const historicoData = [
    { id: '1', codigo: '158985', tipo: 'NFE' },
    { id: '2', codigo: 'Pneu furado', tipo: 'OCR' },
    { id: '3', codigo: '158985', tipo: 'NFE' },
    { id: '4', codigo: 'Produtos vencidos', tipo: 'OCR' },
    { id: '5', codigo: '158985', tipo: 'NFE' },
    { id: '6', codigo: '152145', tipo: 'NFE' },
    { id: '7', codigo: '152145', tipo: 'NFE' },
    { id: '8', codigo: '152145', tipo: 'NFE' },
    { id: '9', codigo: 'Pneu furado', tipo: 'OCR' },
    { id: '10', codigo: '158985', tipo: 'NFE' },
    { id: '11', codigo: 'Produtos vencidos', tipo: 'OCR' },
    { id: '12', codigo: '158985', tipo: 'NFE' },
    { id: '13', codigo: '152145', tipo: 'NFE' },
    { id: '14', codigo: 'Pneu furado', tipo: 'OCR' },
    { id: '15', codigo: '158985', tipo: 'NFE' },
    { id: '16', codigo: '158985', tipo: 'NFE' },
    { id: '17', codigo: 'Pneu furado', tipo: 'OCR' },
    { id: '18', codigo: '152145', tipo: 'NFE' },
    { id: '19', codigo: '158985', tipo: 'NFE' },
    { id: '20', codigo: 'Produtos vencidos', tipo: 'OCR' }
  ];

  return (
    <div className="container">
      <div className='topo'>
      <h1>Histórico</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3>Históricos recentes:</h3>
      <br />
      <table className="historico-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {historicoData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.codigo}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historico;
