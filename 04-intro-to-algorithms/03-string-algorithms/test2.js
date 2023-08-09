/*
Strings Question 1 - Finding Substring: How can you check if a substring exists in a string? (How to implement the indexOf() function?)

*/

originalString = "Hello";
targetString = "lo";

// TalentLabs Solution - Optimization
for (let i = 0; i < originalString.length; i++) {
  // Leave for Step 2
  for (let j = 0; j < targetString.length; j++) {
    // Case 1: Not Match, and end this iteration
    if (originalString[i + j] !== targetString[j]) {
      break;
    }
    // Case 2: Match and it’s the last character
    else if (j === targetString.length - 1) { // optimize
      console.log("Found at position " + i);
    }
  }
}

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


// Reverse Word Order - split.reverse.join method
const reversedString = inputString.split("").reverse().join("")

console.log(reversedString) // sbaltnelaT

/*
Anagram

*/

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); // ← has empty space
console.log(words[4]);
// Expected output: "jumps"

const chars = str.split(''); // ← no space
console.log(chars[8]);
// Expected output: "k"

const letter = str.split(''); // ← no space
console.log(letter);
// Expected output: Array ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "s", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g", "."]

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]