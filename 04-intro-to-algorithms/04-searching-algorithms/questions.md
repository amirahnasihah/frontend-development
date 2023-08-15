# Linear Search Problems in JS

# Binary Search Problems in JS

## How to find an element in a sorted array? (sorted)

Algorithm:

```plaintext
1. Start with the element at the middle position:
    a. if the element at the middle equals to the target, then return true.
    b. if the element at the middle is larger than the target, shrink the search
    range to smaller half. (ke kiri <—)
    c. if the element at the middle is smaller than the target, shrink the
    search range to the larger half. (ke kanan —>)
2. Repeat step 1 until target is found or the range contains only 1 element.

However, binary search can only be applied to sorted arrays.
```

Converting into Code:

```javascript
const arr = [1, 2, 4, 6, 7, 9, 10, 11, 13];
const target = 7

// Control the search range
let start = 0
let end = arr.length - 1

// Exit Condition: start is larger than the end
while (start <= end) {
    // Handle the odd length scenario
    let middle = Math.floor((start + end) / 2) 
    
    // Found!
    if (arr[middle] === target) {
        console.log("Found at position: " + middle);
        break;
    }
    else if (arr[middle] < target) {
        start = middle + 1;
    }
    else {
        end = middle - 1;
    }
}
```

Explanation:

