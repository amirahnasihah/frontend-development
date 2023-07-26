inputArray = [5, 3, 7, 2, 5, 9, 0, 3];

tempMaxNumber = 0;

for (i of inputArray) {
	if (tempMaxNumber === 0) {
		tempMaxNumber = i;
	} else {
		if (i > tempMaxNumber) {
			tempMaxNumber = i;
		}
	}
}

console.log(tempMaxNumber);
// 9

