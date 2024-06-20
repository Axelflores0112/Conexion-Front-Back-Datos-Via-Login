import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from '../Imagenes/logotipo.png';
function userFooter(){
    return(
        <footer className="footer-user">
                <div className="grupo-1-user">
                    <div className="box-user">
                        <figure>
                            <a href="#"><img src={logo} alt="logo" /></a>
                            <h2>
                                <figcaption>AnilistMX</figcaption>
                            </h2>
                        </figure>
                    </div>
                    <div className="box-user">
                        <h2 id="titulo-footer-user">SOBRE NOSTROS</h2>
                        <p>Realizado por: Flores Bajonero Axel David</p>
                        <p>Realizado por: Talavera Felix Arnoldo Fabian</p>
                    </div>
                    <div className="box-user">
                        <h2 id="titulo-footer-user">Siguenos en:</h2>
                        <div className="social-user">
                            <a href="#">
                            <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#">
                            <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grupo-2-user">
                    <small>
                        &copy; 2023 <b>AnilistMX</b> - Todos los derechos reservados
                    </small>
                </div>
            </footer>
    )
}
export default userFooter