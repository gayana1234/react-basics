import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, India } from "./ActionPractise";
const ReduxPractise = () => {
  const counter = useSelector((fasaa) => fasaa.practiceData);
  console.log("counter", counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        using redux: {counter.count} {counter.Name}
      </p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(India())}>I</button>
    </div>
  );
};
export default ReduxPractise;
