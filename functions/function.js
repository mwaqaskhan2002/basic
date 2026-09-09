// ==========================================
// VIDEO #19 & #20: FUNCTIONS, PARAMETERS, REST OPERATOR & OBJECTS/ARRAYS
// ==========================================

// --- Topic 1: Function Definition vs Execution ---
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName;    // Function Reference (Memory address point karta hai)
// sayMyName();  // Function Execution
/* Output:
H
I
T
E
S
H
*/

// --- Topic 2: Parameters vs Arguments & Return Values ---
// Function without return value (Only side-effect console.log)
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5); // Output: 8

// Function with return value & unreachable code concept
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     console.log("Hitesh");
//     return result;
//     console.log("Unreachable"); // Return ke baad ka code execute nahi hota
// }

// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);
/* Output:
Hitesh
Result: 8
*/

// --- Topic 3: Default Parameters & Truthy/Falsy Checks ---
function loginUserMessage(username = "sam") {
  // If username is empty string or undefined, !username evaluates to true
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// Output: hitesh just logged in

// console.log(loginUserMessage());
// Output: sam just logged in (Default parameter "sam" is used)

// --- Topic 4: Rest Operator (...) in Function Parameters ---
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [ 500, 2000 ]
// Explanation: 200 -> val1, 400 -> val2, remaining [500, 2000] packed into num1 array

// --- Topic 5: Functions with Objects ---
const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

// handleObject(user);
// Output: Username is hitesh and price is 199

handleObject({
  username: "sam",
  price: 399,
});
// Output: Username is sam and price is 399

// --- Topic 6: Functions with Arrays ---
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// Output: 400

console.log(returnSecondValue([200, 400, 100, 600]));
// Output: 400

// ==========================================
// PRACTICE EXERCISES (OBJECT & ARRAY HANDLING)
// ==========================================

// --- Practice 1: Extracting Properties from Object ---
const laptop = {
  name: "Dell XPS",
  price: 85000,
};

function getProductDetails(products) {
  return `Product: ${products.name} costs Rs.${products.price}`;
}

console.log(getProductDetails(laptop));
// Output: Product: Dell XPS costs Rs.85000

// --- Practice 2: Accessing Last Element of Array ---
const prices = [100, 250, 400, 990];
const names = ["Ali", "Sara", "Hassan"];

function getLastElement(arr) {
  return arr[arr.length - 1]; // Length minus 1 gives last index
}

console.log(getLastElement(prices)); // Output: 990
console.log(getLastElement(names)); // Output: Hassan
