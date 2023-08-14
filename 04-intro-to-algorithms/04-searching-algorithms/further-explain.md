- [Searching Algorithm](#searching-algorithm)
- [Binary Search](#binary-search)
- [Linear Search](#linear-search)
  - [Exercises explained](#exercises-explained)
    - [binary-search.js](#binary-searchjs)
    - [linear-search.js](#linear-searchjs)
- [Other](#other)

# Searching Algorithm

# Binary Search

# Linear Search

## Exercises explained

### binary-search.js

### linear-search.js

# Other

## while loop

A `while` loop in JavaScript is used to execute a block of code repeatedly as long as a specified condition is true. Here's the basic syntax:

```javascript
while (condition) {
  // Code to be executed as long as the condition is true
}
```

### Pseudocode while loop

Here's a pseudocode sample that demonstrates how a `while` loop could be used to calculate the factorial of a number:

```
Input: n (a positive integer)
Output: factorial (the factorial of n)

Set factorial to 1
Set i to 1

While i is less than or equal to n:
    Set factorial to factorial times i
    Increment i by 1

Output factorial
```

This pseudocode calculates the factorial of a given positive integer `n` using a
`while` loop. It initializes the `factorial` variable to 1 and uses a counter
`i` to iterate through the numbers from 1 to `n`. Inside the loop, it multiplies
the current value of `factorial` by `i`, and then increments `i` by 1 in each
iteration. Finally, it outputs the calculated factorial value.

---

Here's a simple pseudocode example of a `while` loop that calculates the sum of numbers from 1 to a given positive integer `n`:

```
Input: n (a positive integer)
Output: sum (the sum of numbers from 1 to n)

Set sum to 0
Set i to 1

While i is less than or equal to n:
    Add i to sum
    Increment i by 1

Output sum
```

In this pseudocode, we're using a `while` loop to calculate the sum of numbers from 1 to `n`. We start by initializing the `sum` variable to 0 and the counter `i` to 1. The loop continues as long as `i` is less than or equal to `n`. Inside the loop, we add the value of `i` to the `sum` and then increment `i` by 1 in each iteration. Finally, we output the calculated sum.

Feel free to adapt and modify this pseudocode to create your own examples and
better understand the concepts behind `while` loops!

Example:

For example, let's say you want to print numbers from 1 to 5 using a `while` loop:

```javascript
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

In this example, the loop will continue executing as long as the `count` variable is less than or equal to 5. Each time the loop iterates, it prints the value of `count` and then increments it by 1.

Remember to be cautious when using `while` loops to ensure that the condition eventually becomes false; otherwise, you might end up with an infinite loop.

### while loop vs for loop

