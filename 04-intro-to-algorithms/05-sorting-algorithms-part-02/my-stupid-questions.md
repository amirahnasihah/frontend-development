# Merge Sort

## Part 1. Divide and Sort

okay, based on my understanding, i want try to have better understand about javascript merge sort with recursion approach.

since i am using recursive approach, it means the function needs to be called directly inside the another function.

i am using strings of array

const fruits = ["cherry", "strawberry", "apple", "banana", "orange", "pear", "grape"];

so, what i am going to do, i am gonna focus on divide and sort part first.

but, i need to understand about merge sort first. merge sort is divide and conquer.  merge sort need to divide by half, then divide again of the half until it left 1 element, and then sort them of each half (first left half and second right half, lastly need to merge them that left and right half into single array where I need to sort first before merge.

So, i need to divide the array into half. and then divide again of the already half array until it left 1 element. to divide into half, need to use Math.floor(fruits.length / 2). Initially, the length of fruits is 7. so, 7 / 2 is 3 5 so the fruits array middle point will be like ratio [3] : [4], Math.floor is we take lowest number of decimal point. midpoint is 3. Fruits array will be like this first half are "cherry", "strawberry", "apple". The second half are "banana", "orange", "pear", "grape".
the code is half = Math.floor(fruits.length/2)

Next, remember the merge sort is divide into half, which i gonna have first half list and second half list. I already know the middle point of fruits array. But, I cannot distinguish the half, which means the what is inside the first half and second half. first half is left, second half is right. It means I need to have a left list of the fruits array to store or make it easy to use of the left list. What I need to do is have a variable called firstHalf = fruits splice(0, half). i use splice to create a new fruits array that store the first half of the fruits array, 0 is the start index and half (refer to variable half is the delete count which means 3). so, we take a portion of fruits array starting from 1st index, cherry up to mid point which is 3 elements. so, we have now for variable firstHalf is "cherry", "strawberry", "apple".

my question is why we dont have for the secondHalf variable? or is it because we already used splice() method for the firstHalf variable, the original fruits array is modified and no longer have length of 7?

Then, why it already sorted when we dont use sort() method?

I really dont understand this 

const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(inputList);

this is the code for divide and sort part only

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