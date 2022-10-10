import styles from "./landingPage.module.css";
import Button from "../../components/button/button";
import girl from "../../images/girl.png";

import Icons from "./icons/icons";

function LandingPage(props) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textDiv}>
          <h1 className={styles.heading}>Hello, I'm Hannah</h1>
          <span className={styles.text}>Junior Front End Developer</span>
          <span className={styles.text}>Based in the United States</span>

          <div className={styles.buttonsDiv}>
            <a href={props.href}>
              <Button text="View Projects" />
            </a>
            <Icons className={styles.icon} />
          </div>
        </div>

        <div className={styles.imgDiv}>
          <img src={girl} alt="girl" className={styles.imgSize} />
        </div>
      </div>
      <div className={styles.topContainer}>
        <a href={props.tophref} className={styles.a}>
          <span class={`material-symbols-outlined ${styles.top}`}>
            &#xe5d8;
          </span>
        </a>
      </div>
    </div>
  );
}
export default LandingPage;
