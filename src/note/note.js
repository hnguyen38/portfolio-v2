import styles from "./note.module.css";

function Note() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Hello!</span>
      <span className={styles.text}>
        My website is currently under construction for responsive design.
      </span>
      <span className={styles.text}>
        My previous porfolio can be found
        <span className={`${styles.link} ${styles.text}`}>
          <a
            href="https://porfoliov1-hannah038.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </span>
      </span>
    </div>
  );
}
export default Note;
