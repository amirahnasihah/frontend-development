# Sorting Problems

## `numbers.sort((a, b) => a - b);` - Sorting Numbers

In the line of code `numbers.sort((a, b) => a - b);`, we're telling the computer how to compare and arrange the numbers in the `numbers` list.

Think of `a` and `b` like two numbers that the computer is comparing. The computer wants to figure out if `a` should come before `b` or if `b` should come before `a`. To do this, we use `a - b`.

- If `a - b` is a positive number, that means `a` is bigger than `b`, so `a` should come after `b`.
- If `a - b` is a negative number, that means `a` is smaller than `b`, so `a` should come before `b`.
- If `a - b` is zero, that means `a` and `b` are the same, so their order doesn't matter.

By using this simple trick of subtracting `b` from `a`, the computer knows how to compare two numbers and sort them in the right order. This way, the smallest numbers end up at the beginning of the list, and the biggest numbers end up at the end.

# Bubble Sort Problems in JS

# Insertion Sort Problems in JS