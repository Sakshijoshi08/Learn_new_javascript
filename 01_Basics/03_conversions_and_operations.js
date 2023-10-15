//  Numbers conversion 
let score = "33"// after conversion in number now it is number
// let score = "33abc" // after conversion it gives nan not a number
//  let score = null  // its gives 0 
//  let score = undefined  // it gives nan 
//  let score = true // 1  let score = false // 0

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber =Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// Boolean conversion
let isLoggedIn = 1
// /  let isLoggedIn = "" => false 
// /  let isLoggedIn = "sakshi" => true

 let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

//  String conversion

let somenumber = 33

let stringNumber = String(somenumber)
// console.log(stringNumber);
// console.log(typeof stringNumber); // 33 looks like number but its is actually string


//  Operators

let value = 3
let negValue =-value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 =" hello "
let str2 =" sakshi"
let str3 = str1+str2
// console.log(str3);

// console.log("1" +2); // 12
// console.log(1 +"2"); // 12
// console.log("1" +2 +2); //122
// console.log(1 +2 +"2"); // 32

console.log(+true); 

// prefix and post fix value 
let gameCounter = 100
gameCounter++
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment






