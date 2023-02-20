import React, { useState, useEffect } from "react";
import "./App.css";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { ExpensesWrapper } from "./components/Expenses/ExpensesWrapper";
import { saveLocalStorage, loadLocalStorage } from "./utils/localStorage";
import { Wrapper } from "./components/Wrapper";

// if you want to clean your ls: localStorage.removeItem("expenses");

function App() {
  const [expenses, setExpenses] = useState(loadLocalStorage() || []);

  useEffect(() => {
    saveLocalStorage(expenses);
  }, [expenses]);

  return (
    <div className="App">
      <Wrapper>
        <NewExpense setExpenses={setExpenses} />
        <ExpensesWrapper expenses={expenses} setExpenses={setExpenses} />
      </Wrapper>
    </div>
  );
}

export default App;
