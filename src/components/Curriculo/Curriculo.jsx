import React from 'react';
import './Curriculo.css';
import Cursos from './Cursos/Cursos';
import Conhecimento from './Conhecimento/Conhecimento';

function Curriculo() {

    const listaCursos = [
        { curso: "Análise e Desenvolvimento de Sistemas", escola: "Estácio", ano: "Conclusão 2024" },
        { curso: "Técnico em Desenvolvimento de Sistemas", escola: "Senac Hub Academy (Fábrica de Software)", ano: "Cursando" },
        { curso: "Desenvolvimento Web - Front-End", escola: "Senac Hub Academy", ano: "2023" },
        { curso: "JavaScript Essentials 1", escola: "Cisco Networking Academy", ano: "2023" },
        { curso: "Python Essentials 1 & 2", escola: "Cisco Networking Academy", ano: "2023" },
        { curso: "Introdução a Ciência de Dados", escola: "Cisco Networking Academy", ano: "2023" },
        { curso: "Front-End Completo 2.0", escola: "Danki Code", ano: "2022" },
    ];

    return (
        <section id='cursos'>
            <div className="container">
                
                <div className="section-title">
                    <h2>Minha <span className="highlight">Jornada</span></h2>
                </div>

                <div className="curriculo-grid">
                    
                    {/* COLUNA 1: Timeline (Mantive como estava) */}
                    <div className="col-timeline" data-aos="fade-right">
                        <h3 className="col-title"><i className="fa-solid fa-graduation-cap"></i> Formação</h3>
                        
                        <div className="timeline-box scroll-custom">
                            {listaCursos.map((item, index) => (
                                <Cursos 
                                    key={index}
                                    nomeCurso={item.curso}
                                    nomeInstituicao={item.escola}
                                    ano={item.ano}
                                />
                            ))}
                        </div>
                    </div>

                    {/* COLUNA 2: AQUI ESTÁ A CORREÇÃO */}
                    <div className="col-knowledge" 
                         data-aos="fade-left"
                         data-aos-offset="50" 
                         data-aos-anchor-placement="top-bottom">
                        
                        <h3 className="col-title"><i className="fa-solid fa-code"></i> Competências</h3>
                        
                        <div className="knowledge-grid">
                            <Conhecimento 
                                title="Front-End"
                                items={['HTML5 Semântico', 'CSS3 / SASS', 'JavaScript Moderno', 'React.js']}
                                icons={['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-square-js', 'fa-brands fa-react']}
                            />
                            
                            <Conhecimento 
                                title="Back-End"
                                items={['Python', 'PHP', 'Integração de APIs', 'Node.js Básico']}
                                icons={['fa-brands fa-python', 'fa-brands fa-php', 'fa-brands fa-node']}
                            />
                            
                            <Conhecimento 
                                title="Banco de Dados"
                                items={['MySQL', 'Modelagem de Dados', 'SQL Queries']}
                                icons={['fa-solid fa-database', 'fa-solid fa-server']}
                            />

                            <Conhecimento 
                                title="Ferramentas & Design"
                                items={['Git / GitHub', 'Figma (UI/UX)', 'Photoshop', 'Metodologias Ágeis']}
                                icons={['fa-brands fa-git-alt', 'fa-brands fa-figma', 'fa-solid fa-palette']}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Curriculo;