import SectionHeader from "../../components/section header/sectionHeader";

import styles from "./projectPage.module.css";

import netflix from "../../images/netflix.png";
import weather from "../../images/weather.png";
import book from "../../images/book.png";

import Thumbnail from "../../components/project/thumbnail/thumbnail";
import ProjectText from "../../components/project/text/projectText";

function ProjectPage() {
  return (
    <div className={styles.container}>
      <SectionHeader title="Projects" />
      <div className={styles.div}>
        <Thumbnail title="Netflix Clone" img={netflix} alt="netflix" />
        <ProjectText
          des="a netflix clone description  enter
            it here"
          tech="HTML, CSS, ReactJS"
          live="https://netflix-clone-038.netlify.app/"
          code="https://github.com/hnguyen38/netflix-clone"
        />
      </div>
      <div>
        <div className={styles.leftToRight}></div>
        <div className={styles.vertical}></div>
      </div>

      <div className={styles.rightDiv}>
        <ProjectText
          des="a netflix clone description  enter
            it here"
          tech="HTML, CSS, ReactJS"
          live="https://weather-app-038.netlify.app/"
          code="https://github.com/hnguyen38/weather-app"
        />
        <Thumbnail title="Weather API" img={weather} alt="weather" />
      </div>

      <div>
        <div className={styles.rightToLeft}></div>
        <div className={styles.vertical2}></div>
      </div>
      <div className={styles.div}>
        <Thumbnail title="Booking App" img={book} alt="book" />
        <ProjectText
          des="a netflix clone description  enter
            it here"
          tech="HTML, CSS, ReactJS"
          live="https://book-app-038.netlify.app/"
          code="https://github.com/hnguyen38/book-keeping-app"
        />
      </div>
    </div>
  );
}

export default ProjectPage;
