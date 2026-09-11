// Immediately Invoked Function Expresion (IIFE)

// Normal Function
function connectDB(){
    console.log("DB Connected!!!");
}
connectDB();

// Normal IFEE Function
(function chai() {
    console.log("DB Connected using IFEE Function!!!");
})();


// With Arrow Function

const printUserInfo = (name, age) => {
  console.log(`${name} is ${age} years old`);
};

printUserInfo("Hitesh", 25);

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// })('hitesh')

// Normal IFEE Arrow Function
((name, age) => {
    console.log(`${name} is ${age} years old`);
})("Hitesh", 25);


// ==========================================
// VIDEO #24: IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// ==========================================

// --- 1. Named IIFE ---
(function chai() {
  console.log("DB CONNECTED");
})(); // Semicolon here is critical!


// --- 2. Unnamed Arrow Function IIFE with Parameters ---
( (name) => {
  console.log(`DB CONNECTED TO ${name}`);
} )("Hitesh");


// --- 3. React / Async Real-World Use Case ---
// IIFE inside async contexts or setup scripts
(async () => {
  console.log("Fetching config settings on boot...");
})();