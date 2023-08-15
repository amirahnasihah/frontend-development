# Linear Search Problems in JS

# Binary Search Problems in JS

## How to find an element in a sorted array? (sorted)

**Algorithm:**

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

**Converting into Code:**

```javascript
const arr = [1, 2, 4, 6, 7, 9, 10, 11, 13];
const target = 11

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

**Explanation:**

1. First, we have an array of numbers: `[1, 2, 4, 6, 7, 9, 10, 11, 13]`, and a target number we want to find, which is `7`.

2. We set up two variables: `start` and `end`. These will help us keep track of the portion of the array we're searching through. At the beginning, `start` is set to the first position (0), and `end` is set to the last position (8) of the array.

3. The code then enters a loop, which keeps running as long as the `start` position is less than or equal to the `end` position. This loop is a way to systematically search for our target number.

4. Inside the loop, we calculate the `middle` position of the current search range. We do this by adding the `start` and `end` positions together and then dividing by 2. We use `Math.floor` to make sure we get a whole number, even if the division results in a decimal.

5. Next, we check if the number at the `middle` position of the array is equal to our target number (`7` in this case). If it is, we've found our target! We print a message saying we found it at that specific position and then break out of the loop.

6. If the number at the `middle` position is less than our target number (`7`), that means our target must be in the right half of the search range. So, we update the `start` position to be one more than the `middle` position. This narrows down the search range to the right half of where we were looking.

7. If the number at the `middle` position is greater than our target number (`7`), then our target must be in the left half of the search range. So, we update the `end` position to be one less than the `middle` position. This narrows down the search range to the left half of where we were looking.

8. The loop continues to repeat this process, narrowing down the search range with each iteration. It will either find the target number and break out of the loop, or eventually, the `start` position will become greater than the `end` position, and the loop will stop.

In simple terms, this code is like playing a guessing game with a sorted list of
numbers. We start in the middle of the list and compare the number there with
our target. If the guess is too low, we look in the higher numbers; if it's too
high, we look in the lower numbers. We keep doing this, narrowing down the range
of numbers we're looking at, until we either find the target or realize it's not
in the list.

### `start = middle + 1;`

More clarify:

```javascript
arr = [1, 2, 4, 6, 7, 9, 10, 11, 13];
```

`arr[middle]` represents the element at the `middle` index in the array. So, if
the `middle` index is `2` in the array, then the value at that index 2 `arr[middle]` would be
element `4`.

In the code snippet `start = middle + 1;`, the purpose is to update the `start` variable so that it points to the index immediately after the `middle` index. You can think of it like shifting the starting point of our search to the right, moving past the current `middle` index.

For example, let's say the `middle` index is `1` and the value at that index (`arr[middle]`) is `2`. This means that we've already checked that the target is not at index `1`. Since the target is `7`, which is larger than `2`, we know that the target must be located somewhere to the right of index `1`. So, by updating `start` to `middle + 1`, we are essentially saying "Let's start searching from the index after the current `middle` index, which is index `2`."

In terms of the array you provided `[1, 2, 4, 6, 7, 9, 10, 11, 13]`, if `middle`
index is `1`, then value `arr[middle]` is `2`, and `start` will be updated to `2 + 1`, which
becomes `3`. So, the next iteration of the loop will focus on the subarray `[6,
7, 9, 10, 11, 13]`, effectively excluding the elements `[1, 2, 4]` from
consideration.

## How to find an element in a sorted array? (strings)

Let's use strings in place of numbers to explain the same code:

```javascript
const arr = ["apple", "banana", "cherry", "grape", "orange", "pear", "strawberry"];
const target = "pear";

let start = 0;
let end = arr.length - 1;

while (start <= end) {
    let middle = Math.floor((start + end) / 2);

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

In this case, think of the array as a list of words in alphabetical order. We want to find the position of the word "orange" in the list.

- `start` and `end` represent the positions in the list that we are currently looking at.

- We start in the middle of the list: "grape". Since "grape" comes before "orange" in alphabetical order, we update `start` to the position after "grape".

- Now, we're looking at the second half of the list: ["orange", "pear", "strawberry"]. "orange" is our target, so we found it at the first position of this subarray, which is position `4` overall.

The concept remains the same: we narrow down the search range based on whether the current word comes before or after our target word in alphabetical order. This technique is known as binary search, and it works similarly whether we're dealing with numbers or strings.

---

```
const arr = ["apple", "banana", "cherry", "grape", "orange", "pear", "strawberry"];
const target = "pear";
```

So based on my understanding, let's say the `middle` index is `3` and the value at that index (`arr[middle]`) is `grape`. This means that we've already checked that the target is not at index `3`. Since the target is `pear` at index 5, which is alphabetically larger than index`3`, we know that the target must be located somewhere to the right of index `3`. So, by updating `start` to `middle + 1`, we are essentially saying "Let's start searching from the index after the current `middle` index, which is index `3`." So, since middle is at index 3, value is grape. the start variable will be set to 3 + 1 is 4, then we start again finding the range from index 4 to index 6, find from element orange, pear, strawberry.

then divide again to find the middle from the start (index 4) + end (index 6) divide by 2. then we got the middle index which is (4 + 6 / 2 = 5). then we got the middle which is at index 5, element pear. is it like this?

```plaintext
You've got it almost exactly right! You have a solid 
understanding of how the binary search algorithm works. 
Your explanation is spot on:

1. Initially, `middle` is calculated to be `3` (since `(0 + 6) / 2` is `3`), and the value at index `3` is "grape".

2. Since "grape" comes before "pear" alphabetically and we're looking for "pear", we update `start` to `middle + 1`, which is `4`.
(grape sorted first, then pear. middle {3 + 1 = 4})

3. Now, we focus on the range from index `4` to index `6`: ["orange", "pear", "strawberry"].

4. We then calculate the new `middle` index for this range as `(4 + 6) / 2`, which is `5`.

5. At index `5`, we find the target "pear", so we've successfully found the target and can stop searching.

You've grasped the core concept beautifully! Binary search
is all about halving the search range and honing in on the
target by comparing values and adjusting the search range accordingly.
```