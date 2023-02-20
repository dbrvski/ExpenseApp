import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { Card } from "../../UI/Card";

const StyledInput = styled.input`
  border-radius: 10px;
  line-height: 40px;
  padding-left: 10px;
  width: 65%;
  @media (min-width: 700px) {
    width: 25%;
  }
`;

const StyledInputParent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: start;
  gap: 10px;
`;

const StyledButton = styled.button`
  background-color: rgb(80, 18, 131);
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 1rem;
  padding: 10px 10px;
`;

export const ExpenseForm = (props) => {
  const [inputs, setInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e, type) => {
    setInputs((prev) => {
      return { ...prev, [type]: e.target.value };
    });
  };

  const { setExpenses } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      title: inputs.title,
      amount: Number(inputs.amount),
      id: uuidv4(),
      date: new Date(inputs.date),
    };
    setExpenses((prev) => {
      return [...prev, newExpense];
    });
  };

  return (
    <Card
      onSubmit={handleSubmit}
      as="form"
      justify="center"
      gap="20"
      wrap="wrap"
      color="rgb(11, 40, 80)"
    >
      <StyledInput
        placeholder="Title..."
        value={inputs.title}
        onChange={(e) => handleInputChange(e, "title")}
      />
      <StyledInput
        placeholder="Amount..."
        type="number"
        value={inputs.amount}
        onChange={(e) => handleInputChange(e, "amount")}
      />
      <StyledInput
        type="date"
        value={inputs.date}
        onChange={(e) => handleInputChange(e, "date")}
      />

      <StyledInputParent>
        <StyledButton type="button" onClick={props.onHide}>
          cancel
        </StyledButton>
        <StyledButton type="submit"> add expense</StyledButton>
      </StyledInputParent>
    </Card>
  );
};
