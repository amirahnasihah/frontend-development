const assert = require("assert");

// Task: Complete the function that takes in an array and return a list of duplicating numbers
// E.g. input array = [7, 2, 2, 3, 3, 9], output should be [2, 3]

const findDuplicateNumbers = (arr) => {
  // Add your code here
  const sortedArr = arr.sort()
  let tempResultArray = []

  for(let i = 0; i < sortedArr.length - 1; i++) {
    if(sortedArr[i] === sortedArr[i + 1]) {
      if(tempResultArray.indexOf(sortedArr[i]) === -1) {
        tempResultArray.push(sortedArr[i])
      }
    }
  }
  return tempResultArray;
}

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(
  findDuplicateNumbers([1, 3, 5, 7, 9, 9]),
  [9],
  "Test case 1 output is wrong."
);
assert.deepStrictEqual(
  findDuplicateNumbers([2, 4, 4, 1, 1, 8, 9]).sort(),
  [1, 4],
  "Test case 2 output is wrong."
);
assert.deepStrictEqual(
  findDuplicateNumbers([1, 2, 3, 4, 5]),
  [],
  "Test case 3 output is wrong."
);
console.log("All Tests Passed.");
