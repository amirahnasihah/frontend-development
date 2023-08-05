# Array Algorithm Problems in JS

## Finding Missing Numbers (sorted array - 2 ways)

> by single loop (includes) and by 2 loops (indexOf)

### sorted array with two loops using `indexOf`

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

Let's break down the `findMissingNumber` function step by step for better understanding:

1. `let max = arr[0];` and `let min = arr[0];`: These lines initialize two variables, `max` and `min`, to the first element of the input array `arr`. The goal is to find the maximum and minimum values in the array.

2. `for (let i = 1; i < arr.length; i++) { ... }`: This loop iterates through the input array `arr` starting from the second element (i.e., index 1) because we have already set `max` and `min` to the first element. It goes through each element of the array and updates `max` if the current element is greater than the current value of `max`, and updates `min` if the current element is smaller than the current value of `min`. At the end of this loop, `max` will store the maximum value in the array, and `min` will store the minimum value.

3. `let tempResultArray = [];`: This line creates an empty array called `tempResultArray` to store the missing numbers.

4. `for (let i = min; i <= max; i++) { ... }`: This loop starts from the minimum value `min` and goes up to the maximum value `max`. It checks each number in this range to see if it exists in the input array `arr`. If a number is not found in `arr` (i.e., `arr.indexOf(i)` returns -1), it means it is a missing number, and it is pushed into the `tempResultArray`.

5. Finally, `return tempResultArray;`: The function returns the `tempResultArray`, which contains all the missing numbers found during the second loop.

In summary, the function first finds the minimum and maximum values in the input array to define the range. Then, it loops through this range and checks which numbers are missing in the input array. The missing numbers are collected in `tempResultArray`, which is then returned as the result.

Remember, this function assumes that the input array `arr` is sorted for it to work correctly and find the missing numbers in a sorted array efficiently.

However, keep in mind that this approach has a time complexity of O(n^2) due to the nested loop (`indexOf` inside a loop), making it less efficient for larger arrays. If you have a sorted array, the previous approach using `for (let i = 0; i < arr.length - 1; i++)` and checking adjacent elements would have a better time complexity of O(n).

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

#### practice find missing numbers

i am doing practices of javascript array algorithm

question: have an unsorted integer array (without duplicate number) and some numbers are missing in this array. In order to make the array consecutive. How do you find that missing number?

`arr  = [3, 7, 1]`

my answer:
1. find range of array
2. two loop

```
function findNumber(arr) {
let min = arr[0]
let max = arr[0]

// start loop or find elements at second index
for (let i = 1; i < arr.length; i++) {
      // first want to look the min of array
     if (arr[i] < min) { 
        // condition: if current element, 7 < min 3 -> false = skip to next loop | new current, 1 < min 3 -> true = min is 1
       min = arr[i]
       }
      // second want to look the max of array
      if (arr[i] > max) {
          // condition: if current element, 7 < min 3 -> true = max is 7
          max = arr[i]
       }
    }

console.log("min", min)
console.log("max", max)

    // after finish find range, what is the missing number? -> temp var to store missing number
    let tempArr = []

  // explain this part to me: (let i = min; i <= max; i++ )
    for (let i = min; i <= max; i++ ) {
        if (arr.indexOf(i) === -1) {
            tempArr.push(i)
        }
     }

}
console.log(tempArr)
```