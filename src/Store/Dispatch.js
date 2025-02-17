import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, Success } from "./Action";

const Dispatch = () => {
  const counter = useSelector((fasaa) => fasaa.Good);
  console.log("Counter", counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        Sub using redux :{counter.count}
        {counter.Name}
      </p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(Success())}>Success</button>
    </div>
  );
};

export default Dispatch;
