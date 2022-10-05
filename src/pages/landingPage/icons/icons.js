import gitCat from "../../../images/git.png";
import linkedIn from "../../../images/linked.png";
import styles from "./icons.module.css";

function Icons() {
  function handleSubmit(e) {
    e.preventDefault();
    window.location = "mailto:hannahnguyen038@gmail.com";
  }
  return (
    <div className={styles.icons}>
      <span
        className={`material-symbols-outlined ${styles.mail}`}
        onClick={handleSubmit}
      >
        &#xe158;
      </span>
      <a href="https://github.com/hnguyen38" target="_blank" rel="noreferrer">
        <img src={gitCat} alt="github" className={styles.img} />
      </a>
      <a
        href="https://www.linkedin.com/in/hannah-nguyen-696595219/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedIn} alt="linkedin" className={styles.img} />
      </a>
    </div>
  );
}
export default Icons;
