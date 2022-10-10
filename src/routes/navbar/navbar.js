import Logo from "./logo";
import styles from "./navbar.module.css";

function NavBar(props) {
  return (
    <div className={styles.container}>
      <Logo text="HN" />
      <div className={styles.textDiv}>
        <a className={styles.a} href={props.about}>
          <span className={styles.text}>About</span>
        </a>
        <a className={styles.a} href={props.projects}>
          <span className={styles.text}>Projects</span>
        </a>
        <a className={styles.a} href={props.contact}>
          <span className={styles.text}>Contact</span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
