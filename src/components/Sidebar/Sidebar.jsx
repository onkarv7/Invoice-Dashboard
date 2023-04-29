import React from "react";
import styles from "./Sidebar.module.css";
import { sidebarData } from "../../Data/Data";

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.logos}>
        <img
          className={styles.backLogo}
          src={require("../../Assets/back.png")}
          alt=""
        />
        <img
          className={styles.payLogo}
          src={require("../../Assets/payLogo.png")}
          alt=""
        />
      </div>
      {/* navbar */}
      <div className={styles.sidebarLogos}>
        <div>
          <img src={require("../../Assets/Home.png")} alt="" />
          <h4>Home</h4>
        </div>
        <div>
          <img src={require("../../Assets/invoices.png")} alt="" />
          <h4>Invoices</h4>
        </div>
        <div>
          <img src={require("../../Assets/customers.png")} alt="" />
          <h4>Customers</h4>
        </div>
        <div>
          <img src={require("../../Assets/products.png")} alt="" />
          <h4>Products</h4>
        </div>
        <div>
          <img src={require("../../Assets/recurring.png")} alt="" />
          <h4>Recurring</h4>
        </div>
        <div>
          <img src={require("../../Assets/discount.png")} alt="" />
          <h4>Discount</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
