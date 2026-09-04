let score = true;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33 
// "33abc" => NaN
// "abc33" => NaN
// "abc" => NaN
// "undefined" => NaN
// "null" => 0
// "true" => 1 
// "false" => 0

let isloggedIn = "abc"
let booleanIsloggedIn = Boolean(isloggedIn);

console.log(booleanIsloggedIn);

// 1 => true; 0 => false
// "" => false;
// "abc" => true;
// null/undefined => false;

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
