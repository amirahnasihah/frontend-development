# Merge Sort Problems in JS

## Basic Implementation

Merge Sort is a popular divide-and-conquer sorting algorithm commonly used in programming, including JavaScript. It works by breaking down the array into smaller subarrays, sorting them, and then merging them back together in the correct order.

Here's a simple implementation of the Merge Sort algorithm in JavaScript:

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [4, 7, 2, 1, 9, 8, 3, 6, 5];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
```

This code demonstrates a basic implementation of the Merge Sort algorithm in
JavaScript. It sorts an array of numbers and prints the sorted array to the
console. Remember that there are also built-in sorting functions in JavaScript,
like `Array.prototype.sort()`, but understanding sorting algorithms can be
beneficial for learning and problem-solving.

## TalentLabs - Recursive approach

```javascript
const merge = (leftList, rightList) => {
  let arr = [];

    while (leftList.length > 0 && rightList.length > 0) {
        if (leftList[0] < rightList[0]) {
            arr.push(leftList.shift());
        }
        else {
            arr.push(rightList.shift());
        }
    }

    return arr.concat(leftList).concat(rightList);
}

const mergeSort = (inputList) => {
  // Add your code here
  if (inputList.length === 1) {
        return inputList;
    } else {
        const half = Math.floor(inputList.length / 2);
        const left = inputList.splice(0, half);
        
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(inputList);

        return merge(sortedLeft, sortedRight);
    }
}
```

You've **implemented the Merge Sort algorithm using a recursive approach**, and you have a well-defined `merge` function to combine the sorted subarrays. This implementation will correctly sort an array of elements.

Just a quick note: the line `const half = inputList.length / 2;` could potentially cause issues with odd-length arrays, as dividing by 2 might lead to decimal values. It's recommended to use `Math.floor(inputList.length / 2)` to ensure that you get the correct index for splitting the array.

## Explanation Recursive Approach

```javascript
const merge = (leftList, rightList) => {
  let arr = [];

  while (leftList.length > 0 && rightList.length > 0) {
    if (leftList[0] < rightList[0]) {
      arr.push(leftList.shift());
    } else {
      arr.push(rightList.shift());
    }
  }

  return arr.concat(leftList).concat(rightList);
}
```

This part of the code defines a function named `merge` that takes two lists, `leftList` and `rightList`. It aims to combine these two lists in a sorted order. Here's how it works:

1. A new empty list called `arr` is created. This will eventually hold the merged and sorted elements.
2. A loop starts that continues as long as there are elements in both `leftList` and `rightList`.
3. Inside the loop, the code checks the first element of both `leftList` and `rightList`.
4. If the first element of `leftList` is smaller than the first element of `rightList`, the code removes the first element from `leftList` and adds it to the `arr` list.
5. If the first element of `rightList` is smaller or equal, the code removes the first element from `rightList` and adds it to the `arr` list.
6. This process continues until one of the input lists becomes empty.
7. Once the loop is done, any remaining elements in `leftList` and `rightList` are concatenated to the end of the `arr` list.
8. Finally, the `arr` list is returned, which now contains all elements from `leftList` and `rightList` merged and sorted.

Now, let's look at the `mergeSort` function:

```javascript
const mergeSort = (inputList) => {
  if (inputList.length === 1) {
    return inputList;
  } else {
    const half = Math.floor(inputList.length / 2);
    const left = inputList.splice(0, half);
    
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(inputList);

    return merge(sortedLeft, sortedRight);
  }
}
```

This function, called `mergeSort`, sorts a given list called `inputList` using the merge sort algorithm. Here's how it works:

1. The function starts by checking if the length of the `inputList` is 1. If it is, it means the list is already sorted, so the function returns the `inputList` as is.
2. If the length of the `inputList` is greater than 1, the function continues with the sorting process.
3. The code calculates the index `half` that represents the midpoint of the `inputList`.
4. The `left` list is created by taking the elements from the start of the `inputList` up to the midpoint.
5. The `mergeSort` function is then called recursively on both the `left` list and the remaining part of the `inputList`.
6. The sorted results from both the left and right sides are obtained.
7. Finally, the `merge` function is used to merge the two sorted halves (represented by `sortedLeft` and `sortedRight`) into a single sorted list, which is then returned.

That's how the code works step by step to perform the merge sort algorithm!

## JavaScript Prototype

### `splice()`

The `splice()` method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements at a specific index. It's a versatile method that can be quite helpful in various scenarios. Let's break down how it works:

**Syntax:**
```javascript
array.splice(startIndex, deleteCount, ...itemsToAdd);
```

- `array`: The array you want to modify.
- `startIndex`: The index at which to start the modification.
- `deleteCount`: The number of elements to remove starting from the `startIndex`. If `0`, no elements are removed.
- `itemsToAdd`: Elements you want to add at the `startIndex`.

**Usage Examples:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Removing elements using splice()
numbers.splice(1, 2); // Removes 2 and 3
// numbers is now [1, 4, 5]

// Replacing elements using splice()
numbers.splice(1, 1, 6, 7); // Replaces 4 with 6 and 7
// numbers is now [1, 6, 7, 5]

// Adding elements using splice()
numbers.splice(2, 0, 8, 9); // Adds 8 and 9 at index 2
// numbers is now [1, 6, 8, 9, 7, 5]
```

In the context of merge sort, you might use the `splice()` method to split an array into two halves by removing elements from a specific index. For example, in the code snippet you provided earlier, the `inputList.splice(0, half)` line divides the `inputList` into the `left` array.

Remember that `splice()` modifies the original array and returns an array of the removed elements. If you only want to access a portion of the array without modifying it, you can use the `slice()` method instead.

### `slice()`

In the context of JavaScript and arrays, the `slice()` method is used to create a new array that contains elements from a specific starting index up to (but not including) a specified ending index. It allows you to extract a portion of an array without modifying the original array. Here's how you can use it:

**Syntax:**
```javascript
array.slice(startIndex, endIndex);
```

- `array`: The array from which you want to extract a portion.
- `startIndex`: The index at which to start extracting elements (inclusive).
- `endIndex`: The index at which to stop extracting elements (exclusive).

**Usage Example:**
```javascript
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]
console.log(originalArray); // Original array is unchanged: [1, 2, 3, 4, 5]
```

In the context of the merge sort algorithm, you might use the `slice()` method to divide an array into two halves before applying the merge sort recursively. For example, in the code snippet you provided, the `inputList.splice(0, half)` line is used to extract the left half of the array, and the `mergeSort(inputList)` line is used to sort the right half.

Remember that `slice()` does not modify the original array but creates a new
array. If you're dealing with large arrays, keep in mind that creating new
arrays using `slice()` can consume memory.

# Quick Sort Problems in JS