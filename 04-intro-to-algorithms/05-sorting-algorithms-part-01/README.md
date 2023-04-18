- [Coding the sorting algorithms](#coding-the-sorting-algorithms)
  - [1.1 In this part, you are going to try coding the Bubble Sort algorithm we discussed in class.](#11-in-this-part-you-are-going-to-try-coding-the-bubble-sort-algorithm-we-discussed-in-class)
  - [1.2 In this part, you are going to try coding the “Find Substring” algorithm question we discussed in class](#12-in-this-part-you-are-going-to-try-coding-the-find-substring-algorithm-question-we-discussed-in-class)
- [Lecture 5: Sorting Algorithms - Part 1](#lecture-5-sorting-algorithms---part-1)
  - [Sorting Algorithms](#sorting-algorithms)
    - [Sorting Algorithms](#sorting-algorithms-1)
  - [Sorting Algorithm 1 - Bubble Sort](#sorting-algorithm-1---bubble-sort)
    - [Bubble Sort](#bubble-sort)
    - [Bubble Sort](#bubble-sort-1)
    - [Bubble Sort](#bubble-sort-2)
    - [Bubble Sort](#bubble-sort-3)
    - [Bubble Sort](#bubble-sort-4)
    - [Bubble Sort](#bubble-sort-5)
    - [Bubble Sort](#bubble-sort-6)
    - [Bubble Sort](#bubble-sort-7)
    - [Bubble Sort](#bubble-sort-8)
    - [Bubble Sort Algorithm](#bubble-sort-algorithm)
  - [Sorting Algorithm 2 - Insertion Sort](#sorting-algorithm-2---insertion-sort)
    - [Insertion Sort](#insertion-sort)
    - [Insertion Sort](#insertion-sort-1)
    - [Insertion Sort](#insertion-sort-2)
    - [Insertion Sort](#insertion-sort-3)
    - [Insertion Sort](#insertion-sort-4)
    - [Insertion Sort](#insertion-sort-5)
    - [Insertion Sort](#insertion-sort-6)
    - [Insertion Sort Algorithm](#insertion-sort-algorithm)

# Coding the sorting algorithms

General Notes:

**You are only required to complete one of the 2 questions. But feel free to complete both if you are interested.**

Please leverage the test cases we provided at the bottom of each of the code files to debug your program. Those test cases cover different scenarios of the given tasks, and provide a way for you to check answers.

If some of the test cases are failing, that means you have some obvious scenarios that you are not covering yet. Try to dry run the code with the failing test cases with your mind or a piece of paper, and find out what you are missing. 

## 1.1 In this part, you are going to try coding the Bubble Sort algorithm we discussed in class.

Open `bubble-sort.js` file and please finish the `bubbleSort` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.2 In this part, you are going to try coding the “Find Substring” algorithm question we discussed in class

Open `insertion.js` file and please finish the `insertionSort` function according to the specification in the file. We have prepared some test cases for you to test your functions.

# Lecture 5: Sorting Algorithms - Part 1

Agenda:

- Sorting Algorithms
- Bubble Sort
- Insertion Sort

## Sorting Algorithms

### Sorting Algorithms

Sorting refers to sorting making a randomly ordered array into an array with increasing or decreasing order.

```markdown
27, 34, 10, 70, 48

                ↓
Sorting in an increasing order

10, 27, 34, 48, 70
```

| 27  | 34  | 10  | 70  | 48  |
|:-:|:-:|:-:|:-:|:-:|

↓ Sorting in an increasing order

|  10 |  27 |  34 | 48 | 70 |
|:-:|:-:|:-:|:-:|:-:|

![Array Sorting Algorithms](https://lamfo-unb.github.io/img/Sorting-algorithms/Complexity.png)

Source: https://lamfo-unb.github.io/2019/04/21/Sorting-algorithms/

## Sorting Algorithm 1 - Bubble Sort

### Bubble Sort

- Bubble sort works by examining each set of adjacent elements in the array, from left to right, switching their positions if they are out of order.
- The algorithm repeats this process until it can traverse the entire array and cannot find two elements that need to be swapped.

### Bubble Sort

![Bubble Sort](https://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif?20110418154649)

Attribution: Swfung8, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons PageURL: https://commons.wikimedia.org/wiki/File:Bubble-sort.gif

**Key Study Notes:**

1. After first iteration, the top 1 element is fixed (as it is already the largest element). After second iteration, the top 2 elements are fixed (as they are already the largest 2 elements)

2. This algorithm is solving one element at a time, from the largest to the smallest.

### Bubble Sort

Consider using bubble sort to sort this array in increasing order.

|14|33|28|40|10|
|:-:|:-:|:-:|:-:|:-:|

### Bubble Sort

1st: Bubble sort starts with the first two elements, comparing them to check which one is greater.

|==14==|==33==|28|40|10|
|:-:|:-:|:-:|:-:|:-:|

Since 33 > 14, it is in the correct position.

### Bubble Sort

2nd: We compare 33 with 28.(Compare 2nd and 3rd element)

|14|==33==|==28==|40|10|
|:-:|:-:|:-:|:-:|:-:|

Since 28 < 33, it is in incorrect position.
So we need to swap the position of 28 and 33.

The **new array** will be:

|14|==28==|==33==|40|10|
|:-:|:-:|:-:|:-:|:-:|

### Bubble Sort

3rd: We compare 33 with 40.(Compare 3rd and 4th element)

|14|28|==33==|==40==|10|
|:-:|:-:|:-:|:-:|:-:|

Since 40 > 33, it is in the correct position.

### Bubble Sort

4th: We compare 40 with 10.(Compare 4th and 5th element)

|14|28|33|==40==|==10==|
|:-:|:-:|:-:|:-:|:-:|

Since 10 < 40, it is in incorrect position.
So we need to swap the position of 10 and 40.

The **new array** will be:

|14|28|33|==10==|==40==|
|:-:|:-:|:-:|:-:|:-:|

### Bubble Sort

5th: Now we have reached the end of the array. Our array look like this:

|14|28|33|10|40|
|:-:|:-:|:-:|:-:|:-:|

But the array is still not sorted.
We need to repeat step 1 to 4 again. Until our array is sorted.

(Note that we don’t need to worry about “40” anymore as we are sure that it is the largest one)

### Bubble Sort

0. We start with:

|14|33|28|40|10|
|:-:|:-:|:-:|:-:|:-:|

1. After 1st iteration:

|14|28|33|10|40|
|:-:|:-:|:-:|:-:|:-:|

2. After 2nd iteration:

|14|28|10|33|40|
|:-:|:-:|:-:|:-:|:-:|

3. After 3rd iteration:

|14|10|28|33|40|
|:-:|:-:|:-:|:-:|:-:|

4. After 4th iteration:

|==10==|==14==|==28==|==33==|==40==|
|:-:|:-:|:-:|:-:|:-:|

### Bubble Sort Algorithm

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

**EXPLAINATION**

==1. `for (let i = 0; i < arr.length-1; i++) {`==

**How many iterations of swapping we need to do?**

In the first cycle, we solved first element.

In the second cycle, we solved second element.
- For list of 5 elements, we need 4 cycles to solve 5 elements (as solving 4 elements is same as solving 5 elements)
- For a list of n elements, we need n-1 iterations.


==2. `for (let j = 0; j < arr.length-i-1; j++) {`==

**For each iteration, how many comparisons we need to do?**

For array length of 5,
In the first iteration (i=0), we need to compare 4 times (1-2, 2-3, 3-4, 4-5)

In the second iteration (i=1), we need to compare 3 times only (1-2, 2-3, 3-4) as the last element is already fixed.
- For each iteration, we only need to check for “number of unfixed elements - 1” times
- Number of unfixed elements = array.length - i

**Line By Line**

1. `const arr = [14, 33, 28, 40, 10]`: An array of integers is defined and initialized with 5 values.

2. `for (let i = 0; i < arr.length-1; i++)`: A loop is initiated that iterates through the array from the first element to the second last element. This is because, after each iteration, the largest number in the unsorted part of the array will bubble up to the end of the array, so there is no need to iterate through it again.

3. `for (let j = 0; j < arr.length-i-1; j++)`: Another loop is initiated for each iteration of the outer loop, which compares adjacent elements of the array and swaps them if they are not in the correct order. The loop starts from the first element and goes up to the (length of the array - current iteration number - 1) element, because after each iteration, the largest number will be at the end of the unsorted part of the array, so there is no need to compare it again.

4. `if (arr[j] > arr[j + 1])`: If the current element is greater than the next element, the two elements are swapped.

5. `j_value = arr[j]`, `j_plus_1_value = arr[j + 1]`, `arr[j] = j_plus_1_value`, `arr[j + 1] = j_value`: This code swaps the values of the two adjacent elements if they are not in the correct order.

6. `console.log(arr)`: After all the iterations and comparisons, the sorted array is printed to the console.

> What this means:  `i < arr.length-1`

In the context of a loop, the condition "i < arr.length-1" means that the loop will execute as long as the value of variable "i" is less than the length of the array "arr" minus 1.

Since array indices start from 0, the last index of the array is always its length minus 1. Therefore, the loop condition "i < arr.length-1" ensures that the loop will iterate through all the elements of the array, except for the last one.

For example, if an array "arr" has a length of 5, the condition "i < arr.length-1" will be true for values of "i" from 0 to 3, and the loop will execute 4 times, which is equal to the length of the array minus 1. This is because the last element of the array will already be in its correct position after the previous iterations, so there is no need to iterate over it again.

## Sorting Algorithm 2 - Insertion Sort

### Insertion Sort

- The idea of insertion sort is to insert the elements to the right position one by one, from the left to right
  - For the first iteration, the focus is to make sure the first 2 items are sorted
  - For the second iteration, the focus is to make sure the first 3 items are sorted

### Insertion Sort

![Insertion Sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif?20110419160033)
By Swfung8 - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=14961606

**Key Study Notes:**

1. In the first iteration, we focus on the first 2 elements. We will try to “insert” the second element to the correct position.
2. In the second iteration, we focus on “inserting” the third element to the correct position.
3. For each iteration, we shift the elements that’s larger than our “current element” to the right to make space for the “current element.

### Insertion Sort

Consider using insertion sort to sort this array in increasing order.

|12|9|20|4|5|
|:-:|:-:|:-:|:-:|:-:|

Loop form i = 1 (second element of the array) to 4 (last element of the array)

### Insertion Sort

1st: i = 1 (second element of the array).

Since 9 is smaller than 12, move 12 and insert 9 before 12.

**Before Insertion**

|12|==9==|20|4|5|
|:-:|:-:|:-:|:-:|:-:|

element "9" → Insert before “12”

**After Insertion**

|==9==|12|20|4|5|
|:-:|:-:|:-:|:-:|:-:|

### Insertion Sort

2nd: i = 2. 20 will remain at its position as all elements in Array[0..i-1] are smaller than 20.

|9|12|20|4|5|
|:-:|:-:|:-:|:-:|:-:|

- Both (element "9" and "12") smaller than 20, so no need move the element “20”.

- No need to worry about elements after “20”, which is element "4" and "5".

### Insertion Sort

3rd: i = 3 (third element of the array).It will start comparing the previous element to the first element in the array. All the element larger than array[3] will move 1 position ahead.

**Before Insertion**

|9|12|20|==4==|5|
|:-:|:-:|:-:|:-:|:-:|

- Element "4" → Insert before “9”

- No need to worry about elements after “5”

**After Insertion**

|==4==|9|12|20|5|
|:-:|:-:|:-:|:-:|:-:|

### Insertion Sort

4th: i = 4 (third element of the array).It will start comparing the previous element to the first element in the array. Only the element larger than array[4] will move 1 position ahead.

**Before Insertion**

|4|9|12|20|==5==|
|:-:|:-:|:-:|:-:|:-:|

- element "5" → Insert before “9” but after “4”

**After Insertion**

|4|==5==|9|12|20|
|:-:|:-:|:-:|:-:|:-:|

### Insertion Sort Algorithm

Converting into code:

```javascript
const arr = [12, 9, 20, 4, 5]

for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = current;
}

console.log(arr)
// Output: [4, 5, 9, 12, 20]
```

**EXPLAINATION**

==1. `for (let i = 1; i < arr.length; i++) {`==

**How many iterations do we need?**

- We only need to start from the second element (as there will only be insertion for 2+ elements)

- So we will start with i = 1 and end with i = length - 1


==2. ```
let j = i - 1;
while (j >= 0 && current < arr[j]) {```==

**For each iteration, how many “comparisons and shift” we need to do?**

- We will need to check for every elements before the “current element”, so we will start with j - 1.

- The meaning here is - for every elements that is smaller than “current element” and before the “current element”, we shift it to the right by 1. 