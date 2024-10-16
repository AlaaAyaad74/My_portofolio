"use client";
import React, { useContext } from "react";
import { sendData } from "../../components/datafirebase/config";
import MainpageStyle from "../../components/styles/CommonformStyle";
import Link from "next/link";
import styled from "@emotion/styled";
import { DataContext } from "../layout";
function Myaccounts() {
  let accountsData = useContext(DataContext);

  return (
    <MainpageStyle>
      <MediaStyle>
        <title>My accounts</title>

        {accountsData?.myAccountsData.map((item, index) => (
          <CardStyle key={index}>
            <div className="Info__Form">
              <div className="Card__Info">
                <div>
                  <p>
                    <Link href={item.link}>
                      <span>
                        <img src={item.image} alt="icon" />
                      </span>
                      {item.caption}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </CardStyle>
        ))}
      </MediaStyle>
    </MainpageStyle>
  );
}

export default Myaccounts;
const CardStyle = styled.div`
  a {
    color: #000;
  }
  .Info__Form p {
    justify-content: center;
  }
  .Info__Form p a {
    align-items: center;
    display: flex;
  }
  .Info__Form a:hover {
    transform: scale(1.2);
    opacity: 0.75;
  }
`;
const MediaStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 540px) {
    a {
      font-size: 1rem;
    }
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    .Card__Info {
      padding: 1em 0.5em !important;
    }
  }
`;
