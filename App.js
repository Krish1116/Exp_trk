import { useState } from "react";
import Exp from "./components/Expenses/Exp";
import InputExp from "./components/InputExp/InputExp";

const App = () => {
  const [expenses, setExpense] = useState([
    {
      id: "e1",
      title: "Food",
      LocationOfExpenditure: "Garden",
      amount: 415,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Movie",
      LocationOfExpenditure: "VR Mall",
      amount: 799,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Patrol",
      LocationOfExpenditure: "Patrol Pump",
      amount: 300,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Shopping",
      LocationOfExpenditure: "RR Mall",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpHandler = exp => {
    console.log('In App.js');
    console.log(exp);
  }

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h2", null, "Let's get started"),
  //   expenses.map(ele =>
  //     React.createElement(ExpenseItem, { key: ele.id, data: ele })
  //   )
  // );
  

  const dltExpHandler = (id) => {
    setExpense((prvExp) => {
      return prvExp.filter((exp) => exp.id !== id); 
    });
  }
  return (
    <div>
      <InputExp onAddExpense={addExpHandler}/>
      <Exp expenses={expenses} onDelete={dltExpHandler}/>
    </div>
  );
}

export default App;
