// javascript is dynamically typed language

// # Primitive datatypes
//  call by value 
// 7 types : String, Number , Boolean , null, undefined ,Symbol ,BigInt

const score = 100
const scoreValue = 100.5
const isLoggedIn = false 
const outsideTemp = null


let userEmail;
const id =Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 35372772970n
// console.log(bigNumber);

// # Non-Primitive (Reference type): 
// Arrays ,Objects, Functions
 
const heros = [" sakshi ", "nikhil", " sankalp"];
let myObj = {
    name: "sakshi",
    surname: "pal",
    age : 28,
}
// console.log(myObj.age);

// Function 
 let myFunc = function(){
console.log("hello world");
}
console.log(typeof myFunc);


