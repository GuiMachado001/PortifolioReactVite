import React from 'react';
import './Parallax.css';

function Parallax() {
  return (
    <div className='parallax'>
      <div className="parallax-overlay"></div>
      <div className="parallax-content" data-aos="zoom-in">
        <h2>Transformando ideias em código</h2>
        <p>Design . Desenvolvimento . Inovação</p>
      </div>
    </div>
  );
}

export default Parallax;