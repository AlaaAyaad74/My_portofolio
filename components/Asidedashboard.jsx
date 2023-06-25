import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Asidedashboard() {
  const router = usePathname();
  console.log(router);
  return (
    <AsidedashboardStyle>
      <div className="menu__dashboard">
        <ul>
          <li>
            <Link
              href="/dashboard_/myInfoedit_"
              className={router.includes("myInfoedit_") ? "NONE" : ""}
            >
              MY INFO
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard_/myworksedit_"
              className={router.includes("myworksedit_") ? "NONE" : ""}
            >
              MY WORKS
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard_/myacountsedit_"
              className={router.includes("myacountsedit_") ? "NONE" : ""}
            >
              MY ACCOUNTS
            </Link>
          </li>
          <li>
            <Link href="/">BACK HOME</Link>
          </li>
        </ul>
      </div>
    </AsidedashboardStyle>
  );
}

export default Asidedashboard;
const AsidedashboardStyle = styled.div`
  .menu__dashboard {
    min-height: 96vh;
    height: 100%;
    border-right: 2px solid;
    margin: 2vh 0;
    padding: 2em 1em;
    max-width: 280px;
  }
  li {
    padding: 0.5em;
    margin: 1em 0;
  }
  a {
    padding: 0.5em;
    font-weight: 600;
    display: block;
    width: 100%;
    color: black;
    border-bottom: 2px solid;
  }
  .NONE {
    border: none;
    margin-left: 4px;
    border-left: 4px solid;
  }
  a:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    .menu__dashboard {
      width: 96%;
      max-width: 100%;
      height: auto;
      min-height: auto;
      border: none;
      border-top: 2px solid;
      margin: auto;
    }
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      width: 151px;
    }
  }
  @media screen and (min-width: 400px) and (max-width: 1024px) {
    .menu__dashboard ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }
  @media (max-width: 500px) {
    ul {
      flex-direction: column;
    }
  }
`;
