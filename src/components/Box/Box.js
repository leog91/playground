import React from "react";
import image from "./../../assets/images/snow-dog.jpg";

import styles from "./Box.module.css";

const box = props => {
  return (
    <div className={styles.Box}>
      <img src={image} alt={"snow-dog"} className={styles.image} />
      <div className={styles.newsBoxInfo}>
        <div className={styles.newsBoxSubTitle}>Nature's enrichment</div>
        <div className={styles.newsBoxTitle}>Why Do Dogs Love Snow?</div>
      </div>
    </div>
  );
};

export default box;
