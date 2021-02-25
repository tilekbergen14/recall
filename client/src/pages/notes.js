import styles from "../styles/Home.module.css";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Notebox from "../components/NoteBox";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import NoteStrText from "../components/NoteStrText";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Task from "../components/Task";
import { useState, useEffect } from "react";
import Theme from "../components/Theme";
import CreateTask from "../components/CreateTask";
import CreateNote from "../components/CreateNote";

export default function home(props) {
  const [toggle, setToggle] = useState(false);
  const [showthemes, setShowthemes] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [createNote, setCreateNote] = useState(false);

  return (
    <div className={styles.home}>
      <header className="flex align-items-center space-between">
        <h3 className="logo">ReCall</h3>
        <p className="title-2">All notes until today</p>
      </header>
      <main>
        <div className={`${styles.leftSide} mt-20`}>
          <div className={styles.bigBox}>
            <div className="flex flex-wrap">
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
              <Notebox />
            </div>
          </div>
        </div>
        <div className="space"></div>
        <div className={styles.rightSide}>
          <div className={styles.noteStrBox}>
            <NoteStrText />
          </div>
        </div>
      </main>
      {createTask && <CreateTask setCreateTask={() => setCreateTask(false)} />}
      {createNote && <CreateNote close={() => setCreateNote(false)} />}
    </div>
  );
}
