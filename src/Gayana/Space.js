import axios from "axios";
import { useEffect, useState } from "react";
import SpaceData from "./SpaceData";

const Space = () => {
  useEffect(() => {
    init();
  }, []);
  const [data, setData] = useState([]);

  const init = async () => {
    const result = await axios.get("https://api.spacexdata.com/v3/launches");
    // https://api.spacexdata.com/v3/launches
    setData(result.data.splice(0, 5));
    console.log(result.data, "GAYUU");
    // console.log("mounted", result.data, result.headers, result);
  };

  const [childInfo, setChildInfo] = useState("");
  const parentInfo =
    "I want to pass this information to my child which is SpaceData.js";

  const acceptingChildData = (data) => {
    setChildInfo(data);
  };

  return (
    <div>
      <p> {childInfo}</p>
      {data.map((gayana) => {
        // console.log(gayana.mission_name);
        return gayana.mission_name.includes("Starlink") ? (
          <SpaceData
            acceptingChildData={acceptingChildData}
            parentInfo={parentInfo}
            flightId={gayana.flight_number}
            name="Gayana"
          />
        ) : (
          <SpaceData
            acceptingChildData={acceptingChildData}
            parentInfo={parentInfo}
            flightId={gayana.flight_number}
            name={gayana.mission_name}
          />
        );
      })}
    </div>
  );
};
export default Space;
