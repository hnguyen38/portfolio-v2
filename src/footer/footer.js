import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.span}>
        2022© Hannah Nguyen. All rights reserved
      </span>
      <span className={styles.source}>
        <a
          href="https://www.freepik.com/free-vector/remote-employee-working-home-office-woman-lying-floor-with-laptop-convenient-workplace-comfortable-conditions_28850066.htm#query=girl%20on%20computer&position=25&from_view=search"
          target="_blank"
        >
          Image by studio4rt
        </a>
        on Freepik
      </span>
    </div>
  );
}

export default Footer;
