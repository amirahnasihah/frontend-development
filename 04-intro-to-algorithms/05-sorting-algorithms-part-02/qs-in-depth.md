# Quick Sort Problems in JS

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
      // pi refer as partition index
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

1. At start, the `quickSort` function is called with the array array, and the values `0` (which is the minimum index) and `array.length - 1` (which is the maximum index) are passed as arguments.
2. if statement, where condition is maxIndex bigger than minIndex (nombor paling besar max kena lagi besar dari min number, obviously). first block must be true for the code to be executed.
3. Inside if block, nak kena cari 

First cycle, range would be from 0 to end.
Partition function should return the position of pivot after partition

## `pi = partition(arr, minIndex, maxIndex);`

1. We callimg the `partition()` function with arguments