import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
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
        <input
          className={`border ${styles.input}`}
          type="text"
          placeholder="Username or email"
          required
        />
        <input
          className={`border ${styles.input}`}
          type="password"
          placeholder="Password"
          required
        />
        <button className={`button ${styles.button}`}>Sign in</button>
      </div>
      <div className={styles.footer}>
        <p>Don't have an account? Create one!</p>
      </div>
    </div>
  );
}
