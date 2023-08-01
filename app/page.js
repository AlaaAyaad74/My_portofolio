"use client";

// import styled from "styled-components";
import MainpageStyle from "../components/styles/MainpageStyle";
import { sendData } from "../components/datafirebase/config";
export default function Home() {
  let data = sendData();
  // const { name } = data?.infoData;
  let job=data?.infoData[2].Job;
  let name = data?.infoData[0].Name;
  let shortName = name?.split(" ");
  shortName
    ? (shortName = shortName[0] + " " + shortName[shortName.length - 1])
    : "";
    
  return (
    <MainpageStyle>
      <title>Alaa Ayaad</title>
      <div className="container">
        <h2>Welcome In My Portofolio</h2>
        <h1>Hey, I'm {shortName}</h1>
        <p>{job}</p>
      </div>
    </MainpageStyle>
  );
}
