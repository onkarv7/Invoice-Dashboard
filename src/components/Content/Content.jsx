import React from "react";
import TableComponent from "../Table/TableComponent";
import styles from "./Content.module.css";

import { invoicesData } from "../../Data/Data";

const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentHeadings}>
        <div className={styles.contentTitle}>Recurring Invoices</div>
        <button className={styles.contentButton}>
          Add recurring invoice +
        </button>
      </div>

      <div className={styles.invoiceWrapper}>
        {invoicesData.map((item) => (
          <div className={styles.invoice}>
            <h3>{item.name}</h3>
            <h4>{item.amount}</h4>
          </div>
        ))}
      </div>

      <div className={styles.clientTitle}>Per Client</div>
      <div>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search client"
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
      <div>
        <TableComponent />
      </div>
    </div>
  );
};

export default Content;
