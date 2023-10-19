// this refer to current context 

const user = {
    username : "sakshi",
    price : 199,
 welcomeMessage : function(){
    // console.log(`${this.username} ,welcome to website`);
    // console.log(this);
 }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);    


// function chai() {
//     let username ="sakshi"
//     console.log(this.username);
    
// } chai()



// const chai = function () {
//          let username ="sakshi"
//          console.log(this.username);
// } 
// chai()

// Arrow function 

// const chai =  () => {
//          let username ="sakshi"
//          console.log(this.username);
// } 
// chai()
// const chai =  () => {   // here it gives empty parenthsis
//     let username ="sakshi"
//     console.log(this);
// } 
// chai()

// explicite return : when {} is used and ave to use return keyword

// const addTwo = (num1, num2) => {
//     return num1 +num2
// } 
// console.log(addTwo(2,3));


//  implicite return :  if {} used then return keyword have to use and without {} 

// const addTwo = (num1, num2) =>  num1 +num2
// console.log(addTwo(2,3));


// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(2,3));

// const addTwo = (num1, num2) =>  ({username : "sakshi"})  // if we return an object then it should be rapped in ()
// console.log(addTwo(2,3));


//  arrow function : used in array 
// classic function 
// const myArray = [2,3,4,5]
// myArray.forEach(function(){

// })

//  
// const myArray = [2,3,4,5]
// myArray.forEach(()=> {}) 