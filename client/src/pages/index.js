import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Input from "../components/Input";

export default function Home() {
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      document.documentElement.setAttribute("data-theme", "theme" + (i + 1));
      i < 9 ? i++ : (i = 0);
    }, 60000);
  }, []);

  const [login, setLogin] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>ReCall | Home</title>
      </Head>
      <div className={styles.header}>
        <h4>ReCall</h4>
        <h5>Welcome!</h5>
      </div>
      <div className={styles.content}>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!login && (
          <>
            <Input type="password" placeholder="Confirm Password" />
            <Input type="email" placeholder="Email" />
          </>
        )}
        <button className={`button ${styles.button}`}>
          {login ? "Sign in" : "Sign up"}
        </button>
      </div>
      <div className={styles.footer}>
        <p
          className="pointer"
          onClick={() => {
            setLogin((login) => !login);
          }}
        >
          {login
            ? "Don't have an account? Create one!"
            : "Already have an account? Sign in"}
        </p>
      </div>
    </div>
  );
}
