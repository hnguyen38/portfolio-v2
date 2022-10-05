import styles from "./skill.module.css";

function Skill(props) {
  return <span className={styles.skill}>{props.text}</span>;
}

export default Skill;
