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