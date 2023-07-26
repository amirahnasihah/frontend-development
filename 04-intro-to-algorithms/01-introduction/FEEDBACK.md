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

# What is factorial?

Factorial is a mathematical concept that represents the product of a number and all the positive integers below it. In simpler terms, it is the result of multiplying a number by all the smaller whole numbers until you reach 1.

For example, the factorial of 5 (written as 5!) is calculated as:

`5! = 5 x 4 x 3 x 2 x 1 = 120`

Similarly, the factorial of 4 (4!) is:

`4! = 4 x 3 x 2 x 1 = 24`

Factorials are often used in mathematics and computer science to solve problems involving permutations, combinations, and counting arrangements. They can be useful in various algorithms and calculations.

In programming, calculating factorials can be done using loops or recursive functions. By repeatedly multiplying the number by the preceding whole numbers until reaching 1, you can find the factorial value.

# Code Explaination

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