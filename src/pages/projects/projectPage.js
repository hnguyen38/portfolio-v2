import SectionHeader from "../../components/section header/sectionHeader";

import styles from "./projectPage.module.css";
import { LeftToRight, RightToLeft } from "./lines";

import netflix from "../../images/netflix.png";
import weather from "../../images/weather.png";
import book from "../../images/book.png";
import crime from "../../images/crime.png";

import Thumbnail from "../../components/project/thumbnail/thumbnail";
import ProjectText from "../../components/project/text/projectText";

function ProjectPage() {
  return (
    <div className={styles.container}>
      <div className={styles.empty}></div>
      <SectionHeader title="Projects" />
      <div className={styles.div}>
        <Thumbnail title="Netflix Clone" img={netflix} alt="netflix" />
        <ProjectText
          des="A clone of popular streaming platform, Netflix, that utilizes a movie database API."
          tech="HTML5, CSS, ReactJS"
          live="https://netflix-clone-038.netlify.app/"
          code="https://github.com/hnguyen38/netflix-clone"
        />
      </div>

      <LeftToRight />

      <div className={styles.rightDiv}>
        <ProjectText
          des="A weather application that fetches data from a weather API in JSON format. It will display the forecast for any given city."
          tech="HTML5, CSS, Bootstrap5, ReactJS"
          live="https://weather-app-038.netlify.app/"
          code="https://github.com/hnguyen38/weather-app"
        />
        <Thumbnail title="Weather API" img={weather} alt="weather" />
      </div>

      <RightToLeft />
      <div className={styles.div}>
        <Thumbnail title="Booking App" img={book} alt="book" />
        <ProjectText
          des="A CRUD application with a signin/signup function using e-mail or Google. Record keeping for job or school applications."
          tech="HTML5, CSS, ReactJS, Firebase, Firestore"
          live="https://book-app-038.netlify.app/"
          code="https://github.com/hnguyen38/book-keeping-app"
        />
      </div>

      <LeftToRight />

      <div className={styles.rightDiv}>
        <ProjectText
          des="A crime data application that fetches data from a crime API. User enters the state and the application will return results of each type of crime listed in that state."
          tech="HTML5, CSS, ReactJS"
          live="https://crime-data-038.netlify.app/"
          code="https://github.com/hnguyen38/crime-data"
        />
        <Thumbnail title="Crime Data" img={crime} alt="crime" />
      </div>
    </div>
  );
}

export default ProjectPage;
