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

  useEffect(() => {}, []);
  return (
    <div className={styles.home}>
      <header className="flex align-items-center space-between">
        <h3 className="logo">ReCall</h3>
        <div>
          <div className="flex align-items-center">
            <Avatar />
            <p className={styles.username}>Username</p>
            <ArrowDropDownIcon onClick={() => setToggle((toggle) => !toggle)} />
          </div>
          {toggle && (
            <div className={styles.dropdown}>
              <p className="pointer main-color">Logout</p>
              <p
                className="pointer main-color mb-0"
                onClick={() => setShowthemes((showthemes) => !showthemes)}
              >
                Theme
              </p>
              {showthemes && <Theme />}
            </div>
          )}
        </div>
      </header>
      <main>
        <div className={styles.leftSide}>
          <p className="title">Notes</p>
          <div className="flex space-between flex-wrap">
            <Notebox />
          </div>
          <div className={styles.noteStrBox}>
            <NoteStrText />
          </div>
          <div className="flex align-items-center space-between main-color">
            <div
              className="flex align-items-center pointer"
              onClick={() => setCreateNote(true)}
            >
              <p> Create new note</p>
              <AddCircleOutlineIcon className="ml-10" />
            </div>
            <div className="flex align-items-center pointer">
              <p>See all notes</p>
              <ArrowRightAltIcon className="ml-10" />
            </div>
          </div>
        </div>
        <div className="space"></div>
        <div className={styles.rightSide}>
          <p className="title">Don't forget</p>
          <div className={styles.taskBox}>
            <header className="flex space-between">
              <p className="title">Task</p>
              <p className="title">Status</p>
            </header>
            <Task />
          </div>
          <div className="flex space-between main-color">
            <div
              className="flex align-items-center pointer"
              onClick={() => setCreateTask((createTask) => !createTask)}
            >
              <p className="pointer">Create new task</p>
              <AddCircleOutlineIcon className="ml-10" />
            </div>
            <div className="flex align-items-center pointer">
              <p>See all tasks</p>
              <ArrowRightAltIcon className="ml-10" />
            </div>
          </div>
        </div>
      </main>
      {createTask && <CreateTask setCreateTask={() => setCreateTask(false)} />}
      {createNote && <CreateNote close={() => setCreateNote(false)} />}
    </div>
  );
}
