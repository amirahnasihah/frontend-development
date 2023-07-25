# Problem in JS Using Brute Force

- [Problem in JS Using Brute Force](#problem-in-js-using-brute-force)
    - [Pseudocode](#pseudocode)
  - [1. Given a list of numbers, find two numbers that sum up to a given target and return the product of these numbers.](#1-given-a-list-of-numbers-find-two-numbers-that-sum-up-to-a-given-target-and-return-the-product-of-these-numbers)
  - [2. Finding the sum of all elements in an array](#2-finding-the-sum-of-all-elements-in-an-array)

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
