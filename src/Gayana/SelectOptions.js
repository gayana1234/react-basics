import React, { useEffect, useState } from "react";

function App() {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState("");

  const jsonData = {
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Diana" },
      { id: 5, name: "Eve" },
    ],
  };

  useEffect(() => {
    abc();
  }, []);

  const abc = () => {
    // Extract a portion of the array (e.g., 2nd to 4th items)
    const slicedUsers = jsonData.users.slice(1, 4);

    console.log(slicedUsers);
  };
  // Handle the change event for select dropdown
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h1>Select Option Example</h1>

      <div>
        <label>Select an option:</label>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">--Please choose an option--</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
  );
}

export default App;
