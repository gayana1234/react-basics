import { useEffect, useState } from "react";
import Parent from "./Revision/PropsExample/Parent";
import { useNavigate } from "react-router-dom";

const Practise = () => {
  const [Sur1, setSur1] = useState(0);
  const [Sur2, SetSur2] = useState(0);
  const [Gayana, setGayana] = useState(0);
  const [ParentCalling, setParentCallig] = useState(0);

  useEffect(() => {
    practicingJsFunc();
  }, []);

  const practicingJsFunc = () => {
    //If else if
    // Ternary operators
    //For loop
    // Map
  };

  const funcHolder = (val) => {
    setParentCallig(val);
  };

  const handlechange5 = (e) => {
    setSur1(Number(e.target.value));
  };

  const handlechange7 = (e) => {
    SetSur2(Number(e.target.value));
  };
  const Result1 = (op) => {
    if (op === "+") {
      setGayana(Sur1 + Sur2);
    } else if (op === "-") {
      setGayana(Sur1 - Sur2);
    } else if (op === "*") {
      setGayana(Sur1 * Sur2);
    } else {
      setGayana(Sur1 / Sur2);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/route/Gayana");
  };
  return (
    <>
      <p onClick={handleClick}> Hi ABCD: {ParentCalling} </p>
      {/* passing "Gayana" to child i.e Parent.js  */}
      <Parent
        funcHolder={funcHolder}
        chiPass={Gayana}
        Suresh={Sur1}
        dgdg={"2111"}
      />
      <input onChange={handlechange5}></input>
      <input onChange={handlechange7}></input>
      <button onClick={() => Result1("+")}>+</button>
      <button onClick={() => Result1("-")}>-</button>
      <button onClick={() => Result1("*")}>*</button>
      <button onClick={() => Result1("/")}>/</button>
      <p>{Gayana}</p>
    </>
  );
};

export default Practise;
