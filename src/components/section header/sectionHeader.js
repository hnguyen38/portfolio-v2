import styles from "./sectionHeader.module.css";

function SectionHeader(props) {
  return (
    <div>
      <h1 className={styles.header}>
        <a name={props.name}>{props.title}</a>
      </h1>
    </div>
  );
}

export default SectionHeader;
