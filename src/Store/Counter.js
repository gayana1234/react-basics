import { useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const [num, setNum] = useState(0);
  const counter = useSelector((state) => state.counterGayu);

  // const handlebutton1 = () => {
  //   setNum(num + 1);
  // };
  // const handlebutton2 = () => {
  //   setNum(num - 1);
  // };

  const handleBtn = (ga) => {
    if (ga === "+") {
      setNum(num + 1);
    } else {
      setNum(num - 1);
    }
  };

  return (
    <div>
      <p>
        using Use State: {num} This is data from redux for counter :
        {counter.count}
      </p>
      <button onClick={() => handleBtn("+")}>+</button>
      <button onClick={() => handleBtn("-")}>-</button>
      {/* <button onClick={() => handleBtn("+")}>+</button>
      <button onClick={() => handleBtn("-")}>-</button> */}
      {/* <button onClick={handlebutton1}>+</button>
      <button onClick={handlebutton2}>-</button> */}
    </div>
  );
};

export default Counter;
