import React, { useEffect, useState } from 'react';
import './Preloader.css';

function Preloader() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Inicializando...");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Frases divertidas/tech que mudam durante o load
    const messages = [
      "Carregando módulos...",
      "Alinhando pixels...",
      "Preparando café...",
      "Renderizando universo...",
      "Compilando componentes...",
      "Quase lá..."
    ];

    // Lógica do contador
    const interval = setInterval(() => {
      setCount((prev) => {
        // Se chegou a 100, para e finaliza
        if (prev >= 100) {
          clearInterval(interval);
          setFinished(true);
          return 100;
        }

        // Aumenta o número aleatoriamente para parecer "processamento real"
        const jump = Math.floor(Math.random() * 5) + 1; 
        const next = prev + jump;
        
        // Troca a frase baseada na porcentagem
        if (next > 20 && next < 40) setText(messages[0]);
        if (next > 40 && next < 60) setText(messages[1]);
        if (next > 60 && next < 75) setText(messages[2]);
        if (next > 75 && next < 90) setText(messages[4]);
        if (next > 90) setText(messages[5]);

        return next > 100 ? 100 : next;
      });
    }, 40); // Velocidade do carregamento (quanto menor, mais rápido)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`preloader-container ${finished ? "fade-out" : ""}`}>
      <div className="loader-content">
        
        {/* O número gigante */}
        <div className="counter">
          {count}
          <span className="percent">%</span>
        </div>

        {/* A barra de progresso */}
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${count}%` }}
          ></div>
        </div>

        {/* O texto mudando */}
        <p className="loading-text">
            <span className="blink">&gt;</span> {text}
        </p>

      </div>
    </div>
  );
}

export default Preloader;