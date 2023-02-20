import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const Bar = styled.div`
  border-radius: 5px;
  width: 10px;
  height: 100px;
  background-color: rgb(11, 40, 180);
  position: relative;
`;

const Fill = styled.div`
  width: 100%;
  height: ${(props) => props.height}%;
  background-color: rgb(200, 0, 0);
  position: absolute;
  bottom: 0px;
  left: 0px;
  transition: all 1s;
  border-radius: 5px;
`;

const Info = styled.div`
  align-self: flex-end;
`;

export const ChartBar = ({ label, value, maxValue }) => {
  const height = (value && value / maxValue) * 100;

  return (
    <Wrapper>
      <Bar>
        <Fill height={height} />
      </Bar>
      <Info>{label}</Info>
    </Wrapper>
  );
};
