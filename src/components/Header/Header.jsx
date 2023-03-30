import { NavLink } from "react-router-dom";
import css from './Header.module.css';

export const Header = () => {
    return (
      <header>
        <nav>
          <NavLink to='/'>Homepage</NavLink>
          <NavLink to='/movies'>Movies</NavLink>
        </nav>
      </header>
    );
}