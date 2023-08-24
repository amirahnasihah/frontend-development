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
console.log(sortBubbleFruits) // output:

/*
OR SWAP:

let temp = bubbleFruits[j]
bubbleFruits[j] 
*/