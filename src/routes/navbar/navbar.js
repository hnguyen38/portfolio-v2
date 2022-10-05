import Logo from "./logo";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <Logo text="HN" />
      <div className={styles.textDiv}>
        <span className={styles.text}>About</span>
        <span className={styles.text}>Projects</span>
        <span className={styles.text}>Contact</span>
      </div>
    </div>
  );
}

export default NavBar;
