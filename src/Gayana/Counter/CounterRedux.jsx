import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  gayu,
  century,
} from "../../Store/CounterStore/CounterActions";

const CounterRedux = () => {
  const counter = useSelector((fasaa) => fasaa.counterData);
  console.log("COUNTERc", counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {" "}
        Using Redux: {counter.count} {counter.name}
      </p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(gayu())}>G</button>
      <button onClick={() => dispatch(century())}>Century</button>
    </div>
  );
};
export default CounterRedux;
