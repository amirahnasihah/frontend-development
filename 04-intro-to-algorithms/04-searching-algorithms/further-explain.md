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

## if statement



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

Both `while` loops and `for` loops are control structures in programming that allow you to repeat a block of code multiple times. They serve similar purposes but have different use cases based on the situation.

1. **`while` loop:**
   - The `while` loop is used when you want to repeat a block of code as long as a given condition is `true`.
   - It doesn't require you to specify the number of iterations beforehand. The loop will continue running until the condition becomes `false`.
   - It's particularly useful when you don't know the exact number of iterations in advance.

Example of a `while` loop:
```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

2. **`for` loop:**
   - The `for` loop is used when you want to repeat a block of code for a specific number of times.
   - It has three parts: initialization, condition, and increment. The loop runs as long as the condition is `true`, and after each iteration, the increment step is executed.
   - It's often used when you know the exact number of iterations you want to perform.

Example of a `for` loop:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

In general, if you know the number of iterations beforehand, a `for` loop might be more appropriate. If you're looping until a specific condition is met and you're not sure how many iterations it will take, a `while` loop could be a better choice.

## for loop


### fir
Pseudocode is a way to outline the logic of a program without using specific programming syntax. Here's how you could write a `for` loop in pseudocode:

```
FOR each value from start TO end
  // Code to be executed in each iteration
END FOR
```

Let's translate this pseudocode into an example where you want to print numbers from 1 to 5:

```
FOR value = 1 TO 5
  PRINT value
END FOR
```

In this pseudocode:
- `FOR value = 1 TO 5` sets up the loop to iterate from 1 to 5.
- `PRINT value` represents the code that would be executed in each iteration, which is printing the current value.
- `END FOR` indicates the end of the loop.

Remember, pseudocode is not a programming language but a way to outline your logic before writing actual code. It helps you plan and understand the structure of your program without getting caught up in specific syntax details.