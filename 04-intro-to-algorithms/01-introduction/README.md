- [Assignment 1 - Brute Force and Recursion](#assignment-1---brute-force-and-recursion)
  - [Part 1 Coding a brute force search algorithm](#part-1-coding-a-brute-force-search-algorithm)
  - [Part 2 Coding a factorial function using recursion technique](#part-2-coding-a-factorial-function-using-recursion-technique)
- [Lecture 1: Introduction to Algorithm](#lecture-1-introduction-to-algorithm)
  - [Introduction to Algorithm](#introduction-to-algorithm)
    - [Algorithm](#algorithm)
    - [Algorithm Example](#algorithm-example)
    - [Algorithm Example Illustration](#algorithm-example-illustration)
    - [Translating the Algorithm to Code](#translating-the-algorithm-to-code)
  - [Common Algorithm Type 1 - Brute Force](#common-algorithm-type-1---brute-force)
    - [What is Brute force algorithm?](#what-is-brute-force-algorithm)
    - [What is Brute Force Algorithm?](#what-is-brute-force-algorithm-1)
    - [Brute Force Algorithm Example 1](#brute-force-algorithm-example-1)
    - [Brute Force Algorithm for Padlock](#brute-force-algorithm-for-padlock)
    - [It’s Not Stupid at all...](#its-not-stupid-at-all)
    - [Brute Force Algorithm Example 2](#brute-force-algorithm-example-2)
    - [Brute Force Algorithm Example 2](#brute-force-algorithm-example-2-1)
  - [Common Algorithm Type 2 - Recursion](#common-algorithm-type-2---recursion)
    - [What is Recursive algorithm?](#what-is-recursive-algorithm)
    - [Example of Recursion algorithm](#example-of-recursion-algorithm)
    - [JavaScript Recursive Function Exercise](#javascript-recursive-function-exercise)
    - [JavaScript Recursive Function Exercise](#javascript-recursive-function-exercise-1)
    - [JavaScript Recursive Function Exercise](#javascript-recursive-function-exercise-2)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example-1)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example-2)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example-3)
- [Feedback](#feedback)
  - [exercise-2.js](#exercise-2js)
- [What is factorial?](#what-is-factorial)
- [Code Explaination](#code-explaination)
  - [for...of vs for loop with index](#forof-vs-for-loop-with-index)
  - [for...of in a function](#forof-in-a-function)

# Assignment 1 - Brute Force and Recursion

## Part 1 Coding a brute force search algorithm

In this part, you are going to try coding a brute force algorithm for searching a target in an array.

Open `exercise-1.js` file and please finish the find function according to the specification in the file. We have prepared some test cases for you to test your functions.

## Part 2 Coding a factorial function using recursion technique

In this part, you are going to try implementing a factorial function using a recursion algorithm. Make sure that you are using the recursion technique instead of a simple for loop.

Open `exercise-2.js` file and please finish the find function according to the specification in the file. We have prepared some test cases for you to test your functions.

# Lecture 1: Introduction to Algorithm

Agenda:

- Algorithm
- Main types of Algorithms
  - Brute Force
  - Recursion

## Introduction to Algorithm

### Algorithm

- A methodology to solve problem, a description of the steps to solve a problem.
- The focus is not about “coding”, but the “thinking”.
- There are no formulas, but some common way of thinking about a problem.
- Practice more and read more is the best way to improve your skills.

### Algorithm Example

- Question: How do you find the biggest numbers in an array?

- Answer:
  - Create a variable “tempMaxNumber”.
  - Go through the numbers in the array one by one, if the number is bigger than tempMaxNumber, then update tempMaxNumber to that number.
  - After going through the whole array, tempMaxNumber is the biggest number in the array.

Pseudocode example:

```
Create a variable "tempMaxNumber" and set it to negative infinity

For each number "element" in the array:
    If "element" is greater than "tempMaxNumber":
        Set "tempMaxNumber" to "element"

After going through the whole array:
    "tempMaxNumber" is the biggest number in the array
```

### Algorithm Example Illustration

Input Array: [5, 3, 7, 2, 5, 9, 0, 3]

### Translating the Algorithm to Code

```javascript
inputArray = [5, 3, 7, 2, 5, 9, 0, 3];

tempMaxNumber = null;

for (i of inputArray) {
  if (tempMaxNumber === null) {
    tempMaxNumber = i;
  }
  else {
    if (i > tempMaxNumber) {
      tempMaxNumber = i;
    }
  }
}

console.log(tempMaxNumber);
```

in a function:

```javascript
function findMaxNumber(inputArray) {
  let tempMaxNumber = 0;

  for (const i of inputArray) {
    if (tempMaxNumber === 0) {
      tempMaxNumber = i;
    } else {
      if (i > tempMaxNumber) {
        tempMaxNumber = i;
      }
    }
  }

  return tempMaxNumber;
}

const inputArray = [5, 3, 7, 2, 5, 9, 0, 3];
const maxNumber = findMaxNumber(inputArray);
console.log(maxNumber);
```

> both "undefined" and "null" represent the lack of a meaningful value, but "undefined" often occurs when something was expected to have a value, but it was never assigned or doesn't exist, while "null" is used when you want to explicitly say that a variable has no value or is empty.

If you change `null` to a number like `4` in the `tempMaxNumber` initialization, it will affect how the code finds the maximum number in the `inputArray`.

With `tempMaxNumber = 4`, the code will still correctly find the maximum number in the `inputArray`, but the initial value of `tempMaxNumber` becomes `4`. Therefore, the algorithm will always find a number in the array greater than or equal to `4`.

In the given example, the maximum number in the `inputArray` is `9`. So, even though `tempMaxNumber` starts with the value `4`, it will be correctly updated to `9` after iterating through the `inputArray`, and the output of `console.log(tempMaxNumber)` will be `9`.

However, if you had set `tempMaxNumber` to a number smaller than the maximum number in the array (e.g., `tempMaxNumber = 2`), the algorithm would not find the correct maximum value. The initial value would limit the algorithm's ability to identify the maximum number in the array accurately. Therefore, when using an initial value other than `null`, make sure it is greater than or equal to any possible value in the array to ensure correctness.

## Common Algorithm Type 1 - Brute Force

### What is Brute force algorithm?

Brute Force Algorithms are straightforward methods of solving a problem that ==rely on computing power== and ==trying every possibility== rather than advanced techniques to improve efficiency.

### What is Brute Force Algorithm?

A brute force algorithm ==solves a problem through exhaustion==: it goes through all possible choices until a solution is found. The time complexity of a brute force algorithm is often proportional to the input size. Brute force algorithms are simple and consistent, but very slow.

**further explaination:**

A brute force algorithm is a way to solve a problem by trying out all the possible options until we find the correct solution. It's like trying every combination until we get the right one.

The time complexity of a brute force algorithm depends on how much data we have to deal with. If we have a lot of data, it will take a long time to go through all the possibilities.

Brute force algorithms are easy to understand and always give the right answer, but they can be really slow because they have to check every option one by one. So, while they are straightforward, they might not be the best choice for big problems where speed is important.

### Brute Force Algorithm Example 1

For example, imagine you have a small padlock with 3 digits, each from 0-9. You forgot your combination, but you don't want to buy another padlock.

Since you can't remember any of the digits, you have to use a brute force method to open the lock.

### Brute Force Algorithm for Padlock

So you set all the numbers back to 0 and try them one by one:

000, 001, 002, 003, and so on until it opens. In the worst case scenario, it would take a maximum of 1000 tries to find your password.

### It’s Not Stupid at all...

- In coding interviews, if you can solve the problem using brute force algorithm, you are already better than most of the junior developers!
- If you can’t think of a smarter way, just start with brute force.

### Brute Force Algorithm Example 2

- Question: Given an array, how I can know if a particular letter exists in the array?

- Answer:
  - Check the elements in the array one by one in a for loop.
  - Terminate the loop and return True if there is a match.
  - If there are no match after looping through the array, return False.

### Brute Force Algorithm Example 2

```javascript
// Brute Force Algorithm to check if a particular letter exists in the array
function letterExistsInArray(arr, targetLetter) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetLetter) {
      return true; // If there is a match, return true
    }
  }
  return false; // If there are no matches, return false
}

// Example usage
const letters = ['a', 'b', 'c', 'd', 'e'];
const target = 'c';
const exists = letterExistsInArray(letters, target);
console.log(exists); // Output: true
```

**Assignment Question 1**

```markdown
Input Array: [a, b, f, u, i, k, p, e, v, k, s]

found:
```

## Common Algorithm Type 2 - Recursion

### What is Recursive algorithm?

The process in which a function calls itself directly or indirectly is called recursion.

Recursion is useful for problems that can be represented by a simpler version of the same problem.

The smallest example of the same task has a non-recursive solution.

**Factorial**

- 5 Factorial = 5! = 5 * 4 * 3 * 2 *1

- 3! = 3 * 2 * 1 = 6

- 0! = 1
- 1! = 1

### Example of Recursion algorithm

**Visual Guide**

Factorial(5) ← return 5 * Factorial(4) = 120 ← return 4 * Factorial(3) = 24 ← return 3 * Factorial(2) = 6 ← return 2 * Factorial(1) = 2 ← 1


Example; to calculate the factorial of 5, you multiply all the positive whole numbers from 1 to 5 together:

5! = 5 x 4 x 3 x 2 x 1 = 120

Let's break it down step by step:

1. 5! = 5 x 4 x 3 x 2 x 1
2. 5! = 20 x 3 x 2 x 1 (5 x 4 = 20)
3. 5! = 60 x 2 x 1 (20 x 3 = 60)
4. 5! = 120 x 1 (60 x 2 = 120)
5. 5! = 120 (120 x 1 = 120)

So, the factorial of 5 is equal to 120.

### JavaScript Recursive Function Exercise

The factorial function

6! = 6*5*4*3*2*1
6! = 6 *5!
n! = n * (n-1)!

==n! = 1 (if n = 0 or 1)==
==n! = n * (n-1)! (if n > 1)==

### JavaScript Recursive Function Exercise

```javascript
function factorial(n){
  if(n == 0 || n == 1){
    return 1;
  } else{
    return ????;
  }
}
```

==n! = 1 (if n = 0)==
==n! = n * (n-1)! (if n > 1)==

### JavaScript Recursive Function Exercise

```javascript
function factorial(n){
  if(n == 0 || n == 1){
    return 1;
  } else{
    return  n * factorial(n-1);
  }
}
```

**Assignment Question 2**

### Simple JavaScript Recursive Function Example

Suppose that you need to develop a function that counts down from a specified number to 1.

For example, to count down from 3 to 1:

5
4
3
2
1

### Simple JavaScript Recursive Function Example

```javascript
function countDown(fromNumber) {
  console.log(fromNumber);
  countDown(fromNumber-1);
}

countDown(3);
```

Any Problem???

### Simple JavaScript Recursive Function Example

==That program doesn’t have the condition to stop calling itself !!!===

```javascript
function countDown(fromNumber) {
  console.log(fromNumber);
  countDown(fromNumber-1);
}

countDown(3);
```

### Simple JavaScript Recursive Function Example


```javascript
function countDown(fromNumber) {
  console.log(fromNumber);
  if (fromNumber === 0){
  return
  } else{
  countDown(fromNumber - 1)
  }
}

countDown(3);
```

**EXPLAINATION**

The count down will stop when the next number is zero.

we can add an if condition to check this condition.

**The smallest example of the same task has ==a non-recursive solution== (==fromNumber = 0 is the non-recursive solution this time==).

# Feedback

Your code for Task 1 looks excellent and handles the given task perfectly.

For Task 2, your code is functioning correctly for positive input numbers. However, it is **important to consider how your code handles negative input numbers**. Currently, **the loop will not stop if a negative number is provided, which is not ideal**. **To address negative input numbers, you could add a check at the start of your function** to return an error message or throw an exception if the input is negative. This will make your function more robust and prevent unexpected errors from occurring. 

## exercise-2.js

To handle negative input numbers in the factorial function, you can add a check at the beginning of the function and throw an error if the input is negative. Here's an updated version of the code that includes this check:

```javascript
const factorial = (input) => {
  if (input < 0) {
    throw new Error("Input must be a non-negative number.");
  }

  if (input === 0 || input === 1) {
    return 1;
  }

  return input * factorial(input - 1);
};
```

With this modification, if a negative number is passed to the `factorial` function, it will throw an error with the message "Input must be a non-negative number." This helps ensure that the function is used correctly and avoids infinite recursion in the case of negative input.

# What is factorial?

Factorial is a mathematical concept that represents the product of a number and all the positive integers below it. In simpler terms, it is the result of multiplying a number by all the smaller whole numbers until you reach 1.

For example, the factorial of 5 (written as 5!) is calculated as:

`5! = 5 x 4 x 3 x 2 x 1 = 120`

Similarly, the factorial of 4 (4!) is:

`4! = 4 x 3 x 2 x 1 = 24`

Factorials are often used in mathematics and computer science to solve problems involving permutations, combinations, and counting arrangements. They can be useful in various algorithms and calculations.

In programming, calculating factorials can be done using loops or recursive functions. By repeatedly multiplying the number by the preceding whole numbers until reaching 1, you can find the factorial value.

# Code Explaination

## for...of vs for loop with index

Both `for (i of inputArray)` and `for (let i = 0; i < arr.length; i++)` are used to iterate over the elements of an array, but they have different ways of accessing the elements and use cases.

1. `for (i of inputArray)`:

This is a `for...of` loop in JavaScript. It directly iterates over the elements of the `inputArray`, without the need for an index variable. In each iteration, the variable `i` will hold the value of the current element in the array.

Example:

```javascript
const inputArray = [1, 2, 3, 4, 5];

for (const element of inputArray) {
  console.log(element);
}
```

Output:
```
1
2
3
4
5
```

The `for...of` loop is typically used when you only need to access the elements of an array without caring about the index. It simplifies the syntax and makes the code cleaner.

2. `for (let i = 0; i < arr.length; i++)`:

This is a traditional `for` loop with an index variable `i`. It starts with `i = 0` and increments `i` until it reaches the length of the array `arr.length - 1`. In each iteration, you can access the element at index `i` using `arr[i]`.

Example:

```javascript
const arr = ['a', 'b', 'c', 'd'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Output:
```
a
b
c
d
```

The traditional `for` loop with an index is more flexible as it allows you to access both the elements and their corresponding indices in the array. It can be useful when you need to perform operations based on the index, such as modifying elements, filtering, or searching based on the element's position.

In summary, use `for (i of inputArray)` when you only need to access the elements, and use `for (let i = 0; i < arr.length; i++)` when you need to work with both the elements and their indices.

**Acronym LSIP**

```javascript
const array = [10, 20, 30, 40, 50];

// L: Loop initialization - Initialize the index variable (i) to 0
// S: Loop condition - Continue as long as the index (i) is less than the array length
// I: Index-based access - Access elements using the index (i) and print them
// P: Loop post-processing - Increment the index (i) after each iteration
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## for...of in a function

If you put the code in a function, you can encapsulate the logic for finding the maximum number in the `inputArray`, making it reusable and organized. Here's how you can convert the code into a function:

```javascript
function findMaxNumber(inputArray) {
  let tempMaxNumber = 0;

  for (const i of inputArray) {
    if (tempMaxNumber === 0) {
      tempMaxNumber = i;
    } else {
      if (i > tempMaxNumber) {
        tempMaxNumber = i;
      }
    }
  }

  return tempMaxNumber;
}

const inputArray = [5, 3, 7, 2, 5, 9, 0, 3];
const maxNumber = findMaxNumber(inputArray);
console.log(maxNumber);
```

Explanation:

1. We define a function named `findMaxNumber` that takes an `inputArray` as its parameter.

2. Inside the function, we initialize a variable `tempMaxNumber` with `0`, which will be used to store the maximum number found in the array.

3. We use a `for...of` loop to iterate through each element of the `inputArray`.

4. Inside the loop, we check if `tempMaxNumber` is equal to `0`. If it is `0`, we set `tempMaxNumber` to the current element `i`, assuming it is the maximum so far.

5. On subsequent iterations, we compare each element `i` with the current `tempMaxNumber`. If `i` is greater than `tempMaxNumber`, we update `tempMaxNumber` with the value of `i`.

6. After the loop finishes iterating through the entire `inputArray`, the function returns the maximum number found, stored in `tempMaxNumber`.

7. We call the `findMaxNumber` function with the `inputArray` and store the result in the `maxNumber` variable. Finally, we print the result to the console using `console.log(maxNumber)`.

With the code encapsulated in a function, you can easily reuse it for different arrays, making your code more modular and maintainable.