/*
splice(startIndex, deleteCount, ...addTo) will create new array from fruits, and fruits array will be modified.
*/

const fruits = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"]

const half = Math.floor(fruits.length / 2)
const spliced = fruits.splice(0, half)

console.log("half:", half) // output: 3
console.log("splice:", spliced) // output: cherry, strawberry, apple
console.log("fruits:", fruits) // output: [ 'banana', 'orange', 'pear', 'grape' ]

/*
Recursive - divide and keep divide
*/

function mergeSort(inputList) {
	if 
}

const part1 = mergeSort([8, 3, 2, 4, 9, 0, 1])
console.log("")