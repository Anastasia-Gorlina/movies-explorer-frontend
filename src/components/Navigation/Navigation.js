import { NavLink } from 'react-router-dom';

function Navigation() {

  const setLinkStyle = ({ isActive }) => (isActive ? 'Navigation__link_active' : '') + ' link'

    return (
      <nav className="Navigation">
      <NavLink to="/movies" className={setLinkStyle}>
        Фильмы
      </NavLink>
      <NavLink to="/saved-movies" className={setLinkStyle}>
        Сохранённые фильмы
      </NavLink>
    </nav>
    );
}

export default Navigation;