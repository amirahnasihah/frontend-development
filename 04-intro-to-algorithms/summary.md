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

**Definition:**

>  Quick sort use "pivot" to sort array. Pivot is like a wall (a fixed point) to helps rearrange elements. Elements smaller than pivot goes to <-left. Elements bigger than pivot goes to right ->

- Quick Sort picks an element as “pivot” and partitions the given array around the picked “pivot”.

- After “Partition”, all smaller elements (smaller than “pivot”) should be placed before “pivot”, and put all greater elements (greater than “pivot”) should be placed after “pivot”.

- After “Partition”, we will call “quickSort()” method for both the Right List and the Left List to sort each half.

- Quick Sort is also a “divide and conquer” algorithm.

> pivot is a reference point that helps partition and sort an array efficiently by dividing it into smaller segments and using recursive strategies.
> pivot as a central element that helps in dividing and conquering the sorting process. Its main purpose is to aid in rearranging the elements in a way that eventually leads to a sorted array.

Partition ni proses/perbuatan pengasingan untuk nak tahu kiri dan kanan. Cara kita sort utnuk guna partition ialah kalau element skrg lagi kecik dari pivot, ke kiri. **tip: less than symbol, `<` ingat ke kiri ⬅️, bandingkan dengan pivot (fixed point)**

**Psedeucode:**



**How it works:**

- have 2 functions (recursive apprroach)
- Function 1: quickSort(). To sort the elements between `minIndex` and `maxIndex` of the array.
- Function 2: partition(). To rearrange the elements of an array in a way that allows the algorithm to efficiently sort the array into two sub-arrays: one containing elements smaller than a chosen pivot and another containing elements greater than the pivot.

**Example (with descriptive meaning):**

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