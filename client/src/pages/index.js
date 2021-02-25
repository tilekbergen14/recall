import Head from "next/head";
import styles from "../styles/Index.module.css";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import axios from "axios";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authdata, setAuthdata] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });

  const handleChange = (e) => {
    setAuthdata({ ...authdata, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (login) {
        setError(null);
        const user = await axios.post("http://localhost:5000/auth/signin/", {
          username: authdata.username,
          password: authdata.password,
        });
        if (user) {
          setLoading(false);
          console.log(user);
        }
      } else {
        if (authdata.password !== authdata.password2) {
          setLoading(false);
          return setError("Please check your password again!");
        }
        const user = await axios.post(
          "http://localhost:5000/auth/signup/",
          authdata
        );
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      if (err.response) setError(err.response.data);
      else {
        setError("Something goes wrong. Please try again later...");
        console.log(err);
      }
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ReCall | Home</title>
      </Head>
      <div className={styles.header}>
        <h4 className="logo">ReCall</h4>
        <h5 className="logo">Welcome!</h5>
      </div>
      <div className={styles.content}>
        <div className={styles.error}>{error && error}</div>
        <form onSubmit={submitForm}>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={authdata.username}
            handleChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={authdata.password}
            handleChange={handleChange}
          />
          {!login && (
            <>
              <Input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={authdata.password2}
                handleChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={authdata.email}
                handleChange={handleChange}
              />
            </>
          )}
          <div className={styles.btnCenter}>
            <button
              className={`button ${styles.button} ${loading && "disabled"}`}
            >
              {loading ? "Loading..." : login ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
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
