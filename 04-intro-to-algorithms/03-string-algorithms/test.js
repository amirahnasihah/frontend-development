const str = "Hello World!";
const arrStr = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];

// array[index] will show element value
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

// 1.Part 1 Create Outer Loop - h,e,l,l,o
for (let i = 0; i < originalString.length; i++) {
  // Inner Loop - must be unique; e.l.l
  for (let j = i + 1; j < originalString.length; j++) {
    if (originalString[i] + originalString[j] === targetString) {
      console.log("targetStr:", originalString[i] + "," + originalString[j]);
    }
  }
}

// targetStr: l,o
//targetStr: l,o


// 2. TalentLabs Solution - Optimization
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
} // Output: Found at position 3



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

function anagram(inputString) {
	// 1. Word to string array
	const stringArray = inputString.split("")
	console.log("split string array:", stringArray)
	
	// 2. Sort the string array alphabetically
	const sortedString = stringArray.sort()
	console.log("sorted string:", sortedString)
	
	// 3. Join string array to word again
	const joinedString = sortedString.join("")
	console.log("join string:", joinedString)
	
	// 4. Check if joinedString is an anagram or not
	if (joinedString === inputString) {
		console.log("Yes Anagram")
		return true
	} else {
		console.log("Not Anagram")
		return false
	}
}

// In order to call a function successfully, need to have a return
const inputString1 = "Paris"
const anagramCall = anagram(inputString1)
console.log(anagramCall)

const inputString2 = "Pairs"
const anagramCall1 = anagram(inputString2)
console.log(anagramCall1)