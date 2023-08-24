/* Bubble Sort */
function bubbleSort(bubbleFruits) {
	// loop to compare neighboring elements from start to second last element
	for (let i = 0; i < bubbleFruits.length - 1; i++) {
		for (let j = 0; j < bubbleFruits.length - i - 1; j++) {
			// need condition that if j > next element. then swap both
			if (bubbleFruits[j] > bubbleFruits[j + 1]) {
				// SWAP
				j_value = bubbleFruits[j]
				j_plus_1_value = bubbleFruits[j + 1]
				bubbleFruits[j] = j_plus_1_value
				bubbleFruits[j + 1] = j_value

			}
		}
	}
	return bubbleFruits
}

const unsortedNumb = [64, 34, 25, 12, 22, 11, 90];
// const unsortBubbleFruits = ["banana", "strawberry","apple", "kiwi", "grape", "pear", "mango"];
const sortBubbleFruits = bubbleSort(unsortedNumb)
console.log("Bubble Sort:", sortBubbleFruits) // output: [11, 12, 22, 25, 34, 64, 90]

/*
OR SWAP:

let temp = bubbleFruits[j]
bubbleFruits[j] = bubbleFruits[j + 1]
bubbleFruits[j + 1] = temp
*/

/* Insertion Sort */
const arr = [12, 9, 20, 4, 5]

for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = current;
}

console.log("Insertion Sort:", arr)
// Output: [4, 5, 9, 12, 20]