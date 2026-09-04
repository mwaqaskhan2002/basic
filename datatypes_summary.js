// Primitive 

//  7 types: String, Number, BigInt, Boolean, Undefined, Null, Symbol (Primitive Types)

const score = 100;
const scoreValue = 100.1;
const isLoggedIn = false; 
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 12345678901234567890n; // BigInt

// Reference Types: Object, Array, Function, Date, RegExp, Error (non-primitive types)

// Arrays, Objects, Functions, Dates, RegExps, Errors are all objects in JavaScript. 

// If want to master js then master objects and browser kay jo webevents ya browserevent kay hoty hain unko karlo.


const heros = ["spiderman, ironman, hulk, thor"]
let myObj = {
    name: "Tony Stark",
    age: 45,
    isAvenger: true,
}
const myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof bigNumber); // bigint
console.log(typeof myFunction); // function