import React from "react";
import styles from "./Header.module.css";
// import { daysData } from "../../Data";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <img
        className={styles.hero}
        src={require("../../Assets/header.png")}
        alt="hero"
      />

      <div className={styles.header}>
        {/* 1 */}
        <div className={styles.daysData}>
          <p>Last 30 days</p>
          <div className={styles.paidWrapper}>
            <h4>Paid</h4>
            <h3>€24.000</h3>
          </div>
          <div className={styles.pendingWrapper}>
            <h4>Pending</h4>
            <h3>€41.000</h3>
          </div>
          <div className={styles.overdueWrapper}>
            <h4>Overdue</h4>
            <h3>€65.600</h3>
          </div>
        </div>
        {/* 2 */}
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img src={require("../../Assets/profile.png")} alt="" />
          </div>
          <h5 className={styles.profileTitle}>Jort KKKKKKKKK</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
