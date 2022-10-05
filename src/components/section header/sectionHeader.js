import styles from "./sectionHeader.module.css";

function SectionHeader(props) {
  return (
    <div>
      <h1 className={styles.header}>{props.title}</h1>
    </div>
  );
}

export default SectionHeader;
