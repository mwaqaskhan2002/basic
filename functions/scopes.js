// ==========================================
// VIDEO #21: GLOBAL VS BLOCK SCOPE
// ==========================================

// --- Topic 1: Global vs Local Scope ---
let a = 300; // Global Variable

if (true) {
  let a = 10; // Block Scope Variable (Shadows global 'a' inside this block)
  const b = 20; // Block Scope Variable
  var c = 30; // Global/Function Scoped (Leaks out of block!)

  console.log("Inner: ", a);
  // Output: Inner: 10
}

console.log(a);
// Output: 300 (Global 'a' is safe, inner 'a' died inside if-block)

// console.log(b);
// Output: ReferenceError: b is not defined (Correct behavior)

console.log(c);
// Output: 30 (DANGEROUS LEAK: 'var' ignores block scope)

// --- Topic 2: Nested Scope (Closure Basics) ---
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); // Works! 'two' can access 'one's variables.
  }

  // console.log(website); // Throws Error! 'website' exists only inside 'two'

  two();
}

one();
// Output: hitesh
