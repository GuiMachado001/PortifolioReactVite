import './Curriculo.css'
import Cursos from './Cursos/Cursos';
import Conhecimento from './Conhecimento/Conhecimento';

function Curriculo(){
    return(
        <div className='cursos'>

        <div className="containerTitleConhecimetos">
            <span>Cursos e Conhecimentos</span>
        </div>
        
        <div className="containerCursosConhecimento">

            <div className="containerCursos"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">

                <Cursos 
                    nomeCurso = "Análise e Desenvolvimento de Sistemas"
                    nomeInstituicao = "Estácio - Conclusão 2024"
                />
                <Cursos 
                    nomeCurso = "Técnico em desenvolvimento de Sistema (Fábrica de Software)"
                    nomeInstituicao = "Senac Hub Academy - Líder de Sala - Cursando"
                />
                <Cursos 
                    nomeCurso = "Desenvolvimento Web - Front-End"
                    nomeInstituicao = "Senac Hub Academy"
                />
                <Cursos 
                    nomeCurso = "Lógica de Programação"
                    nomeInstituicao = "Senac Hub Academy"
                />
                <Cursos 
                    nomeCurso = "JavaScript Essentials 1"
                    nomeInstituicao = "Cisco Networking Academy"
                />
                <Cursos 
                    nomeCurso = "Python Essentials 1"
                    nomeInstituicao = "Cisco Networking Academy"
                />
                <Cursos 
                    nomeCurso = "Python Essentials 1"
                    nomeInstituicao = "Cisco Networking Academy"
                />
                <Cursos 
                    nomeCurso = "Introdução a IoT e à transformação digital"
                    nomeInstituicao = "Cisco Networking Academy"
                />
                <Cursos 
                    nomeCurso = "Introdução a ciência de dados"
                    nomeInstituicao = "Cisco Networking Academy"
                />
                <Cursos 
                    nomeCurso = "Front-End Completo 2.0"
                    nomeInstituicao = "Danki Code"
                />

            </div>


            <div className="containerConhecimento">
                <Conhecimento 
                    TitleConhecimento = "Front-End"
                    conhecimento1 = "- HTML"
                    conhecimento2 = "- CSS"
                    conhecimento3 = "- js"
                    iconConhecimento1 = "fa-brands fa-html5 iconDescConhecimento"
                    iconConhecimento2 = "fa-brands fa-css3-alt iconDescConhecimento"
                    iconConhecimento3 = "fa-brands fa-square-js iconDescConhecimento"
                />
                <Conhecimento 
                    TitleConhecimento = "Back-End"
                    conhecimento1 = "- Python"
                    conhecimento2 = "- PHP"
                    conhecimento3 = "- MySql"
                    iconConhecimento1 = "fa-brands fa-python iconDescConhecimento"
                    iconConhecimento2 = "fa-brands fa-php iconDescConhecimento"
                    iconConhecimento3 = "fa-solid fa-database iconDescConhecimento"
                />
                <Conhecimento 
                    TitleConhecimento = "S.O."
                    conhecimento1 = "- Windows"
                    conhecimento2 = "- Linux"

                    iconConhecimento1 = "fa-brands fa-windows iconDescConhecimento"
                    iconConhecimento2 = "fa-brands fa-linux iconDescConhecimento"
                />
                <Conhecimento 
                    TitleConhecimento = "Metodologias"
                    conhecimento1 = "- Scrum"
                    conhecimento2 = "- Kanban"

                    iconConhecimento1 = "fa-solid fa-book iconDescConhecimento"
                    iconConhecimento2 = "fa-solid fa-pen-to-square iconDescConhecimento"
                />
                <Conhecimento 
                    TitleConhecimento = "Design"
                    conhecimento1 = "- Figma"
                    conhecimento2 = "- Photoshop"
                    conhecimento3 = "- CorelDRAW"

                    iconConhecimento1 = "fa-brands fa-figma iconDescConhecimento"
                    iconConhecimento2 = "fa-solid iconDescConhecimento"
                    iconConhecimento3 = "fa-solid iconDescConhecimento"
                />
            </div>


        </div>
        </div>
    );
}

export default Curriculo