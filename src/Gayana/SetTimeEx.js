import { useEffect } from "react";

const SetTimeEx = () => {
  useEffect(() => {
    // exampl();
  }, []);

  const exampl = () => {
    setTimeout(() => {
      console.log("THIS PRINTS AFTER 3000 ms");
    }, 3000);

    setInterval(() => {
      console.log("THIS  PRINTS  SETINTERVAl AFTER 3000 ms every time");
    }, 3000);
  };
  return <p> SetTimeEx</p>;
};

export default SetTimeEx;
