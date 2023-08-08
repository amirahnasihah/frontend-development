# String Algorithm Problems in JS

## Question 1 - Finding Substring

> How can you check if a substring exists in a string? (How to implement the `indexOf()` function?)

1. Part 1 - Create outer loop
2. Part 2 - Create inner loop
3. Part 3 - Optimization

In Part 2 step, we need to create an inner loop that would help us in checking if the next few letters (including the current letter) matched with the inner loop.

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

Let's say you have a word "Hello" and you want to find another word "lo" inside it. Imagine you're checking each letter of "Hello" one by one to see if they match the letters of "lo."

You start with the first letter of "Hello," which is "H." Then you compare it with the first letter of "lo," which is "l." Since they don't match, you stop checking and move to the next letter of "Hello."

You continue this process for each letter in "Hello." If you find a letter that doesn't match the corresponding letter in "lo," you stop checking that part of "Hello" and move on to the next letter.

But if you do find matching letters all the way to the end of "lo," that means you've found the word "lo" inside "Hello." You would then say, "Found at position [position number]." The position number tells you where "lo" starts in the word "Hello."

So, this code is like a game where you're looking for a hidden word "lo" inside the word "Hello." You check each letter and see if they match. If they do match and the hidden word "lo" is all there, you announce where you found it in "Hello." If they don't match, you move on to the next starting point in "Hello" to check again.

> `(let j = 0; j < targetString.length; j++)`

```javascript
for (let j = 0; j < targetString.length; j++) {
  // Code inside this loop will be executed for each character in the target string
}
```

In this loop, you're using the variable `j` to represent the position of characters within the `targetString`. The loop is set up to iterate through each character of the `targetString` one by one.

Here's how it works:

- `let j = 0;` initializes the variable `j` to start from 0, which is the position of the first character in the `targetString`.
- `j < targetString.length` is the condition that checks whether the current value of `j` is less than the length of the `targetString`. As long as this condition is true, the loop will continue to execute.
- `j++` increments the value of `j` by 1 after each iteration of the loop. This means that `j` will go from 0 to 1, then from 1 to 2, and so on, until it reaches the length of the `targetString` minus 1.

So, for each iteration of this loop, the code inside it will be executed, allowing you to compare each character of the `targetString` with corresponding characters in the `originalString`. This loop helps you check whether the characters in the `targetString` match the characters in the `originalString` when considering different starting positions.

> `(j === targetString.length -1)` vs `(originalString[i + j] === targetString[j] && j === targetString.length -1)`

In the given code, you're trying to find a specific target string ("lo") inside an original string ("Hello"). Let's break down the two parts you mentioned:

1. `(j === targetString.length - 1)`:
   This condition checks whether the variable `j` (which represents the current position while checking characters in the target string) is equal to the length of the target string minus 1. If it's true, it means you've successfully checked all characters in the target string and they match the corresponding characters in the original string.

2. `(originalString[i + j] === targetString[j] && j === targetString.length - 1)`:
   This condition combines two checks. The first part (`originalString[i + j] === targetString[j]`) is checking if the current character in the original string (at the position `i + j`) matches the character in the target string (at position `j`).

   The second part (`j === targetString.length - 1`) is the same condition we discussed earlier. It's checking whether you've reached the end of the target string while comparing characters.

So, when you combine both parts, you're checking if the characters match while ensuring that you've checked all characters in the target string. If both conditions are true, it means you've found the target string at a particular position in the original string, and that's when the code prints "Found at position [position number]."

In simpler terms, the `(j === targetString.length - 1)` part is like checking if you've successfully matched all characters in the target string. And the whole condition is used to confirm that you've successfully matched the target string's characters in the original string.

# String as Arrays Algorithm Problems in JS