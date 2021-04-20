import { useState } from "react";

import ExpenseForm from "../expense-form/ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [show, setShow] = useState(false);
  const showExpenseHandler = (event) => {
    setShow(true);
  };

  const hideExpenseHandler = (event) => {
    setShow(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  // const content = show ? (
  //   <ExpenseForm
  //     onHideExpense={hideExpenseHandler}
  //     onSaveExpenseData={saveExpenseDataHandler}
  //   />
  // ) : (
  // <button className="new-expense__show" onClick={showExpenseHandler}>
  //   Add New Expense
  // </button>;
  // );

  return (
    <div className="new-expense">
      {!show && (
        <button className="new-expense__show" onClick={showExpenseHandler}>
          Add New Expense
        </button>
      )}
      {show && (
        <ExpenseForm
          hideAddExpense={hideExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
