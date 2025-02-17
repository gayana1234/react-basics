import { Link, useNavigate } from "react-router-dom";

const SpaceData = (props) => {
  const childInfo =
    "I want to pass this information to my parent which is Space.js";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details/" + props.flightId);
  };

  const sendToParent = () => {
    props.acceptingChildData(childInfo);
  };
  return (
    <div>
      <h1>Mission Name {props.name}</h1>
      <p onClick={sendToParent}>Parent Info {props.parentInfo}</p>
      <Link to="/gayana"> Submit Link</Link>
      <button style={{ marginLeft: "20px" }} onClick={handleClick} class="btn">
        Submit
      </button>
    </div>
  );
};

export default SpaceData;
