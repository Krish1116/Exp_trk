import ExpItem from "./ExpItem";
import React from "react";
import './ExpContect.css'
const ExpContent = (props) => {

  if (props.items.length === 0) {
    return <h2 className="con">No Expenses Found</h2>;
  } else if (props.items.length === 1) {
    return (
      <div>
        <ExpItem key={props.items[0].id} data={props.items[0]} onDelete={props.onDelete} />
        <h2 className="con">Only Single Expense here. Please add more...</h2>
      </div>
    );
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((ele) => (
          <ExpItem key={ele.id} data={ele} onDelete={props.onDelete} />
        ))}
      </ul>
    );
  }
};

export default ExpContent;
