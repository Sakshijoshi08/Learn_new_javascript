// Immediately Invoked Function Expression (IIFE)

// to remove the global scope pollution iife is used
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  Normal function declaration
// function one(){
//     console.log(`DB connected`);
// } 
// one()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// IIFE type function declaration 

// means Immediately invoked function  for this we have to wrap the whole function into ()
// syntax ()()

//Named Iife
(function one(){
    console.log(`DB connected`);
})();  // iife need ; 


// ++++++++++++++++++++
// Arrow function 
//Unnamed IIfe
( () => {
    console.log(`DB Connected two`);
} )();

// unnamed iife  with parameters
( (name) => {
    console.log(`DB Connected two ${name}`);
} )('sakshi');



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JavaScript Exection Context
// 1) Global Execution AudioContext. 
// 2) Function Execution AudioContext.
// 3) eval Execution AudioContext. 

// 1st phase: Memory Creation Phase
// 2nd Execution Phase


// call stack : it  works on fifo