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
      - [Factorial](#factorial)
    - [Example of Recursion algorithm](#example-of-recursion-algorithm)
    - [JavaScript Recursive Function Exercise](#javascript-recursive-function-exercise)
    - [JavaScript Recursive Function Exercise](#javascript-recursive-function-exercise-1)
    - [JavaScript Recursive Function Exercise](#javascript-recursive-function-exercise-2)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example-1)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example-2)
    - [Simple JavaScript Recursive Function Example](#simple-javascript-recursive-function-example-3)
- [Feedback on exercise](#feedback-on-exercise)
  - [exercise-1.js](#exercise-1js)
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

brute force algorithm:

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

My understanding:

- remember the if...else statement.

```javascript
Initially, the tempMaxNumber is empty.

Loop start:
	with `i` is 5, the first element;
	if (the condition is tempMaxNumber is set to null) {then, code is executed here bcs the condition is true. therefore, the tempMaxNumber is now updated to 5};
	else block is skipped;

Now, the new tempMaxNumber is 5 (first element).

Loop again:
	with i is 5;
	if (the condition is the tempMaxNumber is set to 5) {but then, code is NOT executed here bcs the condition is false. therefore, the go to next, the else block;
	else (inside else, there is another if statement);
```

**if in a function:**

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

**for loop with index:**

```javascript
function bigNum(intArray) {
    let maxNum = intArray[0]; // Initialize maxNum with the first element

    for (let i = 1; i < intArray.length; i++) {
        if (intArray[i] > maxNum) {
            maxNum = intArray[i]; // Update maxNum if a larger number is found
        }
    }

    return maxNum;
}
```

Differences:

> The main difference in the second function, `findMaxNumber`, is that it initializes `tempMaxNumber` to 0 instead of using the first element of the array as the initial value. This can lead to incorrect results if all the numbers in the array are negative or zero.

Let's consider an example where all elements of the `inputArray` are negative:

```javascript
const inputArray = [-5, -3, -7, -2, -5, -9];
const maxNumber = findMaxNumber(inputArray);
console.log(maxNumber);
```

In this case, the output will be 0, which is incorrect because it's not the maximum value in the array.

To address this issue, you should initialize `tempMaxNumber` with the first element of the array.

> both "undefined" and "null" represent the lack of a meaningful value, but "undefined" often occurs when something was expected to have a value, but it was never assigned or doesn't exist, while "null" is used when you want to explicitly say that a variable has no value or is empty.

## Common Algorithm Type 1 - Brute Force

### What is Brute force algorithm?

Brute Force Algorithms are straightforward methods of solving a problem that rely on computing power and trying every possibility rather than advanced techniques to improve efficiency.

### What is Brute Force Algorithm?

A brute force algorithm **solves a problem through exhaustion**: it goes through all possible choices until a solution is found. The time complexity of a brute force algorithm is often proportional to the input size. Brute force algorithms are simple and consistent, but very slow.

**further explain:**

In JavaScript, you can implement a brute force algorithm by using loops or recursion.

The time complexity of a brute force algorithm depends on how much data we have to deal with. If we have a lot of data, it will take a long time to go through all the possibilities.

Brute force algorithms are easy to understand and always give the right answer, but they can be really slow because they have to check every option one by one. So, while they are straightforward, they might not be the best choice for big problems where speed is important.

### Brute Force Algorithm Example 1

For example, imagine you have a small padlock with 3 digits, each from 0-9. You forgot your combination, but you don't want to buy another padlock.

Since you can't remember any of the digits, you have to use a brute force method to open the lock.

### Brute Force Algorithm for Padlock

So you set all the numbers back to 0 and try them one by one:

000, 001, 002, 003, and so on until it opens. In the worst case scenario, it would take a maximum of 1000 tries to find your password.

**Pseudocode:**

```javascript
function bruteForceSafeCombination(targetCombination) {
  // Let's say the safe has a 4-digit combination, and each digit can be from 0 to 9.

  // Loop for all possible combinations of the safe's digits
  for digit1 from 0 to 9 do:
    for digit2 from 0 to 9 do:
      for digit3 from 0 to 9 do:
        for digit4 from 0 to 9 do:
          // Try the current combination
          let currentCombination = [digit1, digit2, digit3, digit4];

          // Check if it matches the target combination
          if (currentCombination equals targetCombination) then:
            // We found the correct combination!
            return currentCombination;
          end if

  // If we reach this point, we tried all possible combinations
  return "Combination not found";
}
```

```
...digi4
0,0,0,0
0,0,0,1
0,0,0,2
0,0,0,9
...digit3
0,0,1,0
0,0,1,1
0,0,1,2
0,0,1,9
0,0,2,0
0,0,2,1
0,0,2,2
0,0,9,9
...digit2
0,1,0,0
0,1,0,1
0,1,0,2
0,1,0,9
0,1,1,0
0,1,1,1
0,1,1,2
0,1,9,9
...digit1
1,0,0,0
1,0,0,1
```

In this pseudocode, we use **nested loops** to represent trying all possible combinations of a 4-digit safe. We start with digit1 being 0 and digit4 being 0, and then we increment digit4 until it reaches 9. When digit4 reaches 9, we increment digit3 by 1 and set digit4 to 0 again, and so on.

*The output will look like this:*

```
0, 0, 0, 0
0, 0, 0, 1
0, 0, 0, 2
...
0, 0, 0, 9
0, 0, 1, 0
0, 0, 1, 1
...
0, 0, 1, 9
...
9, 9, 9, 8
9, 9, 9, 9
```

The function will start with the first combination `[0, 0, 0, 0]` and increment the last digit until it reaches 9. Then, it will increment the third-to-last digit and reset the last digit back to 0. This process will continue until all possible combinations from `[0, 0, 0, 0]` to `[9, 9, 9, 9]` have been tried.

If the `targetCombination` matches any of the generated combinations, the function will return that specific combination as it represents the correct safe combination. Otherwise, if it reaches the end of the loops without finding a match, it will return "Combination not found."

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

```
Input Array: [a, b, f, u, i, k, p, e, v, k, s]

found:
```

## Common Algorithm Type 2 - Recursion

### What is Recursive algorithm?

The process in which a function calls itself directly or indirectly is called recursion.

Recursion is useful for problems that can be represented by a simpler version of the same problem.

The smallest example of the same task has a non-recursive solution.

#### Factorial

```
5 Factorial = 5! = 5 * 4 * 3 * 2 *1

3! = 3 * 2 * 1 = 6

0! = 1
1! = 1
```

What is Factorial?

> The factorial of a non-negative integer is the product of all positive integers less than or equal to that number. For example, the factorial of 5 is 5! = 5 x 4 x 3 x 2 x 1 = 120.
> 
> In simpler terms, it is the result of multiplying a number by all the smaller whole numbers until you reach 1.

The factorial of a non-negative integer is a way to multiply all the positive whole numbers that are less than or equal to that integer.

*Let's take an example to understand it better:*

Suppose we want to find the factorial of the number 5, which is written as `5!`. It means we need to multiply all the positive whole numbers from 1 to 5 together:

`5! = 5 x 4 x 3 x 2 x 1`

So, the factorial of 5 is equal to 120.

Similarly, the factorial of 4 (4!) is:

`4! = 4 x 3 x 2 x 1 = 24`

If we want to find the factorial of any other non-negative integer, we just multiply all the positive whole numbers starting from 1 up to that integer.

In programming, calculating factorials can be done using loops or recursive functions. By repeatedly multiplying the number by the preceding whole numbers until reaching 1, you can find the factorial value.

### Example of Recursion algorithm

Factorial(5) ← return 5 * Factorial(4) = 120 ← return 4 * Factorial(3) = 24 ← return 3 * Factorial(2) = 6 ← return 2 * Factorial(1) = 2 ← 1

![factorial](https://camo.githubusercontent.com/1bf679af1f4fbe9957061fbfffefb790247be9a2c4b8b7f33d126943dc21224a/687474703a2f2f332e62702e626c6f6773706f742e636f6d2f2d494d46447a335436654c4d2f564c7a74344866674271492f4141414141414141446c6f2f63716d7141386a592d6e382f73313630302f526563757273696f6e253242696e253242432e6a7067)

source: [Basic CS Topics](https://gist.github.com/sudomain/86e61dec22dc56e6d57057da4ef670ed)

**further explain**

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

```
6! = 6*5*4*3*2*1
6! = 6 *5!
n! = n * (n-1)!
```

**n! = 1 (if n = 0 or 1)**

**n! = n * (n-1)! (if n > 1)**

### JavaScript Recursive Function Exercise

```javascript
function factorial(n){
  if(n === 0 || n === 1){
    return 1; // ←
  } else{
    return ????;
  }
}
```

**n! = 1 (if n = 0)**

**n! = n * (n-1)! (if n > 1)**

### JavaScript Recursive Function Exercise

```javascript
function factorial(n){
  if(n == 0 || n == 1){
    return 1;
  } else{
    return  n * factorial(n-1); // → recursive step
  }
}
```

Take a look at this animation:

**Assignment Question 2**

### Simple JavaScript Recursive Function Example

Suppose that you need to develop a function that counts down from a specified number to 1.

For example, to count down from 3 to 1:

- 3
- 2
- 1

### Simple JavaScript Recursive Function Example

```javascript
function countDown(fromNumber) {
  console.log(fromNumber);
  countDown(fromNumber-1); // recursive step
}

countDown(3);
```

Any Problem???

### Simple JavaScript Recursive Function Example

**That program doesn’t have the condition to stop calling itself!**

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

The count down will stop when the next number is zero.

we can add an if condition to check this condition.

*\*The smallest example of the same task has a **non-recursive solution (fromNumber = 0 is the non-recursive solution this time)**.

# Feedback on exercise

## exercise-1.js

> Your code for **Task 1** looks excellent and handles the given task perfectly.

```javascript
const find = (inputArray, target) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === target) {
      return true;
    }
  }
  return false;
};
```

## exercise-2.js

> For **Task 2**, your code is functioning correctly for positive input numbers. However, it is **important to consider how your code handles negative input numbers**. Currently, **the loop will not stop if a negative number is provided, which is not ideal**. **To address negative input numbers, you could add a check at the start of your function** to return an error message or throw an exception if the input is negative. This will make your function more robust and prevent unexpected errors from occurring.

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

**Here's an example of an iterative approach to calculate the factorial (iterative/loop step)**

```javascript
// Function to calculate the factorial of a non-negative integer using an iterative approach
function factorial(n) {
  // Check if n is negative, and return NaN as factorial is not defined for negative numbers
  if (n < 0) {
    return NaN;
  }

  // Initialize the result to 1
  let result = 1;

  // Loop from 2 to n and multiply the result with each number in the range
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  // Return the final factorial result
  return result;
}
```

**Here's the code with added comments and some explanation(recursive step)**

```javascript
// Function to calculate the factorial of a non-negative integer using recursion
const factorial = (input) => {
  // Check if input is negative, and throw an error if so.
  if (input < 0) {
    throw new Error("Input must be a non-negative number.");
  }

  // Base case: If input is 0 or 1, the factorial is 1 (by definition).
  if (input === 0 || input === 1) {
    return 1;
  }

  // Recursive case: If input is greater than 1, we multiply input by the factorial of (input - 1).
  // This is the essence of recursion: breaking down the problem into smaller, more manageable subproblems.
  return input * factorial(input - 1);
};
```

Alternative:

```javascript
const factorial = (input) => {
  if (input < 0) {
    return NaN;
  }

  if (input === 0 || input === 1) {
    return 1;
  }

  return input * factorial(input - 1);
};
```

The provided code defines a recursive function `factorial` that calculates the factorial of a given positive integer `input`. The factorial of a non-negative integer n (denoted as n!) is the product of all positive integers from 1 to n.

Here's a breakdown of how the `factorial` function works:

1. The function checks if the `input` is less than 0. If it is, the function returns `NaN`, as factorial is not defined for negative numbers.

2. Next, the function checks if the `input` is equal to 0 or 1. If it is, the function returns 1, as the factorial of 0 and 1 is defined as 1.

3. If the `input` is greater than 1, the function recursively calls itself with the argument `input - 1`. This recursive call calculates the factorial of the previous number and multiplies it by the current `input`, effectively computing the factorial of the original `input`.

For example, if you call `factorial(5)`, it will calculate 5! as follows:
```
factorial(5) = 5 * factorial(4)
            = 5 * (4 * factorial(3))
            = 5 * (4 * (3 * factorial(2)))
            = 5 * (4 * (3 * (2 * factorial(1))))
            = 5 * (4 * (3 * (2 * 1)))
            = 5 * (4 * (3 * 2))
            = 5 * (4 * 6)
            = 5 * 24
            = 120
```

So, `factorial(5)` returns 120.

The `factorial` function works recursively to compute the factorial of any positive integer `input`.