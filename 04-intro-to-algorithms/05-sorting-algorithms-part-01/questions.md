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

---

Let's clarify this.

The placeholders `a` and `b` are not fixed numbers like `(3, 1)`. Instead, they represent the elements being compared while the sorting algorithm is doing its work. When you use the `sort()` method with the arrow function `(a, b) => a - b`, the sorting algorithm will automatically provide the correct values for `a` and `b` as it compares the elements within the `numbers` array.

So, in your example:

```javascript
const numbers = [3, 1, 8, 2, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 5, 8]
```

The sorting algorithm first compares `3` with `1`. It calculates `3 - 1`, which is `2`. Since the result is positive, it means `3` is larger than `1`, so their positions are swapped.

Then it moves on to `1` and `8`. It calculates `1 - 8`, which is `-7`. Since the result is negative, it means `1` is smaller than `8`, so their positions are not swapped.

The sorting continues for the rest of the elements, using the same logic. In the end, the array is sorted from smallest to largest: `[1, 2, 3, 5, 8]`.

---

Let's go through the sorting process step by step using the placeholders `a` and `b`.

1. **First comparison: a=3, b=1**
- The arrow function `(a, b) => a - b` calculates `3 - 1`, which is `2`. Since the result is positive, `3` is considered larger than `1`, so their positions are swapped.
- Array after this comparison: `[1, 3, 8, 2, 5]`

2. **Second comparison: a=3, b=8**
- The arrow function `(a, b) => a - b` calculates `3 - 8`, which is `-5`. Since the result is negative, `3` is considered smaller than `8`, so their positions remain unchanged.
- Array after this comparison: `[1, 3, 8, 2, 5]`

3. **Third comparison: a=8, b=2**
- The arrow function `(a, b) => a - b` calculates `8 - 2`, which is `6`. Since the result is positive, `8` is considered larger than `2`, so their positions are swapped.
- Array after this comparison: `[1, 3, 2, 8, 5]`

4. **Fourth comparison: a=8, b=5**
- The arrow function `(a, b) => a - b` calculates `8 - 5`, which is `3`. Since the result is positive, `8` is considered larger than `5`, so their positions are swapped.
- Array after this comparison: `[1, 3, 2, 5, 8]`

5. **Fifth comparison: a=5, b=8**
- The arrow function `(a, b) => a - b` calculates `5 - 8`, which is `-3`. Since the result is negative, `5` is considered smaller than `8`, so their positions remain unchanged.
- Array after this comparison: `[1, 3, 2, 5, 8]`

The sorting process continues in this manner until all elements are compared and arranged in the correct order. The key concept to understand is that the placeholders `a` and `b` represent the two elements being compared at each step of the sorting algorithm.

# Bubble Sort Problems in JS

## Basic implementation

The Bubble Sort algorithm is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated for each element until the entire list is sorted. Here's a basic implementation of the Bubble Sort algorithm in JavaScript:

```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Using bubble sort to sort this array in increasing order

Consider using bubble sort to sort this array in increasing order.

Converting into code:

```javascript
const arr = [14, 33, 28, 40, 10]

// How many iterations of swapping we need to do?
for (let i = 0; i < arr.length-1; i++) {
  // For each iteration, how many comparisons we need to do?
  for (let j = 0; j < arr.length-i-1; j++) {
    if (arr[j] > arr[j + 1]) {
      j_value = arr[j]
      j_plus_1_value = arr[j + 1]
      arr[j] = j_plus_1_value
      arr[j + 1] = j_value
    }
  }
}

console.log(arr)
// Output: [10, 14, 28, 33, 40]
```

```javascript
arr = [14, 33, 28, 40, 10]
```

**How**

- Bubble sort works by examining each set of adjacent elements in the array, from left to right, switching their positions if they are out of order.
- The algorithm repeats this process until it can traverse the entire array and cannot find two elements that need to be swapped.

1. 1st: Bubble sort starts with the first two elements, comparing them to check which one is greater. Since 33 > 14, it is in the correct position.

2. 2nd: We compare 33 with 28.(Compare 2nd and 3rd element). Since 28 < 33, it is in incorrect position.
So we need to swap the position of 28 and 33. The **new array** will be: `[14, 28, 33, 40, 10]`

3. 3rd: We compare 33 with 40.(Compare 3rd and 4th element). Since 40 > 33, it is in the correct position.

4. 4th: We compare 40 with 10.(Compare 4th and 5th element). Since 10 < 40, it is in incorrect position.
So we need to swap the position of 10 and 40. The **new array** will be: `[14, 28, 33, 10, 40]`

5. 5th: Now we have reached the end of the array. Our array look like this: `[14, 28, 33, 10, 40]`.
But **the array is still not sorted. We need to repeat step 1 to 4 again. Until our array is sorted.**

(Note that we don’t need to worry about “40” anymore as we are sure that it is the largest one)

## Bubble Sort Algorithm (`j < arr.length - i - 1;`)

Converting into code:

```javascript
const arr = [14, 33, 28, 40, 10]

// How many iterations of swapping we need to do?
for (let i = 0; i < arr.length-1; i++) {
  // For each iteration, how many comparisons we need to do?
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      j_value = arr[j]
      j_plus_1_value = arr[j + 1]
      arr[j] = j_plus_1_value
      arr[j + 1] = j_value
    }
  }
}

console.log(arr)
// Output: [10, 14, 28, 33, 40]
```

**EXPLANATION**

The expression `j < arr.length - i - 1` is **used in the inner loop to control how many comparisons and swaps are performed in each iteration**.
Let's break it down step by step:

1. `arr.length` is the total number of elements in the array. In your case, it's 5 because there are five numbers in the array `[14, 33, 28, 40, 10]`.

2. `i` is the variable that represents the current iteration of the outer loop. It starts from 0 and increases by 1 with each iteration.

3. `arr.length - i - 1` calculates the number of elements that need to be considered in the inner loop. Since the outer loop progresses, the largest value of `i` will be 4 (when `i` is equal to `arr.length - 1`). So, for each iteration of the outer loop, we are reducing the number of elements in the inner loop by 1.

Let's see how this works:

- In the first iteration of the outer loop (`i = 0`), the inner loop will run for `j` values from 0 to `arr.length - i - 1`, which is 0 to 4. This means it will compare and possibly swap adjacent pairs of all five elements.

```plaintext
`arr.length - i - 1`

5 - 0 - 1 = 4; (i is at index 0, the current element of outer loop)
```

- In the second iteration of the outer loop (`i = 1`), the inner loop will run for `j` values from 0 to `arr.length - i - 1`, which is 0 to 3. This means it will compare and possibly swap adjacent pairs of the first four elements.

```plaintext
`arr.length - i - 1`

5 - 1 - 1 = 3; (i is at index 1, the new current element of outer loop)
```

- And so on...

The reason for using `arr.length - i - 1` is to avoid unnecessary comparisons in
the later iterations of the outer loop. Since the largest element is "bubbled
up" to the end in each iteration, there's no need to compare it again in the
subsequent iterations, as it's already in the correct position. This
optimization helps make the sorting process more efficient.

## Part 2 Inner Loop

```javascript
const arr = [14, 33, 28, 40, 10]

// existing code
if (arr[j] > arr[j + 1]) {
  j_value = arr[j]
  j_plus_1_value = arr[j + 1]
  arr[j] = j_plus_1_value
  arr[j + 1] = j_value
}
// existing code

console.log(arr)
// Output: [10, 14, 28, 33, 40]
```

## minus 1 in loop vs last index (-1)

```javascript
const arr = [14, 33, 28, 40, 10]

// -1 use in variable (Searching Algorithm - Binary Search)
end = arr.length - 1
console.log(end)

// -1 use directly inside loop
for (let i = 0; i < arr.length - 1; i++) {
  // existing code here
}
```

> when store in variable, the -1 means the last index of array. But when use inside the loop, it is means second last index?

When you store `arr.length - 1` in a variable, it represents the last index of the array. For example:
```javascript
const end = arr.length - 1;
```
Here, `end` holds the value of the last index, and you can use it later in your code.

However, when you use `arr.length - 1` directly inside the loop condition like this:
```javascript
for (let i = 0; i < arr.length - 1; i++) {
  // existing code here
}
```
It's used to ensure that the loop runs up to the second-to-last index, stopping
just before the last index. This is important when performing certain algorithms
like the bubble sort you've shown earlier, where you don't need to compare or
swap the last element in the final iteration.

## `-1` cases

Yes, the "-1" adjustment is quite common in programming and can be used in various contexts. Here are a few other cases where you might encounter it:

1. **Indexing Arrays**: As you mentioned, it's often used to access the last element or the second-to-last element of an array. For example, `arr[arr.length - 1]` gives you the last element.

2. **Loop Conditions**: Apart from sorting loops, there are cases where you might want to loop through all but the last or first elements of an array. For example, you could loop from the first element to the second-to-last element using `for (let i = 0; i < arr.length - 1; i++)`.

3. **Slicing Arrays**: When using array slicing, you might use `-1` to indicate the last element. For instance, `arr.slice(0, -1)` gives you a new array containing all elements except the last one.

4. **String Manipulation**: It's used in string manipulation, too. If you want to remove the last character from a string, you can use `str.slice(0, -1)`.

5. **Array Methods**: Some array methods like `pop()` and `splice()` remove the last element from the array. You wouldn't use `-1` directly here, but they involve working with the last element in some cases.

Remember, the `-1` adjustment is generally used when dealing with positions or
indices to make sure you're referring to the element you intend to work with.

# Insertion Sort Problems in JS