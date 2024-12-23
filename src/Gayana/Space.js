import axios from "axios";
import { useEffect } from "react";

const Space = () => {
  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    const result = await axios.get("https://api.spacexdata.com/v3/launches");
    // https://api.spacexdata.com/v3/launches
    console.log("mounted", result.data, result.headers, result);
  };

  return (
    <div>
      <h1>Space</h1>
    </div>
  );
};
export default Space;
