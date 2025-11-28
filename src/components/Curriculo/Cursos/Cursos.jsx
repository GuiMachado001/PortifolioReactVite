import React from 'react';

function Cursos({ nomeCurso, nomeInstituicao, ano }) {
    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <h4 className="timeline-title">{nomeCurso}</h4>
                <span className="timeline-school">{nomeInstituicao}</span>
                {ano && <span className="timeline-date">{ano}</span>}
            </div>
        </div>
    );
}

export default Cursos;