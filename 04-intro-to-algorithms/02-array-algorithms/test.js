fruits = ['banana', 'guava', 'apple', 'apple', 'apple', 'orange', 'grapes', 'grapes']

console.log(fruits.indexOf("apple")) // 2
console.log(fruits.indexOf("mangosteen")) // -1, not exist

console.log(fruits[5]) // orange
console.log(fruits[5 + 1]) // grapes


fruits.sort();
console.log(fruits);
// [ 'apple', 'apple', 'apple', 'banana', 'grapes', 'grapes', 'guava', 'orange']