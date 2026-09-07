// Array

// const myArray = [0, 1, 2, 3, 4, 5];
// const myHeros = ["batman", "superman", "wonderwomen"];
// const myArray2 = new Array(1, 2, 3, 4);

// console.log(myArray[0]);

// Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()
// myArray.unshift(9)
// myArray.shift(0)

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));
// console.log(myArray);

// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);

// slice, splice
// console.log("A ", myArray);
// const myn1 = myArray.slice(1, 4);
// console.log(myn1);
// console.log("B ", myArray);

// const myn2 = myArray.splice(1, 4);
// console.log("C ", myArray);
// console.log(myn2); 

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heros, ...dc_heros]
// console.log(all_new_heroes);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// for data scrapping
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"})); // interesting for interviews 

let score1 = 100 
let score2 = 200
let score3 = 300 

console.log(Array.of(score1, score2, score3));


