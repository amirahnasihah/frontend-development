- [Array Algorithm Problems in JS](#array-algorithm-problems-in-js)
  - [Finding Missing Numbers (sorted array - 2 ways)](#finding-missing-numbers-sorted-array---2-ways)
    - [sorted array with two loops using `indexOf`](#sorted-array-with-two-loops-using-indexof)
    - [sorted array with single loop using `includes`](#sorted-array-with-single-loop-using-includes)
      - [Practice Find Missing Numbers](#practice-find-missing-numbers)
      - [Practice Finding Duplicate Number](#practice-finding-duplicate-number)
      - [Practice Finding Number Pairs](#practice-finding-number-pairs)

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

#### Practice Find Missing Numbers

Techniques used:

1. Find range of array (min + max)
2. Used temporary variables
3. Looping twice
4. Push into array temporary variables 

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

Sure, let's go through your code step by step and understand how it works to find the missing numbers in the consecutive range.

1. Finding the minimum and maximum values in the array:
   Your first loop iterates through the array and updates the variables 'min' and 'max' to store the minimum and maximum values, respectively, present in the array. In this case, 'min' becomes 1, and 'max' becomes 7.

2. Explaining the second loop:
   The second loop starts with 'i' being equal to 'min' (which is 1) and continues until 'i' is less than or equal to 'max' (which is 7). This loop aims to find the missing numbers in the range from 'min' to 'max'.

3. Finding the missing numbers:
   Inside the second loop, the code checks if the current value of 'i' exists in the 'arr' using the 'indexOf' method. If 'i' is not found in 'arr', it means 'i' is a missing number, and it gets pushed into the 'tempArr' array.

Now, let's see the missing numbers in the range [1, 7] based on the 'arr' you provided [3, 7, 1]:

1. The minimum value in 'arr' is 1, and the maximum value is 7. So, the range is [1, 7].
2. Looping through the range [1, 7]:
   - When 'i' is 1, it exists in 'arr', so it's not a missing number.
   - When 'i' is 2, it doesn't exist in 'arr', so it's a missing number and gets pushed into 'tempArr'.
   - When 'i' is 3, it exists in 'arr', so it's not a missing number.
   - When 'i' is 4, it doesn't exist in 'arr', so it's a missing number and gets pushed into 'tempArr'.
   - When 'i' is 5, it doesn't exist in 'arr', so it's a missing number and gets pushed into 'tempArr'.
   - When 'i' is 6, it doesn't exist in 'arr', so it's a missing number and gets pushed into 'tempArr'.
   - When 'i' is 7, it exists in 'arr', so it's not a missing number.

The 'tempArr' will now contain the missing numbers [2, 4, 5, 6]. So, when you log 'tempArr', it will display:

```
[2, 4, 5, 6]
```

These are the missing numbers that need to be added to the 'arr' to make it a consecutive range without any duplicates.

#### Practice Finding Duplicate Number

You have an unsorted integer array (with duplicate number). In order to find these duplicate number, what will you do?

Example Algorithm:

1. Sort the array first.
2. Create a temporary result array.
3. Use a for loop to go through each number in the sorted array. Compare each number the the number next to it.
4. If the next number is same as the number, then add it to the temporary result array.
5. Return the temporary array as result.

```javascript
// Sort the Array
arr = [2, 3, 3, 7, 9, 2]
sortedArr = arr.sort()

// Check for Duplicating Numbers
let tempResultArray = []
for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        tempResultArray.push(sortedArr[i])
    }
}
console.log(tempResultArray) // Output: [2, 3, 3]


// Avoid Duplicating Results
let tempResultArray = []

for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        if (tempResultArray.indexOf(sortedArr[i]) === -1){
            tempResultArray.push(sortedArr[i])
        }
    }
}

console.log(tempResultArray) // Output: [2, 3]
```

The final output is the `tempResultArray` containing all the unique duplicate numbers found in the `sortedArr` array.

Sure, let's go through your code to find the duplicate numbers in the unsorted array.

Your approach seems mostly correct, but there are a couple of issues in your code:

1. Sorting the array:
   You are sorting the original array using `arr.sort()`, which sorts the elements in lexicographic (alphabetical) order by default. For numeric sorting, you need to provide a comparison function. You can fix this by using `arr.sort((a, b) => a - b)`.

2. Explaining the loop condition and condition inside the loop:
   - `i < sortedArr.length - 1`: This condition ensures that the loop runs until the second-to-last element of the sorted array. Since we compare each element with the next one, there's no need to go beyond the last element.
   - `(sortedArr[i] === sortedArr[i + 1])`: This checks if the current element is equal to the next element. If they are equal, it means we found a duplicate.

Let's see how your code should look after the necessary corrections:

```javascript
// Unsorted array with duplicate numbers
arr = [2, 3, 3, 7, 2, 9, 2]

// Sorting the array in ascending order
sortedArr = arr.sort((a, b) => a - b); // [2, 2, 2, 3, 3, 7, 9]

// Array to store the duplicate numbers
let tempResult = [];

// Loop through the sorted array to find duplicates
for (let i = 0; i < sortedArr.length - 1; i++) {
  if (sortedArr[i] === sortedArr[i + 1]) {
    // If the current element is equal to the next element, it's a duplicate
    tempResult.push(sortedArr[i]);
  }
}

console.log(tempResult);
```

Now, let's find the duplicate numbers in the `arr`:

1. Sorting the array: `[2, 3, 3, 7, 2, 9, 2]` becomes `[2, 2, 2, 3, 3, 7, 9]`.
2. Looping through the sorted array:
   - When `i = 0`, it compares `2` with `2` (next element). They are equal, so `2` is a duplicate and gets pushed into `tempResult`.
   - When `i = 1`, it compares `2` with `2` (next element). They are equal, so `2` is a duplicate and gets pushed into `tempResult`.
   - When `i = 2`, it compares `2` with `3` (next element). They are not equal.
   - When `i = 3`, it compares `3` with `3` (next element). They are equal, so `3` is a duplicate and gets pushed into `tempResult`.
   - When `i = 4`, it compares `3` with `7` (next element). They are not equal.
   - When `i = 5`, it compares `7` with `9` (next element). They are not equal.

The `tempResult` will now contain the duplicate numbers `[2, 3]`. So, when you log `tempResult`, it will display:

```
[2, 3]
```

These are the duplicate numbers present in the unsorted array.

> What if not put `-1` inside the `(i < sortedArr.length - 1)`

If you forget to include `- 1` inside the loop condition `i < sortedArr.length - 1`, the loop will run until the last element of the sorted array. This means the loop will compare the last element with the element after it (which is out of bounds since there is no element after the last one).

Let's consider the same example array `[2, 2, 2, 3, 3, 7, 9]`:

Without `- 1` in the loop condition:
- When `i = 5`, it compares `7` with `9` (next element). Since there's no next element (index 6), it will produce an error, and the code may crash.

By including `- 1` in the loop condition:
- When `i = 5`, it compares `7` with `9` (next element). Since `i` reaches the second-to-last element (index 5), the loop stops without causing any errors.

Adding `- 1` in the loop condition is essential to ensure you don't access an out-of-bounds element and to prevent potential errors in your code. Always be cautious with loop conditions to avoid issues related to array indices.

> More about this condition `sortedArr[i] === sortedArr[i + 1]`

Certainly! Let's explain the `if` condition `sortedArr[i] === sortedArr[i + 1]` in simple plain English:

This `if` condition is checking whether the current element in the sorted array is equal to the next element in the sorted array.

- `sortedArr[i]`: This represents the current element at the index `i` in the sorted array.
- `sortedArr[i + 1]`: This represents the next element after the current element, at index `i + 1` in the sorted array.

So, the `if` statement is comparing the value of the current element with the value of the next element. If they are the same (equal), it means we have found a duplicate number.

For example, consider the sorted array `[2, 2, 2, 3, 3, 7, 9]`:

- When `i = 0`, the current element is `2`, and the next element (at `i + 1`) is also `2`. Since they are the same, this means we have found a duplicate number, which is `2`.
- When `i = 1`, the current element is `2`, and the next element (at `i + 1`) is also `2`. Again, they are the same, and we have another duplicate `2`.
- When `i = 2`, the current element is `2`, but the next element (at `i + 1`) is `3`. They are not the same, so it's not a duplicate.
- When `i = 3`, the current element is `3`, and the next element (at `i + 1`) is also `3`. Once again, they are the same, and we have a duplicate `3`.
- The loop continues, and it will also find the duplicate `3` and the non-duplicate elements `7` and `9`.

In summary, the `if` condition is a simple way to identify duplicate numbers in the sorted array by comparing each element with the next one.

**recap**

> array are `fruits = ['banana', 'guava', 'apple', 'apple', 'apple', 'orange', 'grapes', 'grapes'];`

Here's a summary of previous points with some minor clarifications:

1. `fruits[i]` represents the element/value at index `i` in the array 'fruits'. For example, `fruits[0]` would give you 'banana', `fruits[3]` would give you 'apple', and so on.

2. `fruits[i + 1]` represents the element/value at the index obtained by adding 1 to the current index `i`. For example, if `i` is 1, then `fruits[i + 1]` would give you 'guava', which is at index 2.

3. `fruits.indexOf("apple")` finds the first index where the element/value 'apple' occurs in the 'fruits' array. If there are multiple occurrences of 'apple', `indexOf()` returns the index of the first occurrence. For example, since 'apple' first occurs at index 2, `fruits.indexOf("apple")` would return 2.

4. When finding missing numbers, you are indeed looking for elements that are not present in the array but are expected to be part of a specific range.

5. `arr.indexOf(i) === -1` checks if the value `i` is not present in the array 'arr', which implies `i` is a missing number. If the value is not found, `indexOf()` returns -1, so `arr.indexOf(i) === -1` checks if the value `i` is NOT present in the array 'arr'.

6. `if (tempResultArray.indexOf(sortedArr[i]) === -1)`: Checks if the current duplicate number has already been added to the `tempResultArray`. If the index of the current duplicate number is `-1`, that means it hasn't been added yet.

7. `fruits.indexOf(fruits[8])`

Sure! Let's explain the two lines of code in simple plain English for beginners:

> `fruits[8]` and `fruits.indexOf(fruits[8])`

1. `console.log(fruits[8])`:

   - This line of code prints something to the console, which is a window in your browser or a terminal where you can see messages or output from your code.
   - `fruits[8]` means accessing the element at index 8 in the 'fruits' array. In other words, it gets the value that is stored in the 'fruits' array at position 8.
   - Arrays are like numbered lists, and they start counting from 0. So, if you see `fruits[8]`, it means you are getting the value at the 9th position (since the index starts from 0) in the 'fruits' array.
   - If the 'fruits' array contains `['banana', 'guava', 'apple', 'apple', 'apple', 'orange', 'grapes', 'grapes']`, then `console.log(fruits[8])` will print 'grapes', because 'grapes' is at the 9th position in the array.

2. `console.log(fruits.indexOf(fruits[8]))`:

   - This line of code is also printing something to the console.
   - `fruits[8]` is getting the value at index 8 in the 'fruits' array, which is 'grapes', as we discussed earlier.
   - Now, `fruits.indexOf(fruits[8])` takes that value ('grapes') and looks for its first occurrence in the 'fruits' array.
   - The `indexOf()` method returns the index of the first occurrence of the specified value in the array.
   - In this case, 'grapes' first occurs at index 6 in the 'fruits' array. So, `console.log(fruits.indexOf(fruits[8]))` will print 6, which is the index of 'grapes' in the 'fruits' array.

In summary, `console.log(fruits[8])` prints the value at the 9th position in the 'fruits' array, which is 'grapes', and `console.log(fruits.indexOf(fruits[8]))` prints the index of the first occurrence of 'grapes' in the 'fruits' array, which is 6.

> if element in array not exists

1. `console.log(fruits[8])`

   - However, the 'fruits' array has only 8 elements, and arrays are zero-indexed, meaning the last valid index in this case is 7 (not 8).
   - Since there is no element at index 8 in the 'fruits' array, trying to access it will result in `undefined`.
   - The output of `console.log(fruits[8])` will be `undefined`.

2. `console.log(fruits.indexOf(fruits[8]))`

   - The code first evaluates `fruits[8]`, which as we discussed earlier, returns `undefined`.
   - Now, the `indexOf()` method looks for the first occurrence of `undefined` in the 'fruits' array.
   - Since `undefined` is not found in the array, the `indexOf()` method returns `-1`.
   - The output of `console.log(fruits.indexOf(fruits[8]))` will be `-1`.

In conclusion:

1. `console.log(fruits[8])` prints `undefined` because there is no element at index 8 in the 'fruits' array.
2. `console.log(fruits.indexOf(fruits[8]))` prints `-1` because the `indexOf()` method could not find `undefined` in the 'fruits' array.

#### Practice Finding Number Pairs

Your approach is on the right track, but there are a couple of issues with your current implementation. The return statement inside the inner loop will return the first pair that sums up to the target, but it won't find all pairs that satisfy the condition. Additionally, you should make sure that the two elements in a pair are not the same element, as the question asks for pairs with distinct integers.

To find all pairs of integers in the array that sum up to the given target, you can modify your code as follows:

```javascript
function findPairsWithSum(arr, targetSum) {
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

const arr = [2, 3, 7, 9, 2];
const targetSum = 10;
const pairs = findPairsWithSum(arr, targetSum);
console.log(pairs);
```

Now, when you call `findPairsWithSum(arr, targetSum)`, it will return an array containing all the pairs whose elements sum up to the target value. Keep in mind that this approach has a time complexity of O(n^2), which means it might not be the most efficient solution for large arrays. There are more optimized algorithms available for solving this problem, such as using a hash table or a two-pointer approach.