const str = "Hello World!"
const arrStr = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

console.log("String:", str[1]) // Print out the letter “e”
console.log("String space:", str[5])
console.log("Array String:", arrStr[6]) // Print out the letter “W”

// BREAK
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // Jump to here when the break line is hit
    break; // exit the loop when i is equal to 3
  }
  console.log("It's now " + i)
  // output: print the numbers from 0 to 2, and then exit the loop when i is equal to 3.
}

// Strings Question 1 - Finding Substring: How can you check if a substring exists in a string? (How to implement the indexOf() function?)
// why use indexOf()?

originalString = "Hello"
target = "lo"

// Part 1 Create Outer Loop - h,e,l,l,o
for (let i = 0; i < originalString.length; i++) {
	// Inner Loop - must be unique; e.l.l
	for (let j = i + 1; j < originalString.length; j++) {
		if (originalString[i] + originalString[j] === target) {
			console.log("targetStr:", originalString[i] + "," + originalString[j])
		}
	}

}

// Alt Solution
for (let i = 0; i < originalString.length; i++) {
  // Leave for Step 2
  for (let j = 0; j < targetString.length; j++) {
    // Case 1: Not Match, and end this iteration
    if (originalString[i + j] !== targetString[j]) {
      break;
  }
  // Case 2: Match and it’s the last character
  else if (j === targetString.length -1) {
    console.log("Found at position " + i)
  }
 }
}

// Question 2

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