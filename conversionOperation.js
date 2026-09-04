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

// ----------Operations----------

let value = 33;
let negValue = -value;
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = "World";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);
console.log(true);
console.log(false);


console.log(+true);
console.log(+"");

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); 

// let gamecounter = 100;
// ++gamecounter;
// console.log(gamecounter);


let gamecounter = 100;
gamecounter++;
console.log(gamecounter);