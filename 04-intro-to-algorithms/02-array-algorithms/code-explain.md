# Array Algorithms

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

### indexOf(), in