import React, { useState } from "react";
import { ExpenseList } from "./ExpenseList/ExpenseList";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter";
import { ExpenseChart } from "./ExpenseChart/ExpenseChart";
import { Card } from "../UI/Card";

export const ExpensesWrapper = ({ expenses, setExpenses }) => {
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  return (
    <Card direction="column" color="rgb(55, 40, 80)">
      <ExpenseFilter
        setFilteredExpenses={setFilteredExpenses}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <ExpenseList expenses={filteredExpenses} />
      <ExpenseChart expenses={filteredExpenses} />
    </Card>
  );
};
