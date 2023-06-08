//import styled from "@emotion/styled";
// import { EditIcon } from "@mui/icons-material/Edit";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
"use client";
import React, { useRef } from "react";
import classes from "./styles/Aside.module.css";
import { CiEdit } from "react-icons/ci";

function Aside() {
  const changeStyle = () =>
    (editRef.current.className = classes.Toggle__Edit__Button);
  const editRef = useRef(0);

  return (
    <div className={classes.container}>
      <div className={classes.personal__image}>
        <img
          src="/profile.jpeg"
          alt="profile"
        />
        <div>
          <h2 className={classes.flex} onClick={changeStyle}>
            Alaa Amin Ayaad
            <span className={classes.Edit__Icon} ref={editRef}>
              <CiEdit />
            </span>
          </h2>
          <p>FrontEnd Devloper</p>
        </div>
      </div>
    </div>
  );
}

export default Aside;
// const AsideStyle = styled.div`
//   width: 260px;
//   height: 100%;
// `;
