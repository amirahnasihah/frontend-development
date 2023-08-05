- [Array Algorithms](#array-algorithms)
  - [Exercises explained](#exercises-explained)
    - [exercise-1.js](#exercise-1js)
    - [exercise-2.js](#exercise-2js)
    - [exercise-3.js](#exercise-3js)
- [Other](#other)
  - [Built-in array methods](#built-in-array-methods)
    - [sort()](#sort)
    - [indexOf(), find()](#indexof-find)
      - [indexOf](#indexof)
      - [find](#find)

# Array Algorithms

## Exercises explained

### exercise-1.js

### exercise-2.js

### exercise-3.js

# Other

## Built-in array methods tips

Here's a simple acronym to remember the definitions and basic functionalities of the built-in array methods in JavaScript:

**S.A.R.F. C.R.R.**

- **S**orting: `sort()` - Sorts the elements of an array.
- **A**ccessing/Search: `indexOf()`, `lastIndexOf()`, `find()`, `findIndex()` - Access or search for elements in an array.
- **R**emoving/Filtering: `filter()` - Removes elements from an array based on a condition.
- **F**orEach/Mapping: `map()` - Applies a function to each element in the array, creating a new array with the results.
- **C**ombining: `concat()` - Combines multiple arrays into a single array.
- **R**educing: `reduce()` - Reduces the elements of an array to a single value.
- **Reversing**: `reverse()` - Reverses the order of elements in an array.

You can try associating each letter of the acronym with the corresponding array method to help you remember their purposes and functionalities easily. For example:

- "S" for `sort()`: Think of arranging elements in a line or sequence.
- "A" for `indexOf()`, `lastIndexOf()`, `find()`, `findIndex()`: Think of searching for elements in an array.
- "R" for `filter()`: Think of removing specific elements from the array based on a condition.
- "F" for `map()`: Think of applying a function to each element to transform them into a new array.
- "C" for `concat()`: Think of combining arrays into a single one.
- "R" for `reduce()`: Think of reducing elements to a single value, like adding them up or finding the maximum/minimum value.
- "Reversing" for `reverse()`: Think of flipping the order of elements in the array.

By creating these associations, you can make it easier to remember the purpose and usage of each array method. Practice using them in various scenarios, and with time, you'll become more comfortable with these powerful tools in JavaScript. Happy coding!

## Built-in array methods

JavaScript offers a variety of built-in array methods that can be used to implement various algorithms efficiently. Here are some common *array algorithms* you can use in JavaScript:

1. Sorting:
   - `sort()`: Sorts the elements of an array in place based on Unicode values by default. You can provide a custom comparison function for more complex sorting.

2. Searching:
   - `indexOf()`: Returns the index of the first occurrence of a specified element in an array.
   - `lastIndexOf()`: Returns the index of the last occurrence of a specified element in an array.
   - `find()`: Returns the value of the first element in the array that satisfies a provided testing function.
   - `findIndex()`: Returns the index of the first element in the array that satisfies a provided testing function.

3. Filtering:
   - `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.

4. Mapping:
   - `map()`: Creates a new array by applying a function to each element of the original array.

5. Reducing:
   - `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.

6. Reversing:
   - `reverse()`: Reverses the order of the elements in an array in place.

7. Concatenation:
   - `concat()`: Returns a new array that combines the elements of two or more arrays.

These are just a few examples, and there are many more array algorithms that you can implement using these methods or by combining them creatively.

The usage of these methods:

1. Sorting:
```javascript
const fruits = ['banana', 'apple', 'orange', 'grapes'];
fruits.sort(); // ['apple', 'banana', 'grapes', 'orange']
```

2. Searching:
```javascript
const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3); // 2
const lastIndex = numbers.lastIndexOf(4); // 3
const foundElement = numbers.find((element) => element > 2); // 3
const foundIndex = numbers.findIndex((element) => element > 2); // 2
```

3. Filtering:
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]
```

4. Mapping:
```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num); // [1, 4, 9, 16, 25]
```

5. Reducing:
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15
```

6. Reversing:
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // [5, 4, 3, 2, 1]
```

7. Concatenation:
```javascript
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];
const combined = numbers.concat(letters); // [1, 2, 3, 'a', 'b', 'c']
```

Remember, if you need the most up-to-date information, you can visit the Mozilla Developer Network (MDN) website for detailed documentation and examples of each method.

### sort()

The `sort()` method in JavaScript is used to sort the elements of an array in place and returns the sorted array. By default, it performs a lexicographic (alphabetical) sort for strings, and a numeric sort for numbers. However, you can provide a custom sorting function to achieve more complex sorting.

Here's the syntax of `sort()`:

```javascript
array.sort([compareFunction])
```

- `compareFunction` (optional): A function that defines the sort order. If omitted, the array is sorted lexicographically (alphabetically) for strings, and numerically for numbers. The function takes two elements as arguments and should return a negative value if the first element should be before the second, a positive value if the first element should be after the second, and zero if they are equal.

Example:

```javascript
const fruits = ['banana', 'apple', 'orange', 'grapes'];

// Sorting lexicographically (alphabetically)
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grapes', 'orange']

// Sorting by string length
fruits.sort((a, b) => a.length - b.length);
console.log(fruits); // ['apple', 'grapes', 'banana', 'orange']

// Sorting numerically
const numbers = [5, 1, 3, 2, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]
```

In the first example, `sort()` sorts the array lexicographically, changing the original array's order. In the second example, a custom sorting function is provided to sort the fruits array based on the length of the strings. Finally, in the third example, a custom sorting function is used to sort the numbers array in ascending order.

### indexOf(), find()

#### indexOf

The `indexOf()` method in JavaScript is used to find the index of the first occurrence of a specified element within an array. If the element is not found in the array, it returns -1.

Here's the syntax of `indexOf()`:

```javascript
array.indexOf(searchElement[, fromIndex])
```

- `searchElement`: The element to search for in the array.
- `fromIndex` (optional): The starting index for the search. If not provided, the search starts from the beginning of the array. If the value is negative, it is treated as counting from the end of the array.

Example:

```javascript
const fruits = ['apple', 'banana', 'orange', 'grapes', 'banana'];

const index1 = fruits.indexOf('banana'); // 1
const index2 = fruits.indexOf('grapes'); // 3
const index3 = fruits.indexOf('kiwi');   // -1 (not found)
```

In this example, `indexOf()` finds the index of the first occurrence of the element 'banana', which is 1. It also finds the index of 'grapes', which is 3. However, it doesn't find 'kiwi', so it returns -1 to indicate that the element is not present in the array.

##### `arr.indexOf(i) === -1` and `arr[i] === -1`

The expression `arr.indexOf(i) === -1` and `arr[i] === -1` have different meanings and purposes:

1. `arr.indexOf(i) === -1`:
   This expression checks whether the value `i` is present in the array `arr`. The `indexOf()` method returns the index of the first occurrence of the specified value in the array. If the value is not found, `indexOf()` returns `-1`. So, `arr.indexOf(i) === -1` checks if the value `i` is NOT present in the array `arr`.

2. `arr[i] === -1`:
   This expression accesses the element at index `i` in the array `arr` and checks if that element is equal to `-1`. It directly compares the element's value with `-1`.

In the context of finding missing numbers in an array, you need to use `arr.indexOf(i) === -1` rather than `arr[i] === -1`. Here's why:

- When finding missing numbers, you are looking for the elements that are not present in the array but are part of a specific range.
- `arr.indexOf(i) === -1` checks if the value `i` is not present in the array `arr`, meaning `i` is a missing number.
- On the other hand, `arr[i] === -1` would check if the element at index `i` in the array is equal to `-1`, which is not what you want in this case. The array doesn't contain `-1`, and this comparison would not give you the correct result for finding missing numbers.

To summarize, you use `arr.indexOf(i) === -1` to check if the value `i` is missing from the array `arr` and is part of the desired range. This condition helps you identify and collect the missing numbers correctly.

#### find

The `find()` method in JavaScript is used to search for the first element in an array that satisfies a given condition. It returns the value of the first element found, or `undefined` if no element matches the condition.

Here's the syntax of `find()`:

```javascript
array.find(callback(element[, index[, array]])[, thisArg])
```

- `callback`: A function that is called for each element in the array. It takes three arguments: `element` (the current element being processed), `index` (optional, the index of the current element), and `array` (optional, the array on which `find` was called).

- `thisArg` (optional): A value to use as `this` when executing the callback function.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((element) => element > 2);
console.log(foundNumber); // 3
```

In this example, the `find()` method is used to find the first element in the `numbers` array that is greater than 2. It finds 3 as the first element that satisfies the condition, so it returns 3.

If no element satisfies the condition, the `find()` method returns `undefined`. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((element) => element > 10);
console.log(foundNumber); // undefined
```

Here, since there is no element greater than 10 in the `numbers` array, `find()` returns `undefined`.

## this for(let i = 1; i < arr.length; i++) which i = 1 or in another for loop where i = 0, is it refer tu index of element? or refer to a number?

In the `for` loop you provided:

```javascript
for (let i = 1; i < arr.length; i++)
```

The variable `i` is used as an index to access elements in the `arr` array. The loop starts with `i = 1`, which means it will skip the first element of the array (at index 0) and begin iteration from the second element (at index 1). The loop continues as long as `i` is less than the length of the array (`arr.length`), and in each iteration, `i` is incremented by 1 (`i++`).

If you want to start the loop with `i = 0` to include the first element of the array (at index 0), you should change the loop to:

```javascript
for (let i = 0; i < arr.length; i++)
```

This will include the element at index 0 in the loop iterations. The choice of starting the loop at `i = 0` or `i = 1` depends on whether you want to include or exclude the first element of the array in your loop operations.

For example, if you want to perform an operation on all elements of the array, including the first element, you would use `i = 0` as the starting value. However, if you want to skip the first element and start from the second element, you would use `i = 1` as the starting value.

## exercise-1.js - Multiple ways Finding Missing Numbers (sorted array)

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

### If not to use a function (with issues!)

If you prefer not to use a function and want to keep using your approach to find the missing numbers, you can still do that. Just be mindful of the potential issues I mentioned earlier, such as variable scope and code reusability.

Here's how you can use your approach without using a function:

```javascript
const arr = [3, 7, 1];

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

console.log("Missing numbers:", tempResultArray);
```

When using this code directly, you should be cautious about the variables' scope, especially if you plan to use them elsewhere in your code. Additionally, without a function, you'll need to copy and paste this code block wherever you want to find missing numbers, which can lead to code duplication and maintenance challenges.

Remember that using a function allows you to encapsulate this logic and reuse it wherever you need to find missing numbers in a sorted array. It promotes a more modular and organized approach to your codebase. If you ever need to modify the logic in the future, you only need to update the function rather than searching for every instance of this code block in your code.

## Finding Missing Numbers (unsorted array + duplicate numbers)

> Why we have to sort first as the first step in algorithm and then create a temp variable array? why cannot create temp variable array first?

Sorting the array first and then creating a temporary result array is not the only approach to find duplicate numbers in an unsorted integer array, but it is an efficient one. Let's explore the reasons behind this choice:

1. **Efficiency**: Sorting the array allows us to group duplicate numbers together, making it easier to identify them. By comparing adjacent elements, we can quickly find duplicates without unnecessary iterations. It reduces the time complexity of the algorithm.

2. **Grouping**: After sorting, duplicate numbers will be adjacent to each other. This grouping simplifies the process of identifying and collecting duplicate numbers in the temporary result array.

3. **Simplicity**: Comparing adjacent elements in a sorted array is straightforward and easy to implement. We only need a single loop to check for duplicates, resulting in simpler code.

4. **Clarity**: Sorting the array clarifies the logic by bringing the duplicates together. The code becomes more readable and understandable.

However, if you prefer to create a temporary result array first and then iterate through the original array to check for duplicates, you can certainly do so. This approach will have a time complexity of O(n^2) since you'll need nested loops to compare every element with all other elements.

Here's an alternative algorithm without sorting:

1. Create an empty temporary result array.
2. Use a for loop to go through each number in the original array.
3. For each number, check if it already exists in the temporary result array.
4. If it does not exist, add it to the temporary result array.
5. If it already exists, it is a duplicate, and you can skip adding it to the temporary result array.
6. Return the temporary array as the result.

However, keep in mind that this approach is less efficient than sorting and may not be suitable for very large arrays due to its higher time complexity. Sorting first and then finding duplicates is generally a more optimized approach in terms of time complexity.