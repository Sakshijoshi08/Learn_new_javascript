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