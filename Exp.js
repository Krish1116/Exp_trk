import ExpItem from "./ExpItem";
import "./Exp.css";
import Card from "../UI/Card";
import ExpFilter from "./ExpFilter";
import { useState } from "react";

const Exp = (props) => {
  const { expenses, onDelete } = props;
  const [filterYr, setFilterYr] = useState("");

  const filtrChangeHandlr = (selectedYr) => {
    setFilterYr(selectedYr);
  };

  const filterExpenses = expenses.filter(
    (exp) => !filterYr || exp.date.getFullYear().toString() === filterYr
  );

  return (
    <Card className="expense">
      <ExpFilter selected={filterYr} onChange={filtrChangeHandlr} />
      {filterExpenses.map((ele) => (
        <ExpItem key={ele.id} data={ele} onDelete={onDelete} />
      ))}
    </Card>
  );
};

export default Exp;
