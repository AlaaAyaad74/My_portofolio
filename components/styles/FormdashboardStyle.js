import styled from "styled-components";
export default styled.div`
  .container {
    position: relative;
    left: 0;
    width: 94%;
    margin: 5rem auto 1.5rem;
    text-align: center;
    max-width: 950px;
  }
  .container .cont__form {
    margin: 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 8px;
  }
  form {
    padding: 2em 0.5em 3em;
  }
  .inner__form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 2rem;
    justify-items: center;
  }
  .inner__form > div {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  label {
    text-align: start;
    font-size: 1.15rem;
    font-weight: 600;
  }
  input {
    height: 30px;
    padding: 0.5em;
    font-size: 1rem;
    outline: none;
    border: 2px solid;
    border-radius: 6px;
  }
  .submit__controls {
    display: flex;
    margin: 3rem 1rem 0;
    justify-content: space-between;
    width: 400px;
    margin-left: auto;
  }
  .submit__controls input {
    width: 150px;
    height: 40px;
    color: #fff;
    background-color: #000;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
  }
  @media (max-width: 1024px) {
    form {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .submit__controls {
      width: 350px;
    }
    .container {
      margin-top: 2rem;
    }
  }
  @media (max-width: 760px) {
    .inner__form > div {
      width: 270px;
    }
  }
  @media (max-width: 720px) {
    .inner__form {
      grid-template-columns: 1fr;
    }
    .container {
      width: 350px;
    }
    .submit__controls {
      width: 250px;
    }
    .submit__controls input {
      width: 100px;
    }
  }
`;
