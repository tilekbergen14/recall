import styles from "../styles/Home.module.css";

export default function NoteStrText() {
  return (
    <div className="flex space-between align-items-center">
      <p className={`${styles.overflowText} ${styles.noteStrText}`}>
        Hello this is some wierd some dumb text and some this weroihf and i
        dunno what am i writinh
      </p>
      <p className={styles.date}>2 days ago</p>
    </div>
  );
}
