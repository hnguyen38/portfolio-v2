import SectionHeader from "../../components/section header/sectionHeader";
import cat from "../../images/cat.jpg";
import styles from "./contact.module.css";

function ContactMe(props) {
  return (
    <div className={styles.container}>
      <div className={styles.textDiv}>
        <SectionHeader title="Contact Me" name={props.name} />
        <div className={styles.text}>
          <span>Thank you for viewing my porfolio!</span>
          <span>Please contact me via E-mail for further inquires.</span>
        </div>
        <img src={cat} alt="cat" className={styles.cat} />
      </div>
      <div className={styles.formDiv}>
        <div className={styles.div}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
            />
            <input type="text" placeholder="E-mail" className={styles.input} />
            <input type="text" placeholder="Message" className={styles.input} />
            <button className={styles.button}>Contact Me</button>
          </form>
        </div>
        <div className={styles.infoDiv}>
          <div className={styles.contactDiv}>
            <span className={styles.title}>Contact</span>
            <span className={styles.info}>hannahnguyen038@gmail.com</span>
          </div>
          <div className={styles.contactDiv}>
            <span className={styles.title}>Location</span>
            <span className={styles.info}>United States</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;