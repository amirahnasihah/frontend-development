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

### quick-sort.js

# Merge Sort

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