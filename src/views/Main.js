import React, { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-size: 72px;

  p {
    text-align: center;
    margin: 20px auto;
  }
  input {
    font-size: 72px;
    border: 1px solid ${({ color }) => color};
  }
  button {
    padding: 16px 32px;
    font-size: 32px;
    font-weight: 700;
    margin: 20px auto;
    background-color: inherit;
    border: 1px solid ${({ color }) => color};
    cursor: pointer;
    color: ${({ color }) => color};
  }
`;

const Main = ({ setSelectedNumber, color }) => {
  const [inputValue, setInputValue] = useState("");

  const onButtonClick = () => {
    if (inputValue.length !== 4) {
      return alert("Wprowadź prawidłową wartość");
    } else {
      setSelectedNumber(inputValue);
    }
  };

  const onInputChange = e => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length <= 4) {
      setInputValue(value);
    } else {
      return null;
    }
  };
  return (
    <MainWrapper color={color}>
      <p>Wprowadź liczby</p>
      <input type="number" value={inputValue} onChange={onInputChange} />
      <button type="button" onClick={onButtonClick}>
        Losuj
      </button>
    </MainWrapper>
  );
};

export default Main;
