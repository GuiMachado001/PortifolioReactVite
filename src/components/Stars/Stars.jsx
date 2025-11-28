import React, { useMemo } from 'react';
import './Stars.css';

function Stars() {
  const starCount = 30;

  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => {
      const style = {
        // Nasce em qualquer lugar na largura (até 150% para vir da direita extrema)
        left: `${Math.random() * 150}vw`, 
        // Nasce sempre acima da tela ou bem no topo
        top: `${Math.random() * -50}vh`, 
        
        // Variação de velocidade e tamanho
        "--fall-duration": `${Math.random() * 3 + 4}s`, // Entre 4s e 7s
        "--fall-delay": `${Math.random() * 10}s`,
        "--star-tail-length": `${Math.random() * 2 + 5}em`
      };
      return <div key={i} className="star" style={style}></div>;
    });
  }, []);

  return (
    <div className="stars-container">
      {stars}
    </div>
  );
}

export default Stars;