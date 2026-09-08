// singleton

// objects create
// objects literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@yahoo.com";
// Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


