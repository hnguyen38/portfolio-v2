import SectionHeader from "../../components/section header/sectionHeader";
import Subsection from "../../components/section header/subsection/subsection";
import SkillDiv from "../../components/skill/skillDiv";
import styles from "./aboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.container}>
      <SectionHeader title="About Me" />
      <span className={styles.text}>
        I’m a self-taught front end developer passionate about user friendly
        design and life-long learning. An independent, self-starter that
        utilizes online tools to pick up new skills. My focus is front end
        development with an emphasis in ReactJS but I’m open to learning new
        technologies!
      </span>
      <div className={styles.subsection}>
        <Subsection title="Skills" />
        <div className={styles.skillsContainer}>
          <SkillDiv first="HTML" second="CSS" third="SCSS" />
          <SkillDiv first="Bootstrap" second="Javascript" third="ReactJS" />
          <SkillDiv first="Github" second="Firebase" third="Figma" />
          <SkillDiv first="VS Code" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
