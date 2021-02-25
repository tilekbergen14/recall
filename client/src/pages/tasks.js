import React from "react";
import styles from "../styles/Tasks.module.css";
import Filter from "../components/Filter";
import TasksTask from "../components/TasksTask";

export default function tasks() {
  return (
    <div className={styles.tasks}>
      <header className="flex align-items-center space-between">
        <h3 className="logo">ReCall</h3>
        <p className="title-2">All task until this time</p>
      </header>
      <div className={styles.sorting}>
        <div className="flex space-between">
          <Filter />
          <Filter />
          <Filter />
        </div>
      </div>
      <main className="px-20">
        <div className="flex mt-20 space-between">
          <p className="title flex-1 mb-0">Task</p>
          <p className="title flex-01 mb-0 text-center display-none">Status</p>
          <p className="title flex-01 mb-0 text-center display-none">
            Your emotion
          </p>
          <p className="title flex-01 mb-0 text-center">Actions</p>
        </div>
        <TasksTask />
      </main>
    </div>
  );
}
