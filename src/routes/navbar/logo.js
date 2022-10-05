import styles from "./logo.module.css";

function Logo(props) {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>{props.text}</span>
    </div>
  );
}
export default Logo;
