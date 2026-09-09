// ==========================================
// VIDEO #16: OBJECT BASICS
// ==========================================

// --- Topic 1: Object Creation Types (Singleton vs Non-Singleton) ---
// Constructor Method -> Object.create (Creates Singleton)
// Object Literal -> {} (Non-Singleton)

// --- Topic 2: Symbol Key Declaration & Object Definition ---
const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1", // Using square brackets for Symbol key definition
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// --- Topic 3: Accessing Object Properties (Dot vs Square Brackets) ---
// console.log(JsUser.email);
// Output: hitesh@google.com

// console.log(JsUser["email"]);
// Output: hitesh@google.com

// console.log(JsUser["full name"]);
// Output: Hitesh Choudhary (Square brackets are mandatory due to space in key)

// console.log(typeof JsUser.mySym);
// Output: undefined (Dot notation searches for literal string "mySym", not the Symbol variable)

// console.log(JsUser[mySym]);
// Output: mykey1 (Correct syntax to access Symbol key)

// --- Topic 4: Modifying & Freezing Objects ---
JsUser.email = "hitesh@yahoo.com";

// Object.freeze(JsUser); // Prevents further modification (Shallow Freeze)

JsUser.email = "hitesh@microsoft.com";

// console.log(JsUser["email"]);
// Output: hitesh@microsoft.com

// console.log(JsUser);
/* Output:
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@microsoft.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

// --- Topic 5: Adding Functions/Methods to Objects & 'this' Keyword ---
// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//   console.log(`Hello JS User, ${this.name}`); // 'this' references the current object context
// }

// console.log(JsUser.greeting());
/* Output:
Hello JS user
undefined (Because greeting function doesn't return any value)
*/

// console.log(JsUser.greetingTwo());
/* Output:
Hello JS User, Hitesh
undefined
*/

// ==========================================
// VIDEO #17: OBJECT SINGLETON, MERGING & METHODS
// ==========================================

// --- Topic 6: Constructor / Singleton Object Definition ---
// const tinderUser = new Object() // Singleton
// const tinderUser = {}; // Non-Singleton Literal

// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// --- Topic 7: Nested Objects & Chaining ---
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname);
// Output: { firstname: 'hitesh', lastname: 'choudhary' }

// console.log(regularUser.fullname.userfullname.firstname);
// Output: hitesh

// --- Topic 8: Merging Objects (Assign vs Spread Operator) ---
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } (Creates nested object, does not merge)

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } (Copies all source objects into target {})

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } (Modern ES6 Spread Syntax) // This is mostly uses in react states updates so use spread operatory

// --- Topic 9: Array of Objects (Database Data Format) ---
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 3,
    email: "b@gmail.com",
  },
];

// users[1].email
// Value evaluation: "a@gmail.com" (Evaluated value, won't print without console.log)
// React mein jab hum .map() chala kar UI render karte hain, toh isi Array of Objects par loop chalate hain.

// --- Topic 10: Object Utility Methods (Keys, Values, Entries, hasOwnProperty) ---
// console.log(tinderUser);
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));
// Output: [ 'id', 'name', 'isLoggedIn' ] (Returns array of keys)

// console.log(Object.values(tinderUser));
// Output: [ '123abc', 'Sammy', false ] (Returns array of values)

// console.log(Object.entries(tinderUser));
// Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] (Returns array of key-value pair arrays)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Output: true (Checks key existence)

// console.log(tinderUser.hasOwnProperty('isLogged'));
// Output: false


// Object.assign({}, obj1, obj2) mein pehla {} kyun dete hain?

// Interview Traps from Video #17
// Object.assign({}, obj1, obj2) mein pehla {} kyun dete hain?

// Answer: Target object ko initialize karne ke liye. Agar {} na dein, toh pehla object (obj1) modify/mutate ho jayega.

// Object.keys() ka return type kya hota hai?

// Answer: Hamesha ek Array (Strings ki format mein keys hoti hain).

// Empty Object check kaise karte hain?

// Plain {} par .length nahi chalta. Isliye interview mein poochte hain ke object empty hai ya nahi kaise check karenge:

// Solution: Object.keys(myObj).length === 0

// ==========================================
// VIDEO #18: OBJECT DESTRUCTURING & JSON API
// ==========================================

// --- Topic 1: Object Destructuring & Renaming ---
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

// Extracting & Renaming 'courseInstructor' to 'instructor'
const { courseInstructor: instructor } = course;

console.log(instructor);
// Output: hitesh

// --- Topic 2: React Prop Destructuring Concept ---
// In React: const Navbar = ({ company }) => { ... } 
// Internally works like: const { company } = props;

// --- Topic 3: JSON Structure Example (Not executable JS code directly) ---
/*
JSON Syntax Rules:
1. Keys must be double-quoted strings.
2. String values must be double-quoted.
3. No trailing commas at the end of lists/objects.

Example Object JSON:
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

Example Array JSON:
[
    {},
    {},
    {}
]
*/