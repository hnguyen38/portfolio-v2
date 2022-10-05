import styles from "./button.module.css";

function Button(props) {
  return (
    <div className={styles.container}>
      <a href={props.link} target="_blank" rel="noreferrer" name={props.name}>
        <span className={styles.text}>{props.text}</span>
      </a>
    </div>
  );
}

export default Button;
