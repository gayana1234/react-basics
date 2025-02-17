import { useState } from "react";

const PM = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handlechange = (e) => {
    setNum1(Number(e.target.value));
    console.log("R", e.target.value);
  };

  const handlechange2 = (e) => {
    setNum2(Number(e.target.value));
    console.log("SH", e.target.value);
  };

  const plus = () => {
    console.log("PMG Clicked");
    setResult(num1 + num2);
  };
  const minus = () => {
    console.log("PMG Clicked");
    setResult(num1 - num2);
  };

  return (
    <div>
      <input type="number" onChange={handlechange} />
      <input type="number" onChange={handlechange2}></input>
      <input type="number" value={result}></input>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <p>{result}</p>
    </div>
  );
};
export default PM;
