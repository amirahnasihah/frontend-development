function A (inputArray, targetLetter) {
   for (let i = 0; i < inputArray.length; i++) {
       if (inputArray[i] === targetLetter) {
         return true;
      }
   }
return false
}

inputArray=["a", "b", "f", "u", "i", "k", "p", "e", "v", "k", "s"]
targetLetter = "x"
console.log(A(inputArray, targetLetter))