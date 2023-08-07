const str = "Hello World!"
const arrStr = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

console.log("String:", str[1]) // Print out the letter “e”
console.log("String space:", str[5])
console.log("Array String:", arrStr[6]) // Print out the letter “W”


// Strings Question 1 - Finding Substring: How can you check if a substring exists in a string? (How to implement the indexOf() function?)
// why use indexOf()?

my answer:
originalString = "Hello"
target = "lo"

// Part 1 Create Outer Loop - h,e,l,l,o
for (let i = 0; i < originalString.length; i++) {
      // Inner Loop - must be unique; e.l.l
      for (let j = i + 1; j < originalString.length; j++) {
            if (originalString[i] + originalString[j] === target) {
             console.log("targetStr:", originalString[i] + "," + originalString[j]
           }
        }

}