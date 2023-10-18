
//Declaration of Objects are of 2 types both gives same result

// const tinderUser = new Object() //Singleton object
// non singelton object
const tinderUser ={} 

tinderUser.id ="1234"
tinderUser.name ="sakshi"
tinderUser.isloggedIn = false 

// console.log(tinderUser);

// objects in objects 

const regular_User ={
    email: "some@gmail.com",
    fullName:{
        userFullName :{
            firstname : "sakshi",
            lastName :"pal"
        }
    }
}
// console.log(regular_User.fullName.userFullName.firstname);

//Optional chaining : ? has to use if some value is not available 
// console.log(regular_User.fullName?.userFullName.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3 :"a",4:"b"}
const obj5 = {5 :"a",6:"b"}
// const obj3 = {obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } problem : object into object 

// Object.assign(target, source ) //for target we can give empty {}

// const obj3 = Object.assign({},obj1,obj2,obj5)
// console.log(obj3);

// spread operator 
const obj3 = {...obj1,...obj2,...obj5}
// console.log(obj3);


//Array object 
const user = [
    {
        id: 123,
        email : "s@gmail.com"
    },
    {
        id: 123,
        email : "sp@gmail.com"
    }, {
        id: 123,
        email : "spal@gmail.com"
    }, {
        id: 123,
        email : "sj@gmail.com"
    },
]
// console.log(user[1].email);

// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // data type of o/p value is array
console.log(Object.values(tinderUser))
console.log(Object.keys(tinderUser).length)
console.log(Object.entries(tinderUser))

// hasOwnProperty('') in this we can ask that this element is present  or not  it gives boolean value 

console.log(tinderUser.hasOwnProperty('isloggedIn'))