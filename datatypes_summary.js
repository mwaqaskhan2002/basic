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

// +++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) and Heap (Reference) Memory

// Primitive types are stored in stack memory and reference types are stored in heap memory.

//Stack follows FIFO rule 
// Heap follows 

let myYoutubename = "hiteshchoudahrydotcom"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// //2. Stack vs Heap Memory Allocation
// JS engine memory ko do alag alag hisson mein manage karta hai:

// A. Stack Memory (Primitive Types Ke Liye)
// Kaise Kaam Karta Hai: Stack ek Fast-Access Linear Memory hoti hai. Jab aap Primitive variable banate hain, toh uski actual value Direct Stack mein store hoti hai.

// Pass by Value (Copy Mechanism): Jab aap ek Primitive variable ko doosre mein assign karte hain, toh value ki Copy banti hai. Original value badalti nahi.

// B. Heap Memory (Non-Primitive / Reference Types Ke Liye)
// Kaise Kaam Karta Hai: Heap ek Bada Unstructured Memory Area hota hai. Complex Object/Array ki actual value Heap mein rakhi jati hai, jabki us Heap location ka Reference (Address Pointer) Stack Memory mein banta hai.

// Pass by Reference: Jab aap kisi Non-Primitive variable ko assign karte hain, toh value copy nahi hoti—balki dono variables ek hi Memory Address ko point karne lagte hain.


