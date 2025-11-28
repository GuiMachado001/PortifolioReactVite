import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="main-footer">
      <div className="footer-gradient-border"></div>
      
      <div className="footer-container">
        
        <div className="footer-col brand-col">
            <h2 className="footer-logo">Guilherme <span className="highlight">Machado</span></h2>
            <p className="footer-desc">
              Desenvolvedor Front-End focado em criar interfaces modernas, 
              performáticas e experiências digitais excepcionais.
            </p>
        </div>

        <div className="footer-col links-col">
            <h3>Navegação</h3>
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#sobreMim">Sobre Mim</a></li>
                <li><a href="#cursos">Formação</a></li>
                <li><a href="#projeto">Projetos</a></li>
            </ul>
        </div>

        <div className="footer-col status-col">
            <h3>Status Atual</h3>
            <div className="status-widget">
                <div className="status-row">
                    <span className="pulsing-dot"></span>
                    <span className="status-text">Disponível para Freelance</span>
                </div>
                <div className="info-row">
                    <div className="info-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Brasil</span>
                    </div>
                    <div className="info-item">
                        <i className="fa-regular fa-clock"></i>
                        <span className="live-time">{time}</span>
                    </div>
                </div>
            </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Guilherme Machado. Code with 
          <i className="fa-solid fa-heart heart-beat"></i> and React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;