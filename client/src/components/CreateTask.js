import { useState } from "react";
import styles from "../styles/CreateTask.module.css";

export default function CreateTask({ setCreateTask }) {
  const [task, setTask] = useState({
    title: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(task);
  };
  return (
    <div className={styles.modal} onClick={setCreateTask}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <p className={styles.title}>Create Task</p>
        <form onSubmit={submit}>
          <input
            placeholder="Task"
            name="title"
            value={task.title}
            className={styles.input}
            type="text"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            placeholder="Deadline"
            name="deadline"
            value={task.deadline}
            className={styles.input}
            type="datetime-local"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <button className={`${styles.button} button mb-20`}>Create</button>
        </form>
      </div>
    </div>
  );
}
