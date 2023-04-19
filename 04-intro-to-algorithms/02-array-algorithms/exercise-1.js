const assert = require("assert");

// Task: Complete the function that takes in an array and the missing numbers for a complete number sequence
// E.g. input = [3, 7, 1], output should be [2, 4, 5, 6]

const findMissingNumber = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  let tempResultArray = [];

  for (let i = min; i <= max; i++) {
    if (arr.indexOf(i) === -1) {
      tempResultArray.push(i);
    }
  }

  return tempResultArray;
};

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(
  findMissingNumber([3, 7, 1]),
  [2, 4, 5, 6],
  "Test case 1 output is wrong."
);
assert.deepStrictEqual(
  findMissingNumber([2, 8, 0]),
  [1, 3, 4, 5, 6, 7],
  "Test case 2 output is wrong."
);
assert.deepStrictEqual(
  findMissingNumber([1, 2]),
  [],
  "Test case 3 output is wrong."
);
console.log("All test cases passed.");
