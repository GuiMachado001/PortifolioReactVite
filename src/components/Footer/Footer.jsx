import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
            <h2 className="footer-logo">Guilherme <span className="highlight">Machado</span></h2>
            <p className="footer-desc">Desenvolvedor Front-End focado em criar interfaces modernas e experiências digitais excepcionais.</p>
        </div>

        <div className="footer-col links-col">
            <h3>Navegação Rápida</h3>
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#sobreMim">Sobre Mim</a></li>
                <li><a href="#cursos">Formação</a></li>
                <li><a href="#projeto">Projetos</a></li>
            </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Guilherme Machado. Code with <i className="fa-solid fa-heart highlight"></i> and React.</p>
      </div>
    </footer>
  );
}

export default Footer;