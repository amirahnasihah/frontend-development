# Merge Sort

## Part 1. Divide and Continue to Divide

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

    return merge(sortedLeft, sortedRight);
  }
}
```

---

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

## Part 2. Sort and Merge