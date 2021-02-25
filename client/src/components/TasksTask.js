import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../styles/Tasks.module.css";

export default function TasksTask() {
  return (
    <div className="flex">
      <p className={`${styles.text} main-color flex-1`}>
        There would be some task right here or something else ok this is it
      </p>
      <p className={`${styles.text} warning flex-01 text-center display-none`}>
        Uncomplete
      </p>
      <p className={`${styles.text} success flex-01 text-center display-none`}>
        Good
      </p>
      <div className="flex flex-01 align-items-center justify-center">
        <EditIcon className="success" />
        <DeleteIcon className="error" />
      </div>
    </div>
  );
}
