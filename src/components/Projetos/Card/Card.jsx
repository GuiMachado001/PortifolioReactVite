import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card-container" data-aos="fade-up" data-aos-duration="800">
      <div className="card-inner">
        
        <div className="card-front">
          <div className="front-glow"></div>
          <img src={props.imgCard} alt={props.nomeProjeto} />
          <div className="card-front-overlay">
            <div className="overlay-content">
                <h3>{props.nomeProjeto}</h3>
                <span>{props.desc1Projeto}</span>
            </div>
          </div>
        </div>

        <div className="card-back">
          <div className="back-glow-effect"></div>
          <div className="card-back-content">
            <h3>{props.nomeProjeto}</h3>
            <div className="content-scroll">
                <p>{props.desc2Projeto}</p>
            </div>
            {props.gitHubProjeto && (
              <a href={props.gitHubProjeto} target="_blank" rel="noopener noreferrer" className="btn-project">
                Ver Projeto <i className="fa-brands fa-github"></i>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;