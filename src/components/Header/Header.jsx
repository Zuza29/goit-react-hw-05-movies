import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <nav className={css.nav_1}>
        <NavLink to="/">Homepage</NavLink>
        <div className={css.border}></div>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <nav className={css.nav_2}>
        <button type="button">
          <NavLink>Go back</NavLink>
        </button>
        <button type="button">
          <NavLink>Go forward</NavLink>
        </button>
      </nav>
    </header>
  );
};
