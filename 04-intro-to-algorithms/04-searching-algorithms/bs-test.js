/*

*/

const arr = [1, 2, 4, 6, 7, 9, 10, 11, 13];
const target = 4

// Control the search range
let start = 0
let end = arr.length - 1

// Exit Condition: start is larger than the end
while (start <= end) {
    // Handle the odd length scenario
    let middle = Math.floor((start + end) / 2)
    console.log("end", end)
    
    // Found!
    if (arr[middle] === target) {
        console.log("Found at position: " + middle);
        break;
    }
    else if (arr[middle] < target) {
        start = middle + 1; // ke kanan
    }
    else {
        end = middle - 1; // ke kiri
    }
}

// output: Found at position: 2

/*
while loop (string array)
*/

const fruits = ["apple", "banana", "cherry", "grape", "orange", "pear", "strawberry"];
const targetFruit = "orange";

let startArr = 0;
let endArr = fruits.length - 1;

while (startArr <= endArr) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === targetFruit) {
        console.log("Found fruit at position: " + middle);
        break;
    }
    else if (arr[middle] < targetFruit) {
        startArr = middle + 1;
    }
    else {
        endArr = middle - 1;
    }
}

// output: 