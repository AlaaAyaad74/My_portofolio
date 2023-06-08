"use client";
import React from "react";
import styled from "styled-components";
import MYWORKDATA from "./MyWorksData";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";

function Myworks() {
  return (
    <MyworksStyle>
      <title>My works</title>

      <div className="wrapper">
        {MYWORKDATA.map((item, index) => (
          <div key={index} className="card__work">
            <Link href={`${item.link}`} data-after-content={`${item.name}`}>
              <img src={`${item.image}`} alt="Work Photo" />
            </Link>
          </div>
        ))}
      </div>
    </MyworksStyle>
  );
}

export default Myworks;
const MyworksStyle = styled.div`
  margin: 3rem 2rem;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .card__work {
    width: 100%;
    position: relative;
  }
  .card__work img {
    width: 100%;
    height: inherit;
    max-height: 222px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .card__work a::after {
    content: attr(data-after-content);
    position: absolute;
    width: 100%;
    height: 98%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 44;
    left: 0;
    top: 0;

    transform: scale(0);
    transition: 1s;
    color: white;

    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card__work a:hover::after {
    transform: scale(1);
  }
  h3 {
    text-align: center;
  }

  @media (max-width: 969px) {
    .card__work a::after {
      font-size: 1rem;
    }
  }
  @media (max-width: 696px) {
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
