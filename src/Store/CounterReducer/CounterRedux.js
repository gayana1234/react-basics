import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, gayu } from "./Actions";

const CounterRedux = () => {
  const counter = useSelector((fasaa) => fasaa.counterGayu);
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
    </div>
  );
};

export default CounterRedux;
