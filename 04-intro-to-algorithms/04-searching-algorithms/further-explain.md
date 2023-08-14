- [Searching Algorithm](#searching-algorithm)
- [Binary Search](#binary-search)
- [Linear Search](#linear-search)
  - [Exercises explained](#exercises-explained)
    - [binary-search.js](#binary-searchjs)
    - [linear-search.js](#linear-searchjs)
- [Other](#other)

# Searching Algorithm

# Binary Search

1. Start with the element at the middle position:
    a. if the element at the middle equals to the target, then return true.
    b. if the element at the middle is larger than the target, shrink the search
    range to smaller half.
    c. if the element at the middle is smaller than the target, shrink the
    search range to the larger half.
2. Repeat step 1 until target is found or the range contains only 1 element.

However, binary search can only be applied to sorted arrays.

### Visualise BS (malay)

Gambaran cara kerja binary search dengan contoh:

Kita ada senarai yang disusun dari yang terkecil ke yang terbesar (length, 10): [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]

> ingat: binary search kena sort dulu

middle element: 16

target number: 23 (23 > middle -> )

1. Langkah 1: Mulakan dengan tengah senarai. Nilai tengah adalah 16.
2. Langkah 2: Bandingkan 16 dengan nilai yang dicari. Jika sama, kita telah menemui nilai.
3. Langkah 3: Tetapi dalam contoh ini, katakan kita mencari nilai 23 yang lebih besar daripada 16.
4. Langkah 4: Oleh itu, kita tumpukan kepada bahagian selepasnya: [23, 38, 45, 56, 72].
5. Langkah 5: Kini kita bergerak ke nilai tengah bahagian selepas, iaitu 56.
6. Langkah 6: Bandingkan 56 dengan nilai yang dicari. Dalam contoh ini, 23 masih lebih kecil daripada 56.
7. Langkah 7: Kita tumpukan kepada bahagian sebelumnya: [23, 38, 45].
8. Langkah 8: Kini kita bergerak ke nilai tengah bahagian sebelum, iaitu 38.
9. Langkah 9: Bandingkan 38 dengan nilai yang dicari. Dalam contoh ini, 23 masih lebih kecil daripada 38.
10. Langkah 10: Kita tumpukan kepada bahagian sebelumnya lagi: [23].
11. Langkah 11: Kini kita hanya mempunyai satu nilai dalam julat ini, iaitu 23.
12. Langkah 12: Bandingkan 23 dengan nilai yang dicari. Kita telah menemui nilai yang dicari!

Itulah cara kerja binary search. Dengan setiap langkah, julat yang perlu diperiksa menjadi lebih kecil sehingga kita akhirnya menemui nilai yang dicari atau menyedari bahawa nilai tersebut tidak wujud dalam senarai.

# Linear Search

## Exercises explained

### binary-search.js

### linear-search.js

# Other

## if statement

An `if` statement is a fundamental control structure in programming that allows you to execute a block of code based on a condition. Here's how an `if` statement looks:

```javascript
if (condition) {
  // Code to be executed if the condition is true
}
```

Here's a simple example in pseudocode and its JavaScript equivalent:

Pseudocode:
```
IF it's raining
  Take an umbrella
ENDIF
```

JavaScript:
```javascript
if (itIsRaining) {
  takeUmbrella();
}
```

In this example:
- `if (itIsRaining)` checks whether the condition "it's raining" is true.
- If the condition is true, the code inside the curly braces `{ takeUmbrella(); }` is executed, which means you take an umbrella.

You can also use an `else` statement to provide an alternative action if the condition is not true:

```javascript
if (itIsRaining) {
  takeUmbrella();
} else {
  continueWithoutUmbrella();
}
```

In this case, if it's not raining (`itIsRaining` is false), the code inside the `else` block will be executed.

Additionally, you can use an `else if` statement to check multiple conditions in sequence:

```javascript
if (temperature > 30) {
  wearShorts();
} else if (temperature > 20) {
  wearTShirt();
} else {
  wearSweater();
}
```

This sequence of conditions will execute the first block of code where the condition is true, and the rest of the blocks will be skipped.

`if` statements are essential for making decisions in your code based on different situations and conditions.

### else if statement

An `else if` statement is used in programming to check multiple conditions in a sequence. It allows you to provide an alternative block of code to execute if the initial `if` condition is false, but before resorting to the `else` block. Here's how it looks:

```javascript
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  // Code to be executed if condition1 and condition2 are false, and condition3 is true
}
// ... more else if blocks if needed ...
else {
  // Code to be executed if none of the above conditions are true
}
```

Here's an example using pseudocode and its JavaScript equivalent:

Pseudocode:
```
IF time is morning
  Greet "Good morning"
ELSE IF time is afternoon
  Greet "Good afternoon"
ELSE
  Greet "Good evening"
ENDIF
```

JavaScript:
```javascript
if (time === "morning") {
  console.log("Good morning");
} else if (time === "afternoon") {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
```

In this example:
- The program checks the `time` variable against each condition sequentially.
- If `time` is "morning," the first block is executed.
- If `time` is not "morning," but it's "afternoon," the second block is executed.
- If none of the previous conditions are true, the code inside the `else` block is executed.

`else if` statements are helpful when you have multiple conditions that need to be checked in a specific order.

## switch statement

The `switch` statement is another control structure in programming that allows you to compare a value against multiple possible cases and execute different blocks of code based on which case matches. Here's how it's structured:

```javascript
switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  // ... more cases ...
  default:
    // Code to be executed if none of the cases match
}
```

Here's an example using pseudocode and its JavaScript equivalent:

Pseudocode:
```
SWITCH dayOfWeek
  CASE "Monday"
    Print "It's the start of the week"
  CASE "Friday"
    Print "It's the end of the week"
  DEFAULT
    Print "It's a regular day"
END SWITCH
```

JavaScript:
```javascript
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("It's the end of the week");
    break;
  default:
    console.log("It's a regular day");
}
```

In this example:
- The program checks the `dayOfWeek` variable against each case.
- If `dayOfWeek` matches "Monday," the code inside the first case block is executed.
- If `dayOfWeek` matches "Friday," the code inside the second case block is executed.
- If `dayOfWeek` doesn't match any of the cases, the code inside the `default` block is executed.

The `break` statement is used to exit the `switch` block after the code associated with a matching case is executed. This prevents the program from continuing to execute code in subsequent cases.

The `switch` statement is useful when you have a single expression to compare against multiple possible values and perform different actions accordingly.

## while loop

A `while` loop in JavaScript is used to execute a block of code repeatedly as long as a specified condition is true. Here's the basic syntax:

```javascript
while (condition) {
  // Code to be executed as long as the condition is true
}
```

#### while loop example

Here's an example of a `while` loop with an explanation of the output it generates:

```javascript
let count = 1;

while (count <= 5) {
  console.log("Count is: " + count);
  count++;
}
```

Explanation:
- The `count` variable is initialized to 1.
- The `while` loop continues as long as the condition `count <= 5` is true.
- In each iteration of the loop, the code within the curly braces is executed.
- The code prints the value of `count` along with the message "Count is: ".
- After printing, the `count` is incremented by 1 using the `count++` statement.

Output:
```
Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
```

Here's how the loop runs step by step:
1. `count` is 1. Condition `1 <= 5` is true. Print "Count is: 1". Increment `count` to 2.
2. `count` is 2. Condition `2 <= 5` is true. Print "Count is: 2". Increment `count` to 3.
3. `count` is 3. Condition `3 <= 5` is true. Print "Count is: 3". Increment `count` to 4.
4. `count` is 4. Condition `4 <= 5` is true. Print "Count is: 4". Increment `count` to 5.
5. `count` is 5. Condition `5 <= 5` is true. Print "Count is: 5". Increment `count` to 6.

At this point, the condition `count <= 5` becomes false, and the loop stops. The output shows that the loop executed five times, printing the count values from 1 to 5.

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

The `for` loop is a fundamental loop structure in programming that allows you to repeat a block of code for a specific number of times. It's often used when you have a known number of iterations. The syntax of a `for` loop consists of three parts: initialization, condition, and increment. Here's the basic structure:

```javascript
for (initialization; condition; increment) {
  // Code to be executed in each iteration
}
```

Here's an example that prints the numbers from 1 to 5 using a `for` loop:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

In this example:
- Initialization: `let i = 1;` initializes the loop variable `i` to 1.
- Condition: `i <= 5;` checks if the value of `i` is less than or equal to 5.
- Increment: `i++` increases the value of `i` by 1 after each iteration.

The loop will run for each value of `i` from 1 to 5, and the numbers will be printed to the console.

You can use `for` loops to iterate over arrays, perform tasks a specific number of times, and more. Just adjust the initialization, condition, and increment parts to suit your needs.

### for loop pseudocode
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