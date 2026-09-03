"user strict";

// alert(3 + 3); // we are using nodejs not browser so alert will not work here.
console.log(3 + 3); // this will work in nodejs environment.
console.log("Hello World"); // this will work in nodejs environment.

let name = "hitest"
let age = 30
let isLoggedIn = false

// number => 2 to power 53
// bigint 
// string => "Hello World" or 'Hello World' or `Hello World`
// boolean => true or false
// null => empty value
// symbol 
// object => { key: "value" } or [1, 2, 3]

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isLoggedIn) // boolean

console.log(typeof undefined) // object

