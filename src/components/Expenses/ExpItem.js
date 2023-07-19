import "./ExpItem.css"
import ExpDate from "./ExpDate"
import Card from "../UI/Card"
import { useState } from "react"

const ExpItem = (props) => {
  const { id, LocationOfExpenditure, date } = props.data
  const [title, setTitle] = useState(props.data.title)
  // console.log('Expense Item Evaluate by React');
  const [amount, setAmount] = useState(props.data.amount)
  const deleteExp = () => {
    console.log("Deleting the details with id" + id)
    props.onDelete(id)
  }

  const clickHandler = () => {
    setTitle("Updated!")
    console.log(title)
    setAmount(100)
    console.log(amount)
  }

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpDate date={date} />
        <h2>{title}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">Rs.{amount}</div>
      </div>

      <button onClick={clickHandler} className="btn">
        Change Title
      </button>
      <button onClick={deleteExp} className="btn">
        Delete
      </button>
    </Card>
  )
}

export default ExpItem
