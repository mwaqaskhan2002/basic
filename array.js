// ==========================================
// VIDEO #14: ARRAY BASICS & MUTATION METHODS
// ==========================================

// --- Topic 1: Array Initialization & Memory Access ---
// const myArray = [0, 1, 2, 3, 4, 5]; // Array Literal (Stored in Heap, Variable holds Reference in Stack)
// const myHeros = ["batman", "superman", "wonderwomen"];
// const myArray2 = new Array(1, 2, 3, 4); // Array Constructor

// console.log(myArray[0]);
// Output: 0 (Zero-indexed access)

// --- Topic 2: Array Element Addition & Removal (Mutation) ---
// myArray.push(6) // Adds 6 at the end -> [0, 1, 2, 3, 4, 5, 6]
// myArray.push(7) // Adds 7 at the end -> [0, 1, 2, 3, 4, 5, 6, 7]
// myArray.pop()    // Removes last element (7) -> [0, 1, 2, 3, 4, 5, 6]
// myArray.unshift(9) // Adds 9 at index 0 (Shifts all elements) -> [9, 0, 1, 2, 3, 4, 5, 6]
// myArray.shift()  // Removes first element (9) -> [0, 1, 2, 3, 4, 5, 6]

// --- Topic 3: Searching & Conversion Methods ---
// console.log(myArray.includes(9));
// Output: false (Checks if value exists, returns boolean)

// console.log(myArray.indexOf(4));
// Output: 4 (Returns index of value, returns -1 if not found)

// console.log(myArray);
// Output: [0, 1, 2, 3, 4, 5]

// const newArray = myArray.join() // Converts Array to String (comma separated)
// console.log(myArray);
// Output: [0, 1, 2, 3, 4, 5] (Type: object)

// console.log(newArray);
// Output: 0,1,2,3,4,5 (Type: string)

// --- Topic 4: Extraction vs Modification (slice vs splice) ---
// console.log("A ", myArray);
// Output: A  [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArray.slice(1, 4);
// console.log(myn1);
// Output: [ 1, 2, 3 ] (Extracts index 1 to 3, does NOT mutate original array)

// console.log("B ", myArray);
// Output: B  [ 0, 1, 2, 3, 4, 5 ] (Original array remains unchanged)

// const myn2 = myArray.splice(1, 4);
// Output: [ 1, 2, 3, 4 ] (Cuts out elements from index 1, count 4)

// console.log("C ", myArray);
// Output: C  [ 0, 5 ] (Original array IS MUTATED/MODIFIED)

// console.log(myn2);
// Output: [ 1, 2, 3, 4 ]

// ==========================================
// VIDEO #15: ARRAY ADVANCED METHODS & COMBINING
// ==========================================

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// --- Topic 5: Combining Arrays (Push vs Concat vs Spread) ---
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// Output: ['thor', 'ironman', 'spiderman', ['superman', 'flash', 'batman']] (Pushes second array as single element)

// console.log(marvel_heros[3][1]);
// Output: flash (Accessing nested array element)

// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);
// Output: ['thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman'] (Returns new merged array)

// const all_new_heroes = [...marvel_heros, ...dc_heros] // Modern ES6 Spread Operator
// console.log(all_new_heroes);
// Output: ['thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman']

// --- Topic 6: Flattening Multidimensional Arrays ---
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Flattens all levels of nested arrays
console.log(real_another_array);
// Output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// --- Topic 7: Static Utility Methods (isArray, from, of) ---
console.log(Array.isArray("hitesh"));
// Output: false (Checks if argument is an array)

console.log(Array.from("hitesh"));
// Output: [ 'h', 'i', 't', 'e', 's', 'h' ] (Converts iterable/String into array)

console.log(Array.from({ name: "hitesh" }));
// Output: [] (INTERVIEW TRAP: Plain object without specifying keys/values return empty array)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// Output: [ 100, 200, 300 ] (Creates a new array instance from set of variables)

// --- Topic 8: Quick Array Operations ---
const fruit = ["apple", "banana", "orange"];
fruit.push("grapes"); // Adds 'grapes' at end
fruit.pop(""); // Removes last element ('grapes') - parameter in pop is ignored

console.log(fruit);
// Output: [ 'apple', 'banana', 'orange' ]
