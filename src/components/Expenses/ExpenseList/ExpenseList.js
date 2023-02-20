import React from "react";
import { Card } from "../../UI/Card";
import styled from "@emotion/styled";

const StyledHeader = styled.span`
  font-weight: bold;
`;

export const ExpenseList = (props) => {
  return (
    <Card direction="column">
      {props.expenses.map((expense) => {
        return (
          <Card key={expense.id} padding="10px 0px" justify="center">
            <div>
              <StyledHeader>Day: </StyledHeader>
              <span> {expense.date.getDate()}</span>
              <div>
                <StyledHeader> Month:</StyledHeader>
                <span>
                  {" "}
                  {expense.date.toLocaleDateString("en-US", { month: "long" })}
                </span>
              </div>
              <div>
                <StyledHeader>Year:</StyledHeader>
                <span> {expense.date.getFullYear()}</span>
              </div>
              <div>
                <StyledHeader>Name: </StyledHeader>
                <span> {expense.title}</span>
              </div>
              <div>
                <StyledHeader> Amount: </StyledHeader>
                <span> {expense.amount}</span>
              </div>
            </div>
          </Card>
        );
      })}
    </Card>
  );
};
