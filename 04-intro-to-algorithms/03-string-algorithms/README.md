# Coding the array algorithm questions

General Notes:

Please leverage the test cases we provided at the bottom of each of the code files to debug your program. Those test cases cover different scenarios of the given tasks, and provide a way for you to check answers.

If some of the test cases are failing, that means you have some obvious scenarios that you are not covering yet. Try to dry run the code with the failing test cases with your mind or a piece of paper, and find out what you are missing. 

## 1.1 In this part, you are going to try coding the “Find Substring” algorithm question we discussed in class

Open `exercise-1.js` file and please finish the `findSubstring` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.2 In this part, you are going to try coding the “Reverse String” algorithm question we discussed in class.

Open `exercise-2.js` file and please finish the `reverse` function according to the specification in the file. We have prepared some test cases for you to test your functions.

## 1.3 In this part, you are going to try coding the “Find Substring” algorithm question we discussed in class

Open `exercise-3.js` file and please finish the `checkAnagram` function according to the specification in the file. We have prepared some test cases for you to test your functions.

# Lecture 3: String Algorithms (String as Arrays)

**Agenda**

- Treating Strings as Arrays
- Strings Question 1 - Finding Substring
- Strings Question 2- Reverse Word Order
- Strings Question 3 - Anagram

## Strings as Array

- Strings are actually stored as array or treated as array in a lot of programming languages
- i.e. you are access each of the letters using index

```javascript
const a = "Hello World!"
const a = [“H”, “e”, “l”, …]

console.log(a[1]) // Print out the letter “e”
console.log(a[6]) // Print out the letter “W”
```

### Handling Strings Algorithm Questions
- Given that strings can be treated as arrays, you can actually consider 
most of the strings questions as array questions
- Still the same techniques:
 - Temporary Variables
 - Looping Twice
 - Nested Loops
 - Sort First

## Strings Question 1 - Finding Substring

### Finding Substring

How can you check if a substring exists in a string? (How to implement the `indexOf()` function?)

**Example 1 (Found case):**
Input String: "Hello", Target: "lo" 
Results: 3

**Example 2 (Not found case):**
Input Array: "Good Evening”, Target: "app"
Results: -1

**JS Fact:**

> `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present. (indexOf() is basically a searching function. -1 means not exist in the array)

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

### What is your solution?

Hint: Using 2 loops, nested loops

```markdown
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->


```

### Example Algorithm

1. Use a for loop to loop through the input array.
2. For each letter, use a second loop to loop thru the next couple letter. Check each letter against the target string. Go on and on until the whole “target string” is matched, or one of the letter it not matching.
3. If the whole “target string” is matched, return true.
4. If the outer loop finished, but still no fully matched substring, return false.

### Part 1 - Creating Outer Loop

Very simple, just creating a simple for loop to loop through whole string.

```javascript
originalString = "Hello"

for (let i = 0; i < originalString.length; i++) {
 // Leave for Step 2
 
}
```

### Break

Ending the whole loop immediately

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // Jump to here whe the break line is hit
    break; // exit the loop when i is equal to 3
  }
  console.log("It's now " + i)
}
```

**EXPLAINATION**

The above code will print the numbers from 0 to 2, and then exit the loop when i is equal to 3.

Console Output:

although originally, we're going to do 0, 1, 2, 3. but, we drop off at 3. so, the console output only have 0, 1, and 2.
same as with the `while` loop.

```console
It's now 0
It's now 1
It's now 2
```

**JS FACT**

> `break` statement terminates the current loop or `switch` statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.

```javascript
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// Expected output: 3
```

### Continue

Ending the current iteration, but not ending the loop

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // Jump to here when continue is hit
    continue;
  }
  console.log("It's now " + i)
}
```

Console Output

```console
It's now 0
It's now 1
It's now 2
It's now 4
```

if the line `continue` is hit, then end the current loop and immediately go to `i++`. the for loop will still continue. i === 3 are skipped from the output.

**JS FACT**

> `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

```javascript
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789" (3 is drop off)
```

Description:

In contrast to the `break` statement, continue does not terminate the execution of the loop entirely, but instead:

1. In a `while` or `do...while` loop, it jumps back to the condition.
2. In a `for` loop, it jumps to the update expression.
3. In a `for...in`, `for...of`, or `for await...of` loop, it jumps to the next iteration.

> `return` statement ends function execution and specifies a value to be returned to the function caller.

```javascript
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0
```

> return vs break vs continue ??

`return` statement is used to return a value from a function and exit the function. When `return` is encountered inside a function, the program exits the function immediately and returns the specified value.
In summary, `break` is used to break out of a loop or `switch` statement, while `return` is used to return a value from a function and exit the function.

### Part 2 - Creating the Inner Loop (importat part)

In this step, we need to create an inner loop that would help us in checking if the next few letters (including the current letter) matched with the inner loop.

```javascript
originalString = "Hello"
targetString = "lo"

for (let i = 0; i < originalString.length; i++) {
  // Leave for Step 2
  for (let j = 0; j < targetString.length; j++) {
    // Case 1: Not Match, and end this iteration
    if (originalString[i + j] !== targetString[j]) {
      break;
  }
  // Case 2: Match and it’s the last character
  else if (originalString[i + j] === targetString[j] && j === targetString.length -1) {
    console.log("Found at position " + i)
  }
 }
}
```

**EXPLAINATION**

### Part 3 - Optimization

Double check the logic and see if there are anything your missed or can be removed?

```javascript
originalString = "Hello"
targetString = "lo"

for (let i = 0; i < originalString.length; i++) {
  // Leave for Step 2
  for (let j = 0; j < targetString.length; j++) {
    // Case 1: Not Match, and end this iteration
    if (originalString[i + j] !== targetString[j]) {
      break;
  }
  // Case 2: Match and it’s the last character
  else if (j === targetString.length -1) {
    console.log("Found at position " + i)
  }
 }
}
```

**EXPLAINATION**

1. `originalString = "Hello"`: This line declares a variable called `originalString` and assigns it the value "Hello". This will be the string we're searching for the target string within.

2. `targetString = "lo"`: This line declares a variable called `targetString` and assigns it the value "lo". This is the string we're looking for within the larger originalString.

3. `for (let i = 0; i<originalString.length; i++) {`: This line starts a loop that will iterate over every character in the originalString. It declares a variable called i that starts at 0, and will continue looping as long as i is less than the length of the originalString.

4. `for (let j = 0; j < targetString.length; j++) {`: This line starts a second loop that will iterate over every character in the targetString. It declares a variable called j that starts at 0, and will continue looping as long as j is less than the length of the targetString.

5. `if (originalString[i + j] !== targetString[j]) {`: This line checks whether the character at position i+j in the originalString is not equal to the character at position j in the targetString. If this is true, it means we haven't found a match, so we break out of the inner loop and move on to the next character in the originalString.

6. `else if (j ===targetString.length -1) {`: This line checks whether we've reached the end of the targetString (i.e., whether j is equal to the length of the targetString minus 1). If this is true, it means we've found a match, so we log a message to the console indicating the position where the match was found.

7. `console.log("Found at position " + i)`: This line logs a message to the console indicating that we've found a match at position i in the `originalString`.

In summary, this code loops through every character in the `originalString`, and for each character, it loops through every character in the `targetString` to see if there's a match. If it finds a match, it logs the position of the match to the console.

### Techniques that we used

1. Nested Loops

## Strings Question 2 - Reverse Word Order

### Reverse Word Order

How can you reverse the word order in a string? (Implement the `array.reverse()` function for string)

Example 1:
Input String: Talentlabs, Output: sbaltnelaT

Example 2:
Input Array: Hello, Output: olleH

### What is your solution?

Hint: Use a loop with temp variable

```markdown
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->


```

### Example Algorithm

1. Use a for loop to loop thru the inputString from the end of the array
2. For each letter, append it to a temp string
3. Return temp string as result

### Part 1 - Loop Thru the Array

First, we need to loop through the array

``` javascript
const inputString = "Talentlabs"
let result = ""

for (let i = inputString.length-1; i >= 0; i--){
 result += inputString[i]
}

console.log(result)
```

`i--` —> count down instead of count up

`inputString.length-1` —> Start from the end of the array

**EXPLAINATION**

1. `const inputString = "Talentlabs"`: This line creates a constant variable called `inputString` and sets its value to the string `"Talentlabs"`.

2. `let result = ""`: This line creates a variable called `result` and sets its initial value to an empty string.

3. `for (let i = inputString.length-1; i >= 0; i--)`: This line sets up a for loop that will iterate over each character in `inputString`, starting with the last character and moving backwards towards the first character. `let i = inputString.length-1` initializes the loop variable `i` to the last index of the string, `-1` is used because the index starts from `0` in programming. The loop will continue as long as `i` is greater than or equal to `0` `(i >= 0)`. `i--` decrements the loop variable by 1 in each iteration.

4. `result += inputString[i]`: This line adds the current character to the end of the result string. `inputString[i]` retrieves the character at index `i` from `inputString`.

5. `console.log(result)`: This line outputs the final result string to the console.

Overall, the code takes a given string and reverses the order of its characters. It does this by iterating over the string in reverse order, and concatenating each character to a new string variable `result`. Finally, it outputs the reversed string to the console.

> explain further `result += inputString[i]` is shorthand for `result = result + inputString[i]`.

It's a compound assignment operator that concatenates the current character (`inputString[i]`) to the end of the result string.

In each iteration of the `for` loop, `inputString[i]` retrieves the character at the current index (`i`) from `inputString`. For example, on the first iteration when `i = inputString.length-1`, inputString[i] retrieves the last character of the string. On the second iteration, inputString[i] retrieves the second-to-last character of the string, and so on.

By using `+=`, we append each character to the end of the result string. The result string starts as an empty string, so each character from `inputString` is simply added to the end of it in reverse order.

At the end of the for loop, the result string contains all the characters from inputString in reverse order.

```javascript
const inputString = "Talentlabs"
let result = ""

for (let i = inputString.length-1; i >= 0; i--) {
 result += inputString[i]
}
console.log(result)

// Output: sbaltnelaT
```

i: 9 8 7 6 5 4 3 2 1 0 -1
result: sbaltnelaT

### Techniques that we used

1. Loop
2. Temp Variable

## Strings Question 3 - Anagram

### Anagram

How to check if two strings are anagram to each other?

Definition of anagram: words with same letters, but different word.
(e.g. Paris/Pairs are anagram, arc/car are anagram)

1. Example 1 (Found case):
Input String 1: Paris, Input String 2: Pairs 
Result: true

2. Example 2 (Not found case):
Input String 1: Hello, Input String 2: Bye
Result: false

### What is your solution?

Hint: Use sorting

### Example Algorithm

1. Convert the two strings into array by using “split()” function
2. Sort the two arrays using the “sort()” function
3. Convert the two arrays back to strings
4. Compare the two strings and see they the two strings equals to each other

### Revision - split()

### Revision - sort()

### Revision - join()

### Part 1 - Convert string to array 

Convert the string to array so we can use the sort function later.

``` javascript
const inputString1 = "Paris"
const inputString2 = "Pairs"

stringInArray1 = inputString1.split("")
stringInArray2 = inputString2.split("")
```

### Part 2 - Sort the two arrays 

Sort the arrays so we can compare the two arrays compositions.

```javascript
const inputString1 = "Paris"
const inputString2 = "Pairs"

stringInArray1 = inputString1.split("")
stringInArray2 = inputString2.split("")

const sortedArrar1 = stringInArray1.sort()
const sortedArrar2 = stringInArray2.sort()
```

### Part 3 - Compare the sorted array 

Join the sorted array back to a string, and compare if the two strings are the same.

```javascript
const inputString1 = "Paris"
const inputString2 = "Pairs"

stringInArray1 = inputString1.split("")
stringInArray2 = inputString2.split("")

const sortedArray1 = stringInArray1.sort()
const sortedArrar2 = stringInArray2.sort()

if (sortedArray1.join("") === sortedArray2.join("")) {
 console.log("Anagram")
} else {
 console.log("Not Anagram")
}
```

**EXPLAINATION**

```javascript
const inputString1 = "Paris"

const inputString2 = "Pairs"

stringInArray1 = inputString1.split("")
stringInArray2 = inputString2.split("")

const sortedArray1 = stringInArray1.sort()
const sortedArrar2 = stringInArray2.sort()

if (sortedArray1.join("") === sortedArray2.join("")) {
 console.log("Anagram")
} else {
 console.log("Not Anagram")
}
```

Input: abb, ba

Step 1, after split:
[a, b, b]
[b, a]

Step 2, Sorting:
a, b, b
a, b

Step 3 Join back:
abb
ab

### Anagram 2.0

How to ignore cases when checking for anagram?

1. Example 1 (Found case):
Input String 1: Paris, Input String 2: pairs 
Results: true

2. Example 2 (Not found case):
Input String 1: Paris, Input String 2: paris
Results: false (because they are the same word)

### What is missing for our solution 1?

1. ignore cases
2. check if the two words are actually the same word

Solution:

Convert the string to lowercase letters:

```javascript
let str = "Hello World!";

str.toLowerCase();
```

### Techniques that we used

1. Sorting