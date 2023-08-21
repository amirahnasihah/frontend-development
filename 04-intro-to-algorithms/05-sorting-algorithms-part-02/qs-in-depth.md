# Quick Sort Problems in JS

> a pivot is a reference point that helps partition and sort an array efficiently by dividing it into smaller segments and using recursive strategies.

Partition ni proses pengasingan untuk nak tahu kiri dan kanan. Kalau element skrg lagi kecik dari pivot, ke kiri. **tip: less than symbol, `<` ingat ke kiri ⬅️, bandingkan dengan pivot (fixed point)**

PART 2:
```javascript
const partition = (arr, minIndex, maxIndex) => {
  // Assuming the pivot is always the rightmost element (last index)
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
2. Inside `quickSort()`. `if` statement; we want to have a condition where `maxIndex` is bigger than `minIndex` (nombor paling besar max kena lagi besar dari min number, obviously). first block must be true for the code to be executed.
3. Inside if block, penting kita nak kena cari adalah Pivot Index(pi). Kita create partition function untuk nak tahu kat mana pivot duduk lepas kita asingkan elements. (First cycle, range would be from 0 to end. Partition function should return the position of pivot after partition)
4. Sekarang ni kita kat partition function lagi. So, looked at partition function.
5. Mula2, kita setkan pivot kita at the rightmost element, element paling kanan ataupun last element.
6. Pastu, setkan i 

## `pi = partition(arr, minIndex, maxIndex);`

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

## `i = minIndex - 1;`

In the context of the QuickSort algorithm, the line `let i = minIndex - 1;` initializes a variable `i` that will be used as an index to keep track of the position in the array where elements smaller than the pivot should be placed.

Here's how it works within the partition function:

1. `minIndex`: This represents the starting index of the partitioned subarray.
2. `i`: This variable starts at `minIndex - 1`, which is one position before the actual subarray. This allows `i` to be used as a reference to where the last element less than the pivot element will end up.

The partition function then iterates through the subarray between `minIndex` and `maxIndex - 1` (since `maxIndex` is the pivot element), comparing each element with the pivot. If an element is smaller than the pivot, `i` is incremented, and the element at index `i` is swapped with the current element at index `j`.

In summary, `i` keeps track of the position where elements smaller than the pivot will be placed in the subarray during the partitioning process. After the iteration is complete, the pivot is placed at index `i + 1`, separating the smaller elements on the left and larger elements on the right.