import { useParams } from "react-router-dom";

const SpaceDetails = () => {
  const { flightId } = useParams();

  return <div> HELLO MS CUTIE PIE {flightId}</div>;
};

export default SpaceDetails;
