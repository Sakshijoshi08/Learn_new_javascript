// Reduce 

const myNums =[1,2,3,4]
// const myTotal = myNums.reduce(function(acc , currentval){
//     console.log(`acc: ${acc} and currentvalue is ${currentval}`);
//     return acc +currentval
// },0) 

// const myTotal = myNums.reduce((acc , currentval)=>{
//     console.log(`acc: ${acc} and currentvalue is ${currentval}`);
//     return acc +currentval
// },0) 

const myTotal = myNums.reduce((acc , currentval)=>acc +currentval,0) 

console.log(myTotal);
// 0 is an initial value.
// acc + currentvalue is the next acc value.


const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "java course",
        price : 2999
    },
]

 const newShopping = shoppingCart.reduce((acc,item)=> acc + item.price,0)
 console.log(newShopping);

 // write a program to remove duplicate elements from the array 

let arr = ["apple", "mango", "apple", 
"orange", "mango", "mango"]; 

// function removeDuplicates(arr) { 
// return arr.filter((item, index) => arr.indexOf(item) === index); 
// } 
// console.log(removeDuplicates(arr));

function removeDuplicates(arr) { 
    return [...new Set(arr)]; 
} 
  
console.log(removeDuplicates(arr));

// ===========================================================================
// using forEach 
// function removeDuplicates(arr) { 
//     let unique = []; 
//     arr.forEach(element => { 
//         if (!unique.includes(element)) { 
//             unique.push(element); 
//         } 
//     }); 
//     return unique; 
// } 
// console.log(removeDuplicates(arr));
