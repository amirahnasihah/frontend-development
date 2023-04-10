const assert = require('assert');

// Task: Complete the function binarySearch() that search for an target in the input array
// Return the found position if found
// Return the -1 if not found

const binarySearch = (arr, target) => {
  // Add your code here

}

// DO NOT MODIFY CODE BELOW
// Test Cases
const inputArray = [1, 2, 4, 6, 7, 9, 10, 11, 13]

assert.strictEqual(binarySearch(inputArray, 3), -1, "Test case 1 output is wrong.")
assert.strictEqual(binarySearch(inputArray, 1), 0, "Test case 2 output is wrong.")
assert.strictEqual(binarySearch(inputArray, 4), 2, "Test case 3 output is wrong.")
assert.strictEqual(binarySearch(inputArray, 7), 4, "Test case 4 output is wrong.")
assert.strictEqual(binarySearch(inputArray, 10), 6, "Test case 5 output is wrong.")
assert.strictEqual(binarySearch(inputArray, 13), 8, "Test case 6 output is wrong.")
console.log("All test cases passed.")