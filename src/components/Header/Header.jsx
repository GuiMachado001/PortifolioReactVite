import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [fix, setFix] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setFix(true);
      } else {
        setFix(false);
      }

      const sections = ['home', 'sobreMim', 'cursos', 'projeto', 'contato'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${fix ? 'navbar-scrolled' : ''} navbar-dark`}>
      <div className="container">
        
        <a className="navbar-brand" href="#home">
           {/* CORREÇÃO AQUI: O caminho deve partir da raiz (public) */}
           <img src="/img/fotos/logo.png" alt="Logo Guilherme Machado" className="logo-header" />
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
                <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${activeSection === 'sobreMim' ? 'active' : ''}`} href="#sobreMim">Sobre Mim</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${activeSection === 'cursos' ? 'active' : ''}`} href="#cursos">Cursos</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${activeSection === 'projeto' ? 'active' : ''}`} href="#projeto">Projetos</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${activeSection === 'conquistas' ? 'active' : ''}`} href="#conquistas">Conquistas</a>
            </li>
            <li className="nav-item ms-lg-3">
              <a className={`nav-link btn-contact ${activeSection === 'contato' ? 'active-btn' : ''}`} href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;