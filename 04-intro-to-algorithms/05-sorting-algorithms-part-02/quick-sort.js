const assert = require('assert');

// Task: Complete the function partition() and quickSort() that the quickSort() function would sort the input array
// The quickSort() function should sort the input array in-place
// You don't need to return the result array, just make changes directly in the input array
// The partition() function is a function that is used by quickSort() function
// You would want to use recursion for this
// You should use quick sort algorithm for this exercise

const partition = (arr, minIndex, maxIndex) => {

}

const quickSort = (arr, minIndex, maxIndex) => {

}

// DO NOT MODIFY CODE BELOW
// Test Cases
arr1 = [6, 4, 2, 3, 11]
quickSort(arr1, 0, arr1.length-1)
assert.deepStrictEqual(arr1, [2, 3, 4, 6, 11], "Test case 1 output is wrong.")

arr2 = [8, 7, 6, 5, 4, 3, 2, 1]
quickSort(arr2, 0, arr2.length-1)
assert.deepStrictEqual(arr2, [1, 2, 3, 4, 5, 6, 7, 8], "Test case 1 output is wrong.")

console.log("All test cases passed.")