import React from 'react';
import './Projeto.css';
import Card from './Card/Card';

function Projeto() {

    const listaProjetos = [
        {
            nome: "Nexuzz",
            img: "/img/projetos/Nexuzz.png", 
            descCurta: "Chat Real-time com Firebase, Auth Social e Gestão de Amigos.",
            descLonga: "Chat em tempo real desenvolvido com React.js e arquitetura Serverless (Firebase). Implementa autenticação OAuth 2.0 (Google), banco de dados NoSQL (Firestore) para sincronização de mensagens via WebSockets e gerenciamento de estado complexo para controlar listas de amigos e notificações de solicitações pendentes.",
            link: "https://nexuzz.netlify.app/login"
        },
        {
            nome: "Dashboard Crypto",
            img: "/img/projetos/CryptoDashboard.png", 
            descCurta: "React, APIs e Gráficos",
            descLonga: "Aplicação financeira profissional que consome a API da CoinGecko em tempo real. Conta com gráficos interativos (Recharts), paginação server-side, sistema de busca e modais de detalhes. Foco total em visualização de dados e performance.",
            link: "https://dashcoindashboard.netlify.app/" 
        },
        {
            nome: "Agente 360",
            img: "/img/projetos/Agente360.png",
            descCurta: "Parceria Senac, FESPMS e Governo MS",
            descLonga: "O Agente 360 foi uma parceria entre a FESPMS, o Senac e o Governo de Mato Grosso do Sul. O objetivo foi criar um jogo em realidade virtual e web onde o jogador atua como agente de saúde combatendo a dengue. Inclui sistema de ranking escolar e gamificação.",
            link: ""
        },
        {
            nome: "PassControl",
            img: "/img/projetos/PassControl.png",
            descCurta: "Sistema para Nota Control",
            descLonga: "Realizado na Fábrica de Software para a empresa NotaControl, o PassControl é um sistema de gerenciamento de senhas e filas de atendimento. Inclui módulos administrativos, relatórios de performance e gestão de funcionários.",
            link: ""
        },
        {
            nome: "Feira Bosque da Paz",
            img: "/img/projetos/FeiraBosqueDaPaz.png",
            descCurta: "Plataforma de Gestão de Eventos",
            descLonga: "Plataforma online completa para gerenciamento da Feira Bosque da Paz. Permite cadastro de expositores, artistas e atrações. Conta com área administrativa robusta e vitrine virtual para produtos regionais e economia criativa.",
            link: ""
        },
        {
            nome: "Portfólio VideoMaker",
            img: "/img/projetos/PortifolioVideomaker.png",
            descCurta: "Showcase Audiovisual",
            descLonga: "Site moderno e responsivo, desenvolvido com foco em performance e visual impactante para apresentar o portfólio de um profissional de vídeo. Design minimalista que prioriza o conteúdo visual.",
            link: "https://github.com/Guilherme-Machado01/Projeto-Netflix"
        },
        {
            nome: "Meu Portfólio",
            img: "/img/projetos/ProjetoSitePortifolio.png",
            descCurta: "Desenvolvido em React",
            descLonga: "Este projeto! Criado com React.js para demonstrar minhas habilidades em componentização, hooks, animações CSS e design responsivo. Constantemente atualizado com novas tecnologias.",
            link: ""
        },
        {
            nome: "God of War Tribute",
            img: "/img/projetos/ProjetoGodOfWar.png",
            descCurta: "Landing Page Temática",
            descLonga: "Projeto desafio pessoal focado em UI Design e CSS avançado. Uma Landing Page temática do jogo God of War, explorando efeitos de parallax, transições complexas e tipografia imersiva.",
            link: "https://github.com/Guilherme-Machado01/ProjetoGodOfWar"
        }
    ];

    return (
        <section id="projeto">
            <div className="container-projeto">
                <div className="title-projeto" data-aos="fade-down">
                    <h2>Meus <span className="highlight">Projetos</span></h2>
                </div>

                <div className="grid-projetos">
                    {listaProjetos.map((item, index) => (
                        <Card 
                            key={index}
                            imgCard={item.img}
                            nomeProjeto={item.nome}
                            desc1Projeto={item.descCurta}
                            desc2Projeto={item.descLonga}
                            gitHubProjeto={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projeto;