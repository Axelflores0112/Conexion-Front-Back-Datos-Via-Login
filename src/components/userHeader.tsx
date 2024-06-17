import logo from '../Imagenes/logotipo.png';
import { Link } from 'react-router-dom';
import { useState ,useContext} from 'react'
import "../styles/userHeader.css"
import { UserContext } from '../contexts/UserContext';
function userHeader(){
    const [navOpen, setNavOpen] = useState(false);
    const {user}=useContext(UserContext);
    const openNav = () => {
        setNavOpen(true);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><p >Hola {user?.name}!</p></li>
                </ul>
            </nav>
            <div className="btn-container">
                <Link  className="btn-login" to={"/login"}><button>Cerrar sesión</button></Link>
            </div>
            <a onClick={openNav} href="#" className="menu"><button>Menu</button></a>

            <div className={`overlay ${navOpen ? 'open' : ''}`} id="mobile-menu">
                <a onClick={closeNav} href="#" className="close">&times;</a>
                <div className="overlay-content">
                    <a href="#">Nosotros</a>
                    <a href="#">Contacto</a>
                    <Link to="/login">Ingresar</Link>
                    <Link to="/register">Registro</Link>
                </div>
            </div>
        </header>
    )
}

export default userHeader