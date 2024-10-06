"use client";
import React, { useRef } from "react";

import { sendData } from "../../components/datafirebase/config";

import styles from "./myInfo.module.css";
function MyInfo() {
  const gridRef = useRef(null);
  let Values = {};
  let keys = {};

  let infoDataArray = sendData();

  return (
    <section className={styles.main}>
      {infoDataArray?.infoData
        .filter((item) => !item.ProfileImage)
        .map((item, index) => {
          {
            Values = Object.values(item);
            keys = Object.keys(item);
          }
          return (
            <div className={styles.Info__Form} key={index}>
              {[keys].map((_, index) =>
                keys[index].includes("Icon") ? (
                  ""
                ) : (
                  <div key={index} className={styles.Card__Info} ref={gridRef}>
                    {typeof Values[index] !== "object" ? (
                      <div key={index}>
                        {" "}
                        <p>
                          <span>
                            <img src={`${item.icon}`} alt="icon" />
                          </span>
                          {keys[index].replaceAll("_", " ")}
                        </p>
                        <h3 className={styles.Info__data__title}>
                          {Values[index]}
                        </h3>
                      </div>
                    ) : (
                      <div key={index}>
                        <p>
                          {" "}
                          <span>
                            <img src={`${item.icon}`} />
                          </span>
                          {keys[index].replaceAll("_", " ")}
                        </p>
                        <ul>
                          {/* { gridRef.current.add('wide')} */}
                          {Values[index].map((item) => (
                            <li className={styles.Info__data__title} key={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          );
        })}
    </section>
  );
}

export default MyInfo;
