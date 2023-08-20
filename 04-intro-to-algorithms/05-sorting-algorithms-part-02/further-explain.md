- [Sorting Algorithm](#sorting-algorithm)
  - [Exercises explained](#exercises-explained)
    - [merge-sort.js](#merge-sortjs)
    - [quick-sort.js](#quick-sortjs)
- [Merge Sort](#merge-sort)
- [Quick Sort](#quick-sort)
- [Other](#other)

# Sorting Algorithm

## Exercises explained

### merge-sort.js

Main function:

If the input list is of size 1, then no need sort, just return it.

Split the array into 2 halves, using “splice” function.

Sort each halves using the “mergeSort()” function.

Combine the sorted left and sorted right.

mergeSort() function:

If both left and right list still have at least 1 element

Pick the smaller first element and push to the result array

Combine the result list with left and right list.
This is because as it could be only one list was emptied. (When would this happen?)

### quick-sort.js

```javascript
const partition = (arr, minIndex, maxIndex) => {
    let pivot = arr[maxIndex];
    let i = minIndex - 1;

    for (let j = minIndex; j <= maxIndex - 1; j++) {
        if (arr[j] < pivot) {
            i++;

            let tempI = arr[i];
            arr[i] = arr[j];
            arr[j] = tempI;
        }
    }

    let tempIPlus1 = arr[i+1];
    arr[i+1] = pivot;
    arr[maxIndex] = tempIPlus1;

    return i+1;
}

const quickSort = (arr, minIndex, maxIndex) => {
    if (maxIndex > minIndex) {
        let pi = partition(arr, minIndex, maxIndex);

        quickSort(arr, minIndex, pi-1);
        quickSort(arr, pi + 1, maxIndex);
    }
}

// Example usage
const array = [5, 2, 9, 3, 5, 6];
quickSort(array, 0, array.length - 1);
console.log(array); // Output: [2, 3, 5, 5, 6, 9]
```

**partition() function:**

The range that we are going to do partition, i.e. defining the “sub array” using min and max index.

Our pivot is always the rightmost element (at last index).

We start from i = -1 (or min index -1).

If the element j is smaller than pivot, then we will do i++ and swap element i with element j.

After finished all the comparison, we are going to put the pivot at the right position, which is position i+1.

**quickSort() function:**

For the range, we will do the partition
- First cycle, range would be from 0 to end
Partition function should return the position 
of pivot after partition

Sort the left and right hand side using quick sort

# Merge Sort

## JavaScript Prototypes in Merge Sort Recursive Approach

```javascript
const merge = (leftList, rightList) => {
  let arr = [];

    while (leftList.length > 0 && rightList.length > 0) {
        if (leftList[0] < rightList[0]) {
            arr.push(leftList.shift());
        }
        else {
            arr.push(rightList.shift());
        }
    }

    return arr.concat(leftList).concat(rightList);
}

const mergeSort = (inputList) => {
  // Add your code here
  if (inputList.length === 1) {
        return inputList;
    } else {
        const half = Math.floor(inputList.length / 2);
        const left = inputList.splice(0, half);
        
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(inputList);

        return merge(sortedLeft, sortedRight);
    }
}
```

explain to beginner,  in simple plain english for beginner easy to understand and memeorize about the javascript prototypes use in above  code

JavaScript Prototype:
1. push()
2. shift()
3. concat()
4. splice()
5. Math.floor()

---

1. **push**: Imagine you have a bunch of objects arranged in a line. When you "push" something, you're adding a new object to the end of that line. In the code, `arr.push(leftList.shift())` adds the first item from `leftList` to the end of `arr`.

2. **shift**: Think of a line of people, and the first person goes away. When you "shift" something, you're removing the first object from a group. In the code, `leftList.shift()` takes out the first item from `leftList`.

3. **concat**: Imagine you have two separate stacks of cards, and you want to combine them into one stack. When you "concatenate", you're putting the cards from one stack on top of the other to make a bigger stack. In the code, `arr.concat(leftList)` and `arr.concat(rightList)` combine the arrays `leftList` and `rightList` into the `arr` array.

4. **splice**: Picture a string of beads, and you want to remove a few beads from the middle. When you "splice", you're cutting out a section and then putting some new beads in their place. In the code, `inputList.splice(0, half)` takes out the first `half` items from `inputList`.

5. **Math.floor**: A function in JavaScript that helps you round down a decimal number to the nearest whole number. Imagine you have a number like 3.7. If you use `Math.floor(3.7)`, it will round down to 3. It basically chops off the decimal part to give you the largest whole number that's less than or equal to the original number. In the code you provided, `Math.floor(inputList.length / 2)` is used to find the index that divides the `inputList` array into two halves as evenly as possible. It helps with the process of splitting the array into smaller parts for the merge sort algorithm.

So, in this code, these are like the building blocks that help in sorting and merging arrays. You use `push` and `shift` to move items around, `concat` to combine arrays, and `splice` to take out a portion of an array.

---

Here's a breakdown with examples and study tips:

1. **push()**:
   - **Explanation**: The `push()` method is used to add one or more elements to the end of an array.
   - **Example**:
     ```javascript
     let fruits = ['apple', 'banana'];
     fruits.push('orange', 'grape');
     console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
     ```
   - **Study Tip**: Remember "push" is like adding something at the end, just like pushing things into a container.

2. **shift()**:
   - **Explanation**: The `shift()` method removes the first element from an array.
   - **Example**:
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     let removedFruit = fruits.shift();
     console.log(removedFruit); // Output: 'apple'
     console.log(fruits); // Output: ['banana', 'orange']
     ```
   - **Study Tip**: Think of "shift" as taking out the first item, shifting the rest up.

3. **concat()**:
   - **Explanation**: The `concat()` method combines arrays to create a new one.
   - **Example**:
     ```javascript
     let fruits = ['apple', 'banana'];
     let moreFruits = ['orange', 'grape'];
     let allFruits = fruits.concat(moreFruits);
     console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape']
     ```
   - **Study Tip**: "Concatenate" means linking together, just like joining arrays together.

4. **splice()**:
   - **Explanation**: The `splice()` method adds/removes elements at a specific index in an array.
   - **Example**:
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     fruits.splice(1, 1, 'grape', 'kiwi');
     console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange']
     ```
   - **Study Tip**: Think of "splice" as slicing an array to insert or remove elements.

5. **Math.floor()**:
   - **Explanation**: `Math.floor()` rounds down a number to the nearest integer.
   - **Example**:
     ```javascript
     let number = 7.89;
     let roundedDown = Math.floor(number);
     console.log(roundedDown); // Output: 7
     ```
   - **Study Tip**: Imagine "floor" as the lowest level, so it rounds down.

**Study Tips**:
- Create simple, memorable examples like the ones above.
- Practice coding these methods to reinforce your understanding.
- Draw analogies or mnemonic devices to connect concepts.
- Experiment in your browser's console to see results in real-time.
- Break down the names of methods to relate to their functionality.

Remember, practice and repetition will help you internalize these concepts and make them easier to understand and recall.

## Study Note

Here's a concise set of study notes to understand and memorize how the Merge Sort algorithm works:

**Key Study Notes:**

1. **Exit Condition:** The algorithm stops when there's only one element in a "half."
2. **Merge Challenge:** The hardest part is merging. We assume both halves are sorted, so we only compare and arrange the smallest element.

**Merge Sort:**
Imagine you're using Merge Sort to sort the array: 6, 5, 12, 10, 9, 1.

**Step 1: Divide**
- Initially, split the array into two halves: 6, 5, 12 and 10, 9, 1.

**Step 2: Divide Further**
- Continue dividing: 6; 5, 12 and 10; 9; 1.

**Step 3: Merge**
- Begin merging the small arrays: 6; 5, 12 becomes 5, 6, 12.
- Merge 10; 9; 1 into 1, 9, 10.

**Step 4: Final Merging**
- Compare and merge the two bigger sorted arrays: 5, 6, 12 and 1, 9, 10 become 1, 5, 6, 9, 10, 12.

**Step 5: Sorted Result**
- The final merged array is now sorted: 1, 5, 6, 9, 10, 12.

**Merge Sort Algorithm:**
1. If there's only one element, it's already sorted. Return.
2. If there are more than one element, break the list in half and call mergeSort() on each half.
3. Merge the two smaller sorted lists into a new list in a sorted order.

By following these steps and understanding that Merge Sort works by breaking
down, sorting, and then merging arrays, you'll have an easier time remembering
and applying the algorithm.

## Pseudocode - Recursive Approach

Certainly! Understanding and memorizing algorithms can be challenging, but breaking them down into smaller steps and practicing can make it easier. Here's a simple approach to help you solidify your understanding of the merge sort algorithm using a recursive approach, along with a pseudocode-like description:

**Conceptual Overview:**
Merge sort is a divide-and-conquer algorithm that breaks down a list into smaller sublists, sorts them, and then merges them back together to get a sorted list. It follows these main steps:
1. Divide the list into two halves.
2. Recursively sort each half.
3. Merge the sorted halves back together.

**Pseudocode-like Description:**
```plaintext
function mergeSort(list):
    if length of list is 1 or less:
        return the list

    // Divide the list into two halves
    middle = length of list divided by 2
    leftHalf = first half of the list
    rightHalf = second half of the list

    // Recursively sort each half
    sortedLeft = mergeSort(leftHalf)
    sortedRight = mergeSort(rightHalf)

    // Merge the sorted halves
    sortedList = merge(sortedLeft, sortedRight)
    return sortedList

function merge(leftList, rightList):
    create an empty list called mergedList
    
    while both leftList and rightList have elements:
        if first element of leftList is smaller than first element of rightList:
            remove and add first element of leftList to mergedList
        else:
            remove and add first element of rightList to mergedList
    
    add remaining elements of leftList to mergedList
    add remaining elements of rightList to mergedList
    
    return mergedList
```

**Tips to Solidify Understanding:**
1. **Visualize:** Draw the recursion tree for smaller inputs to understand how the algorithm works at each step.
2. **Practice:** Implement the algorithm from scratch in your preferred programming language and test it with different inputs.
3. **Break it Down:** Understand each component (dividing, sorting, merging) separately before putting them all together.
4. **Analyze Complexity:** Understand the time complexity of merge sort (O(n log n)) and why it's efficient.
5. **Work with Examples:** Practice sorting small lists manually using the algorithm to reinforce the steps.
6. **Explain to Others:** Teach someone else about merge sort. Explaining concepts helps reinforce your own understanding.
7. **Use Resources:** Refer to online tutorials, videos, and interactive coding platforms for additional practice and explanations.

By practicing and visualizing how the algorithm works, you'll gradually build a
solid understanding and memory of the merge sort algorithm using a recursive
approach.

## Pseudocode - Common Approach

Sure! If you want to implement merge sort without using recursion, you can use an iterative approach with loops and stacks. Here's a way to do it:

**Pseudocode-like Description for Iterative Merge Sort:**
```plaintext
function mergeSortIterative(list):
    create an empty stack called stack
    push list onto the stack

    while stack is not empty:
        currentList = pop from stack

        if length of currentList is 1 or less:
            continue to the next iteration
        
        // Divide the current list into two halves
        middle = length of currentList divided by 2
        leftHalf = first half of the currentList
        rightHalf = second half of the currentList

        // Push the right and left halves onto the stack
        push rightHalf onto stack
        push leftHalf onto stack
    
    // Now merge the sorted halves iteratively
    while stack has more than one list:
        leftList = pop from stack
        rightList = pop from stack
        mergedList = merge(leftList, rightList)
        push mergedList onto stack

    // The final merged and sorted list is at the top of the stack
    return pop from stack

function merge(leftList, rightList):
    create an empty list called mergedList
    
    while both leftList and rightList have elements:
        if first element of leftList is smaller than first element of rightList:
            remove and add first element of leftList to mergedList
        else:
            remove and add first element of rightList to mergedList
    
    add remaining elements of leftList to mergedList
    add remaining elements of rightList to mergedList
    
    return mergedList
```

In this iterative approach, we use a stack to keep track of the sublists that need to be sorted. We start by pushing the original list onto the stack. Then, in the first loop, we keep popping sublists from the stack, dividing them into halves, and pushing those halves back onto the stack. Once all sublists have been divided into individual elements, we use a second loop to iteratively merge and push the sorted halves back onto the stack until only one sorted list remains at the top of the stack.

This approach achieves the same result as the recursive merge sort but uses
loops and a stack instead of recursive function calls.

# Quick Sort

# Other

## `slice()` and `splice()`

The differences between `slice()` and `splice()` can be tricky at first, but with a bit of practice and some mnemonics, you'll be able to remember them easily.

**`slice()` vs. `splice()`**

**`slice()`**
- **Purpose:** Creates a new array by extracting a portion of an existing array.
- **Does Modify Original Array?:** No, the original array remains unchanged.
- **Syntax:** `array.slice(startIndex, endIndex)`
- **Example:** `const newArray = array.slice(1, 4);` (Extracts elements from index 1 to 3)

**`splice()`**
- **Purpose:** Modifies an array by adding, replacing, or removing elements from a specific index.
- **Does Modify Original Array?:** Yes, it changes the original array.
- **Syntax:** `array.splice(startIndex, deleteCount, ...itemsToAdd)`
- **Example:** `array.splice(1, 2);` (Removes 2 elements starting from index 1)

**Tips to Remember:**

1. **Slice and Keep (No Change):** To remember `slice()`, think of slicing a pizza. When you slice a pizza, you create new portions, but the original pizza remains unchanged. Similarly, `slice()` creates new portions of an array without altering the original.

2. **Splice and Change:** For `splice()`, the word itself sounds a bit like "slice," but it's more than just slicing. When you `splice` something, like in surgery, you're making a change to it. Similarly, `splice()` makes changes to the original array by adding, removing, or replacing elements.

3. **Focus on the First Letter:** The first letters of "slice" and "splice" can help you remember: "s" stands for "same" (as in `slice` creates a new array that's the same as a portion of the original) and "sp" stands for "splice" and "swap" (as in `splice` swaps elements around in the array).

4. **Draw Analogies:** Visualize the actions. Imagine you're cutting a cake (pizza) into slices for `slice()`, and you're performing surgery or altering something for `splice()`.

5. **Practice:** Use both methods in coding exercises. The more you practice, the easier it will become to remember which one to use in different scenarios.

Remember that it's okay if it takes a bit of time to differentiate them initially. As you use them more often in coding, you'll naturally develop a better understanding and memory of when to use each method.

### `splice()`

splice(startIndex, deleteCount, ...addTo) will create new array from fruits, and fruits array will be modified.

```javascript
const fruits = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"]

const half = Math.floor(fruits.length / 2)
const spliced = fruits.splice(0, half)

console.log("half:", half) // output: 3
console.log("splice:", spliced) // output: cherry, strawberry, apple
console.log("fruits:", fruits) // output: [ 'banana', 'orange', 'pear', 'grape' ]
```