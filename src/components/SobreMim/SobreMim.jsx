import React from 'react';
import './SobreMim.css';

function SobreMim() {
  
  const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'PHP', icon: 'fa-brands fa-php', color: '#777BB4' }, // Adicionado aqui
    { name: 'Figma', icon: 'fa-brands fa-figma', color: '#F24E1E' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
    { name: 'MySQL', icon: 'fa-solid fa-database', color: '#00758F' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
  ];

  return (
    <section id='sobreMim'>
      <div className="glow-decor"></div>

      <div className="container custom-container">
        
        <div className="section-header" data-aos="fade-down">
          <h2>Quem sou <span className="highlight">eu?</span></h2>
        </div>

        <div className="content-grid">
          
          <div 
            className="text-column" 
            data-aos="fade-right" 
            data-aos-duration="1000"
          >
            <div className="glass-card text-card">
              <p>
                Sou <strong>Guilherme Machado</strong>, um desenvolvedor Front-End dedicado a criar experiências web excepcionais. 
                Com uma sólida formação em HTML, CSS e JavaScript, React, PHP e MySQL aliada a um forte entendimento de design utilizando ferramentas 
                como Photoshop e Figma.
              </p>
              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas pela Estácio e na <strong>Fabrica de Software - Senac</strong>. Busco constantemente novos desafios para oferecer soluções criativas e eficientes.
              </p>
              
              <div className="stats-row">
                <div className="stat-item">
                  <h3>2+</h3>
                  <span>Anos de Estudo</span>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <span>Projetos</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="skills-column" 
            data-aos="fade-left" 
            data-aos-duration="1000"
          >
            <h3 className="skills-title">Minhas Tecnologias</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <i className={`${skill.icon} skill-icon`} style={{ color: skill.color }}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SobreMim;