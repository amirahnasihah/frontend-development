const assert = require("assert");

// Task: Complete the function that takes in an array and
// return 2D-array of number pairs that would add up to the target sum
// Example 1: input array = [7, 2, 3, 9], target sum = 10,
// It should return [[7, 3]]
// Example 2: input array = [7, 2, 3, 9, 1], target sum = 10,
// It should return [[7, 3], [9, 1]]

const findPairs = (arr, targetSum) => {
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === targetSum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
};

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.deepStrictEqual(
  findPairs([7, 2, 3, 9, 1], 10).sort(),
  [
    [7, 3],
    [9, 1],
  ],
  "Test case 1 output is wrong."
);
assert.deepStrictEqual(
  findPairs([2, 4, 1, 8, 9], 2).sort(),
  [],
  "Test case 2 output is wrong."
);
assert.deepStrictEqual(
  findPairs([7, 2, 3, 9], 10),
  [[7, 3]],
  "Test case 3 output is wrong."
);
console.log("All Tests Passed.");
