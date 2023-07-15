# FEEDBACK

Task 1 (Score: 29)

Great job! 
Your implementation is correct for all the given test cases. **Consider adding an additional check to ensure that the target string does not exceed the input string length. If it does, you can return -1 immediately**. Overall, your code is great.


Task 2 (Score: 33)

Great job!
Your code is well-written and passes all the test cases. You have successfully completed the task by implementing a loop to iterate over the input string and concatenate each character to the result string in reverse order. Keep up the good work!


Task 3 (Score: 34)

Great job!
The code is well-written and passes all the test cases. You have successfully completed the task. Keep up the good work!

## exercise-1.js

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
