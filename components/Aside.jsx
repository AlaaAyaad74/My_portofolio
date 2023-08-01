"use client";
import React, { useRef } from "react";
import classes from "./styles/Aside.module.css";
import { CiEdit } from "react-icons/ci";
import { sendData } from "./datafirebase/config";
function Aside() {
  const changeStyle = () =>
    (editRef.current.className = classes.Toggle__Edit__Button);
  const editRef = useRef(0);
  let data = sendData();
  // const { name } = data?.infoData;
  let name = data?.infoData.find((item) => item.hasOwnProperty("Name")).Name;
  let shortName = name?.split(" ");
  shortName
    ? (shortName = shortName[0] + " " + shortName[shortName.length - 1])
    : "";
  let job = data?.infoData.find((item) => item.hasOwnProperty("Job"))?.Job;
  let profile__Image = data?.infoData.find((item) =>
    item.hasOwnProperty("ProfileImage")
  ).ProfileImage;
  return (
    <div className={classes.container}>
      <div className={classes.personal__image}>
        <img src={`${profile__Image}`} alt="profile" />
        <div>
          <h2 className={classes.flex} onClick={changeStyle}>
            {shortName}

            <span className={classes.Edit__Icon} ref={editRef}>
              <CiEdit />
            </span>
          </h2>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}
export default Aside;
