import { useState } from "react";

const Calci = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [numTotal, setNumTotal] = useState(0);

  const handleChange1 = (event) => {
    setNum1(Number(event.target.value));
    console.log("sHello", event.target.value);
  };
  const handleChange2 = (event) => {
    setNum2(Number(event.target.value));
    console.log("Hi", event.target.value);
  };
  const sum = () => {
    setNumTotal(num1 + num2);
  };
  return (
    <div>
      <input
        style={{ color: "red" }}
        onChange={handleChange1}
        type="number"
      ></input>
      <input
        id="text2"
        class="textcls2"
        onChange={handleChange2}
        type="number"
      ></input>
      <button class="btn" onClick={sum}>
        =
      </button>
      <input class="total" value={numTotal} type="textbox"></input>
    </div>
  );
};
export default Calci;
