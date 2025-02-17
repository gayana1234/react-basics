import axios from "axios";
import { useEffect, useState } from "react";

const Catch = () => {
  const [Msg, setMsg] = useState("");

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
      console.log(er, "Yummy");
    }
  };

  const init = async () => {
    try {
      const apiURL = "http://localhost:5000/data1";
      const data = await axios.get(apiURL);
      console.log(data, "Hey");
    } catch (er) {
      setMsg(er.Msg);
      console.log(er, Error);
    }
  };

  return <div>catch me if you can!</div>;
};

export default Catch;
