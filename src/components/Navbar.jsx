import { NavLink } from 'react-router-dom';

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    `navbar__link ${isActive ? 'navbar__link--active' : ''}`;

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <span className="navbar__brand">✅ TaskFlow</span>
      <div className="navbar__links">
        <NavLink to="/" end className={getLinkClass}>
          Inicio
        </NavLink>
        <NavLink to="/acerca" className={getLinkClass}>
          Acerca de
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;