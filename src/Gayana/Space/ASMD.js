import { useState } from "react";

const ASMD = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [result, setResult] = useState(0);

  const handleChange1 = (e) => {
    setOne(Number(e.target.value));
    console.log("Show", e.target.value);
  };

  const handleChange2 = (e) => {
    setTwo(Number(e.target.value));
    console.log("Show Result", e.target.value);
  };

  const plus = () => {
    setResult(Number(one) + Number(two));
  };

  const minus = () => {
    setResult(Number(one) - Number(two));
  };

  const multiplication = () => {
    setResult(Number(one) * Number(two));
  };

  const division = () => {
    setResult(Number(one) / Number(two));
  };

  const clearInputs = () => {
    setOne(0);
    setTwo(0);
    setResult(0);
  };

  return (
    <div>
      <input
        style={{ color: "red" }}
        onChange={handleChange1}
        type="number"
      ></input>
      <input
        style={{ color: "pink" }}
        onChange={handleChange2}
        type="number"
      ></input>
      <input style={{ color: "green" }} type="number" value={result}></input>

      <div class="xyz" style={{ marginBottom: "20px" }}>
        <button onClick={plus} style={{ marginRight: "10px" }}>
          +
        </button>
        <button onClick={minus} style={{ marginRight: "10px" }}>
          -
        </button>
        <button onClick={multiplication} style={{ marginRight: "10px" }}>
          *
        </button>
        <button onClick={division} style={{ marginRight: "10px" }}>
          /
        </button>

        <button onClick={clearInputs} style={{ backgroundColor: "red" }}>
          Reset
        </button>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default ASMD;
