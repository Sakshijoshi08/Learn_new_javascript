//  Scopes := let ,var, const 
// var declarations are globally scoped or
//  function scoped while let and const are block scoped.
//  var variables can be updated and re-declared within its scope; 
//  let variables can be updated but not re-declared;
//  const variables can neither be updated nor re-declared.
//  They are all hoisted to the top of their scope
// global scope in windows Inspect is different from node global scope


// var c = 300;
// let a = 300;
// if (true) {
//     let a = 10;
//     // const b = 20;
//     var c = 30;
//     // console.log("Inner", a );

// }

// console.log(a);
// console.log(b);
// console.log(c);


//Nested Scope : child function can access the parent function 

  function one(){
        const username = "sakshi"
        function two(){
        const website = "youtube"
    // console.log(username);
    }
//  console.log(website);

    // two()
  } 
//   one()

 if (true) {
    const username = "sakshi"
    if (username === "sakshi") {
        const website =" youtube "
        // console.log(username + website);
    }
        
    
    // console.log(website);
    
 }
//  console.log(username);
 

// +++++++++++++++++++++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++++++++++++
// console.log(addone(5)); // it works here becaude we are not holding function in the value prior declaration
function addone(num) {
   return num + 1   
} 
// addone(5)

addTwo(5) //  hosting : - it gives error here  yaha variable m hold kia h 
const addTwo = function(num) {
    return num +2
}
 addTwo(5)  // it workes here 



 
