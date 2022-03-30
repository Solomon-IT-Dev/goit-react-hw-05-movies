import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? styles.activeLink : styles.link;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => {
          return isActive ? styles.activeLink : styles.link;
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
}
