import './ContatoItem.css'


function ContatoItem({ link, svgPath, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div
        className="light-button"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="light-holder">
          <div className="dot"></div>
          <div className="light"></div>
        </div>
        <div className="button-holder">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 30 30">
            <path d={svgPath}></path>
          </svg>
          <p>{label}</p>
        </div>
      </div>
    </a>
  );
}
