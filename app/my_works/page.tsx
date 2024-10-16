"use client";
import React from "react";

import MYWORKDATA from "./MyWorksData";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";
import styles from "./myworks.module.css";
import Spinner from "../../components/spinner/Spinner";
function Myworks() {
  return (
    <section className={styles.main}>
      <title>My works</title>

      <div className={styles.wrapper}>
        {MYWORKDATA.length === 0 ? <Spinner/>:
        MYWORKDATA.map((item, index) => (
          <div key={index} className={styles.card__work}>
            <Link href={item.link} data-after-content={item.name}>
              <img src={item.image} alt="Work Photo" loading="lazy" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Myworks;
