import React from "react";
import { Card } from "../../UI/Card";
import { useEffect, useState } from "react";

export const ExpenseFilter = ({
  expenses,
  setFilteredExpenses,
  setExpenses,
}) => {
  const [filterYear, setFilterYear] = useState("2022");
  const handleFilterChange = (e) => {
    setFilterYear(e.target.value);
  };
  const handleFilterExpenses = () => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear() === +filterYear
    );

    setFilteredExpenses(filteredExpenses);
  };

  const handleDeleteExpenses = () => {
    setExpenses([]);
  };

  useEffect(() => {
    handleFilterExpenses();
  }, [filterYear, expenses]);

  return (
    <>
      <Card justify="space-around">
        <div>
          <div>Delete all expenses</div>
          <button onClick={handleDeleteExpenses}>Delete</button>
        </div>
        <div>
          <div>Filter year</div>

          <select value={filterYear} onChange={handleFilterChange}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </Card>
    </>
  );
};
