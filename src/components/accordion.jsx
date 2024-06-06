import React, { useState } from 'react';
import Ocorrencia from './RegistroOCR'; // Importe o componente do formulário
import '../../public/css/accordion.css'; // Arquivo CSS para estilização

function AccordionItem({ title }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
                {title}
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <Ocorrencia />
                </div>
            )}
        </div>
    );
}

function Accordion1({ items }) {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} />
            ))}
        </div>
    );
}

export default Accordion1;
