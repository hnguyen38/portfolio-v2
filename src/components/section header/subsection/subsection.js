import styles from "./subsection.module.css";

function Subsection(props) {
  return (
    <div>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
}

export default Subsection;
