import React, { useState } from "react";
import "./InputExp.css";
import ExpForm from "./ExpForm";

const InputExp = (props) => {
  const [showForm, setShowFrom] = useState(false);

  //submit button work 
  const ExpInfoHandler = (enteredExpInfo) => {
    const expInfo = {
      ...enteredExpInfo,
      id: Math.random().toString(),
    };
    console.log(expInfo);
    props.onAddExpense(expInfo);
    setShowFrom(false);
  };

  //when we click this button the useState will be true and that's why we can show the form
  const toggleFromHandler = () => {
    setShowFrom((prestate) => !prestate);
  };

  const canselHanlr = () => {
    setShowFrom(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={toggleFromHandler}>Add Expenses</button>}
      {showForm && (
        <ExpForm onSaveExpInfo={ExpInfoHandler} onCancel={canselHanlr} />
      )}
    </div>
  );
};

export default InputExp;
