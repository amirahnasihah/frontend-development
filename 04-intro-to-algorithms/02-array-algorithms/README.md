- [Coding the Array Algorithms questions](#coding-the-array-algorithms-questions)
  - [1.1 In this part, you are going to try coding the “Find Missing Numbers” algorithm question we discussed in class](#11-in-this-part-you-are-going-to-try-coding-the-find-missing-numbers-algorithm-question-we-discussed-in-class)
  - [1.2 In this part, you are going to try coding the “Find Duplicate Numbers” algorithm question we discussed in class](#12-in-this-part-you-are-going-to-try-coding-the-find-duplicate-numbers-algorithm-question-we-discussed-in-class)
  - [1.3 In this part, you are going to try coding the “Find Pairs” algorithm question we discussed in class](#13-in-this-part-you-are-going-to-try-coding-the-find-pairs-algorithm-question-we-discussed-in-class)
- [Array Algorithms (Notes)](#array-algorithms-notes)
  - [Question 1 - Finding Missing Number](#question-1---finding-missing-number)
    - [Finding Missing Number](#finding-missing-number)
    - [What is your solution?](#what-is-your-solution)
    - [Example Algorithm](#example-algorithm)
    - [Part 1 - Finding Max and Min](#part-1---finding-max-and-min)
    - [Part 2 - Check for Missing Numbers](#part-2---check-for-missing-numbers)
    - [Techniques that we used](#techniques-that-we-used)
  - [Question 2 - Finding Duplicate Number](#question-2---finding-duplicate-number)
    - [Finding Missing Number](#finding-missing-number-1)
    - [What is your solution?](#what-is-your-solution-1)
    - [Example Algorithm](#example-algorithm-1)
    - [Part 1 - Sort the Array](#part-1---sort-the-array)
    - [Part 2 - Check for Duplicating Numbers](#part-2---check-for-duplicating-numbers)
    - [Part 3 - Avoid Duplicating Results](#part-3---avoid-duplicating-results)
    - [Techniques that we used](#techniques-that-we-used-1)
  - [Question 3 - Finding Number Pairs](#question-3---finding-number-pairs)

# Coding the Array Algorithms questions

General Notes:

Please leverage the test cases we provided at the bottom of each of the code file to debug your program. Those test cases cover different scenarios of the given tasks, and provide a way for you to check answers.

If some of the test cases are failing, that means you have some obvious scenarios that you are not covering yet. Try to dry run the code with the failing test cases with your mind or a piece of paper, and find out what you are missing.

## 1.1 In this part, you are going to try coding the “Find Missing Numbers” algorithm question we discussed in class

Open `exercise-1.js` file and please finish the `findMissingNumber` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.2 In this part, you are going to try coding the “Find Duplicate Numbers” algorithm question we discussed in class

Open `exercise-2.js` file and please finish the `findDuplicateNumbers` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.3 In this part, you are going to try coding the “Find Pairs” algorithm question we discussed in class

Open `exercise-3.js` file and please finish the `findPairs` function according to the specification in the file. We have prepared some test cases for you to test your functions.

# Array Algorithms (Notes)

**Arrays**

- The most commonly used type of data structure in any programming languages.
- Most of the algorithm questions would involve using array in some ways.
- Usually there are a couple techniques:
• Temporary Variables
• Looping Twice
• Nested Loops
• Sort First

## Question 1 - Finding Missing Number

### Finding Missing Number

You have an unsorted integer array (without duplicate number) and **some numbers are missing** in this array. In order to make the array **consecutive**. **How do you find that missing number?**

```md
Example 1:
Input Array: [1, 3, 7] → Missing 2, 4, 5, 6

Example 2:
Input Array: [3, 7, 1] → Missing 2, 4, 5, 6
```

### What is your solution?

Hint: Confirm the range of the array first.

```md
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->

create variable arr  = [1, 3, 7]
```

### Example Algorithm

1. We go thru the array and find the max and min number using a `for loop` (Remember how we find max number last time?) {This is achieved by iterating over the array and comparing each element to the current maximum or minimum value found so far. At the end of this loop, the maximum and minimum values are determined.}
2. Use another `for loop` to go thru all the numbers between min and max, and check if the number exists in the input array. For those not exists, store them in a “temp result array”
3. Return the “temp result array” as output.

In summary, the algorithm finds all the numbers that are missing from the input array within a given range (between the minimum and maximum values).

> why stores them in a temporary result array ??

```md
The reason for storing the missing numbers in a temporary result array is to return them as the output of the algorithm. The algorithm is designed to find the missing numbers between the minimum and maximum values in the input array. Since the algorithm needs to return the missing numbers, it needs a place to store them, and that is where the temporary result array comes into play.

By storing the missing numbers in a temporary result array, the algorithm can collect all the missing numbers efficiently and return them as a single output at the end of the computation. Without a temporary result array, the algorithm would have to return each missing number as soon as it is found, which would be less efficient and require more code to keep track of the output.

Therefore, by using a temporary result array, the algorithm can easily collect and return all the missing numbers found between the minimum and maximum values in the input array.
```

### Part 1 - Finding Max and Min

> there are 2 loops

First, we need to have a function to find the max and min number of the array. (In order to find the range of the array)

```js
arr = [3, 7, 1]
// We First assume the max and min are the first number in the array
let max = arr[0];
let min = arr[0];

// Then, We use a for-loop to loop though the whole array to find the real max and min number by comparison
for(let i = 1 ;i<arr.length;i++){
    if(arr[i] > max){
    max = arr[i];
    }
    if(arr[i] < min){
    min = arr[i];
    }
}
```

**EXPLAINATION**

1. `arr = [3, 7, 1]`: Defines an array `arr` with three values, 3, 7, and 1.

2. `let max = arr[0];`: Declares a variable `max` and assigns it the value of the first element of the array `arr` (which is 3).

3. `let min = arr[0];`: Declares a variable `min` and assigns it the value of the first element of the array `arr` (which is 3).

4. `for(let i = 1 ;i<arr.length;i++){`: Starts a for loop that will iterate through each element of the array `arr`, starting from the second element (since `i` is initialized to 1, not 0).

5. `if(arr[i] > max){`: Checks if the current element of `arr` is greater than the current value of `max`.

6. `max = arr[i];`: If the current element of `arr` is greater than the current value of max, assigns the value of the current element of `arr` to `max`.

7. `if(arr[i] < min){`: Checks if the current element of `arr` is less than the current value of `min`.

8. `min = arr[i];`: If the current element of ``arr`` is less than the current value of `min`, assigns the value of the current element of `arr` to `min`.

By the end of the loop, `max` will contain the largest element in `arr`, and `min` will contain the smallest element in `arr`.

### Part 2 - Check for Missing Numbers

In the step, we first need to add a temp result array to store the missing number.

Then we will loop through the numbers from min to max, and check if we are missing some of the numbers. (assuming we have the maximum number and the minimum number)

tempResultArray is to return them as the output of the algorithm. we always do this, create a temporary result.

```js
// Create an array to store the final results
let tempResultArray = []

for (let i = min; i <= max; i++){
    // Check if the number exists in the array by using a for loop and “indexOf” Function
    if (arr.indexOf(i) === -1){
    // if a number is missing, then we push it to the result array -> tempResultArray = [2, 4, 5, 6]
    tempResultArray.push(i)
    }
}
console.log(tempResultArray)
```

**EXPLAINATION**

mula2, js check i = 1 sbb mmg dri awal i equal to 1. then, i equal to 2 sbb i++. 2 takda dalam array dan -1, jadi 2 added or push inside to array. pastu check 3, 3 ada jadi js do nothing. then, i++ iaitu 4. 4 not exist and -1, jadi push inside array. etc...

1. `let tempResultArray = []`: Declares a new empty array called `tempResultArray`, which will be used to store any missing numbers found in the loop below.

2. `for (let i = min; i <= max; i++){`: Starts a loop that will iterate through each number between `min` and `max` (inclusive). (min is 1, max is 7)

3. `if (arr.indexOf(i) === -1){`: Checks if the current number `i` is present in the `arr` array by using the `indexOf` method. If the result is `-1`, that means the number was not found in the array.

4. `tempResultArray.push(i)`: If the number is not present in the array `arr`, then the number is added to the `tempResultArray` using the `push` method.

5. `console.log(tempResultArray)`: Prints the contents of `tempResultArray` to the console.

In summary, this code is finding all the missing numbers between `min` and `max` in the `arr` array. It does this by iterating through each number between `min` and `max` (inclusive) and checking if each number exists in the `arr` array. If a number is not found in `arr`, it is added to the `tempResultArray`. Finally, the contents of `tempResultArray` are printed to the console.

> `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present. (indexOf() is basically a searching function. -1 means not exist in the array)

example:

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
```

> `push()` method adds the specified elements to the end of an array and returns the new length of the array.

```js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

> what does "inclusive" means ??

```md
"Inclusive" means that the starting and ending values in a range are included in the range. In other words, when a range is defined as "inclusive," it means that the range includes both the starting value and the ending value.

For example, if we say that a loop should iterate through all the numbers between 1 and 10 inclusive, that means that the loop should iterate through the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.

On the other hand, if we were to say that the loop should iterate through all the numbers between 1 and 10 exclusive, that would mean that the loop should iterate through the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9, but not include 10.

In summary, when a range is defined as "inclusive," it means that both the starting value and the ending value are part of the range, whereas "exclusive" means that the ending value is not part of the range.
```

### Techniques that we used

1. Temporary Variables
2. Looping Twice

```js
// Part 1 - Finding Max and Min
arr = [3, 7, 1]
let max = arr[0];
let min = arr[0];

for(let i = 1 ;i<arr.length;i++){
    if(arr[i] > max){
    max = arr[i];
    }
    if(arr[i] < min){
    min = arr[i];
    }
}

// Part 2 - Check for Missing Numbers
let tempResultArray = []

for (let i = min; i<= max; i++){
    if (arr.indexOf(i) === -1){
    tempResultArray.push(i)
    }
}
console.log(tempResultArray)


// Expected output: [2, 4, 5, 6]
```

## Question 2 - Finding Duplicate Number

### Finding Missing Number

You have an unsorted integer array (with duplicate number). In order to find these duplicate number, what will you do?

```md
Example 1:
Input Array: [2, 3, 3, 7, 9, 2] → Duplicating Numbers: 2, 3

Example 2:
Input Array: [2, 3, 3, 3, 7, 9, 2] → Duplicating Numbers: 2, 3
```

### What is your solution?

Hint: Would it be easier if you sort the array first? (this question quite difficult)

```md
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->

Example; initiahave array [1, 3, 9, 2, 9, 3]

1. `Sort the array first.`: Sorts the input array in ascending order using a sorting algorithm. This is done so that we can easily compare each number to the number next to it in the array.

2. `Create a temporary result array.`: Declares an empty array called tempResultArray, which will be used to store any duplicate numbers found in the loop below.

3. `Use a for loop to go through each number in the sorted array. Compare each number to the number next to it.1: Iterates through each number in the sorted array using a for loop, and compares each number to the number next to it.

4. `If the next number is same as the number, then add it to the temporary result array.`: If the current number is the same as the number next to it, then it is a duplicate. The duplicate number is then added to the tempResultArray using the push method.

5. `Return the temporary array as result.`: After all numbers in the array have been checked for duplicates, the tempResultArray is returned as the output of the function.

In summary, this algorithm finds all the duplicate numbers in the input array by first sorting the array, and then iterating through each number in the sorted array to compare it to the number next to it. If a duplicate number is found, it is added to a tempResultArray, which is then returned as the output of the function.
```

### Example Algorithm

1. Sort the array first.
2. Create a temporary result array.
3. Use a for loop to go through each number in the sorted array. Compare each number the the number next to it.
4. If the next number is same as the number, then add it to the temporary result array.
5. Return the temporary array as result.

### Part 1 - Sort the Array

First, we need to sort the array so the same numbers will be next to each other.

```js
arr = [2, 3, 3, 7, 9, 2]
// We first sort the array and save it in a new variable.
sortedArr = arr.sort()
```

> sort()method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. To sort the elements in an array without mutating the original array, use toSorted().

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
```

### Part 2 - Check for Duplicating Numbers

In the step, we are going to leverage a for loop to check on the numbers one by one. If the number is same as the next number, then it is duplicated.

After identified the duplicating number, then we push it to the tempResultArray. 

Input Array: [2, 2, 3, 3, 3, 7, 9]

```js
// Create an array to store the final results
let tempResultArray = []

// We don’t need to check for the final number → sortedArr.length - 1
for (let i = 0; i < sortedArr.length - 1; i++){
    // If the number equals to the next number, that means it’s duplicated. 
    if (sortedArr[i] === sortedArr[i+1]){
    // If a number is missing, then we push it to the result array
    tempResultArray.push(sortedArr[i])
    }
}

console.log(tempResultArray)
```

### Part 3 - Avoid Duplicating Results

If we just push the number to result array without checking if it is already in the result array, then our result would have duplicating numbers too.

e.g. Input Array: [2, 2, 3, 3, 3, 7, 9] → [2, 3, 3]

```js
let tempResultArray = []

for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        // Additional check before pushing the number to the result array
        if (tempResultArray.indexOf(sortedArr[i]) === -1){
            tempResultArray.push(sortedArr[i])
        }
    }
}

console.log(tempResultArray)
```

### Techniques that we used

1. Sorting First
2. Temporary Variable

Full

```js
// Part 1 - Sort the Array
arr = [2, 3, 3, 7, 9, 2]
sortedArr = arr.sort()

// Part 2 - Check for Duplicating Numbers
let tempResultArray = []
for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        tempResultArray.push(sortedArr[i])
    }
}
console.log(tempResultArray)

// Part 3 - Avoid Duplicating Results
let tempResultArray = []

for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        if (tempResultArray.indexOf(sortedArr[i]) === -1){
            tempResultArray.push(sortedArr[i])
        }
    }
}

console.log(tempResultArray)
```

## Question 3 - Finding Number Pairs