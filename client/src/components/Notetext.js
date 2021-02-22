import styles from "../styles/Home.module.css";

export default function Notetext() {
  return (
    <div className="flex space-between">
      <p className={styles.notetext1}>
        Some dumb text would be here what if i write here some bullshit about my
        life and my sorrow
      </p>
      <p className={styles.notedate}>1 day ago</p>
    </div>
  );
}
