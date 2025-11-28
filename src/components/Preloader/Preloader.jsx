import React, { useEffect, useState } from 'react';
import './Preloader.css';

function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Inicializando...");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const messages = [
      "Carregando módulos...",
      "Alinhando pixels...",
      "Preparando café...",
      "Renderizando universo...",
      "Compilando componentes...",
      "Quase lá..."
    ];

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFinished(true);
          
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); 

          return 100;
        }

        const jump = Math.floor(Math.random() * 5) + 1; 
        const next = prev + jump;
        
        if (next > 20 && next < 40) setText(messages[0]);
        if (next > 40 && next < 60) setText(messages[1]);
        if (next > 60 && next < 75) setText(messages[2]);
        if (next > 75 && next < 90) setText(messages[4]);
        if (next > 90) setText(messages[5]);

        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader-container ${finished ? "fade-out" : ""}`}>
      <div className="loader-content">
        <div className="counter">
          {count}
          <span className="percent">%</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${count}%` }}
          ></div>
        </div>
        <p className="loading-text">
            <span className="blink">&gt;</span> {text}
        </p>
      </div>
    </div>
  );
}

export default Preloader;