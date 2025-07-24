import './SobreMim.css'


function SobreMim(){
    return(

        <div className='sobreMim'>
        <div className="containerTitleSobreMim">
            <h1>Sobre Mim</h1>
        </div>
        <div className="sobrMimTexto"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">
            <h2>
                Sou Guilherme Machado, um desenvolvedor Front-End dedicado a criar experiências web excepcionais. Com uma sólida formação em HTML, CSS e JavaScript, aliada a um forte entendimento de design utilizando ferramentas como Photoshop, CorelDRAW e Figma, busco constantemente aprimorar minhas habilidades para enfrentar novos desafios e oferecer soluções criativas e eficientes.

                Atualmente, estou aprofundando meus conhecimentos na Fabrica de Softaware - Senac, e estou formado em Analise e Desenvolvimento de Sistemas pela Estácio, além de participar de cursos livres, treinamentos e eventos. Minha paixão por desenvolvimento e design me impulsiona a buscar sempre o melhor em cada projeto que realizo
            </h2>
        </div>

        <div className="containerIcon">
            <div className="icons" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <div className="iconHtml icon" tabindex="0">         
                    <i className="fa-brands fa-html5 icone"></i>
                    <div className="toolTip">HTML5</div>
                </div>
                <div className="iconCss icon" tabindex="0">
                    <i className="fa-brands fa-css3-alt icone"></i>
                    <div className="toolTip">CSS3</div>
                </div>
                <div className="iconJs icon" tabindex="0">
                    <i className="fa-brands fa-square-js icone"></i>
                    <div className="toolTip">JavaScript</div>
                </div>
                <div className="iconFigma icon" tabindex="0">
                    <i className="fa-brands fa-figma icone"></i>
                    <div className="toolTip">Figma</div>
                </div>
                <div className="iconPy icon" tabindex="0">
                    <i className="fa-brands fa-python icone"></i>
                    <div className="toolTip">Python</div>
                </div>
                <div className="iconDb icon" tabindex="0">
                    <i className="fa-solid fa-database icone"></i>
                    <div className="toolTip">MySQL</div>
                </div>
            </div>
        
            <div className="containerDemoProjetos">

                <div className="containerFotosHtml">
                    <img className="projetosImg" src="img/projetos/Pojeto Netflix.png" alt="Projeto Netflix" />
                    <img className="projetosImg" src="img/projetos/Projeto GodOfWar.png" alt="Projeto God Of War" /> 
                </div>
                
                <div className="containerFotosCss">
                    <img className="projetosImg" src="img/projetos/Projeto tesseract.png" alt="Projeto Tesseract" />
                </div>
                
                <div className="containerFotosJs">
                    <img className="projetosImg" src="img/projetos/Projeto RelógioDinamico.png" alt="Projeto God Of War" />
                </div>

            </div>
        </div>
        

    </div>
    );
}

export default SobreMim