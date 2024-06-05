import React, { useState } from "react";
import { FcCollaboration, FcInspection, FcList, FcClock } from "react-icons/fc";
import Login from "./login";
import FormEnvio from "./FormEnvio";
import RegistroOCR from "./RegistroOCR";
import Historico from "./Hist";
import ContatoWhatsApp from "./ContatoWhatsapp"; // Importe o componente ContatoWhatsApp aqui
import "../../public/css/home.css";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(null); // Estado para controlar a página atual

    // Função para alterar a página atual com base no botão clicado
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Função para renderizar a página atual
    const renderCurrentPage = () => {
        switch (currentPage) {
            case "FormEnvio":
                return <FormEnvio />;
            case "RegistroOCR":
                return <RegistroOCR />;
            case "Historico":
                return <Historico />;
            case "ContatoWhatsApp":
                return <ContatoWhatsApp />;
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <h2>Seja bem vindo, motorista Tiago</h2>
            </nav>

            {/* Main content */}
            <main>
                {/* Botões */}
                <h6 className="desejo">O que deseja hoje?</h6> <br />
                <div className="grid-container">
                    <button className="square-button" onClick={() => handlePageChange("FormEnvio")}>
                        <FcInspection size={64} />
                        <span>Enviar NFE</span>
                    </button>
                    <button className="square-button" onClick={() => handlePageChange("RegistroOCR")}>
                        <FcList size={64} />
                        <span>Ocorrências</span>
                    </button>
                    <button className="square-button" onClick={() => handlePageChange("Historico")}>
                        <FcClock size={64} />
                        <span>Histórico</span>
                    </button>
                    <button className="square-button" onClick={() => handlePageChange("ContatoWhatsApp")}>
                        <FcCollaboration size={64} />
                        <span>Falar com suporte</span>
                    </button>
                </div>

                {/* Renderizar a página atual */}
                {renderCurrentPage()}
            </main>
        </div>
    );
}
