import './Projeto.css'
import Card from './Card/Card';

function Projeto(){
    return(
    <div id="projeto">
        <div className="containerTitleProjeto">
            <h1>Meus Projetos</h1>
        </div>

        <div className="containerGeralCards">
            <Card
                imgCard="../../../public/img/projetos/Pojeto Netflix.png"
                nomeProjeto="Projeto Netflix"
                desc1Projeto="Projeto pertencente ao curso Desenvolvimento Web - Front End"
                desc2Projeto="                                    
                            O projeto Netflix foi o projeto final do curso de Desenvolvimento Web - Front
                            End (Senac Hub Academy)
                            onde foi usado Html, Css e JS... o trabalho consistia em recriar um site e
                            apresenta-lo a turma que se
                            iniciava em seguida. Como decisão escolhi a Netflix por proporcionar um desafio
                            pessoal..."
                gitHubProjeto="https://github.com/Guilherme-Machado01/Projeto-Netflix"
            />
            <Card
                imgCard="../../../public/img/projetos/Projeto GodOfWar.png"
                nomeProjeto="Projeto GodOfWar"
                desc1Projeto="Projeto pessoal"
                desc2Projeto="
                            O site God Of War teve como abjetivo ser um desafio pessoal. Esse projeto teve,
                            com certeza, uma importância significativa na
                            evolução das hablidades em HTML, CSS e JS."
                gitHubProjeto="https://github.com/Guilherme-Machado01/ProjetoGodOfWar"
            />
        </div>
    </div>
    );
}

export default Projeto