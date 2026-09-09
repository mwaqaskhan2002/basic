let a = 300

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner:", a);
}



// Whatever data is written in the curly braces whether its if else loop function or even object they are called block scopes.

// scope kay andar jo value hoti hai woh bahar nahi jaani chahye or dosra jo global scope hai woh kaheen bhi access hosakta hai 

console.log(a);
// console.log(b);
// console.log(c);