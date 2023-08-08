# String Algorithm Problems in JS

## Question 1 - Finding Substring

> How can you check if a substring exists in a string? (How to implement the `indexOf()` function?)

1. Part 1 - Create outer loop
2. Part 2 - Create inner loop
3. Part 3 - Optimization

In Part 2 step, we need to create an inner loop that would help us in checking if the next few letters (including the current letter) matched with the inner loop.

### What is your solution?

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

In this loop, you're using the variable `j` to represent the position of characters within the `targetString`. The loopp is set up to iterate through each character of the `targetString` one by one.

Here's how it works:

- `let j = 0;` initializes the variable `j` to start from 0, which is the position of the first character in the `targetString`. >>> l
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

**further explain**

Imagine you have two strings of letters. The first one is called "originalString" and it says "Hello". The second one is called "targetString" and it's "lo".

Now, the code wants to check if the "targetString" can be found inside the "originalString". It does this by comparing each letter of the "targetString" with the letters in the "originalString".

It uses two loops to do this. The first loop goes through each letter of the "originalString". The second loop goes through each letter of the "targetString".

Inside the loops, **it checks if the current letter in the "originalString" matches the corresponding letter in the "targetString". If they don't match, it stops checking and moves on to the next letter in the "originalString".**

But if the letters do match, it keeps comparing the next letters in both strings. If all the letters in the "targetString" match the letters in the "originalString" starting from the current position, it means the "targetString" was found inside the "originalString". In that case, it prints a message saying where it found the "targetString".

So, in this case, the code will find that "lo" starts at position 3 in the "originalString" (remember, positions start counting from 0), and it will print: "Found at position 3".

> confusion of inner loop

```javascript
originalString = "Hello"
targetString = "lo"

for (let i = 0; i < originalString.length; i++) {
```
Here, the code defines two strings: `originalString` is "Hello", and `targetString` is "lo". The code then starts a loop that goes through each position in the `originalString`. The `i` variable is used to keep track of the current position being checked.

```javascript
  for (let j = 0; j < targetString.length; j++) {
```
Inside the outer loop, there's another loop, which goes through each position in the `targetString`. This inner loop is used to compare the letters of the `targetString` with the letters of the `originalString` starting from the current position (`i`).

```javascript
    if (originalString[i + j] !== targetString[j]) {
      break;
    }
```
This line checks if the letter in the `originalString` at the position `i + j` (this is done to match the letters in the `originalString` with the corresponding letters in the `targetString`) is not the same as the letter in the `targetString` at position `j`. If this condition is met, it means the current segment of letters being checked is not a match, so the `break` statement is used to stop checking the rest of the letters and move on to the next position in the `originalString`.

```javascript
    else if (j === targetString.length - 1) {
      console.log("Found at position " + i)
    }
  }
}
```
If the condition in the previous line was not met (meaning the letters match), then this line checks if the variable `j` has reached the last position in the `targetString`. If it has, that means all the letters in the `targetString` were successfully matched with the corresponding letters in the `originalString`. In that case, it prints a message saying the `targetString` was found at the position `i` in the `originalString`.

So, to answer your questions:
- The inner loop goes through the `targetString` because it's used to compare the letters of the `targetString` with the letters of the `originalString`.
- `i + j` is used to match the corresponding letters in both strings. It helps compare letters starting from the current position in the `originalString`.
- Yes, you're correct. `(j === targetString.length - 1)` checks if the current position in the `targetString` is the last one. If it is, it means the entire `targetString` has been successfully matched.

#### Visualize the flow

"to length of originalString - 1", it's saying that the loop should go from the first box (0) to the last box (length of originalString - 1) to ensure we're checking each position of the string.

**Pseudocode**

```plaintext
originalString = "Hello"
targetString = "lo"

for i = 0 to length of originalString - 1:
    for j = 0 to length of targetString - 1:
        if originalString[i + j] is not equal to targetString[j]:
            break
        else if j is equal to length of targetString - 1:
            print "Found at position " + i
```

Expected output: `"Found at position 3"`

The above pseudo-code outlines the logic of the code you provided and what it's trying to achieve, without specifying any programming language syntax. It gives you a step-by-step representation of how the loops and conditionals work together to find the "targetString" within the "originalString".

Let's use `originalString = "Hello"` and `targetString = "lo"` as in your code.

1. **Outer Loop (`i` loop):**
   - `i` starts at 0 and increments by 1 until it reaches the length of `originalString` (5).
   - In the first iteration, `i = 0`.
   - In the second iteration, `i = 1`.
   - And so on, until `i = 4`.

2. **Inner Loop (`j` loop):**
   - Inside each iteration of the outer loop, the inner loop (`j` loop) runs.
   - `j` starts at 0 and increments by 1 until it reaches the length of `targetString` (2).
   - In the first iteration, `j = 0`.
   - In the second iteration, `j = 1`.

Now, let's see how these loops work together for each combination of `i` and `j`:

```javascript
    if (originalString[i + j] !== targetString[j]) {
      break;
    }
```

- When `i = 0` and `j = 0`:
  - Compare `originalString[0 + 0]` (which is "H") with `targetString[0]` (which is "l").
  - Since they don't match, the inner loop breaks.

- When `i = 0` and `j = 1`:
  - Compare `originalString[0 + 1]` (which is "e") with `targetString[1]` (which is "o").
  - Since they don't match, the inner loop breaks.

- When `i = 1` and `j = 0`:
  - Compare `originalString[1 + 0]` (which is "e") with `targetString[0]` (which is "l").
  - Since they don't match, the inner loop breaks.

- When `i = 1` and `j = 1`:
  - Compare `originalString[1 + 1]` (which is "l") with `targetString[1]` (which is "o").
  - They don't match, so the inner loop breaks.

- When `i = 2` and `j = 0`:
  - Compare `originalString[2 + 0]` (which is "l") with `targetString[0]` (which is "l").
  - They match, so we move on to the next iteration of the inner loop.

- When `i = 2` and `j = 1`:
  - Compare `originalString[2 + 1]` (which is "l") with `targetString[1]` (which is "o").
  - They don't match, so the inner loop breaks.

- The pattern repeats for `i = 3` and `i = 4`, but since `i + j` exceeds the length of `originalString`, the inner loop breaks instantly.

After considering all these combinations, the code prints "Found at position 3". This means that the "targetString" "lo" was found in the "originalString" "Hello" starting at position 3.

This visualization helps you understand how the loops work together to compare the two strings!

Result output:

```plaintext
H l
H o

e l
e o

l l
l o

l l
l o

o l
o o
```

In this representation, each row corresponds to a specific combination of `i` (position in `originalString`) and `j` (position in `targetString`). The columns show the characters being compared in each iteration of the inner loop.

## Strings Question 2 - Reverse Word Order

Reverse the word order in a string? (Implement the `array.reverse()` function for string)

Example 1:
Input String: Talentlabs, Output: sbaltnelaT

Example 2:
Input Array: Hello, Output: olleH

### What is your solution?

#### Flow Visualize


# String as Arrays Algorithm Problems in JS