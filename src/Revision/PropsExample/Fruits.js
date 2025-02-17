const Fruits = () => {
  const Fruits = ["Apple", "Banana", "Mango", "Kiwi"];
  //find//
  const numbers = [1, 2, 3, 4, 5, 6];
  const firstEven = numbers.find((num) => num % 2 == 0);
  console.log(firstEven);

  //filter//
  const people = [
    { name: "Alice", age: 24 },
    { name: "Gayana", age: 27 },
    { name: "Suresh", age: 27 },
    { name: "Kavya", age: 30 },
  ];

  const morethan25 = people.filter((person) => person.age > 25);
  console.log(morethan25);

  return (
    <div>
      {Fruits.map((Fruits, index) => (
        <li key={index}>{Fruits}</li>
      ))}
    </div>
  );
};

export default Fruits;
