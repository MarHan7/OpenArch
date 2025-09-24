import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>digital atlas of post-carbon architecture</h1>
    </header>
  );
}

export default Header;
