// Primitive
// 7 Types : String, Number , Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//const bigNumber = 33344747567743478758949799n



// Reference (Non primitive)
// Arrays , Objects , Functions 

const heros = ["spiderman", "ironman", "thor"];

let myObj = {
    name: "ritesh",
    age: 16,
}

const myFunction = function () {
    console.log("Hello World");
}

//console.log(typeof myFunction); // => function



// read *visit link **ecma 
// https://262.ecma-international.org/5.1/#sec-11.4.3

// atleast read this :

// typeof Operator Results
// Type of val	 | Result
// Undefined	 | "undefined"
// Null	         | "object"
// Boolean	     | "boolean"
// Number	     | "number"
// String	     | "string"
// Object        | (native and does not implement [[Call]])	"object"
// Object        | (native or host and does implement [[Call]])	"function"
// Object        | (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// ** source => ecma  **i've provided the link

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non-Primitive)

let myName = "riteshpatel"
let anothername = myName  
anothername = "ritesh"

console.log(anothername);
console.log(myName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "ritesh@xyz.com"

console.log(userOne.email);
console.log(userTwo.email);

// read mdn and ecma for better understanding 