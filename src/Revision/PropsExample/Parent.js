import { useEffect } from "react";
import Child from "./Child";
import { useNavigate } from "react-router-dom";

const Parent = (props) => {
  const abcd = 99999;
  const apiData = [
    { name: "Gayana", age: 27, clg: "VCET", gender: "F" },
    { name: "Suresh", age: 27, clg: "BITS", gender: "M" },
  ];

  useEffect(() => {
    abc();
  }, [props.chiPass]);

  const abc = () => {
    props.funcHolder(abcd);
    console.log(props, "funcHolderfuncHolder ABCDEF");
    //For loop
    for (let i = 0; i < apiData.length; i++) {
      console.log(apiData[i], i, "ABCDEF");
    }
    //map//
    apiData.map((d) => {
      console.log(d, "ABCDEF MAP");
    });
    //Ternary

    props.chiPass > 50
      ? console.log("TERNARY TRUE ABCD")
      : console.log("TERNARY FALSE ABCD");
    //If else
    if (props.chiPass > 50) {
      console.log("GYUUU ABCD");
    } else {
      console.log("BOOO ABCD");
    }
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/route/Gayana");
  };

  //passing 99999 to child i i. e Child.js//
  console.log(props, "propspropsprops");
  return (
    <div>
      Hi Parent ={props.chiPass}
      {/* we cant use 'if' and for loop in html hence using ternary operatores like ? and : */}
      {props.chiPass > 200 ? (
        <p onClick={handleClick}> Gayana is Good</p>
      ) : props.chiPass > 100 ? (
        <p> Gayana is Amazing</p>
      ) : props.chiPass > 50 ? (
        <p> Gayana is Extraordinary</p>
      ) : (
        <p onClick={handleClick}> Gayana is Beautiful</p>
      )}
      {apiData.map((d) => (
        <p>
          {d.name}- {d.age} = {d.clg} - {d.hhhhjhjjhjkkhk}
        </p>
      ))}
      <Child Parentpass={abcd} Suresh={props.Suresh} />
    </div>
  );
};
export default Parent;
