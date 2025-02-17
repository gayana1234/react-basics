import axios from "axios";
import { useEffect, useState } from "react";

const TryCatchEx = () => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
    another();
  }, []);

  const a = undefined;
  const another = () => {
    try {
      const len = a.length;

      console.log(len);
    } catch (er) {
      console.log(er, "GAYTT");
    } finally {
      console.log("I will execute at any cost");
    }
  };

  const init = async () => {
    try {
      const apiURL = "http://localhost:5000/data1";
      const data = await axios.get(apiURL);

      console.log(data, "HEYYY");
    } catch (er) {
      setMsg(er.message);
      console.log(er, "ERRROROdss");
    }
  };
  return <p> TryCatchEx {msg}</p>;
};

export default TryCatchEx;
