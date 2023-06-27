"use client";
import React from "react";
import styled from "styled-components";
import MainpageStyle from "../../components/styles/MainpageStyle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Asidedashboard from "../../components/Asidedashboard";
function Dashboard() {
  return (
    <MainpageStyle>
      <DashboardStyle>
        {/* <div className="menu__dashboard"> 
          <ul>
            <li>
              <Link href="/dashboard_/myInfoedit_">MY INFO</Link>
            </li>
            <li>
              <Link href="#">MY WORKS</Link>
            </li>
            <li>
              <Link href="#">MY ACCOUNTS</Link>
            </li>
            <li>
              <Link href="/">BACK HOME</Link>
            </li>
          </ul>
        </div> */}
      
        <div className="container">
          <div
            style={{
              padding: "6px",
              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          >
            <div className="image__container">
              <div className="cover">
                <input id="image" type="file" />
                <label htmlFor="image">
                  <CameraAltIcon style={{ fontSize: "2.5rem" }} />
                  Change Image
                </label>
              </div>
              <img src="/profile.jpeg" alt="profile Image" />
            </div>
          </div>
          <h2>Welcome In</h2>
          <h1>DASHBOARD</h1>
          <p>For Editing my Portofolio</p>
        </div>
      </DashboardStyle>
    </MainpageStyle>
  );
}

export default Dashboard;
const DashboardStyle = styled.div`
  .container {
    top: 20%;
  }

  .image__container {
    /* margin-bottom: 1rem; */
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    /* padding: 6px; */
  }
  img {
    width: 260px;
    max-height: 260px;
    object-fit: cover;
    border-radius: 50%;

    overflow: hidden;
  }
  input {
    display: none;
  }
  .cover {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    padding: 0.4em;
    width: 100%;
    text-align: center;
    height: 120px;
    color: #ddd;
    font-size: 1.1rem;
    display: flex;
    transition: 1s;
    transform: translateY(120px);
    width: 260px;
  }
  label {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .image__container:hover .cover {
    transform: translateY(0px);
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
