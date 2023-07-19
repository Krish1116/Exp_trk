import React, { useState } from "react";
import "./ExpForm.css";

const ExpForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredLoe, setEnteredLoe] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //we can write it's in short like this
  // const [useInput, setUserInput] = useState({enteredTitle: '', enteredAmount: '', enteredLoe: '', enteredDate: ''});

  const titleChange = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //     ...useInput,
    //     enteredTitle: e.target.value,
    // });
    //it technically works but in such case it's fail
    //what's the problem in this type - we depend on previous state bcz we can use only one state instead of this 4 state bcz to copy in the existing value and the overriding one value

    // setUserInput((preState) => {
    //     return { ...preState, enteredTitle: e.target.value}
    // })

    //if we use this approach the snapshot will give you latest state info
  };

  const amountChange = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //     ...useInput,
    //     enteredAmount: e.target.value,
    // });
  };

  const loeChange = (e) => {
    setEnteredLoe(e.target.value);
    // setUserInput({
    //     ...useInput,
    //     enteredLoe: e.target.value,
    // });
  };

  const dateChange = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //     ...useInput,
    //     enteredDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expInfo = {
      title: enteredTitle,
      amount: enteredAmount,
      loe: enteredLoe,
      date: new Date(enteredDate),
    };
    // console.log(expInfo);
    props.onSaveExpInfo(expInfo);

    // with the help of this we can  set the new empty input
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredLoe("");
    setEnteredDate("");
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={titleChange} value={enteredTitle} />
          {/* we add the value here which is a default attribute to this input element . this will set the internal value property which every input element has and we can set it to a new value. and here bind this to enteredTitle so now it is this two-way binding */}
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          {/* we can add value attribute , to this input element . this will set the internal value property which every input ele has  */}
          <input type="number" onChange={amountChange} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Location of Expenditure</label>
          <input type="text" onChange={loeChange} value={enteredLoe} />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type="date" onChange={dateChange} value={enteredDate} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpForm;

//two-way binding means it can be achieved using controlled components which are components that manage their own state and update it as the user interacts with the ui . when a user types into a controlled component the value is updated in the component state and the new state is reflected back into the UI, resulting in the two-way binding effect.
