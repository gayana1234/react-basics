import { useState } from "react";
const Counter = () => {
  const [Jk1, setJk1] = useState(0);
  const [Sk1, setSk1] = useState(0);
  const [Total, setTotal] = useState(0);

  const Handlechange1 = (e) => {
    setJk1(Number(e.target.value));
  };
  const Handlechange2 = (e) => {
    setSk1(Number(e.target.value));
  };
  const Result1 = () => {
    setTotal(Jk1 + Sk1);
  };
  const Result2 = () => {
    setTotal(Jk1 - Sk1);
  };
  const Result3 = () => {
    setTotal(Jk1 * Sk1);
  };
  const Result4 = () => {
    setTotal(Jk1 / Sk1);
  };

  return (
    <div>
      <input onChange={Handlechange1}></input>
      <input onChange={Handlechange2}></input>
      <button onClick={Result1}>+</button>
      <button onClick={Result2}>-</button>
      <button onClick={Result3}>*</button>
      <button onClick={Result4}>/</button>
      <p>{Total}</p>
    </div>
  );
};
export default Counter;
