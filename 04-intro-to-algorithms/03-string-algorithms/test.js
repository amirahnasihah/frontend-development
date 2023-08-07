const str = "Hello World!"
const arrStr = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

console.log("String:", str[1]) // Print out the letter “e”
console.log("String space:", str[5])
console.log("Array String:", arrStr[6]) // Print out the letter “W”

// BREAK - it will loop until at index 3 only
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // Jump to here whe the break line is hit
    break; // exit the loop when i is equal to 3
  }
  console.log("It's now " + i) // output: 0,1,2
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

