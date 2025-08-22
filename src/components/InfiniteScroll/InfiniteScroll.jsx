import React from "react";
import "./InfiniteScroll.css";

function InfiniteScroll({ items }) {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
          </span>
        ))}
        {/* repetir os itens para efeito contínuo */}
        {items.map((item, index) => (
          <span key={`duplicate-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;