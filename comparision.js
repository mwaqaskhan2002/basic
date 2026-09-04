// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


// These types of comparision are avoidable because they are not clear and can lead to confusion.

console.log(null > 0);  // false
console.log(null == 0); // false 
console.log(null >= 0); // true

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// == (Loose equality) => Sirf Values ko compare karta hai, Data Types ko nahi (JS background mein type conversion kar deti hai).
// === (Stict equality) => Value aur Data Type dono ko strict check karta hai (No type conversion).

console.log("2" === 2); // false
console.log("2" === 1); // false
console.log("2" === 1); // false