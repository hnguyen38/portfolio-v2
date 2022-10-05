import Subsection from "../../section header/subsection/subsection";
import styles from "./thumbnail.module.css";

function Thumbnail(props) {
  return (
    <div>
      <Subsection title={props.title} />
      <img src={props.img} alt={props.alt} className={styles.img} />
    </div>
  );
}
export default Thumbnail;
