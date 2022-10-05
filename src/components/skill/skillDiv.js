import styles from "./skill.module.css";
import Skill from "./skill";

function SkillDiv(props) {
  return (
    <div className={styles.div}>
      <Skill text={props.first} />
      <Skill text={props.second} />
      <Skill text={props.third} />
    </div>
  );
}

export default SkillDiv;
