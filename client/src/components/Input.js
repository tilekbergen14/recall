import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Input({ placeholder, type }) {
  const [visiblility, setVisibility] = useState(false);
  const handleVisibility = () => {
    setVisibility((visiblility) => !visiblility);
  };

  return (
    <div className={styles.inputBox}>
      <input
        className={`border ${styles.input}`}
        type={type === "text" ? "text" : visiblility ? "text" : "password"}
        placeholder={placeholder}
        required
      />
      {type === "password" &&
        (visiblility ? (
          <VisibilityIcon className={styles.icon} onClick={handleVisibility} />
        ) : (
          <VisibilityOffIcon
            className={styles.icon}
            onClick={handleVisibility}
          />
        ))}
    </div>
  );
}
