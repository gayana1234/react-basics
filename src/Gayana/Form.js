import "./Form.css";
const Form = () => {
  return (
    <div style={{ display: "grid" }}>
      <label>Email Id</label>
      <input type="text"></input>
      <label>Name</label>
      <input type="text"></input>
      <label>Password</label>
      <input type="text"></input>
      <label>Phone Number</label>
      <input type="text"></input>

      <button className="SubmitButton">Submit</button>
    </div>
  );
};

export default Form;
