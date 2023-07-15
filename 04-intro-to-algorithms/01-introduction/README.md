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
- [FEEDBACK](#feedback)
  - [exercise-2.js](#exercise-2js)

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

## Common Algorithm Type 1 - Brute Force

### What is Brute force algorithm?

Brute Force Algorithms are straightforward methods of solving a problem that ==rely on computing power== and ==trying every possibility== rather than advanced techniques to improve efficiency.

### What is Brute Force Algorithm?

A brute force algorithm ==solves a problem through exhaustion==: it goes through all possible choices until a solution is found. The time complexity of a brute force algorithm is often proportional to the input size. Brute force algorithms are simple and consistent, but very slow.

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

# FEEDBACK

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