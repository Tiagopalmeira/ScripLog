
import React from "react";
import { useState, useEffect } from "react";
import "../../public/css/login.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { FaCircleUser, FaLock } from "react-icons/fa6";


export default function Login() {

  return (
    <div className="max">
    <div className="container">
      <div className="balao1">

      </div>
      <div className="balao2">

      </div>

      <div className="balao3">

      </div>
      <div className="balao4">

      </div>

      <img
        src="../public/assets/logo.svg"
        className="imglogo"
        alt="logo"
      />
      <ul>
        <li>

          <span style={{ marginRight: '5px' }}><FaCircleUser /></span>
          <input

            type="text"
            className="registro"
            placeholder="Número de cadastro"
          />
        </li>
        <li>
          <span style={{ marginRight: '5px' }}> <FaLock /></span> {/* Adiciona margem à direita do ícone */}
          <input
            type="password"
            className="senha"
            placeholder="Senha de cadastro"
          />
        </li>
      </ul>

      <button OnClick=" Checar os dados do input aqui. " className="acessar"> Entrar </button>

      <div className="aviso">

        <span>Problemas ao acessar? entre em contato com o seu administrador: <a href="https://wa.me/+5571986924559" title="Acesse aqui">Acesse aqui</a></span>
      
      </div>

      <div className="copyrights">

        <span>Copyrights: Tiago Palmeira - Tiago Vinicius - Emboés Logistica</span>

      </div>

    </div>
    </div>
  );
}
