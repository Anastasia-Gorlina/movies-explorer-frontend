import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import { useEffect, useState } from 'react';

function Header({isLoggedIn}) {

  const path = useLocation().pathname
  const [needNav, setNeedNav] = useState(isLoggedIn);

  useEffect(() => {
    setNeedNav(isLoggedIn)
  }, [isLoggedIn])

  return (
    <header className="Header standart-paddings" style={{ backgroundColor: path === '/' ? '#F3C1F8' : 'white' }}>
      <div className="Header__left-links">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        {needNav && window.innerWidth > 850 && <Navigation />}
      </div>
      {needNav && window.innerWidth < 850 && <BurgerNavigation />}
      {!needNav && path === '/' &&
        <div className="Header__sign-buttons">
          <Link className="Header__link link" to="/signup">Регистрация</Link>
          <Link className="Header__link link Header__link_sign-in" to='/signin'>Войти</Link>
        </div>
      }
      {needNav && window.innerWidth > 850 &&
        <Link to="/profile" className="Header__account link">
          Аккаунт
          <button type="button" className="Header__account-icon button" />
        </Link>
      }
    </header>
  )
}

export default Header;