import { useState } from "react";

import ExpensesFilter from "../expenses-filter/ExpenseFilter";
import ExpensesList from "../expenses-list/ExpensesList";
import ExpensesChart from "../expenses-chart/ExpensesChart";

import Card from "../card/Card";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020");
  const setFilterHandler = (year) => setYear(year);
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onSetFilter={setFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
