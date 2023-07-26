inputArray = [5, 3, 7, 2, 5, 9, 0, 3];

tempMaxNumber = 2;

for (i of inputArray) {
	if (tempMaxNumber === 2) {
		tempMaxNumber = i;
	} else {
		if (i > tempMaxNumber) {
			tempMaxNumber = i;
		}
	}
}

console.log(tempMaxNumber);
// 9