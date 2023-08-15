- [Sorting Algorithm](#sorting-algorithm)
- [Bubble Sort](#bubble-sort)
- [Insertion Sort](#insertion-sort)
  - [Exercises explained](#exercises-explained)
    - [bubble-sort.js](#bubble-sortjs)
    - [insertion-sort.js](#insertion-sortjs)
- [Other](#other)

# Sorting Algorithm

JavaScript offers several built-in sorting algorithms through the `Array.prototype.sort()` method. It uses a variation of the QuickSort algorithm called "TimSort." It's efficient for most use cases, but keep in mind it sorts items as strings by default.

**To sort numbers, you need to provide a comparison function:**

```javascript
const numbers = [3, 1, 8, 2, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [1, 2, 3, 5, 8]
```

For more complex sorting, you can customize the comparison function. If you need to sort objects based on a specific property, like sorting an array of objects by their ages:

```javascript
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Eve', age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
```

Remember that `sort()` modifies the original array. If you want to keep the original array unchanged, consider making a copy before sorting:

```javascript
const originalArray = [3, 1, 8, 2, 5];
const sortedArray = [...originalArray].sort((a, b) => a - b);
```

For more advanced scenarios, there are other sorting algorithms like MergeSort and HeapSort, but they aren't built into JavaScript and would require custom implementation.

# Bubble Sort

Pseudocode example #1:

```
Set swap counter to a non-zero value
Repeat until the swap counter is equal to 0:
    Reset swap counter to 0
    Look at each adjacent pair:
        If two adjacent elements are not in order:
            Swap them
            Add one to the swap counter
```

Pseudocode example #2:

```
Repeat until no swaps
    For i from 0 to n–2
        If i'th and i+1'th elements out of order
            Swap them
```

# Insertion Sort

## Exercises explained

### bubble-sort.js

### insertion-sort.js

# Other