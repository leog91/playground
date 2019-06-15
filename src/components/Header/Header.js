import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const header = () => {
  return (
    <React.Fragment>
      <div className={styles.Header}>
        <Link to="/">
          <h2>Playground</h2>
        </Link>
      </div>
      <div className={styles.Line} />
    </React.Fragment>
  );
};

export default header;
