import ExpItem from "./ExpItem";
import "./Exp.css"
import Card from "../UI/Card";
const Exp = (props) => {
    return (
      <Card className="expense">
          {props.expenses.map(ele => (
            <ExpItem key={ele.id} data={ele}/>
          ))}
      </Card>
    );
}

export default Exp;
