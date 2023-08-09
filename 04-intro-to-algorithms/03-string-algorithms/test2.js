/*
Strings Question 1 - Finding Substring: How can you check if a substring exists in a string? 


*/


const inputString = "Talentlabs"
let result = ""

for (let i = inputString.length-1; i >= 0; i--){
 result += inputString[i]
}

console.log(result) // sbaltnelaT