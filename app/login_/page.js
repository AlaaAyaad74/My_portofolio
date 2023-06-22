"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter();
  const emailRef = useRef(null);
  const spanRef = useRef(null);
  return (
    <LoginStyle>
      <h1>LOGIN</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        <span ref={spanRef} className="Incorect">
          Incorrect Email..
        </span>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <span className="Incorect">Incorrect Password..</span>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            emailRef.current.value === "alaaayad32@gmail.com"
              ? router.push("/")
              : spanRef.current.classList.add("animation");
          }}
        >
          Login
        </button>
        <Link href="/">Back</Link>
      </form>
    </LoginStyle>
  );
}

export default Login;
const LoginStyle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 310px;
  height: auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1.2em 0.5em 2em;
  border-radius: 6px;
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label,
  input,
  a,
  button {
    display: inline-block;
    width: 94%;
    font-size: 1.2rem;
  }
  label {
    font-size: 1.2rem;
    font-weight: 500;
  }
  input {
    height: 30px;
    padding: 0.2em;
    font-size: 1rem;
    z-index: 999;
  }

  a,
  button {
    height: 30px;
    color: white;
    background-color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
  a:hover,
  button:hover {
    opacity: 0.8;
  }
  a {
    text-align: center;
  }
  .Incorect {
    font-size: 0.85rem;
    color: red;
    text-align: start;
    width: 93%;
    font-weight: 600;
    transform: translateY(-100%);
    margin-bottom: 15px;
  }
  .animation {
    animation-name: handleErrors;
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform: translateY(0);
  }
  @media (max-width: 330px) {
    width: 96%;
    min-width: 270px;
  }
  @keyframes handleErrors {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
