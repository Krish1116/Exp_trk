import React from "react";
import './ExpForm.css';

const ExpForm = () => {
    const addExp = (e) => {
        e.preventDefault();
        let title = e.target.title.value;
        let amount = e.target.amount.value;
        let loe = e.target.loe.value;
        let date = e.target.date.value;

        let obj = {title, amount, loe, date};

        localStorage.setItem(obj.title, JSON.stringify(obj));
    }
    const eventHandler = (e) => {
        console.log(e.target.value);
    }
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Expense Title</label>
                <input type='text'onChange={eventHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Expense Amount</label>
                <input type='number'/>
            </div>
            <div className="new-expense__control">
                <label>Location of Expenditure</label>
                <input type='text'/>
            </div>
            <div className="new-expense__control">
                <label>Expense Date</label>
                <input type='date'/>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={addExp}>Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpForm;