import ExpItem from "./ExpItem";
import React from "react";
import "./ExpContent.css";
const ExpContent = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="box">
        <div className="text-only">
          <h2 className="text">No Expenses Found</h2>
        </div>
      </div>
    );
  } else if (props.items.length === 1) {
    return (
      <div className="box">
        <ExpItem
          key={props.items[0].id}
          data={props.items[0]}
          onDelete={props.onDelete}
        />
        <div className="text-only">
          <h2 className="text">Only Single Expense here. Please add more...</h2>
        </div>
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
