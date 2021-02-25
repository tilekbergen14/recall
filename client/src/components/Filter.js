import styles from "../styles/Tasks.module.css";

export default function Filter() {
  return (
    <div>
      <p className={`${styles.text} main-color`}>Filter by status</p>
      <select>
        <option value="uncompleted">Uncompleted</option>
        <option value="completed">Completed</option>
        <option value="don't care">Don't care</option>
      </select>
    </div>
  );
}
