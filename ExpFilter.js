import React from "react";
import "./ExpFilter.css";

const ExpFilter = (props) => {
  const { selected, onChange} = props;
  const filtrHandler = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtered By Year</label>
        <select value={selected} onChange={filtrHandler}>
          <option value="" hidden>Choose Year</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>

  );
};

export default ExpFilter;
