const str = "Hello World!";
const arrStr = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];

console.log("String:", str[1]); // Print out the letter “e”
console.log("String space:", str[5]);
console.log("Array String:", arrStr[6]); // Print out the letter “W”

// BREAK
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // Jump to here when the break line is hit
    break; // exit the loop when i is equal to 3
  }
  console.log("It's now " + i);
  // output: print the numbers from 0 to 2, and then exit the loop when i is equal to 3.
}

/*
Strings Question 1 - Finding Substring: How can you check if a substring exists in a string? (How to implement the indexOf() function?)

Why use indexOf()?
*/

originalString = "Hello";
targetString = "lo";

// Part 1 Create Outer Loop - h,e,l,l,o
for (let i = 0; i < originalString.length; i++) {
  // Inner Loop - must be unique; e.l.l
  for (let j = i + 1; j < originalString.length; j++) {
    if (originalString[i] + originalString[j] === targetString) {
      console.log("targetStr:", originalString[i] + "," + originalString[j]);
    }
  }
}



/*
Strings Question 2 - Reverse Word Order

(Implement the array.reverse() function for string)
*/

function reverseWords(input) {
  const words = input.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join(""); // Reverse characters within each word
  }

  return words.join(" ");
}

const inputString = "Talentlabs";
const reversedString = reverseWords(inputString);
console.log(reversedString); // Output: "sbaltnelaT"

const inputArray = "Hello";
const reversedArray = reverseWords(inputArray);
console.log(reversedArray); // Output: "olleH"

/*
Strings Question 3 - Anagram

How to check if two strings are anagram to each other?

Anagram is words with same letters, but different word.
(e.g. Paris/Pairs are anagram, arc/car are anagram)
*/