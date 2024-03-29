fruits = ['banana', 'guava', 'apple', 'apple', 'apple', 'orange', 'grapes', 'grapes']

console.log(fruits.indexOf("apple")) // 2
console.log(fruits.indexOf("mangosteen")) // -1, not exist

console.log(fruits[5]) // orange
console.log(fruits[5 + 1]) // grapes
console.log(fruits[8]) // undefined

console.log(fruits.indexOf(fruits[8])) // -1
console.log(fruits.indexOf(fruits[6])) // 6, it gives index

fruits.sort();
console.log(fruits);
// [ 'apple', 'apple', 'apple', 'banana', 'grapes', 'grapes', 'guava', 'orange' ]

// Find Duplicate Number with unsorted array
arr = [2, 3, 3, 7, 9, 2]
sortedArr = arr.sort()
console.log(sortedArr);

let tempResultArray = []
for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        tempResultArray.push(sortedArr[i])
    }
}
console.log(tempResultArray)

// Find Pair Numbers that added to target sum


function findPairNumber(inputArr, targetSum) {

	// first loop
	for (let i = 0; i < inputArr.length; i++) {
		// second loop
		for (let j = i + 1; j < inputArr.length; j++) {
			if (inputArr[i] + inputArr[j] === targetSum) {
				console.log("pair numbers:", inputArr[i] + ", " + inputArr[j])
				// push to pairs array
				
			}
		}
	}
	// dont forget to return
	
}

let inputArr = [2, 3, 7, 9, 2]
let targetSum = 10

let pairs = findPairNumber(inputArr, targetSum)
console.log(pairs)

// QUESTION: Given a list of numbers, find two numbers that sum up to a given target and return the product of these numbers.

list = [1721, 979, 366, 299, 756, 1456]
target = 2020

let twoNum = []

for (let i = 0; i < list.length; i++) {
	// second loop + avoid duplicate output (unique result)
	for (let j = i + 1; list.length; j++) {
		if (list[i] + list[j] === target) {
			console.log("Answer:", list[i] + "," + list[j])
			// twoNum.push(list[i], list[j])
		}
	}
}

// output: 1731, 299