import React, { useState } from "react";

function App() {
  // State hooks for different input types
  const [textInput, setTextInput] = useState();
  const [numberInput, setNumberInput] = useState(0);
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [radioInput, setRadioInput] = useState();

  // Handle change for text input
  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  // Handle change for number input
  const handleNumberChange = (e) => {
    setNumberInput(e.target.value);
  };

  // Handle change for checkbox input
  const handleCheckboxChange = (e) => {
    setCheckboxInput(e.target.checked);
  };

  // Handle change for radio button input
  const handleRadioChange = (e) => {
    setRadioInput(e.target.value);
  };

  return (
    <div>
      <h1>useState with onChange Example</h1>

      <div>
        <label>Text Input:</label>
        <input type="text" value={textInput} onChange={handleTextChange} />
        <p>Text Input Value: {textInput}</p>
      </div>

      <div>
        <label>Number Input:</label>
        <input
          type="number"
          value={numberInput}
          onChange={handleNumberChange}
        />
        <p>Number Input Value: {numberInput}</p>
      </div>

      <div>
        <label>Checkbox Input:</label>
        <input
          type="checkbox"
          checked={checkboxInput}
          onChange={handleCheckboxChange}
        />
        <p>Checkbox is {checkboxInput ? "Checked" : "Unchecked"}</p>
      </div>

      <div>
        <label>Radio Button Input:</label>
        <input
          type="radio"
          value="option1"
          checked={radioInput === "option1"}
          onChange={handleRadioChange}
        />{" "}
        Option 1
        <input
          type="radio"
          value="option2"
          checked={radioInput === "option2"}
          onChange={handleRadioChange}
        />{" "}
        Option 2<p>Selected Radio Option: {radioInput}</p>
      </div>
    </div>
  );
}

export default App;
