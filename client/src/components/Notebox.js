import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Notebox() {
  return (
    <div className={styles.box}>
      <Image
        src="/desk.jpg"
        height={150}
        width={200}
        className={styles.image}
      />
      <div className={styles.notetext}>
        <p> This is my note this is my absolutely massive note</p>
      </div>
    </div>
  );
}
