import './Home.css';
import { useEffect } from 'react';
import { initHomeScripts } from './ScriptHome';

function Home() {
  useEffect(() => {
    const cleanup = initHomeScripts();
    return () => {
      cleanup && cleanup();
    };
  }, []); // roda só uma vez no mount

  return (
    <div className='home'>
      <div className="containerHome">
        <div
          className="containerName"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="titleApresentacao">
            <h1 className="black"></h1>
            <span className="black"></span>
            <p className="black"></p>
          </div>
        </div>

        <div
          className="containerFoto"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="header-right">
            <div className="circle">
              <a href="#" className="icon iconCss"><img src="Assets/Icons/linguagens/css.svg" alt="" /></a>
              <a href="#" className="icon iconJs"><img src="Assets/Icons/linguagens/js.svg" alt="" /></a>
              <a href="#" className="icon iconHtml"><img src="Assets/Icons/linguagens/Html.svg" alt="" /></a>
              <a href="#" className="icon iconPth"><img src="Assets/Icons/linguagens/pth.svg" alt="" /></a>
            </div>
            <div className="developer-img">
              <div className="dev-img-wrapper">
                <img src="/img/fotos/avatar1.png" alt="photo de l'auteur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
