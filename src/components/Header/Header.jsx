import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (

    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${fix ? 'navbar-scrolled' : ''} navbar-dark`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Guilherme <span className="text-primary-color">Machado</span>
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
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#sobreMim">Sobre Mim</a></li>
            <li className="nav-item"><a className="nav-link" href="#cursos">Meus Cursos</a></li>
            <li className="nav-item"><a className="nav-link" href="#projeto">Projetos</a></li>
            <li className="nav-item ms-lg-3">
              <a className="nav-link btn-contact" href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;