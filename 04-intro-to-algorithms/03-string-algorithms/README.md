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

### What is your solution?

Hint: Using 2 loops, nested loops

```markdown
<!-- your solution - (doesnt have to code, can be a pseudocode or methodology) -->


```

### Example Algorithm

1. Use a for loop to loop through the input array
2. For each letter, use a second loop to loop thru the next couple letter. 
Check each letter against the target string. Go on and on until the whole 
“target string” is matched, or one of the letter it not matching
3. If the whole “target string” is matched, return true.
4. If the outer loop finished, but still no fully matched substring, return false

### Part 1 - Creating Outer Loop

Very simple, just creating a simple for loop to loop through whole string.

```javascript
originalString = "Hello"

for (let i = 0; i < originalString.length; i++) {
 // Leave for Step 2
 
}
```

### Break

Ending the loop immediately

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // Jump to here whe the break line is hit
    break;
  }
  console.log("It's now " + i)
}
```

Console Output

```console
It's now 0
It's now 1
It's now 2
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