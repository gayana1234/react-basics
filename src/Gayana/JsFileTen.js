//   for
//   if else if
//   ternary operator
//   map
//   filter
//   splice, slice
//   toLoweCase, uppercase
//   pascal case vs camel case
//   findIndex
//   push and pop
//   includes
//   Conversion ⇒ String to Number, Number to String, Number to Boolean, String to Boolean
//   **logical operators**

import { useEffect } from "react";
import { mulTiply, subTraction } from "./utils";

const JsFileTen = () => {
  useEffect(() => {
    init();
  }, []);
  const age = 11;
  const init = () => {
    console.log("JUST A JS FILE", mulTiply(20), subTraction(30));
    for (let i = 1; i <= 10; i++) {
      i === 5
        ? console.log(i, "This is true statment and ternanry operstor")
        : console.log(i, "This is false statement and ternanry operator");

      if (i === 5) {
        console.log(i, "This is true statment and if else operstor");
      } else {
        console.log(i, "This is false statement and if else operator");
      }

      if (i % 2 === 0) {
        console.log(i + "is divisible by 2");
      } else if (i % 3 === 0) {
        console.log(i + "is divisible by 3");
      } else {
        console.log(i + "is not divisible by 2 or 3");
      }
    }
    const numbers = [1, 2, 3, 4, 5];
    const resultMap = numbers.map((num) => num * 2); //map syntax//
    console.log(resultMap);
    const resultFilter = numbers.filter((num) => num > 2); // filter syntax//
    console.log(resultFilter);

    const arr = [1, 2, 3, 4, 5];
    arr.splice(2, 2);
    console.log(arr);

    const array = [1, 2, 3, 4, 5];
    const sliced = array.slice(2);
    console.log(sliced, "sliced example");

    const userInput = "Hello World";
    const NormalizedInput = userInput.toLowerCase();
    console.log(NormalizedInput);

    const indexpr = [10, 8, 5, 14]; // code using "findindex"//
    const index = indexpr.findIndex((num) => num > 10);
    console.log(index, "show index");

    const text = "JS is Fun"; //code using "includes"//
    console.log(text.includes("Fun"), "Show result");
    console.log(text.includes("Java"), "Show result for includes");

    // logical operator
    // && ||
    const logA = 10;
    const logB = 12;
    const logC = 4;
    const logD = 5;

    // true && true true stmnt
    // false && true false stmnt
    // false && false false stmnt
    // true || true true stmnt
    // true || false true stmnt
    // false || false false stmnt
    //! operator means just opposite

    if (logA > 9 && logB < 15) {
      console.log("TRUE STMNT");
    }

    if (logA > 9 && logB < 10) {
      console.log("False STMNT");
    }

    if (logA > 9 || logB < 10) {
      console.log("True STMNT");
    }

    if ((logA > 9 || logB < 10) && (logC < 1 || logD === 5)) {
      console.log("True STMNT");
    }
  };

  return (
    <div>
      {age >= 18 ? <p>Yes I am an Adult</p> : <p> No I am not an Adult</p>}

      <h1>Hi JS FILE</h1>
    </div>
  );
};

export default JsFileTen;
