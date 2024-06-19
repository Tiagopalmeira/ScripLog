import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Importa o componente Html5QrcodeScanner
import '../../public/css/form.css'; // Importa o arquivo de estilos CSS

function QRScanner({ onInputChange }) {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [qrCodeText, setQrCodeText] = useState('');

  useEffect(() => {
    if (isCameraActive) {
      startQrScanner();
    }
  }, [isCameraActive]);

  const startQrScanner = () => {
    const html5QrCodeScanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 400, height: 400 } },
      false // verbose
    );

    html5QrCodeScanner.render(
      (decodedText, decodedResult) => {
        setQrCodeText(decodedText);
        onInputChange(decodedText);
      },
      (errorMessage) => {
        console.error('Erro ao escanear: ' + errorMessage);
      }
    );

    return () => {
      html5QrCodeScanner.clear();
    };
  };

  const handleStartCamera = () => {
    setIsCameraActive(true);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const html5QrCodeScanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 150, height: 50 } },
      false // verbose
    );

    html5QrCodeScanner.clear(); // Clear any existing scanner

    html5QrCodeScanner.start(
      { videoSource: file },
      (decodedText, decodedResult) => {
        setQrCodeText(decodedText);
        onInputChange(decodedText);
      },
      (errorMessage) => {
        console.error('Erro ao escanear o arquivo: ', errorMessage);
      }
    );
  };

  // Retorna o JSX do componente de scanner de QR Code
  return (
    <div className="box">
      <div id="reader"></div>

      <input type="file" accept="image/*" onChange={handleFileInputChange} style={{ display: 'none' }} />

      {/* Botões para selecionar a fonte do código QR */}
      <div className="button-container">
        <button onClick={handleStartCamera} disabled={isCameraActive}>
          Selecionar NFE
        </button>
        <button onClick={() => document.querySelector('input[type="file"]').click()} disabled={isCameraActive}>
          Selecionar arquivo
        </button>
      </div>

      {/* Campo para inserir ou exibir o número da NFE */}
      <span>Número da NFE:</span>
      <input
        type="text"
        className="inputtext"
        value={qrCodeText}
        onChange={(e) => (setQrCodeText(e.target.value), onInputChange(e.target.value))}
        placeholder="Insira ou leia os dados da NFE:"
      />
    </div>
  );
}

export default QRScanner;
