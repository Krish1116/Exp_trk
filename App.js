import Exp from "./components/Expenses/Exp";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Food",
      LocationOfExpenditure: "Garden",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Movie",
      LocationOfExpenditure: "VR Mall",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Patrol",
      LocationOfExpenditure: "Patrol Pump",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Shopping",
      LocationOfExpenditure: "RR Mall",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h2", null, "Let's get started"),
  //   expenses.map(ele =>
  //     React.createElement(ExpenseItem, { key: ele.id, data: ele })
  //   )
  // );
  
  return (
    <div>
      <h2>Let's get started</h2>
      <Exp expenses={expenses}/>
    </div>
  );
}

export default App;
