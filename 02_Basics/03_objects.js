//  objects can be declare by 2 ways 
//  1). literal 2). Constructor
//  singleton: object created by constructor
//   object.create :it creates singleton  object

//  Object literals : key value pair

const mySym = Symbol("key1")
const Js_User = {
    name : "sakshi",
    "full Name" : "Sakshi Pal",
    [mySym]: "myKey1", // symbol declared in [] brackets
    age: 20,
    email :"sakshi@gmail.com",
    isLoggedIn : false,
    LastLogInDays: ["Monday","Saturday"]

}
// console.log(Js_User.age);
// console.log(Js_User["email"]);
// console.log(Js_User["full Name"]); // we can not use value with using . here because of that [] is used
// console.log(Js_User.mySym); // if we use symbol like this  its datatype is not symbol
// console.log(typeof Js_User.mySym); // datatype is not symbol it is string 
// console.log(Js_User[mySym]); 
// console.log(typeof Js_User[mySym]); 

// Modification in objects 

// Js_User.email ="sp@gmail.com"
// console.log(Js_User.email);

//Freeze to lock the value 
// Js_User.email ="sp@gmail.com"
// Object.freeze(Js_User)
// Js_User.email= "spal@gmail.com"
// console.log(Js_User.email);



// Function
Js_User.greeting = function(){
    console.log("hello js user");
}
Js_User.greeting2 = function(){
    console.log(`hello js user, ${this.name}`); // string interpolation 
    // "this" can  use when we wan to access all the elements  
}
console.log(Js_User.greeting());
console.log(Js_User.greeting2());