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

/*
(arr[middle] < target)

check condition if current middle, grape comes before pear, our target.
*/
```

Sure, let's break down the code step by step in simple terms:

1. We start by creating a list of fruits in a specific order: "apple", "banana", "cherry", "grape", "orange", "pear", and "strawberry".

2. We want to find a specific fruit in this list, so we pick the fruit we're looking for, which is "pear".

3. We set up two special points, one at the beginning of the list (pointed to by `start`) and one at the end of the list (pointed to by `end`).

4. Now we start a loop that continues as long as the `start` point is less than or equal to the `end` point.

5. Inside the loop, we find the middle point between `start` and `end`. This helps us divide the list in half and check the fruit in the middle.

6. We compare the fruit at the middle point with our target fruit, which is "pear".

7. If the fruit at the middle point is exactly the same as our target fruit ("pear"), we found it! We show a message that says "Found at position" followed by the position where we found it, and then we stop the loop.

8. If the fruit at the middle point is not the target fruit, we check whether it comes before or after the target fruit in the list.

9. If the fruit at the middle point comes before the target fruit in the list, we update the `start` point to be right after the middle point. This way, we narrow down our search to the second half of the list.

10. If the fruit at the middle point comes after the target fruit in the list, we update the `end` point to be right before the middle point. This narrows down our search to the first half of the list.

11. The loop keeps repeating these steps until either we find the target fruit or the `start` point becomes greater than the `end` point. In other words, if the `start` point passes the `end` point, it means we've checked the entire list and didn't find the target fruit.

That's how binary search works. It's like guessing a number between 1 and 100 by asking if the correct number is higher or lower after each guess. Similarly, in the code, we're dividing the list in half each time, which helps us find the target fruit more efficiently.

---
```javascript
const arr = ["apple", "banana", "cherry", "grape", "orange", "pear", "strawberry"];
const target = "pear";
```

so, based on my understanding:

1. `let start = 0`: start at index 0

2. `let end = arr.length - 1`: the end is at the last index of array (arr.length -> 7 - 1 = 6, so 6 is the last index)

3. `(start <= end)`: this code means to loop from start until end of array, from index 0 until 6

4. `middle = Math.floor((start + end) / 2)`: this to find the middle, where the middle variable is set to divition by 2 of the array. Index 0 + 6 is 6, then 6 divide by 2 we got index 3, element value is grape.

5. `(arr[middle] === target)`: this code is to check condition where if the middle, the element grape equal to pear, our target, then we end the loop. or is the code looking at index? like if index middle, 3 equal to target index 5?

6. `(arr[middle] < target)`: another condition to check is if the middle, grape comes before and less than pear, the target.

7. `start = middle + 1`: this code executed if condition else if is true. Which is we will set the start variable to index middle + 1, 3 + 1 is 4. the new start is at index 4, element value is orange. so find target from start to end (index 4 to 6; orange, pear, strawberry). so, if the middle comes before the target, the start point is after the middle point, we search to the right (second half)

8. `end = middle - 1`: code executed if all `else if` statement is false. We will set the end variable to middle - 1. index middle is 3 - 1 is 2. the new end index is 2, element value is cherry. so we find our target from arrange start to end (index 0 to 2; apple, banana, cherry). so, if the middle comes after the target, the end point is before the middle point, we search to the left (first half)

> You've got the understanding almost exactly right! Your breakdown is very clear. Just a minor clarification on the comparison part:

```javascript
(arr[middle] === target)
```

arr[middle] is print as values, ex; grape is eq

This code is indeed checking whether the element at the `middle` index is equal to the `target`. So, it's comparing the values, not the indexes. If the element at the middle matches the target, then we've found the target and we can end the loop.

```javascript
(arr[middle] < target)
```

And yes, this condition is checking whether the element at the `middle` index comes before (alphabetically) and is "less than" the `target` element. If this condition is true, it means the `target` could be located in the second half of the remaining search space (i.e., from `middle + 1` to `end`).

```javascript
start = middle + 1
```

You got this part right. If the element at the `middle` index comes before the `target`, we update the `start` point to be just after the `middle`. This narrows down our search to the second half of the remaining search space.

```javascript
end = middle - 1
```

And here too, you're correct. If the element at the `middle` index comes after the `target`, we update the `end` point to be just before the `middle`. This narrows down our search to the first half of the remaining search space.

Your understanding is very clear, and you've broken down each step accurately. Great job!

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