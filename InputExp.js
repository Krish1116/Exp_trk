import React from "react";
import "./InputExp.css";
import ExpForm from "./ExpForm";

const InputExp = (props) => {

  const ExpInfoHandler = (enteredExpInfo) => {
    const expInfo = {
      ...enteredExpInfo, 
      id: Math.random().toString()
    }
    props.onAddExpense(expInfo);

  }

  return (
    <div className="new-expense">
      <ExpForm onSaveExpInfo={ExpInfoHandler}/>
    </div>
  );
};

export default InputExp;
