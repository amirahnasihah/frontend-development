// while loop

const arr = [1, 2, 4, 6, 7, 9, 10, 11, 13];
const target = 4

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

// output: Found at position: 2