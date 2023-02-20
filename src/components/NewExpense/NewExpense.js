import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { Button } from "../UI/Button";

export const NewExpense = (props) => {
  const [show, setShow] = useState(false);

  const changeSetShow = () => {
    setShow(true);
  };

  const changeSetShowBack = () => {
    setShow(false);
  };

  if (show) {
    return (
      <ExpenseForm setExpenses={props.setExpenses} onHide={changeSetShowBack} />
    );
  } else {
    return <Button changeSetShow={changeSetShow}></Button>;
  }
};
