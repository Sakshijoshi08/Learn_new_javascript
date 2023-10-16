let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); // the datatype of date is an object


// let myNewDate = new Date(2023,0,23) // here months starts with  0 => jan 
// console.log(myNewDate.toDateString());
// let myNewDate = new Date(2023,0,23,5,7) 
// console.log(myNewDate.toLocaleString());

let myNewDate = new Date("2023-08-14")  //  dhere the months starts with 1 => jan 
console.log(myNewDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 
// console.log(myNewDate.getTime());
// console.log(myNewDate.getFullYear());
console.log(myNewDate.getMonth()+1);
// console.log(myNewDate.getDate());
// console.log(myNewDate.getSeconds()+1);
// console.log(Math.floor(Date.now()/1000));


// It is also used in string interpolation 

//  console.log(`${myNewDate.getMonth()+1} new date is `)

console.log(myNewDate.toLocaleString('default',{
    weekday: "long"
}));