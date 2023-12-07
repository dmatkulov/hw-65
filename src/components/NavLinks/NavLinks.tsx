import {NavLink} from "react-router-dom";
import {navLinks} from "../../lib/constants";
const NavLinks = () => {
  return (
    <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
      {navLinks.map((link) => (
        <li className="nav-item" key={link.id}>
          <NavLink to={'/pages/' + link.id} className="nav-link">{link.title}</NavLink>
        </li>
      ))}
      <li className="nav-item">
        <NavLink to="/pages/admin" className="nav-link">Admin</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;