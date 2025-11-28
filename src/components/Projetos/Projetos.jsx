import './Projeto.css';
import Card from './Card/Card';

function Projeto(){
    return(
        <div id="projeto">
            <div className="containerTitleProjeto">
                <h1>Meus Projetos</h1>
            </div>

            <div className="containerGeralCards">
                <Card 
                    imgCard="/img/projetos/Agente360.png"
                    nomeProjeto="Agente 360"
                    desc1Projeto="Projeto criado em parceria com o Senac, FESPMS e o Governo de Mato Grosso do Sul"
                    desc2Projeto="O Agente 360 foi uma parceria entre a FESPMS o Senac e o Governo de Mato Grosso do Sul que tem o objetivo de criar um jogo em realidade virtual em que o jogador é um agente de saúde e precisa verificar possiveis focos da dengue no mapa, o jogo inclui um site onde será realizado o cadastro de Estados, Cidades, Escolas, Series e Alunos, além de cadastrar o site conta com um sistema de ranking com os pontos dos alunos que jogaram e os pontos das escolas, que é a somatória de pontos dos alunos pertencente a determinada escola"
                />
                <Card 
                    imgCard="/img/projetos/PassControl.png"
                    nomeProjeto="PassControl"
                    desc1Projeto="Projeto realizado para a empresa Nota Control"
                    desc2Projeto="Realizado na Fábrica de Software para a empresa NotaControl, o Projeto PassControl consistem em um sistema de controle de senhas de atendimento focado para atendimentos específicos. O projeto contém gerenciamento  de funcionários, controle de atendimentos, relatórios de desempenho e outras funcionalidades"
                />
                <Card 
                    imgCard="/img/projetos/FeiraBosqueDaPaz.png"
                    nomeProjeto="Feira Bosque da Paz"
                    desc1Projeto="Projeto realizado para a Feria Bosque da Paz"
                    desc2Projeto="Desenvolvimento de uma plataforma online para gerenciar a Feira Bosque da Paz, com recursos para cadastro de expositores, artistas e atrações culturais. O sistema inclui um ambiente administrativo, facilita a comunicação com o público e parceiros, e promove a visibilidade dos produtos regionais, incentivando a inclusão digital e a economia criativa."
                /> 
                <Card
                    imgCard="/img/projetos/PortifolioVideomaker.png"
                    nomeProjeto="Portifólio VideoMaker"
                    desc1Projeto="Portfólio desenvolvido para um profissional de criação de vídeos"
                    desc2Projeto="Site moderno e responsivo, criado para apresentar trabalhos audiovisuais e fortalecer a presença digital de um VideoMaker, destacando projetos com organização e impacto visual."
                    gitHubProjeto="https://github.com/Guilherme-Machado01/Projeto-Netflix"
                />
                <Card 
                    imgCard="/img/projetos/ProjetoSitePortifolio.png"
                    nomeProjeto="Portifólio"
                    desc1Projeto="Portifólio criado em React"
                    desc2Projeto="Portifólio criado com React para o aprimoramento de habilidades e divulgações de trabalhos e projetos pessoais"
                />
                <Card
                    imgCard="/img/projetos/ProjetoGodOfWar.png"
                    nomeProjeto="Projeto GodOfWar"
                    desc1Projeto="Projeto pessoal"
                    desc2Projeto="O site God Of War teve como abjetivo ser um desafio pessoal. Esse projeto teve, com certeza, uma importância significativa na evolução das hablidades em HTML, CSS e JS."
                    gitHubProjeto="https://github.com/Guilherme-Machado01/ProjetoGodOfWar"
                />
            </div>
        </div>
    );
}

export default Projeto;
