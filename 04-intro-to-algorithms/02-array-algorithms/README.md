- [Assignment 2 - Array Algorithms](#assignment-2---array-algorithms)
  - [1.1 In this part, you are going to try coding the “Find Missing Numbers” algorithm question we discussed in class](#11-in-this-part-you-are-going-to-try-coding-the-find-missing-numbers-algorithm-question-we-discussed-in-class)
  - [1.2 In this part, you are going to try coding the “Find Duplicate Numbers” algorithm question we discussed in class](#12-in-this-part-you-are-going-to-try-coding-the-find-duplicate-numbers-algorithm-question-we-discussed-in-class)
  - [1.3 In this part, you are going to try coding the “Find Pairs” algorithm question we discussed in class](#13-in-this-part-you-are-going-to-try-coding-the-find-pairs-algorithm-question-we-discussed-in-class)
- [Lecture 2: Array Algorithms](#lecture-2-array-algorithms)
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
    - [Part 2 - Check for Duplicating Numbers (important part)](#part-2---check-for-duplicating-numbers-important-part)
    - [Part 3 - Avoid Duplicating Results](#part-3---avoid-duplicating-results)
    - [Techniques that we used](#techniques-that-we-used-1)
  - [Question 3 - Finding Number Pairs](#question-3---finding-number-pairs)
    - [Finding Missing Number](#finding-missing-number-2)
    - [What is your solution?](#what-is-your-solution-2)
    - [Example Algorithm](#example-algorithm-2)
    - [Part 1 - Loop Thru the Array](#part-1---loop-thru-the-array)
    - [Part 2 - Loop Thru in a Nested Loop (important part)](#part-2---loop-thru-in-a-nested-loop-important-part)
    - [Part 3 - Avoiding Duplicate Results](#part-3---avoiding-duplicate-results)
    - [Techniques that we used](#techniques-that-we-used-2)
- [Feedback on exercise](#feedback-on-exercise)
  - [exercise-1.js](#exercise-1js)
  - [exercise-2.js](#exercise-2js)
  - [exercise-3.js](#exercise-3js)

# Assignment 2 - Array Algorithms

General Notes:

Please leverage the test cases we provided at the bottom of each of the code file to debug your program. Those test cases cover different scenarios of the given tasks, and provide a way for you to check answers.

If some of the test cases are failing, that means you have some obvious scenarios that you are not covering yet. Try to dry run the code with the failing test cases with your mind or a piece of paper, and find out what you are missing.

## 1.1 In this part, you are going to try coding the “Find Missing Numbers” algorithm question we discussed in class

Open `exercise-1.js` file and please finish the `findMissingNumber` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.2 In this part, you are going to try coding the “Find Duplicate Numbers” algorithm question we discussed in class

Open `exercise-2.js` file and please finish the `findDuplicateNumbers` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.3 In this part, you are going to try coding the “Find Pairs” algorithm question we discussed in class

Open `exercise-3.js` file and please finish the `findPairs` function according to the specification in the file. We have prepared some test cases for you to test your functions.

# Lecture 2: Array Algorithms

**further explaination**

JavaScript offers a variety of built-in array methods that can be used to implement various algorithms efficiently. Here are some common *array algorithms* you can use in JavaScript:

1. Sorting:
   - `sort()`: Sorts the elements of an array in place based on Unicode values by default. You can provide a custom comparison function for more complex sorting.

2. Searching:
   - `indexOf()`: Returns the index of the first occurrence of a specified element in an array.
   - `lastIndexOf()`: Returns the index of the last occurrence of a specified element in an array.
   - `find()`: Returns the value of the first element in the array that satisfies a provided testing function.
   - `findIndex()`: Returns the index of the first element in the array that satisfies a provided testing function.

3. Filtering:
   - `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.

4. Mapping:
   - `map()`: Creates a new array by applying a function to each element of the original array.

5. Reducing:
   - `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.

6. Reversing:
   - `reverse()`: Reverses the order of the elements in an array in place.

7. Concatenation:
   - `concat()`: Returns a new array that combines the elements of two or more arrays.

These are just a few examples, and there are many more array algorithms that you can implement using these methods or by combining them creatively.

The usage of these methods:

1. Sorting:
```javascript
const fruits = ['banana', 'apple', 'orange', 'grapes'];
fruits.sort(); // ['apple', 'banana', 'grapes', 'orange']
```

2. Searching:
```javascript
const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3); // 2
const lastIndex = numbers.lastIndexOf(4); // 3
const foundElement = numbers.find((element) => element > 2); // 3
const foundIndex = numbers.findIndex((element) => element > 2); // 2
```

3. Filtering:
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]
```

4. Mapping:
```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num); // [1, 4, 9, 16, 25]
```

5. Reducing:
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15
```

6. Reversing:
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // [5, 4, 3, 2, 1]
```

7. Concatenation:
```javascript
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];
const combined = numbers.concat(letters); // [1, 2, 3, 'a', 'b', 'c']
```

Remember, if you need the most up-to-date information, you can visit the Mozilla Developer Network (MDN) website for detailed documentation and examples of each method.

**Arrays**

- The most commonly used type of data structure in any programming languages.
- Most of the algorithm questions would involve using array in some ways.
- Usually there are a couple techniques:
• Temporary Variables
• Looping Twice
• Nested Loops
• Sort First

## Question 1 - Finding Missing Number

finding missing number (sorted)

todo:

1. find the range of array first (min and max)
2. check the missing numbers (loop from min to max, then the missing numberz are push to store in temp array var)
3. print result of temp array var

### Finding Missing Number

You have an unsorted integer array (without duplicate number) and **some numbers are missing** in this array. In order to make the array **consecutive**. **How do you find that missing number?**

```markdown
Example 1:
Input Array: [1, 3, 7] → Missing 2, 4, 5, 6

Example 2:
Input Array: [3, 7, 1] → Missing 2, 4, 5, 6
```

### What is your solution?

Hint: Confirm the range of the array first.

```markdown
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->

create variable arr  = [1, 3, 7]
```

### Example Algorithm

1. We go thru the array and find the max and min number using a `for loop` (Remember how we find max number last time?) {This is achieved by iterating over the array and comparing each element to the current maximum or minimum value found so far. At the end of this loop, the maximum and minimum values are determined.}
2. Use another `for loop` to go thru all the numbers between min and max, and check if the number exists in the input array. For those not exists, store them in a “temp result array”
3. Return the “temp result array” as output.

In summary, the algorithm finds all the numbers that are missing from the input array within a given range (between the minimum and maximum values).

> why stores them in a temporary result array ??

```markdown
The reason for storing the missing numbers in a temporary result array is to return them as the output of the algorithm. The algorithm is designed to find the missing numbers between the minimum and maximum values in the input array. Since the algorithm needs to return the missing numbers, it needs a place to store them, and that is where the temporary result array comes into play.

By storing the missing numbers in a temporary result array, the algorithm can collect all the missing numbers efficiently and return them as a single output at the end of the computation. Without a temporary result array, the algorithm would have to return each missing number as soon as it is found, which would be less efficient and require more code to keep track of the output.

Therefore, by using a temporary result array, the algorithm can easily collect and return all the missing numbers found between the minimum and maximum values in the input array.
```

### Part 1 - Finding Max and Min

> there are 2 loops

First, we need to have a function to find the max and min number of the array. (In order to find the range of the array)

```javascript
arr = [3, 7, 1]
// We First assume the max and min are the first number in the array
let max = arr[0];
let min = arr[0];

// Then, We use a for-loop to loop though the whole array to find the real max and min number by comparison
for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
    max = arr[i];
    }
    if(arr[i] < min){
    min = arr[i];
    }
}
```

**EXPLANATION**

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

```javascript
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

**EXPLANATION**

mula2, js check i = 1 sbb mmg dri awal i equal to 1. then, i equal to 2 sbb i++. 2 takda dalam array dan -1, jadi 2 added or push inside to array. pastu check 3, 3 ada jadi js do nothing. then, i++ iaitu 4. 4 not exist and -1, jadi push inside array. etc...

1. `let tempResultArray = []`: Declares a new empty array called `tempResultArray`, which will be used to store any missing numbers found in the loop below.

2. `for (let i = min; i <= max; i++){`: Starts a loop that will iterate through each number between `min` and `max` (inclusive). (min is 1, max is 7)

3. `if (arr.indexOf(i) === -1){`: Checks if the current number `i` is present in the `arr` array by using the `indexOf` method. If the result is `-1`, that means the number was not found in the array.

4. `tempResultArray.push(i)`: If the number is not present in the array `arr`, then the number is added to the `tempResultArray` using the `push` method.

5. `console.log(tempResultArray)`: Prints the contents of `tempResultArray` to the console.

In summary, this code is finding all the missing numbers between `min` and `max` in the `arr` array. It does this by iterating through each number between `min` and `max` (inclusive) and checking if each number exists in the `arr` array. If a number is not found in `arr`, it is added to the `tempResultArray`. Finally, the contents of `tempResultArray` are printed to the console.

**JS Fact:**

> `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present. (indexOf() is basically a searching function. -1 means not exist in the array)
> ex; in beasts array, the index of the element array is 1

```javascript
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

```javascript
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

```markdown
"Inclusive" means that the starting and ending values in a range are included in the range. In other words, when a range is defined as "inclusive," it means that the range includes both the starting value and the ending value.

For example, if we say that a loop should iterate through all the numbers between 1 and 10 inclusive, that means that the loop should iterate through the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.

On the other hand, if we were to say that the loop should iterate through all the numbers between 1 and 10 exclusive, that would mean that the loop should iterate through the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9, but not include 10.

In summary, when a range is defined as "inclusive," it means that both the starting value and the ending value are part of the range, whereas "exclusive" means that the ending value is not part of the range.
```

### Techniques that we used

1. Temporary Variables
2. Looping Twice

```javascript
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

```markdown
Example 1:
Input Array: [2, 3, 3, 7, 9, 2] → Duplicating Numbers: 2, 3

Example 2:
Input Array: [2, 3, 3, 3, 7, 9, 2] → Duplicating Numbers: 2, 3
```

### What is your solution?

Hint: Would it be easier if you sort the array first? (this question quite difficult)

```markdown
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->

Example; initially, have array [1, 3, 9, 2, 9, 3]. Then, if after sorted —> [1, 2, 3, 3, 9, 9] = easier.

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

```javascript
arr = [2, 3, 3, 7, 9, 2]
// We first sort the array and save it in a new variable.
sortedArr = arr.sort()

// Expected output: [2, 2, 3, 3, 7, 9]
```

**JS Fact:**

> `sort()` method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. To sort the elements in an array without mutating the original array, use `toSorted()`.

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
```

### Part 2 - Check for Duplicating Numbers (important part)

In this step, we are going to leverage a `for` loop to check on the numbers one by one. If the number is same as the next number, then it is duplicated.

After identified the duplicating number, then we push it to the tempResultArray.

> array already sorted: `if (arr[i] === arr[i + 1])` // if the current element same as next element. the use of `arr[i + 1]` as next element make it easier since array is already sorted.
> then if it's true that next element is duplicate number, the current element is push to temporary array.

Input Array (already sort): [2, 2, 3, 3, 3, 7, 9] // Expected output: [2, 3, 3]

arr = [2, 3, 3, 3, 7, 9] // Expected output: [3, 3]

arr = [2, 2, 3, 3, 7, 9] // Output: [2, 3]

```javascript
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

console.log(tempResultArray) // Output: [2, 3, 3]
```

**further explain**

1. sortedArr.length - 1 vs minus 1

The use of `-1` in different contexts. In JavaScript, `-1` is typically used to represent an index or position that is not found or unavailable. It doesn't mean undefined; rather, it indicates the absence of the desired value or element.

For example:

1. `indexOf()`: When the method doesn't find the specified element in the array, it returns `-1`. If the element is found, it returns the index of the first occurrence.

2. `findIndex()`: Similar to `indexOf()`, if the element satisfying the condition is not found, it returns `-1`. Otherwise, it returns the index of the first element that meets the condition.

3. `Array.prototype.includes()`: If the element is not found in the array, it returns `false`. If the element is found, it returns `true`.

You might encounter `-1` in other contexts, such as mathematical operations where it indeed represents the number minus one. However, when it comes to array methods like `indexOf()`, `findIndex()`, and `includes()`, it consistently indicates the absence of the desired value.

To avoid ambiguity, always consider the context in which `-1` is used. In array methods, it usually means "not found" or "absent," while in mathematical operations, it represents subtraction by one. Understanding the context will help you interpret the meaning correctly.

**arr.length - 1 (get the last index of Array)**

When you see `sortedArr.length - 1`, it represents the last index of the `sortedArr`. This is because array indices in JavaScript are zero-based, so the last element of the array will have an index of `array.length - 1`.

For example, consider an array `sortedArr` with five elements:

```javascript
const sortedArr = [10, 20, 30, 40, 50];
```

The length of `sortedArr` is `5`, but the last index is `4`, which corresponds to the last element `50`. So, to access the last element of `sortedArr`, you can use `sortedArr[sortedArr.length - 1]`, which would be equivalent to `sortedArr[4]`, resulting in the value `50`.

In array operations, `sortedArr.length - 1` is commonly used to access the last element or to perform actions related to the last index in the array. Just be aware of the zero-based indexing in JavaScript to avoid off-by-one errors.

More clarify;

In the context of `sortedArr.length - 1`, the `- 1` is not a subtraction by one but rather a way to access the last index of the array. The length of an array in JavaScript is the number of elements it contains, and array indices start from 0, not 1.

When you use `sortedArr.length - 1`, you are retrieving the index of the last element in the array, not subtracting one from the length of the array. It helps you access the last element using this index.

For example, let's say `sortedArr` is `[10, 20, 30, 40, 50]`. The length of `sortedArr` is 5, but the last index is `sortedArr.length - 1`, which is 4. So, `sortedArr[sortedArr.length - 1]` will give you the last element, which is `50`.

In summary, `sortedArr.length - 1` is not a subtraction operation but a way to access the last index of the array, enabling you to work with the last element in the array through this index.

2. 

Input Array: [2, 2, 3, 3, 3, 7, 9] → [2, 3, 3]

As a start we have, i = 0. at very beginning we compare the first element (which is 2) with the second element (which is 2). 2 and 2 is duplicate, so push to tempResultArray of second element (which is 2). then, i++. now, i = 1. compare second element with third element (which is 3). 2 and 3 not duplicate, so do nothing. again, i++. now, start at i = 2 (third element of index 2, which is 3). compare third element with fourth element (which is 3). 3 and 3 is duplicate, so push to tempResultArray which is 3. again, i++. now, index start at i = 3. compare fourth element with fifth element (which is 3). 3 and 3 is duplicate, so push to tempResultArray which is 3. again, i++. now, index start with i = 4. compare fifth element with sixth element (which is 7). 3 and 7 not duplicate, so do nothing. 7 and 9 not compare with the last element (which is 9), `i < sortedArr.length - 1;`

tempResultArray = [2, 3, 3]

----

Input Array (already sort): [2, 3, 3, 3, 7, 9]
i = 0, 1, 2, 3, 4, 5

i equal to 0 (which is 2). so, comparing element 0 with element 1 (which is 3). 2 not equal to 3, so gonna do i++. now, index 1 compare with index 2 (which is 3 also). its duplicate, so push it number 3 into tempResultArray. then, i++ again, compare index 2 with index 3 (which is 3 too). its duplicate, push 3 into tempResultArray. i++, compare index 3 with index 4 (which is 7). i++, compare the element 4 and 5 (which is 9). 7 & 9 not the same so do nothing.

tempResultArray = [3, 3]

1. `let tempResultArray = []`: Initializes an empty array called `tempResultArray`, which will be used to store any duplicate numbers found in the loop below.

2. `for (let i = 0; i < sortedArr.length - 1; i++)`: Sets up a for loop to iterate through each number in the `sortedArr` array, from the first element to the second to last element. We don't need to check the last element since we're comparing it to the next element.

3. `if (sortedArr[i] === sortedArr[i+1])`: Checks if the current element is the same as the next element. If it is, that means the current element is a duplicate.

4. `tempResultArray.push(sortedArr[i])`: If a duplicate number is found, it is added to the `tempResultArray` using the `push` method.

5. `console.log(tempResultArray)`: Outputs the `tempResultArray` to the console, which contains all the duplicate numbers found in the `sortedArr` array.

In summary, this code is a simple way to find all the duplicate numbers in a sorted array by iterating through each number in the array and comparing it to the next number. If a duplicate number is found, it is added to a `tempResultArray`, which is then output to the console.

### Part 3 - Avoid Duplicating Results

If we just push the number to result array without checking if it is already in the result array, then our result would have duplicating numbers too.

e.g. Input Array: [2, 2, 3, 3, 3, 7, 9] → [2, 3, 3]. we dont want this.

```javascript
let tempResultArray = []

for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        // Additional check before pushing the number to the result array
        if (tempResultArray.indexOf(sortedArr[i]) === -1){
            tempResultArray.push(sortedArr[i])
        }
    }
}

console.log(tempResultArray) // Expected output: [2, 3]
```

**EXPLANATION**

Input Array: [2, 2, 3, 3, 3, 7, 9]

As a start we have, i = 0. at very beginning we compare the first element (which is 2) with the second element (which is 2). 2 and 2 is duplicate, so push to tempResultArray of second element (which is 2). but before that, the element go to `indexOf(sortedArr[i]) === -1)`. sortedArr[i] is actually equal to 3. so, we check whether in tempResultArray already got 3. `-1` means not exist. if not exist, push to tempResultArray.

then, i++. now, i = 1. compare second element with third element (which is 3). 2 and 3 not duplicate, so do nothing.

again, i++. now, start at i = 2 (third element of index 2, which is 3). compare third element with fourth element (which is 3). 3 and 3 is duplicate, so push to tempResultArray which is 3.

again, i++. now, index start at i = 3. compare fourth element with fifth element (which is 3). 3 and 3 is duplicate, so push to tempResultArray which is 3.

again, i++. now, index start with i = 4. compare fifth element with sixth element (which is 7). 3 and 7 not duplicate, so do nothing.

7 and 9 not compare with the last element (which is 9), `i < sortedArr.length - 1;`

`tempResultArray = [2, 3]`

1. `let tempResultArray = []`: Initializes an empty array called `tempResultArray`, which will be used to store any duplicate numbers found in the loop below.

2. `for (let i = 0; i < sortedArr.length - 1; i++)`: Sets up a for loop to iterate through each number in the `sortedArr` array, from the first element to the second to last element. We don't need to check the last element since we're comparing it to the next element.

3. `if (sortedArr[i] === sortedArr[i+1])`: Checks if the current element is the same as the next element. If it is, that means the current element is a duplicate.

4. `if (tempResultArray.indexOf(sortedArr[i]) === -1)`: Checks if the current duplicate number has already been added to the `tempResultArray`. If the index of the current duplicate number is `-1`, that means it hasn't been added yet.

5. `tempResultArray.push(sortedArr[i])`: If a duplicate number is found and it hasn't already been added to the `tempResultArray`, it is added using the `push` method.

6. `console.log(tempResultArray)`: Outputs the `tempResultArray` to the console, which contains all the unique duplicate numbers found in the `sortedArr` array.

In summary, this code is a more advanced way to find all the duplicate numbers in a sorted array by iterating through each number in the array and comparing it to the next number. If a duplicate number is found and it hasn't already been added to a `tempResultArray`, it is added to the array using the push method. The final output is the `tempResultArray` containing all the unique duplicate numbers found in the `sortedArr` array.

> other function called unique. can search it for more info.

### Techniques that we used

1. Sorting First
2. Temporary Variable

Full

```javascript
// Part 1 - Sort the Array
arr = [2, 3, 3, 7, 9, 2]
sortedArr = arr.sort() // [ 2, 2, 3, 3, 7, 9 ]

// Part 2 - Check for Duplicating Numbers
let tempResultArray = []
for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        tempResultArray.push(sortedArr[i])
    }
}
console.log(tempResultArray) // Output: [2, 3, 3]


// Part 3 - Avoid Duplicating Results
let tempResultArray = []

for (let i = 0; i < sortedArr.length - 1; i++){
    if (sortedArr[i] === sortedArr[i+1]){
        if (tempResultArray.indexOf(sortedArr[i]) === -1){
            tempResultArray.push(sortedArr[i])
        }
    }
}

console.log(tempResultArray) // Output: [2, 3]
```

## Question 3 - Finding Number Pairs

### Finding Missing Number

How to find all pairs of integer in an array whose sum is equal to a given number?

```markdown
Example 1:
Input Array: [2, 3, 7, 9, 2], Target Sum: 10
Results: 3, 7

Example 2:
Input Array: [3, 4, 6, 1], Target Sum: 10
Results: 4, 6
```

### What is your solution?

Hint: Using 2 loops, nested loops

```markdown
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->


```

### Example Algorithm

1. Use a for loop to loop through the input array
2. For each element in the input array, calculate the sum of this element with each of the other elements
3. For those that add up to our target sum, print the pair

### Part 1 - Loop Thru the Array

First, we need to loop through the array:

```javascript
let arr = [2, 3, 7, 9, 2]
let targetSum = 10

// We first loop thru the array elements one by one
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetSum) {
      console.log(arr[i] + ", " + arr[j])
    }
  }
}
```

### Part 2 - Loop Thru in a Nested Loop (important part)

Then we need to create a nested loop to go thru each of the elements again.

```javascript
let arr = [2, 3, 7, 9]
let targetSum = 10

// Create a second loop, a nested loop to loop thru the array again, so we can calculate the sum of the elements
for (let i = 0; i < arr.length; i++) {
  // Add up each pair of elements and see if that add up to the target sum
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetSum) {
    console.log(arr[i] + ", " + arr[j])
    }
  }
}

// Expected  output first answer: 3, 7
// Expected  output second answer: 7, 3
```

|   | 2  | 3  | 7  | 9  |
|---|---|---|---|---|
| 2  | 4  | 5  | 9  | 11  |
| 3  | 5  | 6  | 10  | 12  |
| 7  | 9  | 10  | 14  | 16  |
| 9  | 11  | 12  | 16  | 18  |


**EXPLANATION**

outer loop `for (let i = 0; i < arr.length; i++) {`, we try to loop the left-end column. for each of the number we want to calculate, we use the second for loop to calculate 2 + 2 = 4, 2+3, 2+7, 2+9. and the first row (which is 2) is done. next row (which is 3), it will go the same for loop iteration, 3+2, 3+3, 3+7, 3+9. next row (which is 7). next row (which is 9). so, thru out the process everytime when we do this sum up we also check whether it is equal to the targetSum. targetSum is 10. basically, can find 2 answers. which is 3+7 or 7+3. then, we printed out the answer.

Input Array: [2, 3, 7, 9] 

```javascript
let arr = [2, 3, 7, 9, 2]
let targetSum = 10

// Create a second loop, a nested loop to loop thru the array again, so we can calculate the sum of the elements
for (let i = 0; i < arr.length; i++) {
  // Add up each pair of elements and see if that add up to the target sum
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetSum) {
    console.log(arr[i] + ", " + arr[j])
    }
  }
}
```

i = vertical / column |   |
j = horizontal / row _   _
`console.log(arr[i] + ", " + arr[j])`

|   | 2  | 3  | 7  | 9  |
|---|---|---|---|---|
| 2  | 4  | 5  | 9  | 11  |
| 3  |   |   |   |   |
| 7  |   |   |   |   |
| 9  |   |   |   |   |

at first we have index start 0 which is, i = 0. and also j = 0 at start. index i = 0 (which is 2) + index j = 0 (which is 2) equal to 4. targetSum is 10, so ignore 2 + 2.
still inside orange (second loop) for loop. next, j++. j become 1. so, index i = 0 (which is 2) + index j = 1 (which is 3) equal to 5. targetSum is 10, so ignore 2 + 3.
next, j++. j become 2. so, index i = 0 (which is 2) + index j = 2 (which is 7) equal to 9. targetSum is 10, so ignore 2 + 3.
next, j++. j become 3. so, index i = 0 (which is 2) + index j = 3 (which is 9) equal to 11. targetSum is 10, so ignore 2 + 9.
next, j++. j become 4. this time 4 is larger than the length. not fulfill the criteria. the criteria is j smaller than the length (which is 3). so, second for loop is done.

i = 0
j = 0, 1, 2, 3, 4

then back to the first (outer) for loop.
now, i equal to 1. then we are going to start the second for loop again. with it start the j = 0. this time, we add up `arr[1] + ", " + arr[0]` (which is 3 + 2 = 5).
next, j++. j become 1. this time, we add up `arr[1] + ", " + arr[1]` (which is 3 + 3 = 6). check with targetSum is 10, so ignore.
next, j++. j become 2. this time, we add up `arr[1] + ", " + arr[2]` (which is 3 + 7 = 10). check with targetSum is 10, so answer equal to targetSum. bingo. printed out answer = [3, 7]. printed out arr[i] first then arr[j]. (first answer)
next, j++. j become 3. this time, we add up `arr[1] + ", " + arr[3]` (which is 3 + 9 = 12).
next, j++. j become 4. 4 is longer than the arr length. not fulfill the criteria. so, second for loop is done again. second for loop once again ended.

i = 1
j = 0, 1, 2, 3, 4

|   | 2  | 3  | 7  | 9  |
|---|---|---|---|---|
| 2  | 4  | 5  | 9  | 11  |
| 3  | 5  | 6  | 10  | 12  |

then back to the first (outer) for loop.
now, i equal to 2. j start from 0 again. then we are going to start the second for loop once again. this time, we add up `arr[2] + ", " + arr[0]` (which is 7 + 2 = 9).
next, j++. j become 1. this time, we add up `arr[2] + ", " + arr[1]` (which is 7 + 3 = 10). check with targetSum is 10, so answer equal to targetSum. bingo. printed out answer = [3, 7]. printed out arr[i] first then arr[j]. (second answer)
next, j++. j become 2. this time, we add up `arr[2] + ", " + arr[2]` (which is 7 + 7 = 14). check with targetSum is 10, so ignore.
and so on.


i = 2

j = 0

              j
  |   | 2  | 3  | 7  | 9  |
  |---|---|---|---|---|
i  | 2  | 4  | 5  | 9  | 11  |
  | 3  | 5  | 6  | 10  | 12  |
  | 7  | 9  | 10  | 14  | 16  |

summary, this using two for loop.

> issues/ how to make this algorithm more efficient ??

1. have redundant calculation.

### Part 3 - Avoiding Duplicate Results (important)

You might noticed that, the results are duplicated (i.e. both 3,7 and 7,3 are printed out). We need to update the `let j = i + 1;`

```javascript
let arr = [2, 3, 7, 9]
let targetSum = 10

for (let i = 0; i < arr.length; i++) {
  // We can only calculate half of the iteration, to avoid duplicate results
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetSum) {
      console.log(arr[i] + ", " + arr[j])
    }
  }
}
```

`let j = i + 1;` : we only ended up with the index that is larger. so, will always start with `i + 1` instead of starting with 0.

so, when i is 0, will be starting with j + 1 = 1 and that will be adding up index 1, 2, and 3.

if i is 2 now, then j + 1 = 3.

|   | 2  | 3  | 7  | 9  |
|---|---|---|---|---|
| 2  | 4  | 5  | 9  | 11  |
| 3  | 5  | 6  | 10  | 12  |
| 7  | 9  | 10  | 14  | 16  |
| 9  | 11  | 12  | 16  | 18  |

i = 0: 2. j = i + 1 == 1: 3 >>>> 2 + 3

i = 1: 

**further explain**

`let j = i + 1` vs `let j = 0`

Why we use `(let j = i + 1; j < arr.length; j++)` in the inner loop.

By using `let j = i + 1`, we ensure that we don't repeat the same pairs of elements. Since the question asks for pairs of distinct integers in the array, we should not consider a pair twice. If we don't use this approach and set `let j = 0`, we will end up finding the same pairs twice, once with `arr[i]` as the first element and `arr[j]` as the second element, and another time with `arr[j]` as the first element and `arr[i]` as the second element.

By starting the inner loop from `i + 1`, we skip all the elements that come before `arr[i]`, ensuring that each pair is unique and doesn't include the same element twice. This way, we find all possible pairs in the array whose sum is equal to the target without redundancy.

Difference results:

Example array `[2, 3, 7, 9, 2]` and the target sum `10`.

Using `let j = i + 1` (distinct pairs approach):

```javascript
let arr = [2, 3, 7, 9, 2];
let targetSum = 10;
let pairs = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
            pairs.push([arr[i], arr[j]]);
        }
    }
}

console.log(pairs); // Output: [[3, 7], [2, 8], [9, 1]]
```

Using `let j = 0` (considering all pairs, including duplicates):

```javascript
let arr = [2, 3, 7, 9, 2];
let targetSum = 10;
let pairs = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
            pairs.push([arr[i], arr[j]]);
        }
    }
}

console.log(pairs); // Output: [[3, 7], [7, 3], [2, 8], [8, 2], [9, 1], [1, 9]]
```

As you can see, when using `let j = i + 1`, we only get the distinct pairs that satisfy the condition `arr[i] + arr[j] === targetSum`. On the other hand, when using `let j = 0`, we find all pairs, including duplicates, resulting in pairs with the same elements in reverse order. To avoid duplicates, it's better to use `let j = i + 1` to ensure we only get unique pairs.

### Techniques that we used

1. Nested Loops

[example question](https://medium.com/tech-interview-collection/solving-thetwo-product-problem-in-js-using-brute-force-hashing-and-binary-search-patterns-with-2335cccf0d8):

> Given a list of numbers, find two numbers that sum up to a given target and return the product of these numbers.

Some things to consider before solving this problem:

1. The given list is unsorted
2. There are no duplicates of numbers
3. Each input should return exactly one solution

```
Sample input: 
list = [1721, 979, 366, 299, 756, 1456]
target = 2020

Sample output: 
514579

Explanation: 2020 - 1721 = 299; 1721 * 299 = 514579
```

**Solution Using Brute Force Pattern**

Pseudocode:

```
Repeat, starting at first element
```

```javascript
function twoProducts(list, target) {
  let product = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = i+1; j < list.length; j++) {
      if ( (list[i] + list[j]) === target ) {
        product = list[i] * list[j];
      }
    }
  }
  console.log(product);
}

twoProducts([2, 4, 1, 8, 9], 2);
```

**Time Complexity Explanation for the Brute Force solution**

This is the most basic and easiest way of solving this problem and probably the first approach that comes to mind when attempting a problem. From the solution above, the list is traversed the first time to get the first number and a second time to get the second number. These two iterations would continue until the two possible numbers are found in the list. Worst case is if the two numbers don’t exist in the list, or if the list contains only one of the two numbers, or if you’re given a list that contains 1 billion different numbers and the first number is at say position 0, and the second number is at the 1 billionth position. Brute force might be useful for solving problems with very small input e.g. a list of two items, but definitely not a way to go when dealing with large datasets or when considering scalability.

```
Analysis of the above solution:
The first iteration occurs in O(n)
The second iteration occurs in O(n)
Total time complexity = O(n^2)
Because these two iterations are nested in each other, the total time taken would be O(n) * O(n) = O(n^2), which is quadratic time.
```

**Solution Using Binary Search**

```javascript
function twoProducts(list, target) {
  let product = [];
  let sortedData = list.sort((a, b) => a-b);

  for (let i in sortedData) {
    let num2 = target - sortedData[i];

    if (binarySearch(sortedData, num2)) {
      product.push(binarySearch(sortedData, num2))
    }
  }
  console.log(product.reduce((a, b) => a * b))
}

twoProducts([2, 4, 1, 8, 9], 2);
```

# Feedback on exercise

Great job on keeping the code concise and easy to read. Your solution works correctly for all the given test cases. Keep up the good work!

## exercise-1.js

## exercise-2.js

## exercise-3.js