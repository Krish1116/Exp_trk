import ExpItem from "./ExpItem";
import "./Exp.css"
import Card from "../UI/Card";
const Exp = (props) => {
  const { expenses, onDelete } = props;
    return (
      <Card className="expense">
          {expenses.map(ele => (
            <ExpItem key={ele.id} data={ele} onDelete={onDelete}/>
          ))}
      </Card>
    );
}

export default Exp;
