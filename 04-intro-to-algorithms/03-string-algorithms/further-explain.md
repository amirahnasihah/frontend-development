- [String Algorithm](#string-algorithm)
- [String Algorithms (String as Arrays)](#string-algorithms-string-as-arrays)
  - [Exercises explained](#exercises-explained)
    - [exercise-1.js](#exercise-1js)
    - [exercise-2.js](#exercise-2js)
    - [exercise-3.js](#exercise-3js)
- [Other](#other)

# String Algorithm

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