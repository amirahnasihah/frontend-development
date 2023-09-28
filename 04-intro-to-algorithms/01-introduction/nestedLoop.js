// a for loop

for (var i = 0; i < 5; i++) {
	console.log(i)
}

/* output

0
1
2
3
4
*/

// nested for loop
console.log("\n")

let nums = 3

for (var i = 1; i <= nums; i++) {
	for (var j = 1; j <= nums; j++) {
		console.log(i + "," + j)
	}
}

/* output:

row 1, col 1; row 1, col 2

1,1
1,2
1,3
2,1
2,2
2,3
3,1
3,2
3,3

*/