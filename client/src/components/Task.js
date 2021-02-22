import React from "react";
import styles from "../styles/Home.module.css";

export default function Task() {
  return (
    <div className="flex space-between">
      <div className={styles.taskLeft}>
        <p className={styles.taskLeft}>
          Some dumb text would be here what if i write here some bullshit about
          my life and my sorrow
        </p>
        <p className={`${styles.taskLeft} ${styles.taskDate}`}>
          You have to this task until tomorrow
        </p>
      </div>
      <p className={styles.taskStatus}>Uncompleted</p>
    </div>
  );
}
