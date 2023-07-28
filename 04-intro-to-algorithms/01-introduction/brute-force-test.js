inputArray = [5, 3, 7, 2, 5, 9, 0, 3];

tempMaxNumber = 0;

for (let i = 0; i < inputArray.length; i++) {
	if (tempMaxNumber === 0) {
		tempMaxNumber = inputArray[i];
	} else {
		if (inputArray[i] > tempMaxNumber) {
			tempMaxNumber = inputArray[i];
		}
	}
}

console.log(tempMaxNumber);
// 9

