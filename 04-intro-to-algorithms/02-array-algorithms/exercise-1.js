const assert = require("assert");

// Task: Complete the function that takes in an array and the missing numbers for a complete number sequence
// E.g. input = [3, 7, 1], output should be [2, 4, 5, 6]

const findMissingNumber = (arr) => {
  // Add your code here
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  const missingNums = [];

  for (let i = minNum + 1; i < maxNum; i++) {
    if (!arr.includes(i)) {
      missingNums.push(i);
    }
  }

  return missingNums;
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
