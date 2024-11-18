import styles from "./ProductStock.module.css";
import orangeDot from "../../ui/img/icons/orange.svg";
import greenDot from "../../ui/img/icons/green.svg";
import { useTheme } from "../../theme/ThemeContext"; // Логика темы

const ProductStock = () => {
  const { theme } = useTheme(); // Получаем текущую тему (например, "light" или "dark")

  const products = [
    { name: "Марки LSD-25 250 мг", warehouse: 1890, marketplace: 721 },
    { name: "Марки LSD-25 170 мг", warehouse: 1450, marketplace: 512 },
    { name: "Шишки Gorilla Glue", warehouse: 491, marketplace: 129 },
    { name: "Гашиш ice-o-lator Clown", warehouse: 902, marketplace: 206 },
    { name: "Грибы Golden Teacher", warehouse: 34, marketplace: 56 },
  ];

  return (
    <div
      className={`${styles.productStock} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h2 className={styles.title}>Наличие товара</h2>
      <div className={styles.tableHeader}>
        <span className={styles.headerCell1}>Товар</span>
        <span className={styles.headerCell}>Хранилище</span>
        <span className={styles.headerCell}>Маркетплейс</span>
      </div>
      {products.map((product, index) => (
        <div
          key={index}
          className={`${styles.tableRow} ${
            theme === "dark" ? styles.darkRow : styles.lightRow
          }`}
        >
          <div className={styles.productName}>
            <div className={styles.avatar}>{product.name.slice(0, 2)}</div>
            {product.name}
          </div>
          <div className={`${styles.stock} ${styles.orange}`}>
            <img src={orangeDot} alt="orange" />
            {product.warehouse}
          </div>
          <div className={`${styles.stock} ${styles.green}`}>
            <img src={greenDot} alt="green" />
            {product.marketplace}
          </div>
        </div>
      ))}
        <button className={`${styles.showMore} ${theme === "dark" ? styles.darkButton : styles.lightButton}`}>
        <span className={`${theme === "dark" ? styles.darkText : styles.lightText}`}>Показать больше</span>
        <span className={styles.arrow}>➔</span>
      </button>
    </div>
  );
};

export default ProductStock;
