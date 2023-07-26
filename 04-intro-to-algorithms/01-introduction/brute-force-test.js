inputArray = [5, 3, 7, 2, 5, 9, 0, 3];

tempMaxNumber = null;

for (i of inputArray) {
  if (tempMaxNumber === null) {
    tempMaxNumber = i;
  }
  else {
    if (i > tempMaxNumber) {
      tempMaxNumber = i;
    }
  }
}

console.log(tempMaxNumber)