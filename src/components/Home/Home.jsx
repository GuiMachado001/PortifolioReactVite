import './Home.css';
import { useEffect } from 'react';
import { initHomeScripts } from './ScriptHome';

// Se você não tiver as imagens dos ícones ainda, pode usar links de CDN ou placeholders
// Exemplo: Logos de linguagens
const iconHtml = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const iconCss = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
const iconJs = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const iconReact = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";

function Home() {
  useEffect(() => {
    // Garante que o script de digitação inicie
    const cleanup = initHomeScripts ? initHomeScripts() : null;
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section id='home'>
      {/* Background Glow Effect para dar um charme */}
      <div className="bg-glow"></div>

      <div className="containerHome">
        
        {/* Lado Esquerdo: Texto */}
        <div
          className="containerName"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="titleApresentacao">
            <p className="greeting">Olá, eu sou</p>
            {/* O seu script deve preencher este H1 e Span */}
            <h1 className="typing-text">Guilherme Machado</h1>
            <span className="subtitle">Desenvolvedor Full Stack</span>
            
            <div className="cta-buttons">
              <a href="#contato" className="btn-primary-glow">Entre em contato</a>
              <a href="#projeto" className="btn-secondary">Ver Projetos</a>
            </div>
          </div>
        </div>

        {/* Lado Direito: Foto e Órbita */}
        <div
          className="containerFoto"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="orbit-container">
            <div className="circle-orbit">
              {/* Ícones girando */}
              <div className="planet-icon item-1"><img src={iconCss} alt="CSS" /></div>
              <div className="planet-icon item-2"><img src={iconJs} alt="JS" /></div>
              <div className="planet-icon item-3"><img src={iconHtml} alt="HTML" /></div>
              <div className="planet-icon item-4"><img src={iconReact} alt="React" /></div>
            </div>
            
            <div className="developer-img-wrapper">
              <img src="/img/fotos/avatar1.png" alt="Foto Guilherme" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;