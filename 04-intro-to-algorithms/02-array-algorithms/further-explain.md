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