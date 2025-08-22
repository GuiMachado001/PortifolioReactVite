import React, { useRef, useEffect, useState } from "react";
import "./InfiniteScroll.css";

export default function InfiniteScroll({ items, speed = 50 }) {
  const containerRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2); // número inicial de duplicações

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    // calcula quantas vezes repetir os itens para preencher a tela
    const times = Math.ceil(viewportWidth / containerWidth) + 1;
    setRepeatCount(times);
  }, [items]);

  return (
    <div className="marquee-wrapper">
      <div className="marquee" ref={containerRef}>
        {Array.from({ length: repeatCount }).map((_, idx) =>
          items.map((item, i) => (
            <div key={`${idx}-${i}`} className="marquee-item">
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
