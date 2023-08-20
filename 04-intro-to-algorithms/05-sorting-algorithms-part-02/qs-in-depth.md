# Quick Sort Problems in JS

PART 2:
```javascript
const partition = (arr, minIndex, maxIndex) => {
  // Assuming the pivot is always the rightmost element
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

## 