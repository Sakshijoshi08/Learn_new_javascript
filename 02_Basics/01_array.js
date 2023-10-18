const myArr = [0,1,2,3,4,5,true, "sakshi"] 
// The Array object, as with arrays in other programming languages,
//  enables storing a collection of multiple items under a single variable name,
//  and has members for performing common array operations.

// console.log(myArr[0]); // indexing starts with [0] 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// shallow copy and deep copy 

const heros =["sakshi", "sonu"]

const mynewArray = new Array(1,2,3,4)
// console.log(mynewArray[1]);

// mynewArray.push(6)
// mynewArray.push(7)          // add element at he last insex of array 
// mynewArray.pop()            // remove the element from the last element of array 
// mynewArray.unshift(9)       // add the element at the start of the array 
// mynewArray.shift();         // removes element at the start of the array 
// // console.log(mynewArray.includes(9)); // boolean result in true or false that the value is present in array or not 
// // console.log(mynewArray.indexOf(3)); // 

//  const newArr = mynewArray.join()
//  console.log(newArr) // it chnges the type of array and changes into string 
// console.log(mynewArray);


// Slice and Splice 
// slice returns a piece of the array but it doesn't affect the original array. 
// splice changes the original array by removing, replacing,or
//  adding values and returns the affected values

// console.log("A",mynewArray);

const myn1 = mynewArray.slice(1,3)
// console.log(myn1);
// console.log("B",mynewArray);

const myn2 = mynewArray.splice(1,3)
// console.log("C",mynewArray);
// console.log(myn2);
