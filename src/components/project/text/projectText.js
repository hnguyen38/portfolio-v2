import Button from "../../button/button";

import styles from "./projectText.module.css";

function ProjectText(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.div}>
          <span className={styles.title}>Description</span>
          <Button text="Live" link={props.live} />
        </div>
        <span className={styles.text}>{props.des}</span>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>
          <span className={styles.title}>Technologies</span>
          <Button text="Code" link={props.code} />
        </div>
        <span className={styles.text}>{props.tech}</span>
      </div>
    </div>
  );
}

export default ProjectText;
