- [Assignment 5 - Sorting Algorithm (Part 1)](#assignment-5---sorting-algorithm-part-1)
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
- [Feedback on exercise](#feedback-on-exercise)
  - [bubble-sort.js](#bubble-sortjs)
  - [insertion-sort.js](#insertion-sortjs)

# Assignment 5 - Sorting Algorithm (Part 1)

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
- But, Bubble Sort is not the most efficient sorting algorithm, especially for larger lists, as it has a time complexity of O(n^2) in the worst and average cases

### Bubble Sort

![Bubble Sort](https://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif?20110418154649)

Attribution: Swfung8, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons PageURL: https://commons.wikimedia.org/wiki/File:Bubble-sort.gif

**Key Study Notes:**

1. After first iteration, the top 1 element is fixed (as it is already the largest element). After second iteration, the top 2 elements are fixed (as they are already the largest 2 elements)

2. This algorithm is solving one element at a time, from the largest to the smallest.

### Bubble Sort

Consider using bubble sort to sort this array in increasing order.

arr = [14, 33, 28, 40, 10]

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

**Pseudocode Bubble Sort**

1. Pseudocode

```
Initialize an array called "arr" with values [14, 33, 28, 40, 10]

For each "i" from 0 to length of arr - 1 (second last index):
    For each "j" from 0 to length of arr - i - 1:
        If the value at arr[j] is greater than the value at arr[j + 1]:
            Swap the values at arr[j] and arr[j + 1]

Print the sorted array "arr"
```

2. Pseudocode
```
Initialize an array called "arr" with values [14, 33, 28, 40, 10]

For each "i" from 0 to length of arr - 1:
    For each "j" from 0 to length of arr - i - 2:
        If the value at arr[j] is greater than the value at arr[j + 1]:
            Swap the values at arr[j] and arr[j + 1]

Print the sorted array "arr"
```

Converting into code:

> if in a function, Copy the input array and work on the cloned array. In JS, we
always try to work in an immutable way: `let inputArr = [...arr]`

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

**EXPLANATION**

```javascript
j < arr.length - i - 1;
```

- The expression `j < arr.length - i - 1` is **used in the inner loop to control how many comparisons and swaps are performed in each iteration**.

`arr.length - i - 1` calculates the number of elements that need to be considered in the inner loop. Since the outer loop progresses, the largest value of `i` will be 4 (when `i` is equal to `arr.length - 1`). So, for each iteration of the outer loop, we are reducing the number of elements in the inner loop by 1.

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

**How many iterations of swapping we need to do?**

In the first cycle, we solved first element.

In the second cycle, we solved second element.
- For list of 5 elements, we need 4 cycles to solve 5 elements (as solving 4 elements is same as solving 5 elements)
- For a list of n elements, we need n-1 iterations.

**Line By Line**

1. `const arr = [14, 33, 28, 40, 10]`: An array of integers is defined and initialized with 5 values.

2. `for (let i = 0; i < arr.length-1; i++)`: A loop is initiated that iterates through the array from the first element to the second last element. This is because, after each iteration, the largest number in the unsorted part of the array will bubble up to the end of the array, so there is no need to iterate through it again.

3. `for (let j = 0; j < arr.length-i-1; j++)`: Another loop is initiated for each iteration of the outer loop, which compares adjacent elements of the array and swaps them if they are not in the correct order. The loop starts from the first element and goes up to the (length of the array - current iteration number - 1) element, because after each iteration, the largest number will be at the end of the unsorted part of the array, so there is no need to compare it again.

4. `if (arr[j] > arr[j + 1])`: If the current element is greater than the next element, the two elements are swapped.

5. `j_value = arr[j]`, `j_plus_1_value = arr[j + 1]`, `arr[j] = j_plus_1_value`, `arr[j + 1] = j_value`: This code swaps the values of the two adjacent elements if they are not in the correct order.

6. `console.log(arr)`: After all the iterations and comparisons, the sorted array is printed to the console.

> What this means:  `i < arr.length-1`

In the context of a loop, the condition "i < arr.length-1" means that the loop will execute as long as the value of variable "i" is less than the length of the array "arr" minus 1.

Since array indices start from 0, the last index of the array is always its
length minus 1. Therefore, the loop condition "i < arr.length-1" ensures that
**the loop will iterate through all the elements of the array, except for the last one**.

For example, if an array "arr" has a length of 5, the condition "i <
arr.length-1" will be true for values of "i" from 0 to 3, and the loop will
execute 4 times, which is equal to the length of the array minus 1. **This is because the last element of the array will already be in its correct position after the previous iterations, so there is no need to iterate over it again.**

**bubble-sort.js**

```javascript
const bubbleSort = (arr) => {
  // Copy the input array and work on the cloned array
  // In JS, we always try to work in an immutable way
  let inputArr = [...arr]

  // Main Logic
  // Add your code here
  for(let i = 0; i < inputArr.length - 1; i++) {
    for(let j = 0; j < inputArr.length - i - 1; j++) {
      if(inputArr[j] > inputArr[j + 1]) {
        first_value = inputArr[j]
        next_value = inputArr[j + 1]
        // swapped
        inputArr[j] = next_value
        inputArr[j + 1] = first_value
      }
    }
  }

  return inputArr;
}
```

```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const numbers = [4, 2, 7, 1, 9, 3];
bubbleSort(numbers);
console.log(numbers); // Output: [1, 2, 3, 4, 7, 9]
```

## Sorting Algorithm 2 - Insertion Sort

Insertion sort is like sorting these cards one by one.

Here's how it works:

1. You start with the second card (the first card is already considered sorted because it's alone).
2. You compare the second card with the first card. If the second card is smaller, you swap them.
3. Then, you move to the third card. You compare it with the second card and swap if needed, and then compare it with the first card and swap again if needed.
4. You keep doing this for each new card, moving it into its correct position in the already sorted part of the cards.

So, it's like you're inserting each card into its right place among the sorted cards. This process repeats until all the cards are in order.

In JavaScript terms, it's like going through an array of numbers, and for each number, you compare it with the previous numbers and move it to the correct spot in the sorted part of the array.

Insertion sort is simple, but it might not be the fastest sorting algorithm for very large lists. But it's a great way to start understanding how sorting works!

---

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
insertionSort = arr => { 
    for (let i = 1; i < arr.length; i++) { 
        let key = arr[i]; 
        let j = i-1; 
        while (j >= 0 && arr[j] > key) { 
            arr[j+1] = arr[j]; 
            j = j-1; 
        } 
        arr[j+1] = key; 
    } 
    return arr;
}
```

### Insertion Sort

- The idea of insertion sort is to insert the elements to the right position one by one, from the left to right (dari kiri ke kanan)
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

Loop from i = 1 (second element of the array) to 4 (last element of the array)

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

3rd: i = 3 (third element of the array). It will start comparing the previous element to the first element in the array. All the element larger than array[3] will move 1 position ahead.

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

**EXPLANATION**

1. `for (let i = 1; i < arr.length; i++) {`

**How many iterations do we need?**

- We only need to start from the second element (as there will only be insertion for 2+ elements)

- So we will start with i = 1 and end with i = length - 1


2. `let j = i - 1; while (j >= 0 && current < arr[j]) {`

**For each iteration, how many “comparisons and shift” we need to do?**

- We will need to check for every elements before the “current element”, so we will start with j - 1.

- The meaning here is - for every elements that is smaller than “current element” and before the “current element”, we shift it to the right by 1.

**EXPLANATION**

**insertion-sort.js**

```javascript
const insertionSort = (arr) => {
  // Copy the input array and work on the cloned array
  // In JS, we always try to work in an immutable way
  let inputArr = [...arr]

  // Main Logic
  // Add your code here
  for(let i = 1; i < inputArr.length; i++) {
    let current = inputArr[i];
    let j = i - 1;

    while(j >= 0 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  
  return inputArr;
}
```

# Feedback on exercise

> 85/100

## bubble-sort.js

Task 1 (Score: 85)

Great job on writing the code for bubble sort! 

The implementation looks good and the code runs without any errors. The logic you used to sort the array using bubble sort is also correct. However, you can improve your code by adding a check to ensure that the input array is not null or undefined, as the current implementation does not handle such cases.

Additionally, the code could be made more efficient by adding a boolean flag to detect if any swap was made during an iteration, and if not, the loop can be terminated early, as no more swaps are needed.

Overall, great job on the implementation and passing all test cases! Keep up the good work.

## insertion-sort.js

Task 2 

Great job on writing the code for insertion sort algorithm! 

The implementation looks good and the code runs without any errors. The logic you used to sort the array is also correct. However, you can improve your code by adding a check to ensure that the input array is not null or undefined, as the current implementation does not handle such cases.

Overall, great job on the implementation and passing all test cases! Keep up the good work.
