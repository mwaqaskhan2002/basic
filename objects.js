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
// Output: hitesh@google.com

// console.log(JsUser["email"]);
// Output: hitesh@google.com

// console.log(JsUser["full name"]);
// Output: Hitesh Choudhary

// console.log(typeof JsUser.mySym);
// Output: undefined (Kyunki dot notation se string key search hoti hai)

// console.log(JsUser[mySym]);
// Output: mykey1

JsUser.email = "hitesh@yahoo.com";
// Object.freeze(JsUser);
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

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//   console.log(`Hello JS User, ${this.name}`);
// }

// console.log(JsUser.greeting());
/* Output:
Hello JS user
undefined
*/

// console.log(JsUser.greetingTwo());
/* Output:
Hello JS User, Hitesh
undefined
*/

// Video Number 17

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

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

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

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
// Value evaluation: "a@gmail.com" (Console.log na hone ki wajah se terminal mein print nahi hoga)

// console.log(tinderUser);
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));
// Output: [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
// Output: [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
// Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Output: true

// console.log(tinderUser.hasOwnProperty('isLogged'));
// Output: false
