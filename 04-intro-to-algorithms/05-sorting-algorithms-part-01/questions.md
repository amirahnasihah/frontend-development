# Sorting Problems

## `numbers.sort((a, b) => a - b);` - Sorting Numbers

**To sort numbers, you need to provide a comparison function.**

In the line of code `numbers.sort((a, b) => a - b);`, we're telling the computer how to compare and arrange the numbers in the `numbers` list.

Think of `a` and `b` like two numbers that the computer is comparing. The computer wants to figure out if `a` should come before `b` or if `b` should come before `a`. To do this, we use `a - b`.

- If `a - b` is a positive number, that means `a` is bigger than `b`, so `a` should come after `b`.
- If `a - b` is a negative number, that means `a` is smaller than `b`, so `a` should come before `b`.
- If `a - b` is zero, that means `a` and `b` are the same, so their order doesn't matter.

By using this simple trick of subtracting `b` from `a`, the computer knows how to compare two numbers and sort them in the right order. This way, the smallest numbers end up at the beginning of the list, and the biggest numbers end up at the end.

### `((a, b) => ...)`

The part `((a, b) => ...)` is something called an "arrow function" in JavaScript. It's a way to create a small, inline function that can be used for specific purposes, like sorting in this case.

Let's break it down step by step:

1. `(a, b)` - This part is like a placeholder for the two numbers you're comparing. When the sorting happens, the arrow function will receive two numbers from the array, and you can use `a` and `b` to represent them.

2. `=>` - This arrow is like saying "transform into." It connects the placeholders `(a, b)` to the code that follows. Whatever comes after the arrow will be the result of the function.

3. `...` - This part is where you put the code that tells the computer how to compare the two numbers `a` and `b`. In the specific case of `a - b`, it's subtracting `b` from `a` to figure out their order, as I explained earlier.

So when you put it all together, `((a, b) => a - b)` is a quick way of creating a function that takes two numbers, subtracts the second from the first, and that result is what the computer uses to decide how to sort the numbers in your array.

# Bubble Sort Problems in JS

# Insertion Sort Problems in JS