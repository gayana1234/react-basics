import { useState } from "react";

const Calci = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // const [numTotal, setNumTotal] = useState(0);

  // let g = "SURE";

  const handleChange1 = (event) => {
    setNum1(Number(event.target.value));
    console.log("sHello", event.target.value);
  };
  const handleChange2 = (event) => {
    setNum2(Number(event.target.value));
    console.log("Hi", event.target.value);
  };
  const sum = () => {
    // g = "GAUABA";
    localStorage.setItem("adddionGayana", num1 + num2);
    localStorage.setItem("adddionqqqGayana", num1 + num2);
    sessionStorage.setItem("sessionGayana", num1 + num2);
    // setNumTotal(num1 + num2);
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
      <input
        class="total"
        value={localStorage.getItem("adddionGayana")}
        type="textbox"
      ></input>
      <input
        class="total"
        value={sessionStorage.getItem("sessionGayana")}
        type="textbox"
      ></input>
    </div>
  );
};
export default Calci;
