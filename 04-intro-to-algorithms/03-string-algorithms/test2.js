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
