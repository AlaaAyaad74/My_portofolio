"use client";
import React from "react";
import MainpageStyle from "../../../components/styles/MainpageStyle";
import Asidedashboard from "../../../components/Asidedashboard";
function page() {
  return (
    <MainpageStyle>
      <div className="container">
        <h1>EDIT MY ACCOUNTS</h1>
      </div>
      <Asidedashboard />
    </MainpageStyle>
  );
}

export default page;
