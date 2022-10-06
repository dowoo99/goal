import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useInterval from '../../hooks/useInterval';
const Timer = () => {
  const navigate = useNavigate();
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [start, setStart] = useState(false);

  useInterval(
    () => {
      if (second === 59) {
        setMinute((prev) => prev + 1);
        setSecond(-1);
        if (minute === 59) {
          setHour((prev) => prev + 1);
          setMinute(0);
        }
      }
      setSecond((prev) => prev + 1);
    },
    start ? null : 1000,
  );
  const onClickHandler = useCallback(() => {
    setStart((prev) => !prev);
  }, [start]);
  return (
    <>
      <div>
        <TimerStyled>
          {hour < 10 ? '0' + hour : hour}:{minute < 10 ? '0' + minute : minute}:
          {second < 10 ? '0' + second : second}
        </TimerStyled>

        <div onClick={onClickHandler}>{start ? '시작하기' : '스탑'}</div>
        <div
          onClick={() => {
            navigate('/addgoal');
          }}
        >
          이번주 목표 설정하기
        </div>
      </div>
    </>
  );
};
export default Timer;
const TimerStyled = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  border-radius: 5rem;
  justify-content: center;
  border: 1px solid;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
