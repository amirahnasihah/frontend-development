- [Brute Force Algorithm Problems in JS](#brute-force-algorithm-problems-in-js)
    - [Pseudocode](#pseudocode)
  - [1. Given a list of numbers, find two numbers that sum up to a given target and return the product of these numbers.](#1-given-a-list-of-numbers-find-two-numbers-that-sum-up-to-a-given-target-and-return-the-product-of-these-numbers)
  - [2. Finding the sum of all elements in an array](#2-finding-the-sum-of-all-elements-in-an-array)
  - [`for...of` - Two arrays and want to find pairs of elements, one from each array, whose sum matches a given target value](#forof---two-arrays-and-want-to-find-pairs-of-elements-one-from-each-array-whose-sum-matches-a-given-target-value)
  - [`for` loop w/ index - Two arrays and want to find pairs of elements, one from each array, whose sum matches a given target value](#for-loop-w-index---two-arrays-and-want-to-find-pairs-of-elements-one-from-each-array-whose-sum-matches-a-given-target-value)
- [Recursive Problems in JS](#recursive-problems-in-js)

# Brute Force Algorithm Problems in JS

### Pseudocode

Pseudocode example #1:

```
Repeat, starting at the first element:
    If the element is the target element, stop
    Else, move to the next element
```

Pseudocode example #2:

```
For i from 0 to n–1
    If i'th element is target_element
        Return true
Return false
```

## 1. Given a list of numbers, find two numbers that sum up to a given target and return the product of these numbers.

**Question**: Taking a Christmas vacation to a nice resort on a tropical island and you need to get 50 stars by Christmas day as a savings for your vacation. For day one, which this problem is about, you are required to [find the two entries that sums up to 2020 and then multiply those two numbers together](https://adventofcode.com/2020/day/1).

Some things to consider before solving this problem:

1. The given list is unsorted
2. There are no duplicates of numbers
3. Each input should return exactly one solution

```
Sample input: 
list = [1721, 979, 366, 299, 756, 1456]
target = 2020

Sample output: 
514579

Explanation: 2020 - 1721 = 299; 1721 * 299 = 514579
```

**Solution**:

## 2. Finding the sum of all elements in an array

You can implement a brute force algorithm by using loops or recursion to generate all possible solutions within a given search space.

```javascript
// Brute force function to find the sum of all elements in an array
function bruteForceSum(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const result = bruteForceSum(numbers);
console.log(result); // Output: 15
```

**Explaination**

Sure! Let's break down the code line by line in simple plain English:

1. `function bruteForceSum(arr) {`: This line defines the function `bruteForceSum` that takes one parameter called `arr`. The parameter `arr` is expected to be an array containing numeric elements.

2. `let sum = 0;`: This line declares a variable `sum` and sets its initial value to `0`. This variable will be used to store the sum of all elements in the array.

3. `for (let i = 0; i < arr.length; i++) {`: This line starts a `for` loop that will iterate over the elements of the input array `arr`. It declares a variable `i` and sets its initial value to `0`. The loop will continue as long as `i` is less than the length of the array (`arr.length`), and after each iteration, it will increase the value of `i` by 1.

4. `sum += arr[i];`: This line is inside the `for` loop. It adds the value of the element at the current index `i` of the array `arr` to the `sum` variable. In simpler terms, it takes the element at the current position in the array and adds it to the running total of the sum.

5. `}`: This line marks the end of the `for` loop. The loop will repeat until it has iterated over all elements in the array.

6. `return sum;`: This line returns the final value of the `sum` variable after the `for` loop has finished executing. It means the function will return the sum of all elements in the input array.

7. `const numbers = [1, 2, 3, 4, 5];`: This line declares a constant variable `numbers` and initializes it with an array containing numeric values `[1, 2, 3, 4, 5]`.

8. `const result = bruteForceSum(numbers);`: This line calls the `bruteForceSum` function with the `numbers` array as an argument. It passes the array to the function to calculate the sum of its elements using the brute force approach. The result of the sum is stored in a variable called `result`.

## `for...of` - Two arrays and want to find pairs of elements, one from each array, whose sum matches a given target value

If you have two arrays and want to find pairs of elements, one from each array, whose sum matches a given target value, you can modify the function to perform that task. Here's how you can do it:

```javascript
function findPairsWithSum(arr1, arr2, target) {
  const pairs = [];

  for (const num1 of arr1) {
    for (const num2 of arr2) {
      if (num1 + num2 === target) {
        pairs.push([num1, num2]);
      }
    }
  }

  return pairs;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30, 40, 50];
const targetSum = 25;
const pairsWithSum = findPairsWithSum(array1, array2, targetSum);
console.log(pairsWithSum);
```

Explanation:

1. We define a function named `findPairsWithSum` that takes three input arguments: `arr1`, `arr2`, and `target`. `arr1` and `arr2` are the two arrays, and `target` is the sum value we want to find pairs for.

2. Inside the function, we initialize an empty array called `pairs`, which will store pairs of elements whose sum matches the `target`.

3. We use two nested `for...of` loops to iterate through each element of `arr1` and `arr2`.

4. Inside the nested loops, we check if the sum of the current elements `num1` from `arr1` and `num2` from `arr2` is equal to the `target`. If the sum matches the target, we have found a pair, and we push it into the `pairs` array as an array with the two elements.

5. After checking all possible pairs, the function returns the `pairs` array containing all pairs of elements from both arrays whose sum equals the `target`.

6. We call the `findPairsWithSum` function with `array1`, `array2`, and the `targetSum` as arguments and store the result in the `pairsWithSum` variable.

7. Finally, we print the result to the console using `console.log(pairsWithSum)`.

With this modification, the function can find all pairs of elements from two arrays whose sum matches the target value, and it returns an array containing those pairs.

## `for` loop w/ index - Two arrays and want to find pairs of elements, one from each array, whose sum matches a given target value

If you want to implement the function using a traditional `for` loop with indices instead of `for...of` loops, you can do so as well. Here's the modified function using `for` loops with indices:

```javascript
function findPairsWithSum(arr1, arr2, target) {
  const pairs = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] + arr2[j] === target) {
        pairs.push([arr1[i], arr2[j]]);
      }
    }
  }

  return pairs;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30, 40, 50];
const targetSum = 25;
const pairsWithSum = findPairsWithSum(array1, array2, targetSum);
console.log(pairsWithSum);
```

Explanation:

1. The function `findPairsWithSum` remains the same as before. It takes three input arguments: `arr1`, `arr2`, and `target`.

2. We initialize an empty array `pairs` to store pairs of elements whose sum matches the `target`.

3. Instead of using `for...of` loops, we use traditional `for` loops with indices (`i` for `arr1` and `j` for `arr2`) to iterate through each element of both arrays.

4. Inside the nested `for` loops, we access elements using the indices `i` and `j` to obtain `arr1[i]` and `arr2[j]`.

5. We check if the sum of the current elements `arr1[i]` and `arr2[j]` is equal to the `target`. If the sum matches the target, we have found a pair, and we push it into the `pairs` array as an array with the two elements.

6. After checking all possible pairs, the function returns the `pairs` array containing all pairs of elements from both arrays whose sum equals the `target`.

7. The rest of the code remains the same. We call the `findPairsWithSum` function with `array1`, `array2`, and the `targetSum` as arguments and store the result in the `pairsWithSum` variable.

8. Finally, we print the result to the console using `console.log(pairsWithSum)`.

The function now uses traditional `for` loops with indices to achieve the same result as before, finding all pairs of elements from two arrays whose sum matches the target value and returning an array containing those pairs.

# Recursive Problems in JS