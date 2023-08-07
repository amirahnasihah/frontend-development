- [String Algorithm](#string-algorithm)
- [String Algorithms (String as Arrays)](#string-algorithms-string-as-arrays)
  - [Exercises explained](#exercises-explained)
    - [exercise-1.js](#exercise-1js)
    - [exercise-2.js](#exercise-2js)
    - [exercise-3.js](#exercise-3js)
- [Other](#other)

# String Algorithm

A JavaScript string algorithm is a set of instructions that help you manipulate and work with text (sequences of characters) in JavaScript.

A string algorithm is a set of steps or procedures used to manipulate and process strings effectively. JavaScript offers a variety of built-in methods and techniques to perform various tasks with strings. Here are some common string algorithms and their explanations:

1. **String Concatenation**: This algorithm involves combining two or more strings into a single string. In JavaScript, you can achieve this using the `+` operator or the `concat()` method.

```javascript
const str1 = "Hello";
const str2 = "World";
const result = str1 + " " + str2; // Output: "Hello World"

// or using the concat() method
const resultConcat = str1.concat(" ", str2); // Output: "Hello World"
```

This algorithm lets you combine two or more strings together. You can think of it like putting two puzzle pieces together to create a new picture. For example, if you have the strings "Hello" and "World," concatenating them would give you "HelloWorld."

2. **String Length**: To find the length of a string, use the `length` property, which returns the number of characters in the string.

```javascript
const text = "JavaScript";
const length = text.length; // Output: 10
```

The length algorithm helps you find out how many characters are in a string. Imagine counting the number of letters in a word. For instance, if you have the string "ChatGPT," the length algorithm would tell you that it has 7 characters.

3. **Substring**: This algorithm extracts a part of a string, given a starting index and an optional ending index. You can use `substring(start, end)` or `slice(start, end)` methods.

```javascript
const text = "Hello, World!";
const substr1 = text.substring(0, 5); // Output: "Hello"
const substr2 = text.slice(7); // Output: "World!"
```

The substring algorithm lets you extract a portion of a string. Imagine cutting out a piece from a cake. For instance, if you have the string "OpenAI is amazing," extracting the substring from position 7 to 11 would give you "is."

4. **String Splitting**: Splitting a string involves dividing it into an array of substrings based on a separator. You can use the `split(separator)` method.

```javascript
const text = "apple,banana,orange";
const fruitsArray = text.split(","); // Output: ["apple", "banana", "orange"]
```

5. **String Reversal**: Reverse a string by various methods, such as using a loop or the `split()` and `reverse()` combination.

```javascript
const text = "hello";
const reversedText = text.split("").reverse().join(""); // Output: "olleh"
```

6. **String Searching**: Searching for a substring within a string is accomplished using `indexOf(substring)` or `lastIndexOf(substring)`.

```javascript
const text = "JavaScript is amazing!";
const index1 = text.indexOf("is"); // Output: 11
const index2 = text.lastIndexOf("a"); // Output: 16
```

This algorithm helps you search for a specific word or character within a string. It's like trying to find a particular word in a book. For example, if you have the string "JavaScript is fun," searching for "fun" would tell you that it's located starting at position 13.

7. **String Replacement**: Replace occurrences of a substring with another using the `replace(searchValue, replaceValue)` method.

```javascript
const text = "Hello, World!";
const newText = text.replace("World", "Universe"); // Output: "Hello, Universe!"
```

This algorithm allows you to replace specific characters or words within a string. It's like correcting a misspelled word. For example, if you have the string "I like cats," replacing "cats" with "dogs" would give you "I like dogs."

These are some common JavaScript string algorithms. Each algorithm serves a specific purpose and can be used in various scenarios to process and manipulate strings effectively.

## Searching with `indexOf()`

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

**further explain**

In the given code, we have an array named `beasts` containing five elements: 'ant', 'bison', 'camel', 'duck', and 'bison'. 

The second line of code is using the `indexOf` method on the `beasts` array. The `indexOf` method is used to find the index of a particular element in an array. It takes two arguments:

1. The first argument is the element we want to find the index of, which is 'bison' in this case.

2. The second argument is the starting index from where the search should begin. In this case, it is 2.

So, the code is asking to find the index of the element 'bison' in the `beasts` array, starting the search from the index 2 (which is 'camel'). The output of this code will be the index of the first occurrence of 'bison' after index 2 in the `beasts` array. If there is no 'bison' after index 2, the output will be -1.

The output `4` is because the `indexOf` method starts searching for the element 'bison' in the `beasts` array from index 2 (which is the third element, 'camel'). It then finds the first occurrence of 'bison' after that starting index, which is at index 4 in the `beasts` array.

To clarify further, let's break down the `indexOf` method usage step by step:

1. The `indexOf` method starts searching for 'bison' in the `beasts` array from index 2 ('camel').
2. It finds 'bison' at index 4 in the `beasts` array.
3. The `indexOf` method returns the index of the first occurrence of 'bison' after index 2, which is 4.

So, the output `4` indicates that the first occurrence of 'bison' after index 2 is found at index 4 in the `beasts` array.

# String Algorithms (String as Arrays)

## Exercises explained

### exercise-1.js

The code you provided is a function called `findSubstring`, which aims to find the starting index of a substring (`targetString`) within a larger string (`inputString`). The function uses nested loops to compare characters of the `inputString` with the `targetString` and returns the index of the first occurrence of the substring if found.

The suggestion provided in your comment to add a check for the length of the `targetString` exceeding the `inputString` length is valid. If the `targetString` is longer than the `inputString`, it is not possible for the `targetString` to be a substring, so the function can return -1 immediately without performing any further comparisons.

Here's an updated version of the code that includes this additional check:

```javascript
const findSubstring = (inputString, targetString) => {
  if (targetString.length > inputString.length) {
    return -1;
  }

  for (let i = 0; i < inputString.length; i++) {
    for (let j = 0; j < targetString.length; j++) {
      if (inputString[i + j] !== targetString[j]) {
        break;
      } else if (j === targetString.length - 1) {
        return i;
      }
    }
  }

  return -1;
};
```

With this modification, the function will return -1 if the `targetString` is longer than the `inputString`, avoiding unnecessary comparisons and improving the overall efficiency of the code.

### exercise-2.js

### exercise-3.js

# Other