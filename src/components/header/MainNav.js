import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

const navItems = [
  { to: "/", label: "ATLAS", end: true },
  { to: "/communaute", label: "community" },
  { to: "/kgeqco2", label: "Kg eq CO2" },
  { to: "/protocole", label: "PROTOCOL" },
  { to: "/contact", label: "contact" }
];

function MainNav() {
  return (
    <nav className={styles.container} aria-label="Main navigation">
      <ul className={styles.navList}>
        {navItems.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.active : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
