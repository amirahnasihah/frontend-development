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
        const half = inputList.length / 2;
        const left = inputList.splice(0, half);
        
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(inputList);

        return merge(sortedLeft, sortedRight);
    }
}
```

You've **implemented the Merge Sort algorithm using a recursive approach**, and you have a well-defined `merge` function to combine the sorted subarrays. This implementation will correctly sort an array of elements.

Just a quick note: the line `const half = inputList.length / 2;` could potentially cause issues with odd-length arrays, as dividing by 2 might lead to decimal values. It's recommended to use `Math.floor(inputList.length / 2)` to ensure that you get the correct index for splitting the array.

Overall, your implementation demonstrates a good understanding of the Merge Sort
algorithm in JavaScript. Well done!

# Quick Sort Problems in JS