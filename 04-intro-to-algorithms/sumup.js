/* Bubble Sort */
function bubbleSort(bubbleFruits) {
	// loop to compare neighboring elements from start to second last element
	for (let i = 0; i < bubbleFruits.length - 1; i++) {
		for (let j = 0; j < bubbleFruits.length - i - 1; j++) {
			// need condition that if j > next element. then swap both
			if (bubbleFruits[j] > bubbleFruits[j + 1]) {
				let current = bubbleFruits[j]
				current = bubbleFruits[j + 1]
				bubbleFruits[j + 1] = current
				
			}
		}
	}
	return
}

const unsortBubbleFruits = ["banana", "strawberry","apple", "kiwi", "grape", "pear", "mango"];
const sortBubbleFruits = bubbleSort(unsortBubbleFruits)
console.log(sortBubbleFruits) // output: 