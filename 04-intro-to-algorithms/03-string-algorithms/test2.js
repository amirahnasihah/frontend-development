/*
Strings Question 2 - Reverse Word Order

Simple solution: loop start at last index and continue until reach the first index, bcsits reverse
*/

const inputString = "Talentlabs";
let result = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  result += inputString[i];
}

console.log(result); // sbaltnelaT


// TalentLabs Solution
originalString = "Hello";
target = "lo";

for (let i = 0; i < originalString.length; i++) {
  // Leave for Step 2
  for (let j = 0; j < targetString.length; j++) {
    // Case 1: Not Match, and end this iteration
    if (originalString[i + j] !== targetString[j]) {
      break;
    }
    // Case 2: Match and it’s the last character
    else if (j === targetString.length - 1) {
      console.log("Found at position " + i);
    }
  }
}