import style from "./Header.module.css";
import HeaderNav from "./HeaderNav";

function Header() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>digital atlas of post-carbon architecture</h1>
            <HeaderNav className={style.navbarDesktop} />
        </div>
    );
}

export default Header;
