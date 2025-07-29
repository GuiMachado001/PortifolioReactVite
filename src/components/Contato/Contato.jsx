import "./Contato.css";

function Contato() {
  return (
    <div id="contato">
      <div className="containerTitleContato">
        <span>Entre em contato comigo</span>
      </div>

      <div className="containerBoxIconsGeral">
        <ContatoItem
          link="https://wa.me/5567999488891"
          label="Whatsapp"
          svgPath="M 15 3 C 8.373 3 3 8.373 3 15..."
        />
        <ContatoItem
          link="mailto:gui.m.neves01@gmail.com"
          label="Email"
          svgPath="M29 4H3a3 3 0 0 0-3 3v18..."
        />
        <ContatoItem
          link="https://github.com/GuiMachado001"
          label="GitHub"
          svgPath="M15,3C8.373,3,3,8.373,3,15c0..."
        />
        <ContatoItem
          link="https://www.linkedin.com/in/guilherme-machado-neves-396693279/"
          label="LinkedIn"
          svgPath="M24,4H6C4.895,4,4,4.895,4,6v18..."
        />
      </div>
    </div>
  );
}

export default Contato;
