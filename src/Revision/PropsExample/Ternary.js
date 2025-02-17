import { useEffect } from "react";
const Ternary = () => {
  const apiData = [
    { Place: "Sirsi", Dist: "U.K", Tal: "Siddhapur" },

    { Place: "Sagara", Dist: "Shimoga", Tal: "NA" },
  ];

  useEffect(() => {}, []);
  const Gayana = 7000;
  const abc = () => {
    for (let i = 0; i < apiData; i++) {
      console.log(apiData[i], i, "GAYANA");
    }
    apiData.map((d) => {
      console.log(d, "GA Gayana");
    });

    Gayana > 5000
      ? console.log("Ternary True")
      : console.log("Ternary not True");
  };
  if (Gayana > 5000) {
    console.log("Gayana");
  } else {
    console.log("Ganashree");
  }

  const numbers = [3, 7, 9, 12, 16, 19];

  // Using find() to get the first even number
  const firstEven = numbers.find((num) => num % 2 === 0);

  const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Use filter to get only even numbers
  const evenNumbers = numbers1.filter((num) => num % 2 === 0);

  console.log(evenNumbers, "EVEN NUMBERS");
  // tostring function to convert value to string//
  let arr = [1, 2, 3, 4, 5];
  let strArr = arr.toString();
  console.log(strArr); // "1,2,3,4"

  let num1 = Number("123");
  console.log(num1); // 123
  console.log(typeof num1);

  let fruits = ["Apple", "Banana", "Cherry", "Mango"];
  fruits.splice(1, 2); // Removes 2 elements starting from index 1
  console.log(fruits); // ["Apple", "Mango"]

  return (
    <div>
      {Gayana > 1000 ? (
        <p> Gayana is Good</p>
      ) : Gayana > 2000 ? (
        <p>Suresh is Good</p>
      ) : Gayana > 4000 ? (
        <p> Gayana is Amazing</p>
      ) : (
        Gayana > 5000 > <p> Gayana is extradorninary</p>
      )}
      {apiData.map((d) => (
        <p>
          {d.Place} - {d.Dist} ={d.Tal}
        </p>
      ))}
    </div>
  );
};

export default Ternary;
