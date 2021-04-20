import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-IN", { month: "long" });
  const day = date.toLocaleString("en-IN", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
};

export default ExpenseDate;
