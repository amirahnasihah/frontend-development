# Array Algorithm Problems in JS

## Finding Missing Numbers (sorted array - 2 ways)

> by single loop (includes) and by 2 loops (indexOf)

### sorted array with two loops using `indexOf`

The code you provided is a different approach to find the missing numbers in a sorted array. While it can work, there are a few issues that need to be addressed:

1. **Initialization of `min` and `max`:** You are setting both `min` and `max` to the first element of the array, which means they will have the same value. Instead, you should initialize `min` and `max` to the first and last elements of the array, respectively, to get the correct range.

2. **Range Loop:** The second loop using `for (let i = min; i <= max; i++)` will not work correctly because the `min` and `max` values are not updated when the array is not sorted in ascending order. It will only find the missing numbers in the range from the minimum to the maximum elements present in the array.

```javascript
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

// Example usage:
const sortedArray = [3, 5, 6, 8, 10];
const missingNumbers = findMissingNumber(sortedArray);
console.log("Missing numbers:", missingNumbers);

```

With this corrected version, the code will find the missing numbers in the sorted array and store them in the `tempArray`, which will be printed as output. However, keep in mind that this approach has a time complexity of O(n^2) due to the nested loop (`indexOf` inside a loop), making it less efficient for larger arrays. If you have a sorted array, the previous approach using `for (let i = 0; i < arr.length - 1; i++)` and checking adjacent elements would have a better time complexity of O(n).

### sorted array with single loop using `includes`

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