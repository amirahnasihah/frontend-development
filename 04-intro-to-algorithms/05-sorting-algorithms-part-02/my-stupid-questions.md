# Merge Sort (Recusive Approach)

## Part 1. Divide and Continue to Divide until left 1 element (aka considered "sorted" in itself)

> recursion continues until each individual element is considered "sorted" in itself

```javascript
const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(inputList);
```

this is the code for divide and sort part only

```javascript
const mergeSort = (inputList) => {
  if (inputList.length === 1) {
    return inputList;
  } else {
    const half = Math.floor(inputList.length / 2);
    const firstHalf = inputList.splice(0, half);
    
    const sortedLeft = mergeSort(firstHalf);
    const sortedRight = mergeSort(inputList);
    console.log(sortedRight); // Output: ["cherry"]

    return merge(sortedLeft, sortedRight);
  }
}
```

okay, based on my understanding, i want try to have better understand about javascript merge sort with recursion approach.

since i am using recursive approach, it means the function needs to be called directly inside the another function.

i am using strings of array

`const fruits = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"];``

so, what i am going to do, i am gonna focus on divide and sort part first.

but, i need to understand about merge sort first. merge sort is divide and conquer.  merge sort need to divide by half, then divide again of the half until it left 1 element, and then sort them of each half (first left half and second right half, lastly need to merge them that left and right half into single array where I need to sort first before merge.

So, i need to divide the array into half. and then divide again of the already half array until it left 1 element. to divide into half, need to use Math.floor(fruits.length / 2). Initially, the length of fruits is 7. so, 7 / 2 is 3 5 so the fruits array middle point will be like ratio [3] : [4], Math.floor is we take lowest number of decimal point. midpoint is 3. Fruits array will be like this first half are "cherry", "strawberry", "apple". The second half are "banana", "orange", "pear", "grape".
the code is half = Math.floor(fruits.length/2)

Next, remember the merge sort is divide into half, which i gonna have first half list and second half list. I already know the middle point of fruits array. But, I cannot distinguish the half, which means the what is inside the first half and second half. first half is left, second half is right. It means I need to have a left list of the fruits array to store or make it easy to use of the left list. What I need to do is have a variable called firstHalf = fruits splice(0, half). i use splice to create a new fruits array that store the first half of the fruits array, 0 is the start index and half (refer to variable half is the delete count which means 3). so, we take a portion of fruits array starting from 1st index, cherry up to mid point which is 3 elements. so, we have now for variable firstHalf is "cherry", "strawberry", "apple".

my question is why we dont have for the secondHalf variable? or is it because we already used splice() method for the firstHalf variable, the original fruits array is modified and no longer have length of 7?

Then, why it already sorted when we dont use sort() method?

I really dont understand this

---

**Clarification:**

It's great that you're working to understand Merge Sort with a recursive approach! I'll address your questions step by step.

1. **Left and Right Half:**
   You're correct that when using `splice()` to create the `firstHalf` array, it modifies the original `inputList` array by removing elements from it. This is why you don't need to explicitly create a `secondHalf` array. After creating `firstHalf`, the `inputList` will automatically contain the remaining elements, which will act as the right half.

2. **Sorting without `sort()`:**
   The sorting is actually done during the merging step, not in the `mergeSort` function itself. The key concept here is that when you're merging two smaller sorted arrays (the `sortedLeft` and `sortedRight` arrays), the process of comparing elements and merging them back together ensures that the resulting merged array is sorted. 

The merging step takes care of ensuring that the elements from the left and right halves are placed in the correct order, which is why you don't need to manually sort them again using the `sort()` method.

Your code for the divide and sort part looks good. The `mergeSort` function divides the array into smaller halves, recursively sorts them, and then the `merge` function combines these sorted halves in the correct order.

Remember, Merge Sort's magic comes from the merging step where the sorting is truly happening. It's a bit like assembling a puzzle: if you know that the pieces you're working with are already in the right order, you can focus on putting them together correctly, and the result will be a complete and correctly sorted puzzle.

Your understanding seems to be on the right track, and working through the code like you're doing is a great way to solidify your grasp of the concept!

---

> **`const sortedLeft = mergeSort(firstHalf);` and `const sortedRight = mergeSort(inputList);`**

Let's break down how the lines `const sortedLeft = mergeSort(firstHalf);` and `const sortedRight = mergeSort(inputList);` work in the context of your `mergeSort` function.

1. **`const sortedLeft = mergeSort(firstHalf);`**
   - In this line, you're recursively calling the `mergeSort` function on the `firstHalf` array.
   - This step is essential because you're breaking down the `firstHalf` array into even smaller halves until they contain only one element each (base case).
   - The recursion continues until each individual element is considered "sorted" in itself.
   - As the recursion unwinds, you'll start merging these individual elements into pairs of sorted elements, then combine pairs into quadruples, and so on, until the entire `firstHalf` is sorted.

2. **`const sortedRight = mergeSort(inputList);`**
   - Similarly, you're recursively calling the `mergeSort` function on the `inputList` array.
   - Just like with `firstHalf`, this will divide the remaining part of the array (`inputList`) into smaller halves, sort them, and then merge them back together.

The key idea behind this recursive process is that the array is continually divided into smaller pieces until each piece contains only one element (or is already considered sorted). Then, as the recursion "unwinds," the individual sorted pieces are merged together to create larger sorted pieces. This process repeats until the entire array is sorted.

So, the sequence of operations roughly looks like this:

1. Call `mergeSort` on `firstHalf`, dividing it into smaller halves and sorting each piece along the way.
2. Call `mergeSort` on `inputList`, dividing it into smaller halves and sorting each piece along the way.
3. As the recursion unwinds, these sorted pieces will be merged together using the `merge` function.

This recursive approach might feel a bit complex at first, but it's a powerful technique for solving problems that can be broken down into smaller subproblems. It's like solving a puzzle by breaking it into smaller, manageable pieces, solving each piece, and then putting everything back together to get the final solution.

---

> Okay so based on my understanding, this lines const sortedLeft = mergeSort(firstHalf); and const sortedRight = mergeSort(inputList); means it keeps on dividing the half arrays until it has 1 element and it is not sorted yet? What does it means that it is considered "sorted" in itself? Is it because since they divided into just 1 element left, it already sorted? Well infact that actually they are not?

The lines `const sortedLeft = mergeSort(firstHalf);` and `const sortedRight = mergeSort(inputList);` are indeed part of the recursive process that continues to divide the array into smaller halves until each piece contains only one element. Let's clarify the concept of being "sorted" in itself:

When we say an array with just one element is "sorted" in itself, we mean that it's so small that there's no need for further sorting. Think of it as the simplest case of sorting. If you have only one item, it's technically already in the correct position since there's nothing to compare it to.

For instance, imagine you have an array `[5]`. Since there's only one element, you can say it's "sorted" because it doesn't need any rearranging.

So, when the `mergeSort` function reaches an array with only one element, it returns that array as it's already sorted (base case). It's important to note that this is a termination point for the recursion. As you correctly noted, an array with one element is not really unsorted, but it's so small that further sorting isn't necessary.

The real sorting magic happens when these sorted pieces are merged back together. By combining smaller sorted arrays, the larger merged arrays become progressively more ordered. This is why, even though the individual pieces might not be sorted to begin with (when they're just one element), the merging process ensures that the entire array becomes sorted.

### Does Recursion similar to Loop?

Yes, recursion is similar to a loop in that it involves repeated execution of a certain set of instructions. However, there are important differences between recursion and loops:

1. **Function Calls vs. Iteration:**
   - In recursion, a function calls itself with modified parameters to solve a smaller version of the problem. Each recursive call creates a new instance of the function.
   - In loops, the same block of code is executed repeatedly based on a loop condition, and the variables within the loop are updated during each iteration.

2. **Base Case:**
   - Recursion requires a base case, a condition that stops the recursion and prevents infinite calls.
   - Loops usually have a condition that, when false, stops the iteration.

3. **Memory Usage:**
   - Recursion can use more memory due to the creation of multiple function call instances on the call stack.
   - Loops generally use less memory because they don't involve creating additional function call instances.

4. **Complexity:**
   - Some problems are more naturally solved using recursion, while others are more intuitive with loops.

In your Merge Sort example, recursion is used to divide and conquer the sorting
problem. The base case `(inputList.length === 1)` stops the recursion when the
problem becomes small enough. Recursion is a powerful technique, but it's
important to ensure that the base case is reached and that the recursion doesn't
lead to infinite calls.

---

You're making great progress in breaking down the code and understanding how the recursion works! Your explanations are very detailed and accurate. I'll provide a summary to confirm your understanding:

1. **Initial Input:**
   - You start with an array `inputList` of length 7.

2. **First Split (left and right):**
   - You divide `inputList` into `left` and `right` halves. After the `splice`, `inputList` becomes `right`.
   - `left` contains ["cherry", "strawberry", "apple"]
   - `right` contains ["banana", "orange", "pear", "grape"]

3. **Recursive Calls for `left` and `right`:**
   - Now you recursively call `mergeSort` on `left` and `right` arrays.
   - `left` is further divided into ["cherry"], ["strawberry"], and ["apple"].
   - `right` is further divided into ["banana"], ["orange"], ["pear"], and ["grape"].

4. **Merging Back:**
   - The recursive calls continue to unwind. Eventually, the smallest arrays are considered "sorted" as they have only one element each.
   - The merging process begins using the `merge` function. The merging ensures that the smaller sorted pieces from both `left` and `right` are combined in the correct order, creating larger sorted pieces.
   - Ultimately, the fully sorted array is returned.

Your explanation is quite accurate, and you've understood the concept of
dividing the array recursively and then merging the sorted parts back together.
Now, when you focus on the `merge` function, you'll see how the magic of
combining sorted arrays works to achieve the final sorted result. Keep up the
great work!

### The output of `inputList.length === 1`

The condition `inputList.length === 1` will be true when the `inputList` array contains only one element. In the context of the Merge Sort algorithm, this condition serves as the base case for the recursive process.

As the `mergeSort` function recursively divides the array into smaller halves, it eventually reaches the point where each subarray has only one element left. At this point, the condition `inputList.length === 1` becomes true because the length of that subarray is indeed 1.

In other words, the base case is reached when the array has been divided into
its smallest possible parts, which are already considered "sorted" because they
contain only one element. This is the moment when the recursion starts to
"unwind," and the merging process begins to combine these sorted pieces back
together.

---

The `return inputList;` statement inside the `if` statement is there to handle the base case of the recursion. When the length of the `inputList` array is equal to 1, it means you've reached a point where the array is already sorted (since an array with only one element is inherently sorted). In this case, you simply return the `inputList` as it is.

Here's how it works step by step:

1. The `mergeSort` function is called with an array, let's say `["cherry"]`.

2. The condition `inputList.length === 1` is true because the length of `["cherry"]` is indeed 1.

3. Since the base case is met, the function returns the `inputList` array.

4. This returned array becomes the `sortedLeft` or `sortedRight` value in the higher-level recursive call, and it will be used for merging purposes.

In other words, when the `if` condition is true, the recursive process stops for
that specific branch of the recursion, and the already sorted array is passed
back up through the calls until it becomes part of the merging process.

---

Yes, the `return inputList;` statement will not print anything, but it will return the array `["cherry"]`. The output won't be shown automatically; you would need to explicitly log or use the returned value somewhere in your code to see it.

Here's how you might log and see the expected output:

```javascript
const inputList = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"];

const mergeSort = (inputList) => {
  if (inputList.length === 1) {
    return inputList;
  } else {
    // ... rest of the mergeSort function
  }
}

const sortedArray = mergeSort(inputList);
console.log(sortedArray); // Output: ["cherry"]
```

In this example, the `sortedArray` variable will hold the returned value from
the `mergeSort` function, which is `["cherry"]`. When you log `sortedArray`, you
will see the output `["cherry"]`.

### The output of `const sortedLeft = mergeSort(firstHalf);`

The output of `const sortedLeft = mergeSort(firstHalf);` would not directly print anything to the console by itself. However, it would execute the `mergeSort` function recursively on the `firstHalf` array and return the sorted array.

If you were to log the `sortedLeft` variable after this line, you would see the sorted array as the output. Here's how you might do it:

```javascript
const inputList = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"];
const half = Math.floor(inputList.length / 2);
const firstHalf = inputList.splice(0, half);

const sortedLeft = mergeSort(firstHalf);

console.log(sortedLeft); // Output will depend on the sorted content of firstHalf
```

The exact output would depend on the values within the `firstHalf` array after
the `mergeSort` operation has been applied to it.

## Part 2. Sort and Merge

Next Part 2, moving on to the `merge` function! This function is responsible for taking two sorted arrays, `leftList` and `rightList`, and merging them together into a single sorted array. Let's break down the code:

```javascript
const merge = (leftList, rightList) => {
  let arr = [];

  while (leftList.length > 0 && rightList.length > 0) {
    if (leftList[0] < rightList[0]) {
      arr.push(leftList.shift());
    } else {
      arr.push(rightList.shift());
    }
  }

  return arr.concat(leftList).concat(rightList);
}
```

1. **Initialization:**
   - `arr` is an empty array that will hold the merged and sorted elements from `leftList` and `rightList`.

2. **Merging Loop:**
   - A `while` loop runs as long as both `leftList` and `rightList` still have elements to compare.
   - Inside the loop, the first element from each list is compared. If the first element of `leftList` is smaller, it's pushed into `arr`, and then it's removed from `leftList` using `shift()`. If the first element of `rightList` is smaller, it's pushed into `arr`, and then it's removed from `rightList` using `shift()`.

3. **Merging Remaining Elements:**
   - After the loop, either `leftList` or `rightList` (or both) might still have remaining elements.
   - The `concat()` method is used to concatenate any remaining elements from `leftList` and `rightList` to the end of `arr`.
   
4. **Returning the Result:**
   - The merged and sorted array, stored in `arr`, is returned as the result of the `merge` function.

The `merge` function is a crucial part of the Merge Sort algorithm. It ensures that the smaller sorted arrays created during the recursion are combined in the correct order, resulting in a fully sorted array.