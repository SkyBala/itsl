import { useTheme } from "../../theme/ThemeContext"; // Логика темы
import styles from "./Moderation.module.css";

const Moderation = () => {
  const { theme } = useTheme(); // Получаем текущую тему (например, "light" или "dark")

  const moderationItems = [
    { name: "Марки LSD-25 250 мкг", quantity: "2 шт", price: "1 999 ₽" },
    { name: "Марки LSD-25 170 мкг", quantity: "4 шт", price: "1 999 ₽" },
    { name: "Шишки Gorilla Glue", quantity: "2 шт", price: "1 999 ₽" },
    { name: "Гашиш Ice-o-lator Clown", quantity: "5 шт", price: "1 999 ₽" },
    { name: "Грибы Golden Teacher", quantity: "2 шт", price: "1 999 ₽" },
  ];

  return (
    <div className={`${styles.moderation} ${theme === "dark" ? styles.dark : styles.light}`}>
      <h2 className={`${styles.title} ${theme === "dark" ? styles.darkText : styles.lightText}`}>Клады на модерации</h2>
      <div className={`${styles.tableHeader} ${theme === "dark" ? styles.darkText : styles.lightText}`}>
        <span className={styles.headerName}>Наименование</span>
        <span className={styles.headerQuantity}>Количество</span>
      </div>
      <div className={styles.itemsContainer}>
        {moderationItems.map((item, index) => (
          <div key={index} className={`${styles.tableRow} ${theme === "dark" ? styles.darkRow : styles.lightRow}`}>
            <div className={styles.productName}>
              <div className={styles.avatar}>{item.name.slice(0, 2)}</div>
              <div className={styles.productText}>
                <p className={`${styles.name} ${theme === "dark" ? styles.darkText : styles.lightText}`}>{item.name}</p>
              </div>
            </div>
            <div className={styles.quantity}>
              <p className={`${theme === "dark" ? styles.darkText : styles.lightText}`}>{item.quantity}</p>
              <p className={`${theme === "dark" ? styles.darkText : styles.lightText}`}>{item.price}</p>
            </div>
            <button className={`${styles.checkButton} ${theme === "dark" ? styles.darkButton : styles.lightButton}`}>Проверить</button>
          </div>
        ))}
      </div>
      <button className={`${styles.showMore} ${theme === "dark" ? styles.darkButton : styles.lightButton}`}>
        <span className={`${theme === "dark" ? styles.darkText : styles.lightText}`}>Показать больше</span>
        <span className={styles.arrow}>➔</span>
      </button>
    </div>
  );
};

export default Moderation;
