/*
For more complex sorting, you can customize the comparison function. If you need to sort objects based on a specific property, like sorting an array of objects by their ages:

*/

const people = [
  { name: "Alice", age: 30 },
  { name: "Dob", age: 25 },
  { name: "Beve", age: 35 },
];

people.sort((a, b) => a.name - b.name);
console.log(people);

/*
// by age
[
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Eve', age: 35 }
]

// by name

*/