- [String Algorithm Problems in JS](#string-algorithm-problems-in-js)
  - [Question 1 - Finding Substring](#question-1---finding-substring)
    - [What is your solution?](#what-is-your-solution)
      - [Visualize the flow](#visualize-the-flow)
  - [Strings Question 2 - Reverse Word Order](#strings-question-2---reverse-word-order)
    - [What is your solution?](#what-is-your-solution-1)
        - [split()](#split)
        - [split().reverse().join()](#splitreversejoin)
        - [join()](#join)
      - [Flow Visualize](#flow-visualize)
- [String as Arrays Algorithm Problems in JS](#string-as-arrays-algorithm-problems-in-js)
- [Question: Capitalize only the first letter of a string](#question-capitalize-only-the-first-letter-of-a-string)

# String Algorithm Problems in JS

## Strings Question 1 - Finding Substring

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

Examples:
Input String: Talentlabs, Output: sbaltnelaT

Input Array: Hello, Output: olleH

**JS Fact**

Reverse a string by various methods, such as using a loop or the `split()` and `reverse()` combination.

```javascript
const text = "hello";
const reversedText = text.split("").reverse().join(""); // Output: "olleh"
```

1. Use a for loop to loop thru the inputString from the end of the array
2. For each letter, append it to a temp string
3. Return temp string as result

If the word is reversed using reverse() method, remember this:

1. split("") wit no empty string to separate it into individual word; // ["T", "a", "l", "e", ...]
2. split().reverse().join()
3. join

### What is your solution?

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

**using reverse() method solution:**

To reverse the order of characters within each word in a given string, while keeping the words themselves in the same order. Here's how:

```javascript
function reverseWords(input) {
    const words = input.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join(""); // Reverse characters within each word
    }
    
    return words.join(" ");
}

const inputString = "Talentlabs";
const reversedString = reverseWords(inputString);
console.log(reversedString); // Output: "sbaltnelaT"

const inputArray = "Hello";
const reversedArray = reverseWords(inputArray);
console.log(reversedArray); // Output: "olleH"
```

In this solution, the `reverseWords` function splits the input string into an array of words, then iterates through each word, reversing the characters within it using the `split`, `reverse`, and `join` functions. Finally, it joins the modified words back together to form the reversed string with reversed word characters. The same logic applies to reversing an input array of words.

> why have 2 split() method? Answer: a difference between a string and an array of words.

Your attempt to simplify the code is understandable, but there's a small misunderstanding. In your updated code, you're trying to loop through `input` directly as if it's an array of words, and you apply `.split("").reverse().join("")` to each character. However, there's a difference between a string and an array of words.

When you try to treat `input` (argument) as an array and loop through it, you're actually iterating over each character in the string. So, if you use this approach, the code will reverse the order of characters within the entire input string, not just within each word.

Your initial code had two splits because it was correctly treating the input as a sentence with multiple words. By splitting it at spaces first, you could then loop through each word and reverse the order of characters within that word.

In summary, your initial code approach was correct for the problem at hand, where you needed to reverse the order of letters within each word of a sentence while keeping the words themselves in the same order. The two splits were necessary to separate the words and then separate the characters within each word.

##### split()

> `const words = input.split(" ");`

Imagine you have a long sentence, and you want to deal with each word in that sentence one by one. But the sentence is just one big chunk of text, and you need a way to separate it into individual words. That's where the code line `const words = input.split(" ");` comes in!

Here's what's happening:

1. You have a variable called `input` that holds your sentence or text.
2. The `.split(" ")` part is like asking the computer to cut the text into pieces wherever it sees a space (" ") character.
3. So, if your `input` was "Hello there, how are you?", using `.split(" ")` would break it into smaller pieces like ["Hello", "there,", "how", "are", "you?"].
4. All these smaller pieces (or words) are then put into a new variable called `words`.

In simpler words, think of `.split(" ")` as a way to make a list of words from a sentence by looking for spaces between words. This makes it easier to work with each word separately. Just like if you were cutting a sandwich into smaller pieces to eat them one by one!

If you apply the `split(" ")` function to a word like "TalentLabs", which doesn't have any spaces, it will still work, but it will split the word into individual characters instead of words. Let's see how that would look:

```javascript
const inputWord = "TalentLabs";
const words = inputWord.split(" ");

console.log(words); // Output: ["T", "a", "l", "e", "n", "t", "L", "a", "b", "s"]
```

In this case, the `split(" ")` function will break the word "TalentLabs" into an array where each character is a separate element in the array. This behavior is due to the fact that there are no spaces in the word to use as splitting points.

##### split().reverse().join()

> `words[i] = words[i].split("").reverse().join("");`

```javascript
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join(""); // Reverse characters within each word
}
```

Here's what's happening step by step:

1. `for (let i = 0; i < words.length; i++)`: This line starts a loop that will go through each word in the `words` array. The loop variable `i` will take on values from 0 to 1 less than the length of the `words` array.

2. `words[i]`: This refers to the current word in the loop. `words[i]` is the word at the current index `i` within the `words` array.

3. `words[i].split("").reverse().join("")`: This part takes the current word and performs a series of operations on it:

   - `.split("")`: This takes the current word and breaks it into an array of individual characters. For example, "Hello" becomes ["H", "e", "l", "l", "o"].

   - `.reverse()`: This reverses the order of the characters in the array. So, ["H", "e", "l", "l", "o"] becomes ["o", "l", "l", "e", "H"].

   - `.join("")`: This puts the characters back together to form a single string. So, ["o", "l", "l", "e", "H"] becomes "olleH".

4. `words[i] = ...`: This part assigns the reversed word back to the `words` array at the same index `i`. So, if the original word was "Hello" at index `i`, it will now be "olleH".

Putting it all together, the loop goes through each word in the `words` array, reverses the characters in each word, and updates the `words` array with the reversed words.

In simpler terms, this loop takes each word, flips its letters around, and puts the flipped words back in their original positions in the array. It's like turning "Hello" into "olleH" and "world" into "dlrow".

##### join()

> `return words.join(" ");`

```javascript
return words.join(" ");
```

This line is the finishing touch of the code, where we're putting everything back together after the words have been reversed. Here's what's happening:

1. `words.join(" ")`: The `join()` function takes all the items in an array and joins them together into a single string. In this case, it's taking the `words` array, which contains the reversed words, and joining them together with spaces in between.

2. `" "`: The space inside the `join()` function specifies that we want to add a space between each word when joining them together.

3. `return`: This is the final result that the `reverseWords` function will give you when you call it. It's what the function will "return" to you. In this case, it's returning the joined string of reversed words with spaces.

So, if you had a sentence like "Hello world!", and you applied the steps in your code, the `return words.join(" ");` line would give you back "olleH !dlrow". It's like putting the words back together after they've been reversed individually, but still maintaining the same order of words as in the original sentence.

---

> Here's a way to **reverse the word order** in a string using the logic you provided earlier:

```javascript
function reverseWordOrder(inputString) {
    let result = "";
    let words = inputString.split(" "); // Split the string into an array of words

    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i !== 0) {
            result += " "; // Add a space between words except for the last word
        }
    }

    return result;
}

const inputString = "Reverse the word order";
const reversedString = reverseWordOrder(inputString);
console.log(reversedString); // Output: "order word the Reverse"
```

In this example, the `reverseWordOrder` function takes an input string, splits it into an array of words, and then iterates through the array in reverse order, building the `result` string. It also adds a space between words except for the last word to maintain proper spacing. This way, you'll get a reversed string with the word order reversed as well.

#### Flow Visualize

Your solution is on the right track! In the line `result += inputString[i]`, you are iterating through the characters of the `inputString` in reverse order, starting from the last character and going all the way to the first character. The `+=` operator is used to concatenate each character to the `result` string, effectively reversing the order of characters.

So, for the input string "Talentlabs", your loop would iterate as follows:

```
1. i = 9, inputString[9] = "s", result = "s"
2. i = 8, inputString[8] = "b", result = "sb"
3. i = 7, inputString[7] = "a", result = "sba"
4. i = 6, inputString[6] = "l", result = "sbal"
5. i = 5, inputString[5] = "n", result = "sbaln"
6. i = 4, inputString[4] = "e", result = "sbalne"
7. i = 3, inputString[3] = "t", result = "sbalnet"
8. i = 2, inputString[2] = "l", result = "sbalnetl"
9. i = 1, inputString[1] = "a", result = "sbalnetla"
10. i = 0, inputString[0] = "T", result = "sbalnetlaT"
```

So, your final `result` will be "sbalnetlaT", which is the reverse of the original input string "Talentlabs". Your code successfully reverses the word order in the string.

---

#### Visualize flow of Reverse Word Order

```javascript
for (let i = inputString.length - 1; i >= 0; i--) {
    // Your code inside the loop
}
```

Let's use the example `inputString = "Talentlabs"` to go through the loop step by step:

```plaintext
1. i = 9, inputString[9] = "s"
2. i = 8, inputString[8] = "b"
3. i = 7, inputString[7] = "a"
4. i = 6, inputString[6] = "l"
5. i = 5, inputString[5] = "n"
6. i = 4, inputString[4] = "e"
7. i = 3, inputString[3] = "t"
8. i = 2, inputString[2] = "l"
9. i = 1, inputString[1] = "a"
10. i = 0, inputString[0] = "T"
```

Here's how it works:
- The loop starts with `i = 9` (the last index of the string) and goes until `i` reaches 0 (the first index of the string).
- In each iteration, you're accessing the character of `inputString` at index `i`, which is then added to the `result` string.

So, following this process, if `inputString` is "Talentlabs", you would get the `result` string "sbaltnelaT".

## Strings Question 3 - Anagram

How to check if two strings are anagram to each other?

Anagram is words with same letters, but different word.
(e.g. Paris/Pairs are anagram, arc/car are anagram)



# String as Arrays Algorithm Problems in JS

# Other

## Question: Capitalize only the first letter of a string

To capitalize only the first letter of a string while leaving the rest of the letters in lowercase, you can use the following approach:

```javascript
function capitalizeFirstLetter(str) {
    // Check if the string is not empty
    if (str.length === 0) {
        return str; // Return empty string if input is empty
    }
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const inputString = "hElLo";
const capitalizedString = capitalizeFirstLetter(inputString); // Result: "Hello"
```

In this code, the `capitalizeFirstLetter` function performs the following steps:

1. It checks if the input string is not empty. If the input string is empty, it simply returns an empty string.
2. It uses `str[0]` to access the first character of the string.
3. It converts the first character to uppercase using `.toUpperCase()`.
4. It uses `.slice(1)` to get the remaining part of the string (excluding the first character).
5. It converts the remaining part of the string to lowercase using `.toLowerCase()`.
6. Finally, it combines the capitalized first character with the lowercase remaining part to create the resulting capitalized string.

The example input `"hElLo"` would be transformed to `"Hello"` as a result.
