import { useLocation } from "react-router-dom";

function Footer() {

    const {pathname} = useLocation();

    return (
        <>
        { 
            pathname !== "/sign-up" 
            &&
            pathname !== "/sign-in"
            &&
            pathname !== "/404"
            &&
            pathname !== "/profile"
            ?
            (<div className="App__container">
                <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer">
                    <p className="footer__copyright">&copy; 2023</p>
                    <nav className="footer__links">
                        <ul className="footer__links-list">
                            <li className="footer__link-list-type">
                                <a 
                                    className="footer__link opacity"
                                    href="https://practicum.yandex.ru/profile/web/"
                                    target="_blank" rel="noopener noreferrer">Яндекс.Практикум
                                </a>
                            </li>
                            <li className="footer__link-list-type">
                                <a 
                                    className="footer__link opacity"
                                    href="https://github.com/Anastasia-Gorlina"
                                    target="_blank" rel="noopener noreferrer">Github
                                </a>
                            </li>
                            <li className="footer__link-list-type">
                                <a className="footer__link opacity"
                                   href="https://vk.com/n_mikel"
                                   target="_blank" rel="noopener noreferrer">Vk
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>)
            :
            null
        }
        </>
    );
}

export default Footer;