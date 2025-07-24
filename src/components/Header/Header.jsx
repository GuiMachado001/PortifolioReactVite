import '../../App.css'
import './Header.css'

function Header(){
    return(
        <div className='header'>
            <h1 >Guilherme Machado</h1>
            <nav className='nav-bar'>
                <ul className="navList">
                    <li className="navItem active"><a href="#home">Home</a></li>
                    <li className="navItem active"><a href="#sobreMim">Sobre Mim</a></li>
                    <li className="navItem active"><a href="#cursos">Meus Cursos</a></li>
                    <li className="navItem active"><a href="#projeto">Projetos</a></li>
                    <li className="navItem active"><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;