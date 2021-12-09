import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { results } from "../results";

const RANGE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const RANGE_ITERATION = [...RANGE, ...RANGE, ...RANGE];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RandomWrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-height: 160px;
  overflow: hidden;
`;

const RandomNumber = styled.div`
  text-align: center;
  line-height: 1;
`;

const RandomSlot = styled.div`
  ${({ number, slotIndex, isStart, color }) => css`
    @keyframes rotate-${slotIndex} {
      0% {
        transform: translateY(calc(-720px * 3));
      }

      100% {
        transform: ${({ number }) =>
          `translateY(calc(720px * 3 - ${(number - 1) * 160}px))`};
      }
    }

    animation: ${() =>
      isStart && `rotate-${slotIndex} 1s ${slotIndex * 1}s forwards ease-out`};
    color: ${color};
    font-size: 160px;
    padding: 0 32px;
    transform: translateY(calc(720px * 3 + 160px));
    text-align: center;
  `}
`;

const Button = styled.div`
  padding: 16px 32px;
  font-size: 32px;
  font-weight: 700;
  margin: 20px auto;
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  cursor: pointer;
  color: ${({ color }) => color};
  text-align: center;
  position: absolute;
  bottom: 10vh;
`;

const Random = ({ selectedNumber, numberOfSlots, color }) => {
  const [isStart, setStart] = useState(false);
  const slotsArr = new Array(numberOfSlots).fill({});

  const onStart = () => {
    setStart(true);
  };

  return (
    <Wrapper>
      <RandomWrapper>
        {slotsArr.map((_, index) => (
          <RandomSlot
            color={color}
            number={Number(selectedNumber[index])}
            slotIndex={index}
            isStart={isStart}
          >
            {RANGE_ITERATION.map(el => (
              <RandomNumber>{el}</RandomNumber>
            ))}
          </RandomSlot>
        ))}
      </RandomWrapper>
      {!isStart && (
        <Button color={color} onClick={onStart} type="button">
          START
        </Button>
      )}
    </Wrapper>
  );
};

export default Random;
