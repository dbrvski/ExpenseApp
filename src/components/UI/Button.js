import React from "react";
import styled from "@emotion/styled";
import { Card } from "./Card";
const StyledButton = styled.button`
  background-color: rgb(80, 18, 131);
  color: white;
  border-radius: 10px;
  min-width: 10%;
  line-height: 40px;
`;

export const Button = (props) => {
  return (
    <Card color="rgb(11, 40, 80)">
      <StyledButton onClick={props.changeSetShow}>New Expense</StyledButton>
    </Card>
  );
};
