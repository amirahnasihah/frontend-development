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
  - [Merge Sort (“divide and conquer”)](#merge-sort-divide-and-conquer)
  - [Quick Sort (“divide and conquer”)](#quick-sort-divide-and-conquer)

# Common Algorithm CheatSheet

Common Algorithm
1. Brute Force
2. Recursion

Searching Algorithm
1. Linear Search (aka Brute Force)
2. Binary Search

Sorting Algorithm
1. Bubble Sort - swap and swap
2. Insertion Sort - insert
3. Merge Sort - divide into smaller subarrays, use midpoint
4. Quick Sort - use fixed pivot to rearrange elements

**Definition:**
**How it works:**
**Example (with descriptive meaning):**
**Psedeucode:**

# Common Algorithm


## Brute Force

## Recursion

# Searching Algorithm

## Linear Search

## Binary Search

# Sorting Algorithm

> **To sort numbers, you need to provide a comparison function.**

## Bubble Sort

**Definition:**

- Simple sorting algorithm that repeatedly steps through the list, compares neighboring elements, and swaps them if in the wrong order. This process is repeated for each element until the entire list is sorted.

> bubble sort: kita comparekan element bersebelahan.

**How it works:**

> outer loop repeat, from left to second-last index. inner loop repeat, from left to third-last index. if 

- Bubble sort works by examining each set of neighboring elements in the array, from left to right, switching their positions if they are out of order.
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

**The reason for using `arr.length - i - 1` is to avoid unnecessary comparisons in the later iterations of the outer loop. Since the largest element is "bubbled up" to the end in each iteration, there's no need to compare it again in the subsequent iterations, as it's already in the correct position. This optimization helps make the sorting process more efficient.**

**Example (with descriptive meaning):**

```javascript

```

**Pseudocode Bubble Sort:**

1. Pseudocode example #1:

```
Initialize an array called "arr" with values [14, 33, 28, 40, 10]

For each "i" from 0 to length of arr - 1 (second last index):
    For each "j" from 0 to length of arr - i - 1:
        If the value at arr[j] is greater than the value at arr[j + 1]:
            Swap the values at arr[j] and arr[j + 1]

Print the sorted array "arr"
```

2. Pseudocode example #2:
```
Initialize an array called "arr" with values [14, 33, 28, 40, 10]

For each "i" from 0 to length of arr - 1:
    For each "j" from 0 to length of arr - i - 2:
        If the value at arr[j] is greater than the value at arr[j + 1]:
            Swap the values at arr[j] and arr[j + 1]

Print the sorted array "arr"
```

> in a function, Copy the input array and work on the cloned array. In JS, always try to work in an immutable way: `let inputArr = [...arr]` (spread operator)

## Insertion Sort

**Definition:**
**How it works:**
**Example (with descriptive meaning):**
**Psedeucode:**

## Merge Sort (“divide and conquer”)

**Definition:**

- It works by breaking down the array into smaller subarrays, sorting them, and then merging them back together in the correct order.

> Ingat tangan (5 jari). Divide and continue to divide until sorted by itself

**How it works:**

```javascript
const fruits = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"];

/*
Merge Sort, hint/tip:
1. 2 functions (A. mergeSort(), divide and divide until sorted itself; B. merge(), merge the left and right list)

2. Function 1 - mergeSort():
  A. if statement; This is exit condition to halt recursion. Need the base case where element equals to 1, then it stop recursion.
  
  B. else statement; need midpoint of array length, need left variable to store first half of array. This is the First Split (left and right).
  
  C. recursion - called mergeSort function directly. This is where recursively call `mergeSort` on `left` and `right` arrays. Where they will further divided into
  each individual element of array and is considered "sorted" in itself.
  
  D. recursion - Continue for merging process. return merge() function with arguments of that already halfed array, sortedLeft and sortedRight. Recursion continues until each individual element is considered "sorted" in itself
  
3. Function 2 - merge():
  A. need temporary variable of [empty array] to store the final sorted and merged array.
  
  B. while loop (continue looping as long as the condition is true); condition to keep looping is that both length of left and right must not negative number or none, must more than 0, at least 1 element. it stops the loop when no length left.
  
  C. if statement; the condition is, if the first element of leftList is less than first element of rightList, code executed: we **take-out/shift the first element from leftList** and then add/push it to the temp variable array.
  
  D. else statement; (first element of leftList is more than first element of rightList), we take-out/shift the first element from rightList and then add/push it to the temp variable array.
  
  E. exit while loop.
  
  F. return function call where we merge/concat both of the array of leftList with rightList.
*/
```

Merge Sort: Key Points to Remember

1. **Functions:**
   - There are two main functions: `mergeSort()` and `merge()`.
   
2. **mergeSort() Function:**
   - Has an exit condition using an `if` statement (base case) to stop recursion.
   - In the `else` statement:
     - Calculate midpoint to divide the array into `left` and `right`.
     - Use recursion to sort each smaller subarray (`left` and `right`).
     - Merging process begins by returning `merge()` with `sortedLeft` and `sortedRight`.
   
3. **merge() Function:**
   - Uses a temporary array (`arr`) to store the merged and sorted elements.
   - A `while` loop iterates as long as both `leftList` and `rightList` have elements.
   - In the loop:
     - Compares the first elements of `leftList` and `rightList`.
     - If the first element of `leftList` is smaller, it's shifted to `arr`.
     - If the first element of `rightList` is smaller, it's shifted to `arr`.
   - After the loop, any remaining elements from `leftList` and `rightList` are concatenated to `arr`.
   - The merged and sorted array in `arr` is returned.

**Psedeucode:**

```javascript
/* PART 1: divide by 2 and continue to divide until sorted by itself */

function mergeSort(inputList) {
  // base case to stop infinite recursion. when element left only 1, no need sort, just return inputList as size of 1.
  if (inputList.length === 1) {
    return inputList;
  } else {
    // but have more size elements, split array into 2 (left and right)  half is midpoint
    let midpoint = Math.floor(inputList.length / 2);
    let leftList = inputList.splice(0, midpoint);

    // recursively divide elements until inputList is size of 1, which sorted by itself
    let sortedLeft = merge(leftList);
    let sortedRight = merge(inputList);

    // after recursively divide elements, we merge the sortedLeft and sortedRight into single array
    // so, passed as arguments to merge() function
    return merge(sortedLeft, sortedRight);
  }
}

/* PART 2: merge the subarrays process */

function merge(leftList, rightList) {
  // since the array splited to 2, left and right. so, need to create new empty array variable to store that combined and sorted single array
  let arr = [];

  // keep looping as long as condition is true.
  // condition to keep looping: both left and right list have at least 1 element / more than 0 element (taknak kosong)
  // combine the halves into single array
  while (sortedLeft.length > 0 && sorted.length > 0) {
  	// if condition: 1st element of leftList smaller than 1st element of rightList
  	// then, shift up 1st element of leftList and push to arr[].
  	// sbbkan lagi kecik, jadi kita kena push ke array dulu as 1st element, start dari 1,2,...
  	if (leftList[0] < rightList[0]) {
  		arr.push(leftList.shift())
  	} else {
  		// else condition: 1st element of leftList > 1st element of rightList. then, shift element from rightList and push to arr.
  		arr.push(rightList.shift())
  	}
  }
  // after sorted both leftList and rightList
  // combine both into single array
  // arr is combined by leftList and combined by rightList
  return arr.concat(leftList).concat(rightList)
}

// example usage
const inputList = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"];
```

## Quick Sort (“divide and conquer”)

**Definition:**

>  Quick sort use "pivot" to sort array. Pivot is like a wall (a fixed point) to helps rearrange elements. Elements smaller than pivot goes to <-left. Elements bigger than pivot goes to right -> and will leads to a sorted array.

- Quick Sort picks an element as “pivot” and partitions the given array around the picked “pivot”.

- After “Partition”, all smaller elements (smaller than “pivot”) should be placed before “pivot”, and put all greater elements (greater than “pivot”) should be placed after “pivot”.

- After “Partition”, we will call “quickSort()” method for both the Right List and the Left List to sort each half.

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

// Example usage. Pivot is 6.
const array = [5, 2, 9, 3, 5, 6];
// passed to quickSort = (arr, leftIndex, rightIndex)
quickSort(array, 0, array.length - 1);
console.log(array); //  Output: [2, 3, 5, 5, 6, 9]
```

Partition Process Demonstration:

`i`/`lastSmallerIndex`: track the position where should the next “small” elements be placed

`j`/`currentIndex`: track which element we are comparing with “pivot”

At the very beginning, i = -1, j = 0.
that means if element 0 is smaller than pivot, then we will i++, and we will swap it with element i (after i++), aka element 0 aka, no need swap => because there are no element larger than pivot on the left.

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

** 1 ↔ 17

Partition Process Demonstration:

`i`: track the position where should the next “small” elements be placed

`j`: track which element we are comparing with “pivot”

now, i = 0, j = 1.
that means if element 1 is smaller than pivot, then we will swap it with element i+1, aka element 1 aka, no need swap => because there are no element larger than pivot on the left.

However, element 1 is larger than the pivot, so no need to bump up i or do swapping.

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

Partition Process Demonstration:

`i`: track the position where should the next “small” elements be placed

`j`: track which element we are comparing with “pivot”

now, i = 0, j = 2.
that means if element 2 is smaller than pivot, then we will i++, and swap element 2 with i (after i++), aka element 1

We need to do swap this time, because 3 is smaller than 6, and there is a element larger than pivot on the left (element 1)

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

** 17 ↔ 3

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