import styles from "./lines.module.css";

export function LeftToRight() {
  return (
    <div>
      <div className={styles.leftToRight}></div>
      <div className={styles.vertical}></div>
    </div>
  );
}

export function RightToLeft() {
  return (
    <div>
      <div className={styles.rightToLeft}></div>
      <div className={styles.vertical2}></div>
    </div>
  );
}
