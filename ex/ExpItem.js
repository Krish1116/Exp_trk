import "./ExpItem.css";
import ExpDate from "./ExpDate";
import Card from "../UI/Card";

const ExpItem = (props) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpDate date={props.data.date} />
        <h2>{props.data.title}</h2>
        <h2>{props.data.LocationOfExpenditure}</h2>
        <div className="expense-item__price">${props.data.amount}</div>
      </div>
    </Card>
  );
};

export default ExpItem;
