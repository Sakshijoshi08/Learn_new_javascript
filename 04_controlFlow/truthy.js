// const userEmail = "s@sakshi.ai"

// if(userEmail){
//console.log("got user email");
// } else{
    // console.log("don't have user email");
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// truthy and Falsey value

// Falsey :- false, 0 , -0, BigInt 0n, "", null, undefined,NaN
// Truthy :- "0" , 'false' ," " , [] array , {} object , function(){} empty function 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  empty array 

// const userEmail = []

// if (userEmail.length === 0 ) {
//     console.log("Array is empty");
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// empty objects

// const emptyObjcts = {}

// if (Object.keys(emptyObjcts).length === 0) {
//     console.log("object is empty");
    
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// false == 0
// o/p = true

// false == ''
// o/p = true 

// 0 == ''
// o/p = true
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Nullish Coalescing OPerator (??) : null undefined: it is mainly created for null and undefined value
// 

let val1;
// val1 = 5 ?? 10           // o/p :- 5
// val1 = null ?? 10;       // o/p :- 10 
// val1 = undefined ?? 15   // o/p :- 15 , it will not take null or undefine 
val1 = null ?? 10 ?? 15   // o/p :- 10 , it will take first value 
// console.log(val1);

//  Ternairy operator 

// condition ? true :false 

const ice = 100
ice <= 80 ? console.log("less than 80"): console.log("greater than 80");