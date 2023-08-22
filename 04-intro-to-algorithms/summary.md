- [Common Algorithm CheatSheet](#common-algorithm-cheatsheet)
- [Common Algorithm](#common-algorithm)
  - [Brute Force](#brute-force)
  - [Recursion](#recursion)
- [Searching Algorithm](#searching-algorithm)
  - [Linear Search](#linear-search)
  - [Binary Search](#binary-search)
- [Sorting Algorithm](#sorting-algorithm)
  - [Bubble Sort](#bubble-sort)
  - [Insertion Sort](#insertion-sort)

# Common Algorithm CheatSheet

Common Algorithm
1. Brute Force
2. Recursion

Searching Algorithm
1. Linear Search (aka Brute Force)
2. Binary Search

Sorting Algorithm
1. Bubble Sort
2. Insertion Sort
3. Merge Sort
4. Quick Sort

- definition
- psedeucode
- how it works/tips (simple terms)
- example code

# Common Algorithm


## Brute Force

## Recursion

# Searching Algorithm

## Linear Search

## Binary Search

# Sorting Algorithm

## Bubble Sort

## Insertion Sort

## Merge Sort

## Quick Sort

Definition:

Psedeucode:

How it works:

Example (with descriptive meaning):

```javascript
const partition = (arr, leftIndex, rightIndex) => {
    // Choose the rightmost element as the pivot
    let pivot = arr[rightIndex];
    
    // Initialize the index of the last element smaller than the pivot
    let lastSmallerIndex = leftIndex - 1;

    // Iterate through the subarray
    for (let currentIndex = leftIndex; currentIndex <= rightIndex - 1; currentIndex++) {
        // If the current element is smaller than the pivot
        if (arr[currentIndex] < pivot) {
            // Increment the index of the last smaller element
            lastSmallerIndex++;

            // Swap the current element with the last smaller element
            let temp = arr[lastSmallerIndex];
            arr[lastSmallerIndex] = arr[currentIndex];
            arr[currentIndex] = temp;
        }
    }

    // Swap the pivot with the element just after the last smaller element
    let temp = arr[lastSmallerIndex + 1];
    arr[lastSmallerIndex + 1] = pivot;
    arr[rightIndex] = temp;

    // Return the index of the pivot in its sorted position
    return lastSmallerIndex + 1;
}

const quickSort = (arr, leftIndex, rightIndex) => {
    // If there are more than one element in the subarray
    if (rightIndex > leftIndex) {
        // Partition the subarray and get the index of the pivot
        let pivotIndex = partition(arr, leftIndex, rightIndex);

        // Recursively sort the subarrays on both sides of the pivot
        quickSort(arr, leftIndex, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, rightIndex);
    }
}
```