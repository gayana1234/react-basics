import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (num2 === "0") {
      setResult("Error: Division by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  const clearInputs = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>React Calculator</h1>
      <div class="main" style={{ marginBottom: "20px" }}>
        <input
          class="xyz"
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ padding: "5px" }}
        />
      </div>
      <div class="xyz" style={{ marginBottom: "20px" }}>
        <button onClick={handleAddition} style={{ marginRight: "10px" }}>
          +
        </button>
        <button onClick={handleSubtraction} style={{ marginRight: "10px" }}>
          -
        </button>
        <button onClick={handleMultiplication} style={{ marginRight: "10px" }}>
          *
        </button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={clearInputs}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
          }}
        >
          Clear
        </button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
