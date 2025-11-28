import React from 'react';
import './SobreMim.css';

function SobreMim() {
  
  // Lista de skills para o carrossel infinito
  // Dupliquei a lista para garantir que o loop infinito não tenha buracos visuais
  const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'PHP', icon: 'fa-brands fa-php', color: '#777BB4' },
    { name: 'Figma', icon: 'fa-brands fa-figma', color: '#F24E1E' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
    { name: 'MySQL', icon: 'fa-solid fa-database', color: '#00758F' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
    // Cópia para o loop
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', icon: 'fa-brands fa-square-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'PHP', icon: 'fa-brands fa-php', color: '#777BB4' },
  ];

  return (
    <section id='sobreMim'>
      <div className="container">
        
        <div className="bento-header" data-aos="fade-down">
          <h2>Sobre <span className="highlight">Mim</span></h2>
          <p>Conheça um pouco mais sobre minha trajetória e ferramentas.</p>
        </div>

        <div className="bento-grid">
          
          {/* CAIXA 1: TEXTO PRINCIPAL (Grande) */}
          <div className="bento-card bio-card" data-aos="fade-right">
            <div className="card-icon"><i className="fa-solid fa-user-astronaut"></i></div>
            <h3>Quem sou eu?</h3>
            <p>
              Sou <strong>Guilherme Machado</strong>, um desenvolvedor Front-End apaixonado por criar interfaces que as pessoas realmente gostam de usar.
            </p>
            <p className="mt-2">
              Minha jornada começou com curiosidade e se transformou em profissão. Hoje, com formação na <strong>Estácio</strong> e especialização na <strong>Fábrica de Software (Senac)</strong>, combino lógica de programação com um olhar apurado para design.
            </p>
            <p className="mt-2 text-highlight">
              "Transformo café em código limpo e pixel-perfect."
            </p>
          </div>

          {/* CAIXA 2: ESTATÍSTICAS (Pequenas) */}
          <div className="bento-card stat-card s1" data-aos="zoom-in" data-aos-delay="100">
            <h3>2+</h3>
            <span>Anos de<br/>Experiência</span>
            <i className="fa-solid fa-hourglass-half bg-icon"></i>
          </div>

          <div className="bento-card stat-card s2" data-aos="zoom-in" data-aos-delay="200">
            <h3>10+</h3>
            <span>Projetos<br/>Entregues</span>
            <i className="fa-solid fa-code-branch bg-icon"></i>
          </div>

          {/* CAIXA 3: TECNOLOGIAS (Larga com animação infinita) */}
          <div className="bento-card skills-marquee-card" data-aos="fade-up">
            <h3>Stack Tecnológica</h3>
            <div className="marquee-container">
              <div className="marquee-content">
                {skills.map((skill, index) => (
                  <div className="tech-badge" key={index} style={{borderColor: skill.color}}>
                    <i className={skill.icon} style={{color: skill.color}}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SobreMim;