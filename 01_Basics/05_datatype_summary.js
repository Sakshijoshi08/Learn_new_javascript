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
// console.log("hello world");
}
// console.log(typeof myFunc); //  object function
// console.log(typeof id); // symbol
// console.log(typeof scoreValue ); // number 
// console.log(typeof score); // number 
// console.log(typeof anotherId); //symbol
// console.log(typeof isLoggedIn); // boolean 
// console.log(typeof myObj); // object 
// console.log(typeof heros); // object

// console.log(typeof null); // object 
// console.log(typeof undefined); //  undefined


// output
// function
// symbol
// number
// number
// symbol
// boolean
// object
// object
// object
// undefined
// *************************************************************************************************

//  stack Memory( primitive):- call by value   got a copy of value it didnt chnge the original value.
//  Heap (Non-primitive):- call by reference got the original value the change done in this is in original value.

let myname = " sakshi "
let anothername = myname
anothername = " sakshi pal"

console.log(myname);
console.log(anothername);

let userOne ={
    emailId : "saksipal@google.com",
    password :" 1234"
}
let userTwo = userOne 
userTwo.emailId = "sp@gmal.com"
console.log(userOne.emailId);
console.log(userTwo.emailId);