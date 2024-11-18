
import { useTheme } from "../theme/ThemeContext";
import styles from "./ThemeToggle.module.css";
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleContainer}>
      <span className={styles.icon}><img src={moon} alt="" /></span>
      <div
        className={`${styles.switch} ${theme === "dark" ? styles.dark : ""}`}
        onClick={toggleTheme}
      >
        <div className={styles.circle}></div>
      </div>
      <span className={styles.icon}><img src={sun} alt="" /></span>
    </div>
  );
};

export default ThemeToggle;
