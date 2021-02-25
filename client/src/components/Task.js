import styles from "../styles/Home.module.css";

export default function Task() {
  return (
    <div className={`${styles.taskStrBox} border-top align-items-center`}>
      <p className={`${styles.overflowText} main-color `}>
        This is text I've got here this is enourmous kinf of tex this is ber
        smol smol smol this is very
      </p>
      <p className={styles.date}>Uncompleted</p>
    </div>
  );
}
