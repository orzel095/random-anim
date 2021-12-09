import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./views/Main";
import Random from "./views/Random";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* background-image: url("https://content-eu-live-global.prod.marketing.bat.net/media/entryageverification/stores/30/Glo-YAP_desktop-02_1.jpg");
  background-position: center;
  background-size: cover; */
  background-color: #F0F8FF;
  color: ${({ color }) => color} !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 40px;
  top: 40px;

  select {
    font-size: 32px;
    padding: 10px;
    border: 1px solid ${({ color }) => color};
    background-color: transparent;
  }
`;

function App() {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [color, setColor] = useState("black");

  return (
    <Wrapper color={color}>
      {!selectedNumber ? (
        <>
          <SwitchWrapper>
            <select onChange={e => setColor(e.target.value)}>
              <option>Black</option>
              <option>Orange</option>
              <option>Blue</option>
            </select>
          </SwitchWrapper>
          <Main color={color} setSelectedNumber={setSelectedNumber} />
        </>
      ) : (
        <Random
          color={color}
          selectedNumber={selectedNumber}
          numberOfSlots={4}
        />
      )}
    </Wrapper>
  );
}

export default App;
