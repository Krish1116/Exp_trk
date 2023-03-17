import "./Exp.css";
import Card from "../UI/Card";
import ExpFilter from "./ExpFilter";
import { useState } from "react";
import ExpContent from "./ExpContent";
import ExpChart from "./ExpChart";

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
      <ExpChart expenses={filterExpenses} selectedYear={filterYr} />
      <ExpContent items={filterExpenses} onDelete={onDelete} />
    </Card>
  );
};

export default Exp;
