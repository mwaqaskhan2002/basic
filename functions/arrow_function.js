const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);

    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "hitesh";
//     console.log(this.username);
// }

//Arrow Function
// const chai = () => {
//     let username = "hitesh";
//     console.log(this);
// }
// chai()

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 6));

// Implicit Return

const addTwos = (num1, num2) => (num1 + num2)

console.log(addTwos(3, 6));

// Agr curly braces likha to return likhna hoga lakin agr parenthesis likha to return nahi likhna hoga

// Explicit Return

const addOnes = (num1, num2) => ({username: "hitesh"})
console.log(addOnes(3, 5));


// const myArray = [2, 4, 5, 6, 9]
// myArray.forEach()