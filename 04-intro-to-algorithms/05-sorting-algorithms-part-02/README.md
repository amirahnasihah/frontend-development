- [Assignment 6 - Sorting Algorithm (Part 2)](#assignment-6---sorting-algorithm-part-2)
  - [1.1 In this part, you are going to try coding the Merge Sort algorithm we discussed in class.](#11-in-this-part-you-are-going-to-try-coding-the-merge-sort-algorithm-we-discussed-in-class)
  - [1.2 In this part, you are going to try coding the Quick Sort algorithm we discussed in class.](#12-in-this-part-you-are-going-to-try-coding-the-quick-sort-algorithm-we-discussed-in-class)
- [Lecture 6: Sorting Algorithms - Part 2](#lecture-6-sorting-algorithms---part-2)
  - [Recursion Review](#recursion-review)
    - [What is Recursive algorithm?](#what-is-recursive-algorithm)
    - [JavaScript Recursive Function Example](#javascript-recursive-function-example)
  - [Sorting Algorithm 3 - Merge Sort](#sorting-algorithm-3---merge-sort)
    - [Merge Sort](#merge-sort)
    - [Merge Sort](#merge-sort-1)
    - [Merge Sort](#merge-sort-2)
    - [Merge Sort](#merge-sort-3)
    - [Merge Sort](#merge-sort-4)
    - [Merge Sort](#merge-sort-5)
    - [Merge Sort](#merge-sort-6)
    - [Merge Sort](#merge-sort-7)
    - [Merge Sort](#merge-sort-8)
    - [Merge Sort Algorithm](#merge-sort-algorithm)
    - [Merge Sort Algorithm](#merge-sort-algorithm-1)
    - [Merge Sort Algorithm](#merge-sort-algorithm-2)
  - [Sorting Algorithm 4 - Quick Sort](#sorting-algorithm-4---quick-sort)
    - [Quick Sort](#quick-sort)
    - [Pivot](#pivot)
    - [Partition](#partition)
    - [Partition Process Demonstration](#partition-process-demonstration)
    - [Partition Process Demonstration](#partition-process-demonstration-1)
    - [Partition Process Demonstration](#partition-process-demonstration-2)
    - [Summarizing Partition](#summarizing-partition)
    - [Summarizing Partition](#summarizing-partition-1)
    - [Quick Sort](#quick-sort-1)
  - [Merge Sort vs Quick Sort](#merge-sort-vs-quick-sort)
    - [geeksforgeeks (other reference)](#geeksforgeeks-other-reference)
      - [Algorithm:](#algorithm)
- [Feedback on exercise](#feedback-on-exercise)
  - [merge-sort.js](#merge-sortjs)
  - [quick-sort.js](#quick-sortjs)

# Assignment 6 - Sorting Algorithm (Part 2)

General Notes:

**You are only required to complete one of the 2 questions. But feel free to complete both if you are interested.**

Please leverage the test cases we provided at the bottom of each of the code files to debug your program. Those test cases cover different scenarios of the given tasks, and provide a way for you to check answers.

If some of the test cases are failing, that means you have some obvious scenarios that you are not covering yet. Try to dry run the code with the failing test cases with your mind or a piece of paper, and find out what you are missing. 

## 1.1 In this part, you are going to try coding the Merge Sort algorithm we discussed in class.

Open `merge-sort.js` file and please finish the `merge` and `mergeSort` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.2 In this part, you are going to try coding the Quick Sort algorithm we discussed in class.

Open `quick-sort.js` file and please finish the `partition` and `quickSort` function according to the specification in the file. We have prepared some test cases for you to test your functions.

# Lecture 6: Sorting Algorithms - Part 2

Agenda:

- Recursion Revision
- Merge Sort
- Quick Sort

## Recursion Review

### What is Recursive algorithm?

- The process in which a function calls itself directly or indirectly is called recursion.

- Recursion is useful for problems that can be represented by a simpler version of the same problem.

- The smallest example of the same task has a non-recursive solution.

### JavaScript Recursive Function Example

```javascript
function factorial(n) {
    if(n == 0 || n == 1) {
        return 1;
    } else{
        return n * factorial(n-1);
    }
}
```

**Visual Guide**

Factorial(5) ← return 5 * Factorial(4) = 120 ← return 4 * Factorial(3) = 24 ← return 3 * Factorial(2) = 6 ← return 2 * Factorial(1) = 2 ← 1

## Sorting Algorithm 3 - Merge Sort

### Merge Sort

- Merge Sort divides the input array into two halves, calls itself(the merge sort function) for the two halves, and then merges the two sorted halves.
- This is often referred as “Divide and Conquer” - Break down the problem to smaller problem.

![Merge Sort](https://learnprogramo.com/wp-content/uploads/2020/04/merge-sort-example.png)

### Merge Sort

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

Attribution: Swfung8, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons, https://en.wikipedia.org/wiki/Merge_sort#/media/File:Merge-sort-example-300px.gif

**Key Study Notes:**

1. The exit condition of the algorithm is “there is only 1 element in the half”.
2. The most difficult part of this algorithm is not about “divide” but to “merge”.
3. When we merge, we always assume that both halves is already sorted, so we only need to compare the first element and see which one is smaller.

### Merge Sort

Consider using Merge sort to sort this array in increasing order.

|6|5|12|10|9|1|
|:-:|:-:|:-:|:-:|:-:|:-:|

### Merge Sort

Merge sort first divides the whole array iteratively into equal halves. An array of 6 items is divided into two arrays of size 3.

|6|5|12|
|:-:|:-:|:-:|

|10|9|1|
|:-:|:-:|:-:|

### Merge Sort

We continue to divide these two arrays into halves

|6|5|12|
|:-:|:-:|:-:|

↓↓↓↓↓↓↓↓↓↓↓↓↓

|6|
|:-:|

|5|12|
|:-:|:-:|

----

|10|9|1|
|:-:|:-:|:-:|

↓↓↓↓↓↓↓↓↓↓↓↓↓

|10|
|:-:|

|9|1|
|:-:|:-:|

### Merge Sort

We further divide these arrays and we achieve atomic value which can no more be divided.

|6|
|:-:|

|5|12|
|:-:|:-:|

↓↓↓↓↓↓↓↓↓↓↓↓↓

|6|
|:-:|

|5|
|:-:|

|12|
|:-:|

----

|10|
|:-:|

|9|1|
|:-:|:-:|

↓↓↓↓↓↓↓↓↓↓↓↓↓

|10|
|:-:|

|9|
|:-:|

|1|
|:-:|

### Merge Sort

We first compare the element for each list and then combine them into another list in a sorted manner. We see that 5 and 12 are in sorted positions. We compare 1 and 9 and in the target list of 2 values we put 1 first, followed by 9.

|6|
|:-:|

|5|
|:-:|

|12|
|:-:|

↓↓↓↓↓↓↓↓↓↓↓↓↓

|6|
|:-:|

|5|12|
|:-:|:-:|

----

|10|
|:-:|

|9|
|:-:|

|1|
|:-:|

↓↓↓↓↓↓↓↓↓↓↓↓↓

|10|
|:-:|

|1|9|
|:-:|:-:|

### Merge Sort

We compare lists of three data values, and merge them into a list of found data values placing all in a sorted order.

|5|6|12|
|:-:|:-:|:-:|

|1|9|10|
|:-:|:-:|:-:|

### Merge Sort

After the final merging, the list should look like this

|1|5|6|9|10|12|
|:-:|:-:|:-:|:-:|:-:|:-:|

### Merge Sort Algorithm

For each function call (==remember recursion?==)

1. Step 1 − if it is only one element in the input list, then it is already sorted, return.
2. Step 2 − if it is >1 element, break down the list into 2 halves, and call the mergeSort() with each half.
3. Step 3 − merge the two smaller sorted lists into new list in sorted order.

### Merge Sort Algorithm

**Main Function**

```javascript
function mergeSort(inputList) {
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

**EXPLANATION**

1. If the input list is of size 1, then no need sort, just return it.

```javascript
if (inputList.length === 1) {
        return inputList;
    }
```

2. Split the array into 2 halves, using “splice” function.

```javascript
const half = inputList.length / 2;
const left = inputList.splice(0, half);
```

3. Sort each halves using the “mergeSort()” function.

```javascript
const sortedLeft = mergeSort(left);
const sortedRight = mergeSort(inputList);
```

4. Combine the sorted left and sorted right.

```javascript
return merge(sortedLeft, sortedRight);
```

### Merge Sort Algorithm

**Merge Function**

```javascript
function merge(leftList, rightList) {
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
```

**EXPLANATION**

1. If both left and right list still have at least 1 element.

```javascript
while (leftList.length > 0 && rightList.length > 0) {
```

2. Pick the smaller first element and push to the result array.

```javascript
if (leftList[0] < rightList[0]) {
    arr.push(leftList.shift());
}
else {
    arr.push(rightList.shift());
}
```

3. Combine the result list with left and right list. This is because as it could be only one list was emptied. (When would this happen?)

```javascript
arr.concat(leftList).concat(rightList);
```

**dry run code**

```javascript
function merge(leftList, rightList) {
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
```

**merge-sort.js**

```javascript
const merge = (leftList, rightList) => {
  // Add your code here
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

## Sorting Algorithm 4 - Quick Sort

> a pivot is a reference point that helps partition and sort an array efficiently by dividing it into smaller segments and using recursive strategies.

### Quick Sort

- Quick Sort picks an element as “pivot” and partitions the given array around the picked “pivot”.

- After “Partition”, all smaller elements (smaller than “pivot”) should be placed before “pivot”, and put all greater elements (greater than “pivot”) should be placed after “pivot”.

- After “Partition”, we will call “quickSort()” method for both the Right List and the Left List to sort each half.

- Quick Sort is also a “divide and conquer” algorithm.

**dry run code**

1 17 3 10 9 6

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

![Quick Sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)

Source: https://commons.m.wikimedia.org/wiki/File:Quicksort-example.gif 

### Pivot

- We need to pick a pivot in each “quick sort” call.

- This would impact the efficiency of the sorting algorithm, but as a beginner, we will just always use the right most element as the “pivot”.

- There are some other ways of picking pivot, e.g. picking middle element, or the leftmost element, or picking the median element.

### Partition

- Partition is the most important step in quick sort, the objective of “partition” is to put the numbers smaller than pivot on the left, and those larger than pivot on the right.

- We are going to compare each element with the pivot.

  - If the element is smaller than the pivot, then we swap it with “the first element that is larger than pivot”.

  - If the element is larger than the pivot, then we just leave it at the original position.

### Partition Process Demonstration

`i`: track the position where should the next “small” elements be placed

`j`: track which element we are comparing with “pivot”

At the very beginning, i = -1, j = 0.
that means if element 0 is smaller than pivot, then we will i++, and we will swap it with element i (after i++), aka element 0 aka, no need swap => because there are no element larger than pivot on the left.

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

** 1 ↔ 17

### Partition Process Demonstration

`i`: track the position where should the next “small” elements be placed

`j`: track which element we are comparing with “pivot”

now, i = 0, j = 1.
that means if element 1 is smaller than pivot, then we will swap it with element i+1, aka element 1 aka, no need swap => because there are no element larger than pivot on the left.

However, element 1 is larger than the pivot, so no need to bump up i or do swapping.

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

### Partition Process Demonstration

`i`: track the position where should the next “small” elements be placed

`j`: track which element we are comparing with “pivot”

now, i = 0, j = 2.
that means if element 2 is smaller than pivot, then we will i++, and swap element 2 with i (after i++), aka element 1

We need to do swap this time, because 3 is smaller than 6, and there is a element larger than pivot on the left (element 1)

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

** 17 ↔ 3

### Summarizing Partition

- For each of the element:
  - If the element is smaller than the pivot, then we swap it with “the first element that is larger than pivot”
  - If there are no “large element” identified yet (“large element < j”), then no need to swap (or swap with itself)
  - If the element is larger than the pivot, then we just leave it at the original position

### Summarizing Partition

```javascript
const partition = (arr, minIndex, maxIndex) => {
    // Assuming the pivot is always the rightmost element
    pivot = arr[maxIndex];

    // start with i - 1
    // (as we haven't found any large elements yet)
    i = minIndex - 1;

    // Find the right position of pivot
    for (let j = minIndex; j <= maxIndex - 1; j++) {
        if (arr[j] < pivot) {
            i++;

            // swap
            tempI = arr[i];
            arr[i] = arr[j];
            arr[j] = tempI;
        }
    }

    tempIPlus1 = arr[i+1];
    arr[i+1] = pivot;
    arr[maxIndex] = tempIPlus1

    return i+1;
}
```

**EXPLANATION**

1. The range that we are going to do partition, i.e. defining the “sub array” using min and max index.

```javascript
minIndex, maxIndex
```

2. Our pivot is always the rightmost element.

```javascript
pivot = arr[maxIndex];
```

3. We start from i = -1 (or min index -1)

```javascript
i = minIndex - 1;
```

4. If the element j is smaller than pivot, then we will do i++ and swap element i with element j.

```javascript
if (arr[j] < pivot) {
    i++;

    // swap
    tempI = arr[i];
    arr[i] = arr[j];
    arr[j] = tempI;
}
```

5. After finished all the comparison, we are going to put the pivot at the right position, which is position i+1

```javascript
tempIPlus1 = arr[i+1];
arr[i+1] = pivot;
arr[maxIndex] = tempIPlus1
```

**dry run code**

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

### Quick Sort

```javascript
const quickSort = (arr, minIndex, maxIndex) => {
    if (maxIndex > minIndex) {
        pi = partition(arr, minIndex, maxIndex);

        quickSort(arr, minIndex, pi-1);
        quickSort(arr, pi + 1, maxIndex);
    }
}
```

**EXPLANATION**

1. For the range, we will do the partition
- First cycle, range would be from 0 to end

Partition function should return the position
of pivot after partition


```javascript
partition(arr, minIndex, maxIndex);
```

2. Sort the left and right hand side using quick sort.

```javascript
quickSort(arr, minIndex, pi-1);
quickSort(arr, pi + 1, maxIndex);
```

**dry run code**

|1|17|3|10|9|==6==|
|:-:|:-:|:-:|:-:|:-:|:-:|

```javascript
const quickSort = (arr, minIndex, maxIndex) => {
    if (maxIndex > minIndex) {
        pi = partition(arr, minIndex, maxIndex);

        quickSort(arr, minIndex, pi-1);
        quickSort(arr, pi + 1, maxIndex);
    }
}
```

**quick-sort.js**

```javascript
const partition = (arr, minIndex, maxIndex) => {
  pivot = arr[maxIndex];

    i = minIndex - 1;

    for (let j = minIndex; j <= maxIndex - 1; j++) {
        if (arr[j] < pivot) {
            i++;

            tempI = arr[i];
            arr[i] = arr[j];
            arr[j] = tempI;
        }
    }

    tempIPlus1 = arr[i+1];
    arr[i+1] = pivot;
    arr[maxIndex] = tempIPlus1

    return i+1;
}

const quickSort = (arr, minIndex, maxIndex) => {
    if (maxIndex > minIndex) {
        pi = partition(arr, minIndex, maxIndex);

        quickSort(arr, minIndex, pi-1);
        quickSort(arr, pi + 1, maxIndex);
    }
}
```

---

Sure, here's your code with the necessary fixes:

```javascript
const partition = (arr, minIndex, maxIndex) => {
    let pivot = arr[maxIndex];
    let i = minIndex - 1;

    for (let j = minIndex; j <= maxIndex - 1; j++) {
        if (arr[j] < pivot) {
            i++;

            let tempI = arr[i];
            arr[i] = arr[j];
            arr[j] = tempI;
        }
    }

    let tempIPlus1 = arr[i+1];
    arr[i+1] = pivot;
    arr[maxIndex] = tempIPlus1;

    return i+1;
}

const quickSort = (arr, minIndex, maxIndex) => {
    if (maxIndex > minIndex) {
        let pi = partition(arr, minIndex, maxIndex);

        quickSort(arr, minIndex, pi-1);
        quickSort(arr, pi + 1, maxIndex);
    }
}

// Example usage
const array = [5, 2, 9, 3, 5, 6];
quickSort(array, 0, array.length - 1);
console.log(array); // Output: [2, 3, 5, 5, 6, 9]
```

I've added the necessary `let` declarations for the variables, fixed the scope issues, and provided an example usage of the `quickSort` function. This should work correctly now.

## Merge Sort vs Quick Sort

> whats differences between Merge Sort and Quick Sort?

Merge Sort and Quick Sort are two popular sorting algorithms used in computer science. Here are some key differences between the two:

1. Algorithm Type: ==Merge Sort is a divide and conquer algorithm, while Quick Sort is a divide and conquer and recursive algorithm==.

2. ==Approach==: Merge Sort divides the list into smaller parts, sorts each part, and then combines them back together, till we reach a single part where we cannot longer divide. Quick Sort chooses a "pivot" item and divides the list into two smaller lists: one with items smaller than the pivot, and one with items larger than the pivot. This process is repeated until the entire list is sorted.

3. Time Complexity: In the average case, both Merge Sort and Quick Sort have a time complexity of O(nlogn). However, Quick Sort has a worst-case time complexity of O(n^2), while Merge Sort always has a worst-case time complexity of O(nlogn).

4. Space Complexity: Merge Sort has a space complexity of O(n), while Quick Sort has a space complexity of O(logn) in the best case and O(n) in the worst case.

5. Stability: Merge Sort is a stable sorting algorithm, which means that it maintains the relative order of equal elements in the input sequence. Quick Sort is not stable, which means that the relative order of equal elements may not be preserved in the sorted output.

6. Pivot Selection: Quick Sort selects a pivot element from the array and partitions the array around the pivot. The choice of pivot can greatly affect the efficiency of the algorithm. Merge Sort does not use a pivot and instead divides the array into two halves.

7. Recursive vs. Iterative: Quick Sort is often implemented recursively, while Merge Sort can be implemented either recursively or iteratively.

In general, Merge Sort is preferred when stability is required or when worst-case time complexity is a concern. Quick Sort is preferred when average-case performance is important and when additional space usage is a concern.

> what is pivot ?

In the ==context of Quick Sort, the "pivot" is an element selected from the array being sorted==. It is used as a reference point for dividing the array into two sub-arrays during the sorting process. The pivot can be any element in the array, but it is usually chosen to be the first, last, or middle element.

Once the pivot is selected, the algorithm compares all other elements in the array to the pivot, and then arranges them into two groups: elements that are less than or equal to the pivot, and elements that are greater than the pivot. The pivot is then placed between these two groups.

This process is repeated recursively on each of the two sub-arrays until the entire array is sorted. The choice of pivot can greatly affect the efficiency of the algorithm, and various methods have been developed to select an optimal pivot element.

### geeksforgeeks (other reference)

> source: https://www.geeksforgeeks.org/merge-sort/

#### Algorithm:

```console
step 1: start

step 2: declare array and left, right, mid variable

step 3: perform merge function.
    if left > right
        return
    mid= (left+right)/2
    mergesort(array, left, mid)
    mergesort(array, mid+1, right)
    merge(array, left, mid, right)

step 4: Stop
```

# Feedback on exercise

> 85/100

## merge-sort.js

Task 1 (Score: 85)

Great job on writing the code for the Merge sort algorithm! 

The implementation looks good and the code runs without any errors. The logic you used to sort the array is also correct. However, you can improve your code by adding a check to ensure that the input array is not null or undefined, as the current implementation does not handle such cases.

## quick-sort.js

For the task 2, I will suggest you to avoid unnecessary array swaps. In the partition function, you swap the pivot element with the element at arr[i + 1]. While this works correctly, it is not necessary because the pivot is already at the correct position. Consider removing the swap operation to make the code more efficient.