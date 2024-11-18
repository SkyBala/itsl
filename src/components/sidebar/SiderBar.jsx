import { useState } from "react";
import ThemeToggle from "../../ui/ThemeToggle";
import { useTheme } from "../../theme/ThemeContext";
import styles from "./Sidebar.module.css";
import Logo from '../../ui/img/Logo.svg';
import  home from '../../ui/img/icons/home-2.svg';
import team from '../../ui/img/icons/profile-2user.svg';
import map from '../../ui/img/icons/map.svg';
import archive from '../../ui/img/icons/archive.svg';
import box from '../../ui/img/icons/box.svg';
import setting from '../../ui/img/icons/setting-2.svg';

const Sidebar = () => {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={`${styles.sidebar} ${
        theme === "dark" ? styles.dark : styles.light
      } ${collapsed ? styles.collapsed : ""}`}
    >
      <button
        className={`${styles.collapseButton} ${
          collapsed ? styles.collapsedButton : ""
        }`}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {collapsed ? ">" : "<"}
      </button>

      <div className={styles.content}>
        <div>
        {!collapsed && (
          <div className={styles.logo}>
            <span className={styles.logoIcon}><img src={Logo} alt="Logo link" /></span>
          
          </div>
        )}
        <nav className={styles.nav}>
          <ul>
            <li className={styles.navItem}><img src={home} alt="home page"/><span >Главная</span></li>
            <li className={styles.navItem}><img src={team} alt="team page" /><span>Команда</span></li>
            <li className={styles.navItem}><img src={map} alt="map page" /><span>Локации</span></li>
            <li className={styles.navItem}><img src={archive} alt="archive" /><span>Товары</span></li>
            <li className={styles.navItem}><img src={box} alt="box page" /><span>Клады</span></li>
            <li className={styles.navItem}><img src={setting} alt="" /><span>Настройки</span></li>
          </ul>
        </nav>
            </div>
        {!collapsed && (
          <div className={styles.themeToggle}>
            <ThemeToggle />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
