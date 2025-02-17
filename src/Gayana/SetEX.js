import { useEffect } from "react";

const SetEx = () => {
  useEffect(() => {
    Exmpl2();
  }, []);

  const Exmpl2 = () => {
    setTimeout(() => {
      console.log("Show result in 4000ms");
    }, 4000);

    setInterval(() => {
      console.log("Show result in every 5000ms");
    }, 5000);
  };

  return <div>Hrllo eotlrf</div>;
};

export default SetEx;
