/*
For more complex sorting, you can customize the comparison function. If you need to sort objects based on a specific property, like sorting an array of objects by their ages:

*/

const people = [
  { name: "Alice", age: 30 },
  { name: "Dob", age: 25 },
  { name: "Beve", age: 35 },
];

people.sort((a, b) => a.name.localeCompare(b.name));
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

/*
Bubble Sort Algorithm
*/

const arr = [14, 33, 28, 40, 10]

// -1 use in variable
end = arr.length - 1
console.log(end) // Out

// -1 use directly inside loop
for (let i = 0; i < arr.length - 1; i++) {
  // existing code here
}