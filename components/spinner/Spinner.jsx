import React from "react";
import styles from "./Spinner.module.css"; // Import the CSS module

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.cont__spinner}>
        <div className={styles.lds_spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>
          Loading<span id="One">.</span>
          <span id="Two">.</span>
          <span id="Three">.</span>
        </p>
      </div>
    </div>
  );
}

export default Spinner;
