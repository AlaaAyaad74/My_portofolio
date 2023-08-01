"use client";
import React, { useState, useRef } from "react";
import styled from "styled-components";
// import INFODATA from "./InfoData";
import { sendData } from "../../components/datafirebase/config";
/* Icons Imports*/

function MyInfo() {
  const gridRef = useRef(null);
  let Values = {};
  let keys = {};

  // const [Loading, setLoading] = useState(false);
  let infoDataArray = sendData();
  console.log(
    infoDataArray?.infoData.map(
      (item) => Object.keys(item).filter(item=>!item.endsWith('Image')) 
    ),
    "Array"
  );

  return (
    <MyInfoStyle>
      {infoDataArray?.infoData
        .filter((item) => !item.ProfileImage)
        .map((item, index) => {
          {
            Values = Object.values(item);
            keys = Object.keys(item);
            console.log(keys);
          }
          return (
            <div className="Info__Form" key={index}>
              {[keys].map((_, index) =>
                keys[index].includes("Icon") ? (
                  ""
                ) : (
                  <div key={index} className="Card__Info" ref={gridRef}>
                    {typeof Values[index] !== "object" ? (
                      <div key={index}>
                        {" "}
                        <p>
                          <span>
                            <img src={`${item.icon}`} />
                          </span>
                          {keys[index].replaceAll("_", " ")}
                        </p>
                        <h3 className="Info__data__title">{Values[index]}</h3>
                      </div>
                    ) : (
                      <div key={index}>
                        <p>
                          {" "}
                          <span>
                            <img src={`${item.icon}`} />
                          </span>
                          {keys[index].replaceAll("_", " ")}
                        </p>
                        <ul>
                          {/* { gridRef.current.add('wide')} */}
                          {Values[index].map((item) => (
                            <li className="Info__data__title" key={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          );
        })}{" "}
    </MyInfoStyle>
  );
}

export default MyInfo;
const MyInfoStyle = styled.div`
  margin: 2rem 4rem;

  .Info__Form {
    width: 100%;
    gap: 2rem;
  }
  .Info__data__title {
    font-weight: 600;
    font-size: 1.1rem;
  }
  h3,
  ul {
    margin-inline-start: 2rem;
  }

  .Card__Info {
    padding: 1em;
    /* border: 1px solid black; */
  }
  p {
    margin-bottom: 0.5em;
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
    align-items: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    /* grid-column-end: 3;
    grid-column-start: 1; */
  }
  li {
    padding: 0.5em 1em;
    background-color: #ddd;
  }
  span {
    margin-inline-end: 0.4em;
  }
  span img {
    width: 30px;
  }
  @media (max-width: 696px) {
    margin: 2rem;
  }
`;
