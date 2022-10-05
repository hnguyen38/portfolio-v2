import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.span}>
        2022 © Hannah Nguyen. All rights reserved
      </span>
      <span className={styles.source}>images from freepik</span>
    </div>
  );
}

export default Footer;
