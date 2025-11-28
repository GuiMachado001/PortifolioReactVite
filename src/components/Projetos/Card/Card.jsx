import './Card.css'

function Card(props) {
  return (
    <div className="card-container" data-aos="fade-up" data-aos-duration="1000">
      <div className="card-inner">
        
        <div className="card-front">
          <img src={props.imgCard} alt={props.nomeProjeto} />
          <div className="card-front-overlay">
            <h3>{props.nomeProjeto}</h3>
            <span>{props.desc1Projeto}</span>
          </div>
        </div>

        <div className="card-back">
          <div className="card-back-content">
            <h3>{props.nomeProjeto}</h3>
            <p>{props.desc2Projeto}</p>
            {props.gitHubProjeto && (
              <a href={props.gitHubProjeto} target="_blank" rel="noopener noreferrer" className="btn-project">
                Ver Projeto <i className="fa-brands fa-github"></i>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card