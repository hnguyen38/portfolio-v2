import styles from "./sectionHeader.module.css";

function SectionHeader(props) {
  return (
    <div>
      <a name={props.name} href={props.href}>
        <h1 className={styles.header}>{props.title}</h1>
      </a>
    </div>
  );
}

export default SectionHeader;
