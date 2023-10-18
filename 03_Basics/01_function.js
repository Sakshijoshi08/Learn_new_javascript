
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
}
// sayMyName() // sayMyName :- it is reference and () :- it is an execution 

// function myname(){
//     console.log("sakshi");
// }
// myname()

function addTwoNumbers(number1, number2){ // parameters 
   const number3 =  number1 +number2
//    console.log(number3);
}
function addTwoNumbers(number1, number2){
//  console.log(number1 +number2)

}
// addTwoNumbers(3,4) // Arguments 
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

// const result = addTwoNumbers(3,4)
// console.log(result);

function addTwoNumbers(number1, number2){
//    let result = number1 +number2
//    return result  // after return nothing execute 
//    console.log("sakshi ");
//  or
        return(number1+number2)  
   }
   const result = addTwoNumbers(3,4) // after using return keyword  value can b stored in variable 
//    console.log(result); 

function loginUserMassage(username){
    // if(username === undefined){
    //     console.log("plz enter username" );
    //     return 
    // }
    // //  or

    if(!username){
        // console.log("plz enter username" );
        return 
    }
    return`${username} just logged in`
}
// console.log(loginUserMassage("sakshi"))
// console.log(loginUserMassage(""))
// console.log(loginUserMassage())

//  if we want a default value 

function loginUserMassage1(username = "spal"){
    if(!username){
        console.log("plz enter username" );
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMassage1())


//Shopping Cart

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500)) // it takes only 1st value for solving this problem rest Operator is used  
 // or

 // Rest Operator

 function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500))

function calculateCartPrice2(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200,400,500,2000))


// How to pass object in the function and uses 

// const user ={
//     username :" sakshi",
//     price : 122

// }   
 function handleObject(anyobject){
    console.log(`The username is ${anyobject.username} and price is ${anyobject.price}.`);
 }
//  handleObject(user)

//  or

handleObject({
    username : "sam",
    price : 199
})

// How to pass object in the Array and uses 
 
const myArray = [100,200,300]
function returnSecondvalue(getArray){
    return getArray[2]
}
console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue(myArray));














