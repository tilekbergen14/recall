import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Theme from "../components/Theme";
import Image from "next/image";

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
          <p>Notes</p>
          <div className={styles.notebox}>
            <div className={styles.box}>
              <Image
                src="/desk.jpg"
                height={150}
                width={200}
                className={styles.image}
              />
              <p>This is my note</p>
            </div>
            <div className={styles.box}>
              <Image
                src="/desk.jpg"
                height={150}
                width={200}
                className={styles.image}
              />
              <p>This is my note</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>right</div>
      </div>
    </div>
  );
}
