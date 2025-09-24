import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>digital atlas of post-carbon architecture</h1>
      <ul className={style.navbar}>
        <li>
          <Link to="/" className={style.navLink}>
            ATLAS
          </Link>
        </li>
        <li>
          <Link to="/communaute" className={style.navLink}>
            community
          </Link>
        </li>
        <li>
          <Link to="/kgeqco2" className={style.navLinkKg}>
            Kg eq CO2
          </Link>
        </li>
        <li>
          <Link to="/protocole" className={style.navLink}>
            PROTOCOL
          </Link>
        </li>
        <li>
          <Link to="/contact" className={style.navLink}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
