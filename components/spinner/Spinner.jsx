import React from "react";
import { styled } from "styled-components";

function spinner() {
  return (
    <SpinnerStyle>
      <div className="cont__spinner">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>
          Loading<span id="One">.</span>
          <span id="Two">.</span>
          <span id="Three">.</span>
        </p>
      </div>
    </SpinnerStyle>
  );
}

export default spinner;
const SpinnerStyle = styled.div`
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .cont__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: white;

    width: 140px;
    height: 140px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 1rem;
    border-radius: 1rem;
  }
  p {
    margin-top: 6px;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: Open Sans;
  }
  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #000;
  }
  span {
    margin-inline-start: 2px;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  #One {
    animation-name: dots_Opacity;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  #Two {
    animation-name: dots_Opacity;
    animation-duration: 1s;
    animation-delay: 250ms;
    animation-iteration-count: infinite;
  }
  #Three {
    animation-name: dots_Opacity;
    animation-duration: 1s;
    animation-delay: 500ms;
    animation-iteration-count: infinite;
  }
  @keyframes dots_Opacity {
    50% {
      color: transparent;
    }
  }
`;
