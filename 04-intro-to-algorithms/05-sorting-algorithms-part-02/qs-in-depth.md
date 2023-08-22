# Quick Sort Problems in JS

>  quick sort guna pivot untuk sort. pivot ni pemisah/penghadang yang fixed point macam dinding
> a pivot is a reference point that helps partition and sort an array efficiently by dividing it into smaller segments and using recursive strategies.
> pivot as a central element that helps in dividing and conquering the sorting process. Its main purpose is to aid in rearranging the elements in a way that eventually leads to a sorted array.

Partition ni proses/perbuatan pengasingan untuk nak tahu kiri dan kanan. Cara kita sort utnuk guna partition ialah kalau element skrg lagi kecik dari pivot, ke kiri. **tip: less than symbol, `<` ingat ke kiri ⬅️, bandingkan dengan pivot (fixed point)**

PART 2:
```javascript
const partition = (arr, minIndex, maxIndex) => {
  // Assuming the pivot is always the rightmost element (last index; arr.length-1)
    let pivot = arr[maxIndex];
    
    // start i - 1 (previous element?)
    // (as we havent found any large elements yet)
    let i = minIndex - 1;
    
    // Find the right position of pivot
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
```

PART 1: 
```javascript
const quickSort = (arr, minIndex, maxIndex) => {
    if (maxIndex > minIndex) {
      // pi refer as pivot index / pivot position
        let pi = partition(arr, minIndex, maxIndex);

        quickSort(arr, minIndex, pi-1);
        quickSort(arr, pi + 1, maxIndex);
    }
}

// Example usage
const array = [5, 2, 9, 3, 5, 6];
quickSort(array, 0, array.length - 1);
console.log(array); //  Output: [2, 3, 5, 5, 6, 9]
```

If the element j is smaller than pivot, then we will do i++ and swap element i with element j.
> element j kecik dari pivot, index bertambah 1 kemudian kita tukar main element iaitu element i dengan element j. **yang lagi kecik kita swap**

1. At start, the `quickSort` function is called with the array array, and the values `0` (which is the minimum index) and `array.length - 1` (which is the maximum index) are passed as arguments.
2. Part 1: Inside `quickSort()`. `if` statement; we want to have a condition where `maxIndex` is bigger than `minIndex` (nombor paling besar max kena lagi besar dari min number, obviously). first block must be true for the code to be executed. Nak cari min dan max (macam cari range)
3. Inside if block, penting kita nak kena cari adalah Pivot Index(`pi`). Kita create partition function untuk nak tahu kat mana pivot duduk lepas kita asingkan elements. **(First cycle, range would be from 0 to end. Partition function should return the position of pivot after partition)**. So, the `partition` function is also called with the array, and the values `0` (which is the minimum index) and `array.length - 1` (which is the maximum index) are passed as arguments.
4. Part 1, but also Part 2: Sekarang ni kita ada di partition function. So, create partition function.
5. First, kita setkan pivot kita at the always rightmost element (element paling kanan ataupun last element): `pivot = arr[maxIndex]`.
6. Pastu, setkan i = minIndex - 1 (what if minIndex is 0, so 0 minus 1??). It initializes `i` as one less than `minIndex`. **This will serve as the index for the last element that's smaller than the pivot.**
7. use for loop to loop thru aray to find the right position of pivot. start j from minIndex; continue until j less than or equal maxIndex (macam cari range?); i++.

# Part 1 and Part 2 (Explanation - TalentLabs)

- 2 functions (recursive apprroach)
- Part 1: quickSort. To sort the elements between `minIndex` and `maxIndex` of the array.
- Part 2: partition.

Let's break down the code step by step to provide a clear explanation for beginners:

**PART 1:**

```javascript
const quickSort = (arr, minIndex, maxIndex) => {
    if (maxIndex > minIndex) {
        let pi = partition(arr, minIndex, maxIndex);

        quickSort(arr, minIndex, pi - 1);
        quickSort(arr, pi + 1, maxIndex);
    }
}
```

- This is the `quickSort` function, which implements the QuickSort algorithm.
- It takes three arguments: `arr` (the array to be sorted), `minIndex` (the starting index of the subarray to be sorted), and `maxIndex` (the ending index of the subarray to be sorted).
- The purpose of this function is to sort the elements between `minIndex` and `maxIndex` of the array.

Here's how it works:

1. It first checks if `maxIndex` is greater than `minIndex`. This condition ensures that there's more than one element in the subarray, as the sorting is not needed for single or empty subarrays.

2. If the condition is met, it calls the `partition` function to find the correct position for the pivot element. The result of `partition` is stored in the variable `pi`.

3. After partitioning, the function makes two recursive calls to `quickSort`:
   - One for the subarray on the left(⬅ kiri) of the pivot: `quickSort(arr, minIndex, pi - 1)`.(quickSort(array, from minIndex until the previous pivot))
   - Another for the subarray on the right(kanan ➡ ) of the pivot: `quickSort(arr, pi + 1, maxIndex)`. (quickSort(array, after pivot until maxIndex))

> pi - 1 is previous element; pi + 1 is next element

4. The partitioned subarrays will continue to be sorted in this recursive manner until they're fully sorted.

**PART 2:**

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

    let tempIPlus1 = arr[i + 1];
    arr[i + 1] = pivot;
    arr[maxIndex] = tempIPlus1;

    return i + 1;
}
```

- This is the `partition` function, responsible for rearranging the array elements around the pivot.
- It takes three arguments: `arr` (the array being sorted), `minIndex` (the starting index of the subarray to partition), and `maxIndex` (the ending index of the subarray to partition).

Here's how it works:

1. It selects the pivot element, which is assumed to be the rightmost element (`arr[maxIndex]`).
2. It initializes `i` as one less than `minIndex`. This will serve as the index for the last element that's smaller than the pivot.
3. The loop iterates through the subarray from `minIndex` to `maxIndex - 1`:
   - If the current element (`arr[j]`) is smaller than the pivot, it means that it should be moved to the left side of the pivot. So, `i` is incremented, and a swap is performed to move the element to the correct position.
4. After the loop, the elements have been rearranged such that elements smaller than the pivot are on the left and elements greater than the pivot are on the right.
5. The pivot element (`arr[maxIndex]`) is then swapped with the element at `arr[i + 1]`, effectively placing the pivot in its sorted position.
6. The function returns the index at which the pivot has been placed in the rearranged array (`i + 1`).

This partitioning process ensures that the pivot is positioned correctly within the array, with smaller elements to its left and larger elements to its right. This is a fundamental step in the QuickSort algorithm.

# Line by line

## Part 1: Quick Sort

## Part 2: Partition

### for loop,`for (let j = minIndex; j <= maxIndex - 1; j++)`

Correct! The line `for (let j = minIndex; j <= maxIndex - 1; j++)` initiates a loop that iterates through a subarray starting from the `minIndex` and continuing until the second-to-last element, which is represented by `maxIndex - 1`.

Here's a breakdown:

- `let j = minIndex`: The loop starts with `j` assigned the value of `minIndex`, which is the index of the first element in the subarray that needs to be partitioned.

- `j <= maxIndex - 1`: The loop continues as long as `j` is less than or equal to `maxIndex - 1`. This condition ensures that the loop iterates through all elements up to the second-to-last element in the subarray. This is because the last element (`maxIndex`) is the pivot element, which is already in its sorted position.

- `j++`: After each iteration of the loop, the value of `j` is incremented by one, effectively moving to the next element in the subarray.

So yes, you're right in your understanding. The loop iterates through the subarray from the smallest element (at `minIndex`) to the second-to-last element (at `maxIndex - 1`) to compare each element with the pivot and determine whether it should be moved to the left or right side of the pivot during the partitioning process.

### `pi = partition(arr, minIndex, maxIndex);`

> **For the range, we will do the partition. First cycle, range would be from 0 to end. Partition function should return the position of pivot after partition**
> gives pivot index (pi)

The line `pi = partition(arr, minIndex, maxIndex);` in your code is a call to the `partition` function. This line will execute the `partition` function and assign the value returned by the function to the variable `pi`.

Here's a breakdown of what happens:

1. The `partition` function is called with the arguments `arr`, `minIndex`, and `maxIndex`.
2. Inside the `partition` function, the partitioning process takes place, where elements smaller than the pivot are moved to the left and elements greater than the pivot are moved to the right.
3. The index of the pivot element in the modified array (after partitioning) is returned by the `partition` function.
4. This returned index is then assigned to the variable `pi` in the calling code.

In the context of the QuickSort algorithm, the value of `pi` represents the index at which the pivot element has been placed after the partitioning process. This index will be used to recursively sort the subarrays on both sides of the pivot.

So, after the line `pi = partition(arr, minIndex, maxIndex);` is executed, `pi` will hold the index value returned by the `partition` function, indicating the correct position of the pivot within the partitioned array.

### `pivot = arr[maxIndex]`

In the QuickSort algorithm, the pivot is chosen only once at the beginning of the partitioning process for each subarray. Once the pivot is chosen, it remains constant throughout that particular partitioning step. The goal of the partitioning process is to rearrange the elements around the pivot, so the pivot itself does not change its value.

Here's how the pivot works within the QuickSort algorithm:

1. **Initial Choice:** At the beginning of each partitioning step, a pivot element is chosen. The choice of pivot can be different for each partitioning step, or you might use the same pivot for all steps (like always choosing the last element of the subarray).

2. **Partitioning:** The elements in the subarray are rearranged around the pivot. Elements smaller than the pivot are moved to its left, and elements greater than the pivot are moved to its right. The pivot itself is not moved, but its position in the array may change as a result of swapping elements around it.

3. **Recursive Sorting:** After partitioning, the pivot is now in its final sorted position. The subarrays to the left and right of the pivot are then recursively sorted. The pivot's role in this step is to divide the subarray into smaller segments for sorting.

So, while the pivot's value itself does not change within a single partitioning step, it does play a crucial role in how the subarrays are partitioned and ultimately sorted.

### `i = minIndex - 1;`

In the context of the QuickSort algorithm, the line `let i = minIndex - 1;` initializes a variable `i` that will be used as an index to keep track of the position in the array where elements smaller than the pivot should be placed.

Here's how it works within the partition function:

1. `minIndex`: This represents the starting index of the partitioned subarray.
2. `i`: This variable starts at `minIndex - 1`, which is one position before the actual subarray. This allows `i` to be used as a reference to where the last element less than the pivot element will end up.

The partition function then iterates through the subarray between `minIndex` and `maxIndex - 1` (since `maxIndex` is the pivot element), comparing each element with the pivot. If an element is smaller than the pivot, `i` is incremented, and the element at index `i` is swapped with the current element at index `j`.

In summary, `i` keeps track of the position where elements smaller than the pivot will be placed in the subarray during the partitioning process. After the iteration is complete, the pivot is placed at index `i + 1`, separating the smaller elements on the left and larger elements on the right.

