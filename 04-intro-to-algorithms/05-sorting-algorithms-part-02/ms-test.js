/*
splice(startIndex, deleteCount, ...addTo) will create new array from fruits, and fruits array will be modified.
*/

const fruits = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"]

const half = Math.floor(fruits.length / 2)
const spliced = fruits.splice(0, half) // output: cherry, strawberry, apple

console.log("half:", half)
console.