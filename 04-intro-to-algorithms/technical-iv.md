- [Coding Interview Questions](#coding-interview-questions)
  - [1. Write a function called countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in that string.](#1-write-a-function-called-countvowels-that-takes-a-string-as-an-argument-and-returns-the-number-of-vowels-a-e-i-o-u-in-that-string)
  - [2. Write a function called findDuplicates that takes an array of integers as an argument and returns an array containing all the integers that appear more than once in the input array. The order of the elements in the output array should be the same as in the input array (i.e. which element is "duplicated" first).](#2-write-a-function-called-findduplicates-that-takes-an-array-of-integers-as-an-argument-and-returns-an-array-containing-all-the-integers-that-appear-more-than-once-in-the-input-array-the-order-of-the-elements-in-the-output-array-should-be-the-same-as-in-the-input-array-ie-which-element-is-duplicated-first)
  - [3. Write a function called flattenArray that takes an array of nested arrays as an argument and returns a flattened array. The output array should contain all the elements of the input array, in the order they appear, but with no nested arrays.](#3-write-a-function-called-flattenarray-that-takes-an-array-of-nested-arrays-as-an-argument-and-returns-a-flattened-array-the-output-array-should-contain-all-the-elements-of-the-input-array-in-the-order-they-appear-but-with-no-nested-arrays)
  - [4. Write a function called capitalizeWords that takes a string as an argument and returns a new string with the first letter of each word capitalized.](#4-write-a-function-called-capitalizewords-that-takes-a-string-as-an-argument-and-returns-a-new-string-with-the-first-letter-of-each-word-capitalized)
  - [5. Write a function called groupAnagrams that takes an array of strings as an argument and returns an array of arrays, where each array contains a group of anagrams.](#5-write-a-function-called-groupanagrams-that-takes-an-array-of-strings-as-an-argument-and-returns-an-array-of-arrays-where-each-array-contains-a-group-of-anagrams)
  - [6. Write a function called rotateMatrix that takes a square matrix (an array of arrays) as an argument and rotates it 90 degrees clockwise.](#6-write-a-function-called-rotatematrix-that-takes-a-square-matrix-an-array-of-arrays-as-an-argument-and-rotates-it-90-degrees-clockwise)
  - [7. Write a function called sumOfSquares that takes an array of integers as an argument and returns the sum of the squares of those integers.](#7-write-a-function-called-sumofsquares-that-takes-an-array-of-integers-as-an-argument-and-returns-the-sum-of-the-squares-of-those-integers)
  - [8. Write a function called maxConsecutiveSum that takes an array of integers as an argument and returns the maximum sum of any consecutive subarray of the input array.](#8-write-a-function-called-maxconsecutivesum-that-takes-an-array-of-integers-as-an-argument-and-returns-the-maximum-sum-of-any-consecutive-subarray-of-the-input-array)

# Coding Interview Questions

Quiz questions (8)

## 1. Write a function called countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in that string.

For example, if the input is "hello", the output should be 2 (e, o).

```javascript
function countVowels(str) {
  // Your code here
}
```

## 2. Write a function called findDuplicates that takes an array of integers as an argument and returns an array containing all the integers that appear more than once in the input array. The order of the elements in the output array should be the same as in the input array (i.e. which element is "duplicated" first).

For example;

if the input is [1, 2, 3, 2, 5, 6, 1], the output should be [2, 1];

if the input is [1, 1, 3, 2, 5, 6, 2], the output should be [1, 2].

```javascript
function findDuplicates(arr) {
  // Your code here
}
```

> hint: array algorithm, return the duplicate numbers

## 3. Write a function called flattenArray that takes an array of nested arrays as an argument and returns a flattened array. The output array should contain all the elements of the input array, in the order they appear, but with no nested arrays.

For example, if the input is [1, [2, 3], [4, [5, 6]]], the output should be [1, 2, 3, 4, 5, 6].

```javascript
function flattenArray(arr) {
  // Your code here
}
```

## 4. Write a function called capitalizeWords that takes a string as an argument and returns a new string with the first letter of each word capitalized.

For example, if the input is "hello world", the output should be "Hello World".

```javascript
function capitalizeWords(str) {
  // Your code here
}
```

> hint: string algorithm, return capitalized of first letter (toCapitalCase())

## 5. Write a function called groupAnagrams that takes an array of strings as an argument and returns an array of arrays, where each array contains a group of anagrams.

Two strings are considered anagrams if they have the same characters, but possibly in a different order.

For example, if the input is ["eat", "tea", "tan", "ate", "nat", "bat"], the output should be [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].

```javascript
function groupAnagrams(strs) {
  // Your code here
}
```

## 6. Write a function called rotateMatrix that takes a square matrix (an array of arrays) as an argument and rotates it 90 degrees clockwise.

For example, if the input is
```
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
```

the output should be
```
[[7, 4, 1],
[8, 5, 2],
[9, 6, 3]]
```

Here's a skeleton code to get them started:

```javascript
function rotateMatrix(matrix) {
  // Your code here
}
```

## 7. Write a function called sumOfSquares that takes an array of integers as an argument and returns the sum of the squares of those integers.

For example, if the input is [1, 2, 3], the output should be 14 (i.e. 1^2 + 2^2 + 3^2 = 14).

```javascript
function sumOfSquares(nums) {
  // Your code here
}
```

## 8. Write a function called maxConsecutiveSum that takes an array of integers as an argument and returns the maximum sum of any consecutive subarray of the input array.

For example, if the input is [1, -2, 3, 10, -4, 7, 2, -5], the output should be 18 (i.e. the sum of the subarray [3, 10, -4, 7, 2]).

```javascript
function maxConsecutiveSum(nums) {
  // Your code here
}
```

yuru camp