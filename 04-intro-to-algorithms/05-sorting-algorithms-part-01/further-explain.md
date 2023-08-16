- [Sorting Algorithm](#sorting-algorithm)
- [Bubble Sort](#bubble-sort)
- [Insertion Sort](#insertion-sort)
  - [Exercises explained](#exercises-explained)
    - [bubble-sort.js](#bubble-sortjs)
    - [insertion-sort.js](#insertion-sortjs)
- [Other](#other)

# Sorting Algorithm

JavaScript offers several built-in sorting algorithms through the `Array.prototype.sort()` method. It uses a variation of the QuickSort algorithm called "TimSort." It's efficient for most use cases, but keep in mind it sorts items as strings by default.

> sort() : sorts items as strings alphabetically by default, in ascending order.

## Sorting String

You can sort strings in JavaScript using the built-in `Array.prototype.sort()` method. By default, this method sorts elements alphabetically in ascending order. Here's an example of how to sort an array of strings:

```javascript
const unsortedStrings = ["banana", "apple", "grape", "pear"];
const sortedStrings = unsortedStrings.sort();

console.log(sortedStrings); // Output: ["apple", "banana", "grape", "pear"]
```

If you want to sort strings in **descending order**, you can provide a custom sorting function to the `sort()` method:

```javascript
const unsortedStrings = ["banana", "apple", "grape", "pear"];
const sortedStringsDescending = unsortedStrings.sort((a, b) =>
  b.localeCompare(a)
);

console.log(sortedStringsDescending); // Output: ["pear", "grape", "banana", "apple"]
```

The `localeCompare()` method is used to compare strings while taking into
account locale-specific sorting rules. In this case, by reversing the comparison
(comparing `b` to `a`), you achieve descending order sorting.

The function `unsortedStrings.sort((a, b) => b.localeCompare(a))` is a custom comparison function used with the `sort()` method to sort an array of strings in descending order.

Here's how it works:

1. `unsortedStrings` is an array of strings that you want to sort in descending order: `["banana", "apple", "grape", "pear"]`.

2. `sort()` is a built-in JavaScript array method that sorts the elements of an array in-place. By default, it sorts elements as strings.

3. `(a, b) => b.localeCompare(a)` is the custom comparison function you provide to the `sort()` method. This function compares two elements `a` and `b` by using the `localeCompare()` method. The `localeCompare()` method compares two strings and returns a number indicating their relative order.

4. `b.localeCompare(a)` compares the string `b` to the string `a`. When `b` comes before `a` in alphabetical order, `localeCompare()` returns a negative value. By using this comparison in the custom function, you're effectively instructing `sort()` to place `b` before `a`, which results in descending order sorting.

So, when the `sort()` method applies the custom comparison function to the array
of strings, it compares each pair of strings and reorders them based on their
relative order. As a result, you get the output `["pear", "grape", "banana", "apple"]`, which is the original array sorted in descending alphabetical order.

---

> **What is `a`. What is `b` for? What are they represent in array?**

In the context of the code you provided:

```javascript
const unsortedStrings = ["banana", "apple", "grape", "pear"];
const sortedStringsDescending = unsortedStrings.sort((a, b) =>
  b.localeCompare(a)
);

console.log(sortedStringsDescending); // Output: ["pear", "grape", "banana", "apple"]
```

- `a` represents the first element being compared in the array.
- `b` represents the second element being compared in the array.

When you use the `.sort()` method with a custom comparison function like `(a, b) => b.localeCompare(a)`, the function is called multiple times to compare pairs of elements within the array. The comparison function determines the order of these elements by comparing `a` and `b`.

In your specific example, the `b.localeCompare(a)` comparison is used to sort
the array of strings in descending order. When the comparison function returns a
negative value, it indicates that `b` should come before `a` in the sorted
order, effectively reversing the normal ascending order and giving you a
descending order of strings.

---

To sort an array of objects by the "name" property, you need to modify the comparison function slightly, as comparing strings is different from comparing numbers. Here's how you can sort the `people` array by the "name" property:

```javascript
const people = [
  { name: "Alice", age: 30 },
  { name: "Dob", age: 25 },
  { name: "Beve", age: 35 },
];

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
```

In this code, the comparison function `a.name.localeCompare(b.name)` uses the `localeCompare()` method to compare the "name" properties of the objects. This method compares strings while taking into account locale-specific sorting rules. It returns a positive value if `a.name` comes after `b.name` in the sorting order, a negative value if it comes before, and 0 if they are the same.

This will output the `people` array sorted by the "name" property:

```
[
  { name: "Alice", age: 30 },
  { name: "Beve", age: 35 },
  { name: "Dob", age: 25 }
]
```

## Sorting Numbers

Sorting numbers in JavaScript is quite straightforward. You can use the built-in
`Array.prototype.sort()` method to sort an array of numbers. **By default, it sorts elements as strings, so you might need to provide a custom comparison function to ensure numeric sorting**.
Here's how you can do it:

```javascript
const unsortedNumbers = [5, 2, 8, 1, 10];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 2, 5, 8, 10]
```

In this example, the comparison function `a - b` returns a negative value when `a` is smaller than `b`, causing the numbers to be sorted in ascending order.

Yes, you have the right understanding!

In the comparison function `(a, b) => a - b`, when `a` is subtracted from `b`, the result determines whether `a` should come before `b` in the sorted order. If the result is positive, it means that `a` is greater than `b`, and swapping them ensures that the array is sorted in ascending order. If the result is negative, it means that `a` is smaller than `b`, and no swap is needed.

So, your interpretation is correct: the comparison result dictates whether `a`
and `b` should swap positions to achieve the desired sorting order. In the end,
the array becomes sorted in ascending numerical order.

For **descending order sorting**, you can reverse the comparison:

```javascript
const unsortedNumbers = [5, 2, 8, 1, 10];
const sortedNumbersDescending = unsortedNumbers.sort((a, b) => b - a);

console.log(sortedNumbersDescending); // Output: [10, 8, 5, 2, 1]
```

Keep in mind that the `sort()` method modifies the original array. If you want to avoid modifying the original array, you can create a copy of the array before sorting:

```javascript
const unsortedNumbers = [5, 2, 8, 1, 10];
const sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 2, 5, 8, 10]
console.log(unsortedNumbers); // Original array remains unchanged
```

---

**To sort numbers, you need to provide a comparison function:**

```javascript
const numbers = [3, 1, 8, 2, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 5, 8]
```

For more complex sorting, you can customize the comparison function. If you need to sort objects based on a specific property, like sorting an array of objects by their ages:

```javascript
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Eve", age: 35 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);
```

Remember that `sort()` modifies the original array. If you want to keep the original array unchanged, consider making a copy before sorting:

```javascript
const originalArray = [3, 1, 8, 2, 5];
const sortedArray = [...originalArray].sort((a, b) => a - b);
```

For more advanced scenarios, there are other sorting algorithms like MergeSort and HeapSort, but they aren't built into JavaScript and would require custom implementation.

# Bubble Sort

Pseudocode example #1:

```
Set swap counter to a non-zero value
Repeat until the swap counter is equal to 0:
    Reset swap counter to 0
    Look at each adjacent pair:
        If two adjacent elements are not in order:
            Swap them
            Add one to the swap counter
```

Pseudocode example #2:

```
Repeat until no swaps
    For i from 0 to n–2
        If i'th and i+1'th elements out of order
            Swap them
```

# Insertion Sort

To build a sorted array in place; shifting elements out of the way to make room if necessary as the array is being built.

Pseudocode example #1:

```
Call the first element of the array sorted
Repeat until all elements are sorted:
    Insert next unsorted item into sorted part shifting the required number of items
```

Pseudocode example #2:

```
For i from 1 to n–1
    Insert next unsorted item into sorted part shifting i items
```

JavaScript example:

```javascript
insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};
```

## why a while loop is used inside a for loop for the insertion sort algorithm

Why a while loop is used inside a for loop for the insertion sort algorithm.

In the given code snippet:
```javascript
for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = current;
}
```

Here's what's happening:

1. The outer `for` loop iterates over each element in the array, starting from the second element (at index 1) and going up to the last element.

2. Inside the loop, a variable `current` is used to store the value of the element at the current index `i`. This is the element that you're trying to insert into its correct position within the already sorted part of the array.

3. The variable `j` is set to `i - 1`, which means it's initially pointing to the element just before the current element.

4. The `while` loop is used to compare the value of `current` with the elements before it in the sorted part of the array (i.e., elements at indices `j`). The condition `j >= 0 && current < arr[j]` ensures that the loop continues as long as `j` is a valid index (not negative) and the current element is smaller than the element at index `j`.

5. Inside the `while` loop, you're shifting the elements to the right by assigning `arr[j]` to `arr[j + 1]`. This creates space for the `current` element to be inserted in its correct position.

6. After the `while` loop ends, you've found the correct position for the `current` element, and you assign its value to `arr[j + 1]`.

By using the `while` loop inside the `for` loop, you're able to keep moving back through the already sorted part of the array until you find the correct position for the `current` element. This process continues for each element in the array, effectively sorting it.

So, the combination of the `for` loop and the `while` loop helps achieve the insertion sort algorithm's goal of inserting each element into its proper position within the sorted part of the array.

# Exercises explained

## bubble-sort.js

## insertion-sort.js

# Other

## Having 2 for loops (compare elements within same subarray)

Yes, when you want to compare elements within a subarray (nested array) or a 2D array, you would typically use two nested loops. The outer loop iterates through the main array, while the inner loop iterates through the subarray (nested array) at each position in the main array.

The code snippet you provided:

```javascript
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // Your code here
  }
}
```

In this case, `i` represents the index of the main array, and `j` represents the
index of the subarray. The inner loop (`j`) iterates through each element of the
subarray for every element in the main array.

Inside the inner loop, you can perform comparisons or other operations involving the elements at indices `i` and `j`.

## 2D array

For example, if you have an array of arrays (a 2D array) and you want to compare elements within the subarrays, you could use this structure:

This nested loop structure allows you to access and work with individual
elements within the subarrays of a 2D array.

The code you've provided is a nested loop structure that iterates through a 2D array (`array2D`) and allows you to perform operations on each element within the subarrays. Let's break down the loop structure and what it does:

```javascript
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < array2D.length; i++) {
  for (let j = 0; j < array2D[i].length; j++) {
    // Compare or perform operations on array2D[i][j]
  }
}
```

- The outer loop (`for (let i = 0; i < array2D.length; i++)`) iterates through
  the main array (`array2D`). `i` represents the **index of the main array**.

- Inside the outer loop, the inner loop (`for (let j = 0; j < array2D[i].length; j++)`) iterates through the subarray at index `i` in the main array. **`j` represents the index of the subarray**.

- Within the inner loop, you have the opportunity to work with each element of the 2D array using `array2D[i][j]`. You can compare, modify, or perform any operations you need on these elements.

Expected Output:
Since the code snippet you provided doesn't include any specific operations, the output will depend on what you actually do within the inner loop. Without those operations, the code itself won't produce any visible output.

However, if you were to add some operations, let's say printing the elements, it might look something like this:

```javascript
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < array2D.length; i++) {
  for (let j = 0; j < array2D[i].length; j++) {
    console.log(array2D[i][j]);
  }
}
```

Output:

```
1
2
3
4
5
6
7
8
9
```

In this example, each element in the 2D array is printed out as the inner loop
iterates through the subarrays.

> What is index of the main array here, `for (let i = 0; i < array2D.length; i++)`

In the code you provided:

The index `i` corresponds to the index of the main array `array2D`. In this context, `i` represents the row of the 2D array.

Here's the breakdown of what happens:

- When `i` is 0, the inner loop iterates through the subarray at index 0: `[1, 2, 3]`.
- When `i` is 1, the inner loop iterates through the subarray at index 1: `[4, 5, 6]`.
- When `i` is 2, the inner loop iterates through the subarray at index 2: `[7, 8, 9]`.

So, the value of `i` corresponds to the row index of the 2D array. In your
example, the value of `i` goes from 0 to 2, which represents the rows of the
`array2D`.

> What is the index of the subarray here, `for (let j = 0; j < array2D[i].length; j++)`

In the code you provided:

The index `j` corresponds to the index of the subarray within the main array `array2D`. In this context, `j` represents the column of the 2D array.

Here's what happens:

- When `i` is 0, the inner loop iterates through the subarray at index 0: `[1, 2, 3]`. In this subarray, `j` goes from 0 to 2, representing the indices of the elements `[1, 2, 3]`.
- When `i` is 1, the inner loop iterates through the subarray at index 1: `[4, 5, 6]`. In this subarray, `j` again goes from 0 to 2, representing the indices of the elements `[4, 5, 6]`.
- When `i` is 2, the inner loop iterates through the subarray at index 2: `[7, 8, 9]`. In this subarray, `j` once more goes from 0 to 2, representing the indices of the elements `[7, 8, 9]`.

So, the value of `j` corresponds to the column index of the 2D array. In your
example, the value of `j` goes from 0 to 2, which represents the column indices
within each subarray.