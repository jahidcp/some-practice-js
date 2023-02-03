var first = 10;
var second = 20;
// console.log(first, second)

// Approach: 01
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);


// Approach: 02
[first, second]=[second, first];
console.log(first, second);