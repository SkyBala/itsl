
import styles from "./Overview.module.css";
import { useTheme } from "../../theme/ThemeContext"; 
import team from "../../ui/img/icons/profile-2user.png";
import download from "../../ui/img/icons/bl.svg";
import sold from "../../ui/img/icons/gr.svg";
import sale from "../../ui/img/icons/or.svg";
import trendUp from "../../ui/img/icons/trend-up.svg";
import trendDown from "../../ui/img/icons/trend-down.svg";

const Overview = () => {
  const { theme } = useTheme(); 

  const stats = [
    {
      label: "Команда",
      img: team,
      value: "204 человека",
      trend: trendUp,
      growth: "+22.8%",
      time: "По сравнению с 10 ноября",
    },
    {
      label: "Загружено",
      img: download,
      value: "86 000 клада",
      trend: trendUp,
      growth: "+10.1%",
      time: "По сравнению с 10 ноября",
    },
    {
      label: "Продано",
      img: sold,
      value: "1 766 кладов",
      trend: trendUp,
      growth: "+15.2%",
      time: "По сравнению с 10 ноября",
    },
    {
      label: "В наличии",
      img: sale,
      value: "862 клада",
      trend: trendDown,
      growth: "-12.4%",
      time: "По сравнению с 10 ноября",
    },
  ];

  return (
    <div className={`${styles.overview} ${theme === "dark" ? styles.dark : styles.light}`}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.label}>{stat.label}</p>
          <div className={styles.stat}>
            <img className={styles.img1} src={stat.img} alt="" />
            <h2>{stat.value}</h2>
            <img className={styles.trendImg} src={stat.trend} alt="" />
             <span className={styles.growth}>{stat.growth}</span>
          </div>
          <p className={styles.time}>{stat.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;
