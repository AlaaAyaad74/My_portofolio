"use client";
import React from "react";
// import MainpageStyle from "../../../components/styles/MainpageStyle";
// import Asidedashboard from "../../../components/Asidedashboard";
import FormdashboardStyle from "../../../components/styles/FormdashboardStyle";
function Myinfo() {
  return (
    // <MainpageStyle>
    <FormdashboardStyle>
      <div className="container">
        <h1>EDIT MY INFO</h1>
        <div className="cont__form">
          <form>
            <div className="inner__form">
              <div>
                <label>Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Age</label>
                <input type="number" />
              </div>
              <div>
                <label>Job</label>
                <input type="text" />
              </div>
              <div>
                <label>Graduate Year</label>
                <input type="text" />
              </div>
              <div>
                <label>Graduate From</label>
                <input type="text" />
              </div>
              <div>
                <label>Add Skill</label>
                <input type="text" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" />
              </div>
            </div>
            <div className="submit__controls">
              <input type="button" value="Cancel" />
              <input type="submit" value="Save" />
            </div>
          </form>
        </div>
      </div>
    </FormdashboardStyle>
    // </MainpageStyle>
  );
}

export default Myinfo;
