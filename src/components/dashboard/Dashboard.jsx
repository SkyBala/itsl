import  { useState } from "react";
import Overview from "../overview/Overview";
import ProductStock from "../productStoks/ProductStock";
import Moderation from "../moderation/Moderation";
import styles from "./Dashboard.module.css";
import Avatar from '../../ui/img/Avatar.svg'
import masseges from "../../ui/img/icons/messages.svg";
import notification from "../../ui/img/icons/notification-bing.svg";
import OverviewSecond from "../overview/OverviewSecond";

const Dashboard = () => {
  const [user] = useState({
    avatar: Avatar,
    name: "User Name", 
  });

  const currentDate = "12 декабря, 2022";

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>Главная</h1>
          <p>{currentDate}</p>
        </div>
        <div className={styles.right}>
          <button className={styles.icon}><img src={masseges} alt="" /></button>
          <button className={styles.icon}><img src={notification} alt="" /></button>
          <div className={styles.user}>
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className={styles.avatar}
            />
          </div>
        </div>
      </header>
      <Overview />
      <OverviewSecond/>
      <div className={styles.sections}>
        <ProductStock />
        <Moderation />
      </div>
    </div>
  );
};

export default Dashboard;
