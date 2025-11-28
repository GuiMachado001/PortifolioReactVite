import React from 'react';
import './Whave.css';

function Whave() {
    return (
        <div className="cyber-separator-container">
            {/* Emissor (Esquerda) */}
            <div className="cyber-dot sender"></div>
            
            {/* A Linha (O "Cano") */}
            <div className="cyber-line">
                <div className="energy-beam"></div>
            </div>
            
            {/* Receptor (Direita) */}
            <div className="cyber-dot receiver"></div>
        </div>
    );
}

export default Whave;