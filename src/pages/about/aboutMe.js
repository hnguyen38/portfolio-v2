import SectionHeader from "../../components/section header/sectionHeader";
import Subsection from "../../components/section header/subsection/subsection";
import SkillDiv from "../../components/skill/skillDiv";
import styles from "./aboutMe.module.css";

function AboutMe(props) {
  return (
    <div className={styles.container}>
      <SectionHeader title="About Me" name={props.name} />
      <span className={styles.text}>
        I’m a self-taught front end developer passionate about life-long
        learning. My focus is front end development but I’m open and excited to
        learn new technologies!
      </span>
      <div className={styles.subsection}>
        <Subsection title="Skills" />
        <div className={styles.skillsContainer}>
          <SkillDiv first="HTML" second="CSS" third="SCSS" />
          <SkillDiv first="Bootstrap" second="Javascript" third="ReactJS" />
          <SkillDiv first="Github" second="Firebase" third="Figma" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
