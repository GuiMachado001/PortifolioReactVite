import './Card.css'

function Card(props) {
  return (
    <div
      className="card margin transition1"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="content">
        <div className="back">
          <div className="back-content">
            <div className="containerInfo">
              <div className="containerImgProjeto">
                <img src={props.imgCard} alt={props.nomeProjeto} />
              </div>

              <div className="nameProjeto">
                <h1>{props.nomeProjeto}</h1>
                <h3>{props.desc1Projeto}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="front">
          <div className="flipCardBack">
            <div className="containerDescBack">
              <h3>{props.desc2Projeto}</h3>
            </div>

            <a href={props.gitHubProjeto} target="_blank" rel="noopener noreferrer">
              <div className="iconProjeto">
                <div className="boxIcon boxGithub">
                  <i className="fa-brands fa-github iconDescConhecimento"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
