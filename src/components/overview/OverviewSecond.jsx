
import { useTheme } from "../../theme/ThemeContext";
import styles from "./OverviewSecond.module.css";
import wallet from "../../ui/img/icons/wallet.svg";
import coin from "../../ui/img/icons/coin.svg";
import check from "../../ui/img/icons/check.svg";
import toggle from "../../ui/img/icons/Toggle.svg";
import graphick1 from "../../ui/img/Chart.svg";
import graphick2 from "../../ui/img/Graphic2.svg";
import graphick3 from "../../ui/img/Graphic3.svg";
import speed from "../../ui/img/speed.png";
const OverviewSecond = () => {
  const { theme } = useTheme(); // Получение текущей темы

  return (
    <div
      className={`${styles.overview} ${theme === "dark" ? styles.dark : styles.light}`}
    >
      <div className={styles.card}>
        <img className={styles.toggle} src={toggle} alt="Toggle Icon" />
        <span className={styles.card1block}>
          <img src={wallet} alt="Wallet Icon" />
          <h2>430 M ₽</h2>
        </span>
        <span className={styles.card2block}>
          <p>Оборот за месяц</p>
          <span className={styles.green}>+5%</span>
        </span>
        <img className={styles.graphic} src={graphick1} alt="Chart 1" />
        <p className={styles.cardEnd}>По сравнению с 10 ноября</p>
      </div>

      <div className={styles.card}>
        <img className={styles.toggle} src={toggle} alt="Toggle Icon" />
        <span className={styles.card1block}>
          <img src={coin} alt="Coin Icon" />
          <h2>54 M ₽</h2>
        </span>
        <span className={styles.card2block}>
          <p>Выплаты за месяц</p>
          <span className={styles.orange}>+5%</span>
        </span>
        <img className={styles.graphic} src={graphick2} alt="Chart 2" />
        <p className={styles.cardEnd}>По сравнению с 10 ноября</p>
      </div>

      <div className={styles.card}>
        <img className={styles.toggle} src={toggle} alt="Toggle Icon" />
        <span className={styles.card1block}>
          <img src={check} alt="Check Icon" />
          <h2>154 650 ₽</h2>
        </span>
        <span className={styles.card2block}>
          <p>Штрафы за месяц</p>
          <span className={styles.purple}>+5%</span>
        </span>
        <img className={styles.graphic} src={graphick3} alt="Chart 3" />
        <p className={styles.cardEnd}>По сравнению с 10 ноября</p>
      </div>
       <div className={styles.card}>
        <div className={styles.card2block}>
                  <p>Рейтинг магазина</p>
                  <img className={styles.toggle} src={toggle} alt="Toggle Icon" />
        </div>

        <img className={styles.speed} src={speed} alt="Chart 3" />
    
      </div>
    </div>
  );
};

export default OverviewSecond;
