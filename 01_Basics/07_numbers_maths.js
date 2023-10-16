//  Numbers 
const score = 100;
// console.log(score);

const balance =new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00
// const otherNumber = 132.8966;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN')); // Indian standards


// constructor
// ƒ Number()
// toExponential
//  
// ƒ toExponential()
// toFixed
//  
// ƒ toFixed()
// toLocaleString
//  
// ƒ toLocaleString()
// toPrecision
//  
// ƒ toPrecision()
// toString
//  
// ƒ toString()
// valueOf
//  
// ***************************** Maths *************************************************

console.log(Math);// object 
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(3.7));
console.log(Math.floor(3.7));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());
console.log((Math.random() * 10) +1); // it always gives value b/w 0 and 1 thats why (* 10 + 1) so that the value never be 0 
 

const min = 10 
const max = 20 
// console.log(Math.floor( Math.random() * (max-min +1) +min) );