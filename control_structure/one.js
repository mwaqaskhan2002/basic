// if statement
const isUserLoggedIn = true;
const temperature = 41;

if (temperature > 50) {
  console.log("Less than 50");
} else {
  console.log("temperature is greater than 50");
}

console.log("Execute !!!");

// Comparison Operators: <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

// Scope check: power yahan access nahi hoga (ReferenceError)
// console.log(`User power: ${power}`);

// Implicit Scope / Short Hand Notation
const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2"); // Don't write unreadable code like this

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

// Multiple Condition Checks (AND &&, OR ||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
