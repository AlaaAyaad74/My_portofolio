// "use client";

import { sendData } from "../components/datafirebase/config";
import styles from "../components/styles/MainpageStyle.module.css";
export default function Home() {
  let data = sendData();
  // const { name } = data?.infoData;
  let job = data?.infoData[2].Job;
  let name = data?.infoData[0].Name;
  let shortName = name?.split(" ");
  shortName
    ? (shortName = shortName[0] + " " + shortName[shortName.length - 1])
    : "";

  return (
    <div className={styles.mainPage}>
      <title>Alaa Ayaad</title>
      <div className={styles.container}>
        <h2>Welcome In My Portofolio</h2>
        <h1>Hey, I'm {shortName}</h1>
        <p>{job}</p>
      </div>
    </div>
  );
}
