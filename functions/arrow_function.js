// ==========================================
// VIDEO #23: THIS KEYWORD & ARROW FUNCTIONS
// ==========================================

// --- Topic 1: Object Context & 'this' ---
const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // Prints current object
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

console.log(this);
// Output in Node.js: {}
// Output in Browser: Window Object

// --- Topic 2: 'this' inside Regular Function vs Arrow Function ---
function chai() {
  let username = "hitesh";
  console.log(this.username);
}
// chai(); // Output: undefined

const chaiArrow = () => {
  let username = "hitesh";
  console.log(this);
};
// chaiArrow(); // Output: {}

// --- Topic 3: Explicit vs Implicit Return ---
// Explicit Return (Requires 'return' keyword because of {})
const addTwo1 = (num1, num2) => {
  return num1 + num2;
};

// Implicit Return (No 'return' keyword needed)
const addTwo2 = (num1, num2) => num1 + num2;
const addTwo3 = (num1, num2) => num1 + num2;

// Returning an Object implicitly (MUST wrap in ())
const returnObj = () => ({ username: "hitesh" });

console.log(returnObj());
// Output: { username: 'hitesh' }
