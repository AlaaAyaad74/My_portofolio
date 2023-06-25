"use client";
import React from "react";
import MainpageStyle from "../../../components/styles/MainpageStyle";
import Asidedashboard from "../../../components/Asidedashboard";
function page() {
  return (
    <MainpageStyle>
      <Asidedashboard />
      <div className="container">
        <h1>EDIT MY ACCOUNTS</h1>
      </div>
    </MainpageStyle>
  );
}

export default page;
