import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const home = props => {
  return (
    <div className={styles.Box}>
      <div className={styles.mainContainer}>
        <div className={styles.somePageWrapper}>
          <Link to="/box">
            <div className={styles.item}>Box</div>
          </Link>
          <Link to="/section">
            <div className={styles.item}>Section</div>
          </Link>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
          <div className={styles.item}>item 1</div>
        </div>
      </div>
    </div>
  );
};

export default home;
