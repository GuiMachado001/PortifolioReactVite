import React from 'react';
import './Achievements.css';

function Achievements() {
    const listaConquistas = [
        {
            image: "/img/Achievements/congratulacao.jpeg", // Substitua pelo caminho real da sua foto
            icon: "fa-solid fa-trophy",
            title: "Moção de Congratulação",
            subtitle: "Câmara Municipal de Campo Grande",
            description: "Reconhecimento oficial pelo impacto social e inovação das soluções desenvolvidas na Fábrica de Software."
        },
        {
            image: "/img/Achievements/Reportagem.png", // Substitua pelo caminho real da sua foto
            icon: "fa-solid fa-newspaper",
            title: "Destaque na Mídia Local",
            subtitle: "Jornais e Portais de Notícias",
            description: "Cobertura da imprensa sobre os projetos desenvolvidos durante o estágio e o sucesso da nossa metodologia de trabalho."
        },
        {
            image: "/img/Achievements/FabricaDeSoftware.jpeg", // Substitua pelo caminho real da sua foto
            icon: "fa-solid fa-people-group",
            title: "Fábrica de Software",
            subtitle: "Formação Concluída (Senac Hub Academy)",
            description: "Conclusão de um programa intensivo focado em metodologias ágeis, trabalho em equipe e desenvolvimento de projetos reais."
        },
        {
            image: "/img/Achievements/Diploma.png", // Substitua pelo caminho real da sua foto
            icon: "fa-solid fa-graduation-cap",
            title: "Análise e Desenvolvimento",
            subtitle: "Graduação (Estácio)",
            description: "Fundação sólida em lógica de programação, arquitetura de sistemas e metodologias para a construção de software robusto."
        }
    ];

    return (
        <section id="conquistas">
            <div className="container-achievements">
                <div className="title-achievement" data-aos="fade-down">
                    <h2>Meus <span className="highlight">Destaques</span></h2>
                    <p>Reconhecimento do mercado e da comunidade sobre meu trabalho e formação.</p>
                </div>
                
                <div className="achievement-grid">
                    {listaConquistas.map((item, index) => (
                        <div className="achievement-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="card-image">
                                <img src={item.image} alt={item.title} />
                                <div className="image-overlay"></div>
                            </div>
                            <div className="card-content">
                                <div className="icon-wrapper">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="card-info">
                                    <h4>{item.title}</h4>
                                    <span className="card-subtitle">{item.subtitle}</span>
                                    <p className="card-description">{item.description}</p>
                                </div>
                            </div>
                            <div className="card-border"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;