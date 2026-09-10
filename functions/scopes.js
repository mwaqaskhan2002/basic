// ==========================================
// VIDEO #21: GLOBAL VS BLOCK SCOPE
// ==========================================

// --- Topic 1: Global vs Local Scope ---
// let a = 300; // Global Variable

// if (true) {
//   let a = 10; // Block Scope Variable (Shadows global 'a' inside this block)
//   const b = 20; // Block Scope Variable
//   var c = 30; // Global/Function Scoped (Leaks out of block!)

//   console.log("Inner: ", a);
//   // Output: Inner: 10
// }

// console.log(a);
// Output: 300 (Global 'a' is safe, inner 'a' died inside if-block)

// console.log(b);
// Output: ReferenceError: b is not defined (Correct behavior)

// console.log(c);
// Output: 30 (DANGEROUS LEAK: 'var' ignores block scope)

// --- Topic 2: Nested Scope (Closure Basics) ---

// Rule: Chota scope (Child) apne se bade outer scope (Parent) ke variables access kar sakta hai.

// Lekin Outer Scope (Parent) andar ke Scope (Child) ke variables ko access nahi kar sakta.
// function one(){
//   const username = "hitesh";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log(website); // Throws Error! 'website' exists only inside 'two'

// //   two();
// }
// // one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh"){
//         const website = " youtube"
//         console.log(`${username} + ${website}`);
//     }
//     // console.log(website);
// }

// console.log(username);

// ==========================================
// VIDEO #22: HOISTING & FUNCTION EXPRESSIONS
// ==========================================

// --- Topic 1: Hoisting with Function Declaration ---
console.log(addOne(5)); 
// Output: 6 
// (Allowed: Function Declarations are fully hoisted)

function addOne(num) {
  return num + 1;
}


// --- Topic 2: Hoisting with Function Expression ---
// console.log(addTwo(5)); 
// Output: ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
  return num + 2;
};

console.log(addTwo(5)); 
// Output: 7 (Allowed: Called AFTER function expression initialization)

// Function Declaration aur Function Expression mein Hoisting ka kya farq hai?

// Answer: Function Declaration ko hum uske code se pehle call kar sakte hain kyunki wo fully hoist hota hai. Function Expression ko initialization se pehle call karne par ReferenceError milta hai.

// Temporal Dead Zone (TDZ) kya hota hai?

// Answer: Variable creation aur uski actual initialization ke beech ke time period ko TDZ kehte hain, jisme variable access karne par error milta hai.