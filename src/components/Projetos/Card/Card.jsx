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
                <span className='spnNameProject'>{props.nomeProjeto}</span>
                <span className='spnDescProject'>{props.desc1Projeto}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="front">
          <div className="flipCardBack">
            <div className="containerDescBack">
              <span>{props.desc2Projeto}</span>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
