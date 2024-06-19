import React from 'react';
import '../../public/css/login.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FaCircleUser, FaLock } from 'react-icons/fa6';

export default function Login({ login }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const registro = event.target.registro.value;
    const senha = event.target.senha.value;
    login(registro, senha);
  };

  return (
    <div className="containerLogin">
      <form onSubmit={handleSubmit}>
        <div className="balao1"></div>
        <div className="balao2"></div>

        <div className="balao3"></div>
        <div className="balao4"></div>

        <img src="../public/assets/logo.svg" className="imglogo" alt="logo" />
        <ul>
          <li>
            <FaCircleUser className="iconInput" />
            <input type="text" name="registro" className="registro" placeholder="Número de cadastro" />
          </li>
          <li>
            <FaLock className="iconInput" />
            <input type="password" name="senha" className="senha" placeholder="Senha de cadastro" />
          </li>
        </ul>

        <button type="submit" className="acessar">
          Entrar
        </button>

        <div className="aviso">
          <span>
            Problemas ao acessar? Entre em contato com o seu administrador:
            <a href="https://wa.me/+5571986924559" title="Acesse aqui">
              Acesse aqui
            </a>
          </span>
        </div>

        <div className="copyrights">
          <span>Copyrights: Tiago Palmeira - Tiago Vinicius - Emboés Logistica</span>
        </div>
      </form>
    </div>
  );
}
