// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 2);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(-5 < 0);

// Note : equality check == and comparisons > < >= <= works differently
// comparisons convrt null to a number , treating it as 0
// that's why null >= 0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// these type of comparison makes us confused 
// straight to the point they kills the readability of code
// clean code is most important 

// === strictly checks 

console.log("2" === 2);

