import './Cursos.css'

function Cursos(props){
    return(
            <div className="boxCurso">
                <div className="cursoName">
                    <span>- {props.nomeCurso}</span>
                </div>
                <div className="cursoInstituicao">
                    <span>{props.nomeInstituicao}</span>
                </div>
            </div>
    )
}

export default Cursos