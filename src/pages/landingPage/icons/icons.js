import gitCat from "../../../images/git.png";
import linkedIn from "../../../images/linked.png";
import styles from "./icons.module.css";

function Icons() {
  return (
    <div className={styles.icons}>
      <span className={`material-symbols-outlined ${styles.mail}`}>
        &#xe158;
      </span>
      <img src={gitCat} alt="github" className={styles.img} />
      <img src={linkedIn} alt="linkedin" className={styles.img} />
    </div>
  );
}
export default Icons;
