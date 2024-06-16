import '../styles/mainPage.css'
import logo from '../Imagenes/logotipo.png';
import misionImg from '../Imagenes/mision.webp';
import visionImg from '../Imagenes/vision.png';
import objetivoImg from '../Imagenes/objetivo.png';
import {useState } from 'react'
import { Link } from 'react-router-dom';
function MainPage() {
    const [navOpen, setNavOpen] = useState(false);
    const openNav = () => {
        setNavOpen(true);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <body>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <div className="btn-container">
                    <Link  className="btn" to={"/login"}><button>Iniciar sesión</button></Link>
                    <Link  className="btn" to={"register"}><button>Registrarse</button></Link>
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
            <main>
                <div className="main-container">
                    <div className="mision-container">
                        <div className="mision-title">
                            <h1>Mision</h1>
                        </div>
                        <div className="mision">
                            <div className="img-mision-section">
                                <img src={misionImg} alt="mision" />
                            </div>
                            <article>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reprehenderit, iusto illum
                                    laboriosam nihil incidunt possimus fugit, eveniet dolorem hic molestias maiores nam ex rem
                                    quibusdam dignissimos blanditiis porro expedita amet sit eligendi quo? Soluta perferendis
                                    molestiae eius alias ipsam nam possimus autem et odio. Non harum hic expedita aut assumenda
                                    officia excepturi blanditiis fuga exercitationem, similique ab adipisci nisi?
                                </h3>
                            </article>
                        </div>
                    </div>
                    <div className="vision-container">
                        <div className="vision-title">
                            <h1>Vision</h1>
                        </div>
                        <div className="vision">
                            <div className="img-vision-section">
                                <img src={visionImg} alt="vision" />
                            </div>
                            <article>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet quae officiis placeat
                                    cupiditate, quam officia natus excepturi itaque velit eaque consequatur laboriosam iusto
                                    maxime distinctio eius illo. Saepe earum accusamus dolor esse quidem vero impedit quo eaque
                                    repellendus necessitatibus, sequi aut adipisci soluta quia minus error sed aperiam dicta sit
                                    non laudantium vel porro eveniet? Rem expedita obcaecati necessitatibus?
                                </h3>
                            </article>
                        </div>
                    </div>
                    <div className="objetivo-container">
                        <div className="objetivo-title">
                            <h1>objetivo</h1>
                        </div>
                        <div className="objetivo">
                            <div className="img-objetivo-section">
                                <img src={objetivoImg} alt="objetivo" />
                            </div>
                            <article>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet quae officiis placeat
                                    cupiditate, quam officia natus excepturi itaque velit eaque consequatur laboriosam iusto
                                    maxime distinctio eius illo. Saepe earum accusamus dolor esse quidem vero impedit quo eaque
                                    repellendus necessitatibus, sequi aut adipisci soluta quia minus error sed aperiam dicta sit
                                    non laudantium vel porro eveniet? Rem expedita obcaecati necessitatibus?
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="grupo-1">
                    <div className="box">
                        <figure>
                            <a href="#"><img src={logo} alt="logo" /></a>
                            <h2>
                                <figcaption>AnilistMX</figcaption>
                            </h2>
                        </figure>
                    </div>
                    <div className="box">
                        <h2 id="titulo-footer">SOBRE NOSTROS</h2>
                        <p>Realizado por: Flores Bajonero Axel David</p>
                        <p>Correo:a22110122@ceti.mx</p>
                    </div>
                    <div className="box">
                        <h2 id="titulo-footer">Siguenos en:</h2>
                        <div className="social">
                            <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grupo-2">
                    <small>
                        &copy; 2023 <b>AnilistMX</b> - Todos los derechos reservados
                    </small>
                </div>
            </footer>
        </body>
    );
}

export default MainPage;