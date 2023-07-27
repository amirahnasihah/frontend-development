- [dry run the code](#dry-run-the-code)
  - [`if (tempMaxNumber === 0) { tempMaxNumber = i; }`](#if-tempmaxnumber--0--tempmaxnumber--i-)
      - [code explain - `if (tempMaxNumber === 0) { tempMaxNumber = i; }`](#code-explain---if-tempmaxnumber--0--tempmaxnumber--i-)

# dry run the code

## `if (tempMaxNumber === 0) { tempMaxNumber = i; }`

```javascript
function findMaxNumber(inputArray) {
  let tempMaxNumber = 0;

  for (const i of inputArray) {
    if (tempMaxNumber === 0) {
      tempMaxNumber = i;
    } else {
      if (i > tempMaxNumber) {
        tempMaxNumber = i;
      }
    }
  }

  return tempMaxNumber;
}

const inputArray = [5, 3, 7, 2, 5, 9, 0, 3];
const maxNumber = findMaxNumber(inputArray);
console.log(maxNumber);
```

Sure! Let's dry run the code step-by-step in simple plain English:

1. We have a function named `findMaxNumber` that takes an input array as its argument.

2. Inside the function, we initialize a variable called `tempMaxNumber` to `0`. This variable will be used to store the maximum number found in the input array.

3. We start a loop that goes through each element of the input array. We use the variable `i` to represent the current element in each iteration.

4. In each iteration of the loop, we check if `tempMaxNumber` is equal to `0`. This check is done to identify the first element encountered in the array.

5. If `tempMaxNumber` is indeed equal to `0`, it means that we are on the first element of the array. In this case, we set `tempMaxNumber` to the value of the first element `i`, assuming that it is the maximum value so far.

6. On subsequent iterations (when the first element has been handled), we move to the `else` part of the code. Here, we compare the current element `i` with the value of `tempMaxNumber`.

7. If the current element `i` is greater than the current value of `tempMaxNumber`, it means we have found a new maximum number. In this case, we update `tempMaxNumber` to be the value of the current element `i`.

8. The loop continues to iterate through the entire input array, comparing each element with the current maximum number stored in `tempMaxNumber`. If a larger element is found, we update `tempMaxNumber`.

9. After the loop finishes going through all the elements of the input array, the function returns the value stored in `tempMaxNumber`, which represents the maximum number found in the array.

10. In the example code, we have an input array `[5, 3, 7, 2, 5, 9, 0, 3]`. We call the `findMaxNumber` function with this array as an argument and store the result in a variable named `maxNumber`.

11. Finally, we print the value of `maxNumber` to the console using `console.log(maxNumber)`.

As a result, when the code is executed, it will find the maximum number from the input array `[5, 3, 7, 2, 5, 9, 0, 3]`, which is `9`, and print `9` to the console.

#### code explain - `if (tempMaxNumber === 0) { tempMaxNumber = i; }`

The code block `if (tempMaxNumber === 0) { tempMaxNumber = i; }` serves an important purpose in the `findMaxNumber` function. Let's understand why this part of the code is necessary:

1. **Initialization of `tempMaxNumber`:** When the `findMaxNumber` function starts executing, the variable `tempMaxNumber` is initialized to `0`. This is the initial assumption that the maximum number found so far is zero. However, this assumption might not be correct depending on the content of the input array.

2. **Handling the First Element:** The purpose of the `if` statement is to handle the first element encountered in the input array. In a loop, during the first iteration, there's no value in `tempMaxNumber` representing the maximum value yet. The condition `tempMaxNumber === 0` checks if `tempMaxNumber` is still in its initial state of zero.

3. **Setting the First Element as the Temporary Maximum:** If the condition `tempMaxNumber === 0` is true, it means that we are in the first iteration and have not found a valid maximum value yet. In this case, we set `tempMaxNumber` to the value of the first element `i` in the array. This effectively initializes `tempMaxNumber` to the first element, considering it as the maximum so far.

4. **Handling Subsequent Elements:** After setting the `tempMaxNumber` to the first element, on subsequent iterations, the `if` block will not be executed, and the loop will move to the `else` block. In the `else` block, we check if the current element `i` is greater than the current maximum value stored in `tempMaxNumber`. If it is, we update `tempMaxNumber` to the value of the current element `i`.

In summary, the `if` statement is crucial to handle the special case of the first element and set the initial maximum value correctly. Without this conditional check, `tempMaxNumber` would stay at its initial value of `0`, and the function would not be able to find the correct maximum number in the array. This part of the code ensures that the function starts with the first element as the assumed maximum and then correctly updates it as it iterates through the array.