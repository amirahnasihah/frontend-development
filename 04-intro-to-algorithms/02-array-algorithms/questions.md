# Array Algorithm Problems in JS

## Finding Missing Numbers (sorted array - 2 ways)

To find the missing numbers in a sorted array. Let's break down the steps to accomplish this task:

```javascript
function findMissingNumbers(arr) {
  // Step 1: Find the range (min and max) of the array
  const min = arr[0];
  const max = arr[arr.length - 1];
  
  // Step 2: Check for missing numbers and store them in a temp array
  const missingNumbers = [];
  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }
  
  // Step 3: Print the result
  console.log("Missing numbers:", missingNumbers);
}

// Example usage:
const sortedArray = [3, 5, 6, 8, 10];
findMissingNumbers(sortedArray);
```

Explanation:
1. In Step 1, we find the minimum value (`min`) from the first element of the sorted array and the maximum value (`max`) from the last element of the sorted array.

2. In Step 2, we loop from `min` to `max` and check if each number exists in the original `arr`. If it doesn't exist, we consider it as a missing number and push it into the `missingNumbers` array.

3. In Step 3, we simply print the `missingNumbers` array as the result.

Make sure the input array `arr` is sorted for this approach to work correctly. This code will find the missing numbers in the sorted array and print them as output.