- [Assignment 4 - Searching Algorithms](#assignment-4---searching-algorithms)
  - [1.1 In this part, you are going to try coding the “Reverse String” algorithm question we discussed in class.](#11-in-this-part-you-are-going-to-try-coding-the-reverse-string-algorithm-question-we-discussed-in-class)
  - [1.2 In this part, you are going to try coding the “Find Substring” algorithm question we discussed in class](#12-in-this-part-you-are-going-to-try-coding-the-find-substring-algorithm-question-we-discussed-in-class)
- [Lecture 4: Searching Algorithms\\](#lecture-4-searching-algorithms)
  - [Common Algorithms](#common-algorithms)
    - [Common Algorithms](#common-algorithms-1)
    - [Searching Algorithm](#searching-algorithm)
    - [Sorting Algorithms](#sorting-algorithms)
  - [Searching Algorithm 1 - Linear Search](#searching-algorithm-1---linear-search)
    - [Linear Search](#linear-search)
    - [Linear Search Algorithm](#linear-search-algorithm)
    - [Converting into Code](#converting-into-code)
  - [Searching Algorithm 2 - Binary Search](#searching-algorithm-2---binary-search)
    - [Is there a faster way of searching?](#is-there-a-faster-way-of-searching)
    - [Consider this scenario](#consider-this-scenario)
    - [Consider this scenario](#consider-this-scenario-1)
    - [Binary Search](#binary-search)
    - [Converting into Code](#converting-into-code-1)
- [Feedback on exercise](#feedback-on-exercise)
  - [linear-search.js](#linear-searchjs)
  - [binary-search.js](#binary-searchjs)

# Assignment 4 - Searching Algorithms

General Notes:

Please leverage the test cases we provided at the bottom of each of the code files to debug your program. Those test cases cover different scenarios of the given tasks, and provide a way for you to check answers.

If some of the test cases are failing, that means you have some obvious scenarios that you are not covering yet. Try to dry run the code with the failing test cases with your mind or a piece of paper, and find out what you are missing. 

## 1.1 In this part, you are going to try coding the “Reverse String” algorithm question we discussed in class.

Open `linear-search.js` file and please finish the `linearSearch` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.2 In this part, you are going to try coding the “Find Substring” algorithm question we discussed in class

Open `binary-search.js` file and please finish the `binarySearch` function according to the specification in the file. We have prepared some test cases for you to test your functions.

# Lecture 4: Searching Algorithms\

Agenda:

- Common Algorithms
- Searching
  - Linear Search
  - Binary Search

## Common Algorithms

### Common Algorithms

- In interviews, you don’t always build your own algorithms. Sometimes you only need to memorize or leverage well-known algorithms
- Usually these well-known algorithms are either Searching or Sorting algorithms

Sample Interview Questions:
- Can you name and describe 2 sorting algorithms to me?
keyword: Bubble sort, Merge sort, Quick sort

Two sorting algorithms are "Bubble Sort" and "Merge Sort":
   - Bubble Sort compares adjacent elements and swaps them if they're in the wrong order, repeatedly iterating through the list until no swaps are needed. While simple, it's not very efficient for larger lists.
   - Merge Sort divides the list into smaller halves, sorts them, and then merges them back together in the correct order. It's more efficient than Bubble Sort, especially for larger datasets.

---

1. Bubble Sort:
   Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order. This process is repeated for each element until the list is sorted. While easy to understand, Bubble Sort is not very efficient, especially for large datasets, due to its average and worst-case time complexity of O(n^2).

2. Merge Sort:
   Merge Sort is a divide-and-conquer sorting algorithm. It works by dividing the unsorted list into smaller sub-lists, sorting each sub-list, and then merging these sorted sub-lists back together to get the final sorted array. Merge Sort has a consistent time complexity of O(n log n) in all cases, making it more efficient than Bubble Sort for larger datasets.

3. Quick Sort:
   Quick Sort is also a divide-and-conquer algorithm. It chooses a pivot element and partitions the array into two sub-arrays: one with elements smaller than the pivot and another with elements greater than the pivot. It then recursively sorts these sub-arrays. Quick Sort has an average and best-case time complexity of O(n log n), making it efficient for large datasets. However, its worst-case time complexity can be O(n^2) if the pivot choice is unbalanced.

These sorting algorithms have different trade-offs in terms of efficiency and
simplicity, which makes them suitable for various scenarios based on the size of
the dataset and available resources.

- Can you describe “Binary Search” algorithm to me?

"Binary Search" is an algorithm used to find the position of a target value
within a sorted array. It works by repeatedly dividing the search range in half,
comparing the middle element to the target value, and narrowing down the search
until the target is found or the range becomes empty. This approach is much
faster than linear search, especially for large datasets.

### Searching Algorithm

- Common algorithms on searching for a particular elements in an array.
- There are 2 common types of search algorithms - Linear Search and Binary Search.

### Sorting Algorithms

- These algorithms are to solve the problem of “given an array, how do you sort the array in shortest time?”
- These is a long list of sorting algorithms, some of the common ones include “Bubble Sort”, “Merge Sort”, “Quick Sort” and more.

B, A, D, C → A, B, C, D

## Searching Algorithm 1 - Linear Search

### Linear Search

- You already know Linear Search!
- Linear search means checking the elements one by one, from the start to the end, until the target is found

### Linear Search Algorithm

1. Use a for loop to loop over the array.
2. For each element, check against the target.
    a. If there is a match, return true or the position.
    b. If it’s not a match, go for the next item
3. If still not found after going through the whole array, return false or -1.

### Converting into Code

```javascript
const arr = [2, 4, 1, 6, 5, 3]
const target = 1

// For each element in the array
for (let i = 0; i < arr.length; i++) {
    // Check if the element equals to the target
    if (arr[i] == target) {
        console.log("Found at position: " + i);
        break;
    }
}
```

**linear-search.js exercise:**

```javascript
const linearSearch = (arr, target) => {
  // Add your code here
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == target) {
      return i;
    }
  }
  return -1;
}
```

To iterate across the array from left to right searching for a target element.

Pseudocode example #1:

```
Repeat, starting at the first element:
    If the element is the target element, stop
    Else, move to the next element
```

Pseudocode example #2:

```
For i from 0 to n–1
    If i'th element is target_element
        Return true
Return false
```

JavaScript example:

```javascript
linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === target) return true;
    return false;
}
```

## Searching Algorithm 2 - Binary Search

### Is there a faster way of searching?

- Linear search is very effective, but the worse case is that we need to search through whole array one by one.
- What if the target is at the end of the array, then we need to go through the whole array.
- Imagine the array length is 10000 instead of 10:
  - How do we make the search quicker and more efficient?
  - Is there a way that we don’t need to go through the whole list?

**dry run:**

| Id (Primary Key) | Name | Classes (Index) |
|---|---|---|
| 1 | Darren | Python |
| 2 | Michelle | JS |
| 3 | Thas | Python |
| 4 | Ariff | JS |

Michelle:
{
 a: [apple, app, astronaut, add],
 b: [ball, boy, baby, basket]
}

Ariff:
{
 “smallerthan40”: [1, 30, 25]
 “smallthan80”: [50, 41, 60]
}


Index of **Classes Column**:

{
 “Python”: [1, 3],
 “JS”: [2, 4]
}

select * from students_table where classes = “JS” order by id

### Consider this scenario

- What the numbers are sorted first?
- Question Statement becomes:
How to find an element in a sorted array?

Example:
Find “4” in [1, 2, 4, 5, 8, 10, 12, 19]

### Consider this scenario

![gif](https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif)

Source: https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif

### Binary Search

1. Start with the element at the middle position
    a. if the element at the middle equals to the target, then return true
    b. if the element at the middle is larger than the target, shrink the search range to smaller half
    c. if the element at the middle is smaller than the target, shrink the search range to the larger half
2. Repeat step 1 until target is found or the range contains only 1 element

However, binary search can only be applied to sorted arrays.

**dry run**

Input Array: [1, 2, 4, 6, 7, 9, 10, 11, 13]
Target: 3

Start: 0
End: 8

### Converting into Code

```javascript
const arr = [1, 2, 4, 6, 7, 9, 10, 11, 13];
const target = 7

// Control the search range
let start = 0
let end = arr.length - 1

// Exit Condition: start is larger than the end
while (start <= end) {
    // Handle the odd length scenario
    let middle = Math.floor((start + end) / 2) 
    
    // Found!
    if (arr[middle] === target) {
        console.log("Found at position: " + middle);
        break;
    }
    else if (arr[middle] < target) {
        start = middle + 1;
    }
    else {
        end = middle - 1;
    }
}
```

**EXPLAINATION**

**JS FACT**

1. 

**binary-search.js exercise:**

```javascript
const binarySearch = (arr, target) => {
  // Add your code here
  let start = 0
  let end = arr.length - 1

  while(start <= end) {
    let middle = Math.floor((start + end) / 2)

    if(arr[middle] === target) {
      return middle;
    }
    else if(arr[middle] < target) {
      start = middle + 1;
    }
    else {
      end = middle - 1;
    }
  }

  return -1;
}
```

# Feedback on exercise

## linear-search.js

> 100/100

Task 1 (Score: 50)

Great job! 

Your code is very well-written and follows best practices. You have correctly implemented the linearSearch function to search for a target in the input array.

There are no issues with your code, and it passes all the test cases. Great work!

## binary-search.js

Task 2 (Score: 50)

Great job on the implementation of binary search algorithm. Your code is clean and easy to read. You have followed the instructions provided correctly and all test cases passed successfully. Overall, you have done an excellent job. Keep up the good work!