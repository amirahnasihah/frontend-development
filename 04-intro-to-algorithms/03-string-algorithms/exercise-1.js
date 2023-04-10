const assert = require('assert');

// Task: Complete the function that takes in a string and a target string
// If the target string could be found, return the position that it was found
// If the target string could not be found, return -1
// You only need to return the position of the first occurence of the substring
// Example 1: inputString = "Hello", target = lo, 
// It should return 3
// Example 2: inputString = "banana", target = an, 
// It should return 1
// Example 3: input array = "Hello", target = go,
// It should return -1

const findSubstring = (inputString, targetString) => {
    // Add your code here
    
}

// DO NOT MODIFY CODE BELOW
// Test Cases
assert.strictEqual(findSubstring("Hello", "lo"), 3, "Test case 1 output is wrong.")
assert.strictEqual(findSubstring("Hello", "go"), -1, "Test case 2 output is wrong.")
assert.strictEqual(findSubstring("banana", "an"), 1, "Test case 3 output is wrong.")
console.log("All Tests Passed.")



