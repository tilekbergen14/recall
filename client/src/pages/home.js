import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Theme from "../components/Theme";
import Notebox from "../components/Notebox";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Notetext from "../components/Notetext";
import Task from "../components/Task";

export default function home() {
  const [toggle, setToggle] = useState(false);
  const [showthemes, setShowthemes] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h4>ReCall</h4>
        <div className={styles.rightside}>
          <span className={styles.userInfo}>
            <Avatar />
            <h6 className={styles.username}>Tiqu</h6>
            <ExpandMoreIcon
              className="pointer"
              onClick={() => setToggle((toggle) => !toggle)}
            />
          </span>
          {toggle && (
            <div className={styles.dropdown}>
              <p className="pointer">Logout</p>
              <p
                className="pointer mb-0"
                onClick={() => setShowthemes((showthemes) => !showthemes)}
              >
                Theme
              </p>
              {showthemes && <Theme />}
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.navigation}>
            <p className="title pointer">Notes</p>
          </div>
          <div className={styles.notebox}>
            <Notebox />
            <Notebox />
            <Notebox />
          </div>
          <div className="flex toright">
            <p>Show all notes</p>
            <ArrowRightAltIcon className="ml-2" />
          </div>
          <div className={`${styles.notes} border`}>
            <Notetext />
          </div>
          <div className="flex toright">
            <p>Create new note </p>
            <AddCircleOutlineIcon className="ml-2" />
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.right}>
          <p className="title">Don't forget</p>
          <div className={`${styles.taskbox} border`}>
            <div className="flex space-between">
              <p className="white">Task</p>
              <p className="white">Status</p>
            </div>

            <Task />
          </div>
          <div className="flex toright">
            <p>Create new task </p>
            <AddCircleOutlineIcon className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
