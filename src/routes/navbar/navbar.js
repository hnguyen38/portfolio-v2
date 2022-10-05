import Logo from "./logo";
import styles from "./navbar.module.css";

function NavBar(props) {
  return (
    <div className={styles.container}>
      <Logo text="HN" />
      <div className={styles.textDiv}>
        <span className={styles.text}>
          <a className={styles.a} href={props.about}>
            About
          </a>
        </span>
        <span className={styles.text}>
          <a className={styles.a} href={props.projects}>
            Projects
          </a>
        </span>
        <span className={styles.text}>
          <a className={styles.a} href={props.contact}>
            Contact
          </a>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
