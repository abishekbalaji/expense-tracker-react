import ExpenseDate from "../expense-date/ExpenseDate";
import Card from "../card/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
