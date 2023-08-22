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

>  Quick sort use "pivot" to sort array. Pivot is like a wall (a fixed point) to helps rearrange elements. Elements smaller than pivot goes to <-left. Elements bigger than pivot goes to right -> and will leads to a sorted array.

- Quick Sort picks an element as “pivot” and partitions the given array around the picked “pivot”.

- After “Partition”, all smaller elements (smaller than “pivot”) should be placed before “pivot”, and put all greater elements (greater than “pivot”) should be placed after “pivot”.

- After “Partition”, we will call “quickSort()” method for both the Right List and the Left List to sort each half.

- Quick Sort is also a “divide and conquer” algorithm.

> Partition ni proses/perbuatan pengasingan untuk nak tahu kiri dan kanan. Cara kita sort utnuk guna partition ialah kalau element skrg lagi kecik dari pivot, ke kiri. **tip: less than symbol, `<` ingat ke kiri ⬅️, bandingkan dengan pivot (fixed point)**

**How it works:**

- Have 2 functions (recursive apprroach)
- Function 1: `quickSort()`. To sort the elements between `minIndex` and `maxIndex` of the array.
- Function 2: `partition()`. To rearrange the elements of an array in a way that allows the algorithm to efficiently sort the array into two sub-arrays: one containing elements smaller than a chosen pivot and another containing elements greater than the pivot.

**Example (with descriptive meaning):**

Code execute quickSort() -> partition() -> quickSort()

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

// Example usage
const array = [5, 2, 9, 3, 5, 6];
// passed to quickSort = (arr, leftIndex, rightIndex)
quickSort(array, 0, array.length - 1);
console.log(array); //  Output: [2, 3, 5, 5, 6, 9]
```

**Psedeucode:**

1. At start, the `quickSort` function is called with the array array, and the values `0` (which is the minimum index) and `array.length - 1` (which is the maximum index) are passed as arguments.
2. Part 1: Inside `quickSort()`. `if` statement; we want to have a condition where `maxIndex` is bigger than `minIndex` (nombor paling besar max kena lagi besar dari min number, obviously). first block must be true for the code to be executed. Nak cari min dan max (macam cari range)
3. Inside if block, penting kita nak kena cari adalah Pivot Index(`pi`). Kita create partition function untuk nak tahu kat mana pivot duduk lepas kita asingkan elements. **(First cycle, range would be from 0 to end. Partition function should return the position of pivot after partition)**. So, the `partition` function is also called with the array, and the values `0` (which is the minimum index) and `array.length - 1` (which is the maximum index) are passed as arguments.
4. Part 1, but also Part 2: Sekarang ni kita ada di partition function. So, create partition function.
5. First, kita setkan pivot kita at the always rightmost element (element paling kanan ataupun last element): `pivot = arr[maxIndex]`.
6. Pastu, setkan i = minIndex - 1 (what if minIndex is 0, so 0 minus 1??). It initializes `i` as one less than `minIndex`. **This will serve as the index for the last element that's smaller than the pivot.**
7. use for loop to loop thru aray to find the right position of pivot. start j from minIndex; continue until j less than or equal maxIndex (macam cari range?); i++.

---

- This is the `quickSort` function, which implements the QuickSort algorithm.
- It takes three arguments: `arr` (the array to be sorted), `minIndex` (the starting index of the subarray to be sorted), and `maxIndex` (the ending index of the subarray to be sorted).
- The purpose of this function is to sort the elements between `minIndex` and `maxIndex` of the array.

Here's how it works:

1. It first checks if `maxIndex` is greater than `minIndex`. This condition ensures that there's more than one element in the subarray, as the sorting is not needed for single or empty subarrays.

2. If the condition is met, it calls the `partition` function to find the correct position for the pivot element. The result of `partition` is stored in the variable `pi`.

3. After partitioning, the function makes two recursive calls to `quickSort`:
   - One for the subarray on the left(⬅ kiri) of the pivot: `quickSort(arr, minIndex, pi - 1)`.(quickSort(array, from minIndex until the previous pivot))
   - Another for the subarray on the right(kanan ➡ ) of the pivot: `quickSort(arr, pi + 1, maxIndex)`. (quickSort(array, after pivot until maxIndex))

> pi - 1 is previous element; pi + 1 is next element

4. The partitioned subarrays will continue to be sorted in this recursive manner until they're fully sorted.

- This is the `partition` function, responsible for rearranging the array elements around the pivot.
- It takes three arguments: `arr` (the array being sorted), `minIndex` (the starting index of the subarray to partition), and `maxIndex` (the ending index of the subarray to partition).

Here's how it works:

1. It selects the pivot element, which is assumed to be the rightmost element (`arr[maxIndex]`).
2. It initializes `i` as one less than `minIndex`. This will serve as the index for the last element that's smaller than the pivot.
3. The loop iterates through the subarray from `minIndex` to `maxIndex - 1` *(second-last element bcs last index alrdy chosen as pivot so, no need to count)*:
   - If the current element (`arr[j]`) is smaller than the pivot, it means that it should be moved to the left side of the pivot. So, `i` is incremented, and a swap is performed to move the element to the correct position.
4. After the loop, the elements have been rearranged such that elements smaller than the pivot are on the left and elements greater than the pivot are on the right.
5. The pivot element (`arr[maxIndex]`) is then swapped with the element at `arr[i + 1]`, effectively placing the pivot in its sorted position.
6. The function returns the index at which the pivot has been placed in the rearranged array (`i + 1`).

This partitioning process ensures that the pivot is positioned correctly within the array, with smaller elements to its left and larger elements to its right. This is a fundamental step in the QuickSort algorithm.